import React, { useEffect, useState } from 'react';

export const Footer: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="relative w-full h-screen overflow-hidden flex items-end justify-center bg-black">
      {/* Background video wrapper */}
      <div
        className={`absolute inset-0 transition-all duration-[1400ms] ${
          mounted ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260819_212700_3bb9329b-5c50-4257-a09b-ca85cf3654a3.mp4"
        />
      </div>

      {/* Foreground content (bottom-centered) */}
      <div className="relative z-10 text-center px-6 pb-16 md:pb-24 max-w-4xl mx-auto">
        {/* Main heading H1 */}
        <h1
          className={`font-instrument text-white text-[2.5rem] leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl mb-5 md:mb-6 transition-all duration-[900ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: mounted ? '400ms' : '0ms',
          }}
        >
          Step through the flowers
          <br className="hidden sm:block" /> and leave the noise behind.
        </h1>

        {/* Subcopy */}
        <p
          className={`text-white/80 text-base md:text-lg mb-8 md:mb-10 max-w-xl mx-auto transition-all duration-[900ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: mounted ? '600ms' : '0ms',
          }}
        >
          A quiet room, a gentle treatment, and a calmer you are waiting on the other side.
        </p>

        {/* CTA */}
        <div
          className={`transition-all duration-[900ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            transitionDelay: mounted ? '800ms' : '0ms',
          }}
        >
          <a
            href="#book"
            className="inline-block px-8 py-3.5 bg-white text-black text-sm md:text-base font-medium rounded-full hover:bg-white/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Book Now
          </a>
        </div>
      </div>
    </footer>
  );
};
