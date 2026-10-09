import React, { useRef, useState } from 'react';

interface GlassCard3DProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard3D: React.FC<GlassCard3DProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates from -1 to 1 based on center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    // Subtle 3D tilt angles (max ~8-10 degrees) and lift
    const rotateX = -deltaY * 8;
    const rotateY = deltaX * 8;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group/card transition-all duration-300 ease-out will-change-transform ${className}`}
      style={{
        transform: transform || undefined,
        transformStyle: 'preserve-3d',
        boxShadow: isHovered
          ? '0 24px 48px -12px rgba(0, 0, 0, 0.45), 0 0 28px rgba(255, 255, 255, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.25)'
          : undefined,
      }}
    >
      {/* Dynamic specular light reflection sheen overlay on hover */}
      <div 
        className={`pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500 ease-out z-20 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0) 70%)',
        }}
      />
      {children}
    </div>
  );
};
