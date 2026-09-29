import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useScroll } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export const AnimationSequence = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const { language } = useLanguage();

  const frameCount = 140;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const drawFrame = useCallback((progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const clampedProgress = Math.max(0, Math.min(1, progress));
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(clampedProgress * frameCount)
    );

    const img = imagesRef.current[frameIndex];

    if (img && img.complete && img.naturalWidth > 0) {
      if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
      }
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0);
    }
  }, [frameCount]);

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    let isCancelled = false;

    const onImageDone = (index: number) => {
      if (isCancelled) return;
      loadedCount++;
      setImagesLoaded(loadedCount);

      // As soon as the first frame loads, draw it immediately
      if (index === 0) {
        setIsReady(true);
        requestAnimationFrame(() => drawFrame(scrollYProgress.get()));
      } else if (loadedCount >= 10) {
        setIsReady(true);
      }
    };

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNumber = String(i).padStart(3, '0');
      
      img.onload = () => onImageDone(i - 1);
      img.onerror = () => onImageDone(i - 1); // graceful fallback so progress continues
      
      img.src = `/sequence/ezgif-frame-${frameNumber}.jpg`;

      if (img.complete) {
        onImageDone(i - 1);
      }

      images.push(img);
    }

    imagesRef.current = images;

    // Listen to scroll progress changes
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      requestAnimationFrame(() => drawFrame(latest));
    });

    return () => {
      isCancelled = true;
      unsubscribe();
    };
  }, [scrollYProgress, drawFrame]);

  const loadingProgress = Math.min(100, Math.round((imagesLoaded / frameCount) * 100));

  return (
    <div ref={containerRef} className="h-[300vh] relative w-full bg-[#d4cdbb]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Loading overlay - transitions out smoothly once initial frames are loaded */}
        <div 
          className={`absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#d4cdbb] transition-opacity duration-700 pointer-events-none ${
            isReady && loadingProgress >= 90 ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="text-charcoal/80 font-serif text-lg tracking-wide">
              {language === 'af' ? 'Laai sessie reeks...' : 'Loading Sequence...'} {loadingProgress}%
            </div>
            <div className="w-48 h-1 bg-charcoal/15 rounded-full overflow-hidden">
              <div 
                className="h-full bg-terracotta transition-all duration-200 rounded-full" 
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>
        </div>

        <canvas 
          ref={canvasRef}
          className="w-full h-full object-cover z-10 relative select-none"
        />

        {/* Subtle scroll progress indicators and narrative milestones */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-charcoal/10 text-charcoal/70 text-xs tracking-wider uppercase shadow-xs">
          <span>{language === 'af' ? 'Rol om te verken' : 'Scroll to explore'}</span>
          <svg className="w-3.5 h-3.5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </div>
        
      </div>
    </div>
  );
};
