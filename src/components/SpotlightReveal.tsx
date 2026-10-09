import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';

const SPOTLIGHT_R = 260;

const BG_IMAGE_1 = '/log.webp';
const BG_IMAGE_2 = '/log-grass.webp';

interface RevealLayerProps {
  image: string;
  cursorX: number;
  cursorY: number;
}

const RevealLayer: React.FC<RevealLayerProps> = ({ image, cursorX, cursorY }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const revealDivRef = useRef<HTMLDivElement>(null);

  // Resize canvas on mount and on window resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && revealDivRef.current) {
        const rect = revealDivRef.current.getBoundingClientRect();
        canvasRef.current.width = rect.width || window.innerWidth;
        canvasRef.current.height = rect.height || window.innerHeight;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update mask on every render / cursor movement
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const revealDiv = revealDivRef.current;
    if (!canvas || !revealDiv) return;

    if (!canvas.width || !canvas.height) {
      const rect = revealDiv.getBoundingClientRect();
      canvas.width = rect.width || window.innerWidth;
      canvas.height = rect.height || window.innerHeight;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (cursorX > -SPOTLIGHT_R && cursorY > -SPOTLIGHT_R) {
      const gradient = ctx.createRadialGradient(
        cursorX,
        cursorY,
        0,
        cursorX,
        cursorY,
        SPOTLIGHT_R
      );
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.4, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.6, 'rgba(255,255,255,0.75)');
      gradient.addColorStop(0.75, 'rgba(255,255,255,0.4)');
      gradient.addColorStop(0.88, 'rgba(255,255,255,0.12)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cursorX, cursorY, SPOTLIGHT_R, 0, Math.PI * 2);
      ctx.fill();
    }

    const maskUrl = canvas.toDataURL();
    revealDiv.style.maskImage = `url(${maskUrl})`;
    revealDiv.style.webkitMaskImage = `url(${maskUrl})`;
    revealDiv.style.maskSize = '100% 100%';
    (revealDiv.style as CSSStyleDeclaration & { webkitMaskSize: string }).webkitMaskSize = '100% 100%';
  }, [cursorX, cursorY]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ display: 'none' }}
      />
      <div
        ref={revealDivRef}
        className="absolute inset-0 bg-bottom bg-cover bg-no-repeat z-30 pointer-events-none"
        style={{
          backgroundImage: `url(${image})`,
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
        }}
      />
    </>
  );
};

interface SpotlightRevealProps {
  className?: string;
}

export const SpotlightReveal: React.FC<SpotlightRevealProps> = ({ className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);

  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        mouse.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      } else {
        mouse.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect();
          mouse.current = {
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top,
          };
        } else {
          mouse.current = { x: touch.clientX, y: touch.clientY };
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    const loop = () => {
      if (smooth.current.x === -999 && mouse.current.x !== -999) {
        smooth.current.x = mouse.current.x;
        smooth.current.y = mouse.current.y;
      } else {
        smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
        smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      }

      setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full overflow-hidden -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-32 ${className}`.trim()}
      style={{ height: 'max(100dvh, 56.48vw)' }}
    >
      {/* Base image (z-10) */}
      <div
        className="absolute inset-0 bg-bottom bg-cover bg-no-repeat z-10"
        style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
      />

      {/* Reveal layer (z-30) */}
      <RevealLayer
        image={BG_IMAGE_2}
        cursorX={cursorPos.x}
        cursorY={cursorPos.y}
      />
    </section>
  );
};

export default SpotlightReveal;
