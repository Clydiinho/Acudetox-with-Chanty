import React from 'react';
import { FadingVideo } from './FadingVideo';

interface CardData {
  image: string;
  alt: string;
  title: string;
  body: string;
}

const VIDEO_SRC = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4';

const BENEFITS_DATA: CardData[] = [
  {
    image: '/benefit-stress.webp',
    alt: 'Calm hands resting beside soft green leaves',
    title: 'Eases Stress and Anxiety',
    body: 'Gentle ear points help the body step out of fight-or-flight, easing tension and leaving you calmer through the day.',
  },
  {
    image: '/benefit-sleep.webp',
    alt: 'Soft moonlit bedroom with a peaceful pillow',
    title: 'Supports Better Sleep',
    body: 'Many people find it easier to fall asleep and stay asleep, waking up feeling more rested.',
  },
  {
    image: '/benefit-cravings.webp',
    alt: 'Close-up of a gentle ear acupuncture treatment',
    title: 'Reduces Cravings',
    body: 'Used in recovery programs to take the edge off cravings and withdrawal discomfort, one session at a time.',
  },
  {
    image: '/benefit-balance.webp',
    alt: 'Smooth balanced stones beside a still water surface',
    title: 'Restores Emotional Balance',
    body: 'Supports a steadier mood and a clearer mind, making difficult days easier to carry.',
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <section 
      className="relative bg-black overflow-hidden min-h-[1316px]"
      style={{ minHeight: 'max(1316px, 83.72vw)' }}
    >
      {/* Background video (full-bleed, no scaling, no overlay, using FadingVideo) */}
      <FadingVideo
        src={VIDEO_SRC}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div 
        className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 pt-20 md:pt-24 pb-28 sm:pb-36 md:pb-48 lg:pb-56 xl:pb-64 flex flex-col justify-between min-h-[1316px]"
        style={{ minHeight: 'max(1316px, 83.72vw)' }}
      >
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-body text-white/80 mb-6">// Capabilities</p>
          <h2 className="text-white text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
            <span className="font-sans font-medium tracking-tight">The</span>{' '}
            <span className="font-heading italic">Benefits</span>
          </h2>
        </div>

        {/* Four cards lifted to slightly overlap the main object in the video */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16 -translate-y-4 sm:-translate-y-8 md:-translate-y-12 lg:-translate-y-16">
          {BENEFITS_DATA.map((card, idx) => (
            <div
              key={idx}
              className="liquid-glass rounded-[1.25rem] p-4 sm:p-5 flex flex-col justify-between aspect-square min-h-[300px] w-full"
            >
              {/* Image at the top */}
              <div className="w-full aspect-[16/10] shrink-0 min-h-0 overflow-hidden rounded-[0.75rem]">
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title and description placed close to the bottom */}
              <div className="mt-auto pt-3 flex flex-col">
                <h3 className="font-heading italic text-white text-xl sm:text-2xl xl:text-[1.65rem] tracking-[-0.015em] leading-[1.15]">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs sm:text-[0.8125rem] text-white/80 font-body font-light leading-relaxed">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
