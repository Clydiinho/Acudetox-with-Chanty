import React, { useEffect, useRef } from 'react';

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55; // seconds

interface FadingVideoProps {
  src: string;
  className?: string;
}

export const FadingVideo: React.FC<FadingVideoProps> = ({ src, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const fadingOutRef = useRef<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Start with opacity 0
    video.style.opacity = '0';

    const fadeTo = (targetOpacity: number, duration: number = FADE_MS) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      const currentOpacity = parseFloat(video.style.opacity || '0') || 0;
      if (Math.abs(currentOpacity - targetOpacity) < 0.001) {
        video.style.opacity = targetOpacity.toString();
        return;
      }

      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const newOpacity = currentOpacity + (targetOpacity - currentOpacity) * progress;
        video.style.opacity = newOpacity.toString();

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          video.style.opacity = targetOpacity.toString();
          rafRef.current = null;
        }
      };

      rafRef.current = requestAnimationFrame(animate);
    };

    const handleLoadedData = () => {
      video.style.opacity = '0';
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            fadeTo(1, FADE_MS);
          })
          .catch(() => {
            // Autoplay policy fallback
            fadeTo(1, FADE_MS);
          });
      } else {
        fadeTo(1, FADE_MS);
      }
    };

    const handleTimeUpdate = () => {
      if (!video.duration || isNaN(video.duration)) return;
      const timeLeft = video.duration - video.currentTime;
      if (!fadingOutRef.current && timeLeft <= FADE_OUT_LEAD && timeLeft > 0) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_MS);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        if (!video) return;
        video.currentTime = 0;
        fadingOutRef.current = false;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              fadeTo(1, FADE_MS);
            })
            .catch(() => {
              fadeTo(1, FADE_MS);
            });
        } else {
          fadeTo(1, FADE_MS);
        }
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // If already loaded / cached
    if (video.readyState >= 2) {
      handleLoadedData();
    }

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ opacity: 0 }}
    />
  );
};

// Also expose globally as required by prompt
if (typeof window !== 'undefined') {
  (window as unknown as { FadingVideo: React.FC<FadingVideoProps> }).FadingVideo = FadingVideo;
}
