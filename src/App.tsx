/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { SpotlightReveal } from './components/SpotlightReveal';
import { BenefitsSection } from './components/BenefitsSection';
import { EarMotif, StressIcon, SleepIcon, BalanceIcon, ResetIcon } from './components/Icons';
import { BackgroundTexture } from './components/BackgroundTexture';
import { Footer } from './components/Footer';

const Nav = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <nav className="fixed top-8 left-4 right-4 md:top-12 md:left-8 md:right-8 z-50 px-6 py-4 flex justify-between items-center bg-[#b5faff3b] backdrop-blur-2xl border border-[#00000015] shadow-[inset_0_1px_4px_1px_#ffffff55] text-charcoal">
      <div className="font-heading italic text-2xl md:text-3xl tracking-wide">Chanty</div>
      <div className="flex items-center gap-6 text-xs md:text-sm tracking-widest uppercase">
        <button 
          onClick={() => setLanguage(language === 'en' ? 'af' : 'en')}
          className="hover:text-sage transition-colors"
        >
          {language === 'en' ? 'EN | AF' : 'AF | EN'}
        </button>
        <a href="#book" className="bg-terracotta text-cream px-5 py-2.5 rounded-full hover:bg-sage hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
          {t('nav.book')}
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="flex flex-col items-center justify-center px-6 pt-16 sm:pt-20 md:pt-24 pb-0 relative text-center z-40">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[7.25rem] text-charcoal mb-3 md:mb-4 tracking-tight flex flex-col items-center select-none leading-none">
          <span className="inline-flex items-baseline justify-center leading-[0.88] md:leading-[0.82]">
            <span 
              className="glitch-reset font-heading italic text-terracotta drop-shadow-[0_2px_12px_rgba(193,127,89,0.18)]"
              data-text={t('hero.headline.reset')}
            >
              {t('hero.headline.reset')}
            </span>
            <span className="ml-2 sm:ml-3 md:ml-4 font-serif font-normal not-italic text-charcoal">
              {t('hero.headline.rest1').trim()}
            </span>
          </span>
          <span className="block leading-[0.88] md:leading-[0.82] font-serif font-normal not-italic tracking-[-0.02em] text-charcoal -mt-1 sm:-mt-2 md:-mt-3 lg:-mt-4">
            {t('hero.headline.rest2')}
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-charcoal/90 font-medium font-sans max-w-2xl mb-3 md:mb-4 leading-relaxed tracking-wide">
          {t('hero.subheading')}
        </p>
        <div className="btn-wrapper mt-1">
          <a href="#book" className="btn text-center">
            <div className="txt-box">
              <span className="txt">{t('hero.cta')}</span>
              <span className="txt">{t('hero.cta.hover')}</span>
            </div>
            <div className="frame"></div>
            <div className="point top left"></div>
            <div className="point top right"></div>
            <div className="point bottom left"></div>
            <div className="point bottom right"></div>
          </a>
          <span className="txt-secondary" id="hint1">{t('hero.hint.hover')}</span>
          <span className="txt-secondary" id="hint2">{t('hero.hint.click')}</span>
        </div>
      </div>
    </section>
  );
};

const WhatIsAcudetox = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 md:py-28 px-6 bg-[#d3cabb] relative z-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="flex flex-col text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 text-charcoal">
              <span className="font-sans font-medium">{t('acudetox.title.part1')}</span>{' '}
              <span className="font-heading italic">{t('acudetox.title.part2')}</span>
            </h2>
            <div className="text-left flex flex-col items-start">
              <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed mb-4">
                {t('acudetox.p1')}
              </p>
              <p className="text-sm sm:text-base text-charcoal/85 leading-relaxed">
                {t('acudetox.p2')}
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-charcoal/10 bg-[#d3cabb]">
            <video
              src="/Line_art_ear_body_animation_20260929144105.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-auto aspect-video object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const MeetChanty = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 px-6 bg-white relative z-10">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 text-sage opacity-50">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
             <path d="M50 80 C30 80 20 60 20 40 C20 20 35 10 50 10 C65 10 80 20 80 40 C80 60 70 80 50 80 Z" strokeLinecap="round"/>
             <path d="M35 45 Q50 55 65 45" strokeLinecap="round" />
             <path d="M20 90 C30 75 70 75 80 90" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl mb-6 text-charcoal">
            <span className="font-sans font-medium">{t('meet.title.part1')}</span>{' '}
            <span className="font-heading italic">{t('meet.title.part2')}</span>
          </h2>
          <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
            {t('meet.bio')}
          </p>
          <div className="inline-flex items-center gap-3 border border-sage/30 px-4 py-2 rounded-full text-sm text-sage">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>{t('meet.cred')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const { t } = useLanguage();
  return (
    <section id="book" className="py-24 px-6 bg-[#eae4d9] relative z-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading italic mb-14 text-center text-charcoal">
          {t('pricing.title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Card on Left */}
          <div className="flex flex-col items-center justify-center">
            <div className="card-universe-wrapper !p-0">
              <div className="parallax-container">
                {/* The tracking grid */}
                <div className="tracker tr-1"></div>
                <div className="tracker tr-2"></div>
                <div className="tracker tr-3"></div>
                <div className="tracker tr-4"></div>
                <div className="tracker tr-5"></div>
                <div className="tracker tr-6"></div>
                <div className="tracker tr-7"></div>
                <div className="tracker tr-8"></div>
                <div className="tracker tr-9"></div>
                
                <div className="tilt-card text-left">
                  <div className="glare"></div>
                  <div className="card-front">
                    <div className="card-header">
                      <div className="text-white font-bold text-2xl tracking-widest">N$900</div>
                      <svg className="nfc-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11 20a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1zm4-6a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1zm-8 4a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1zm12-8a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1z" />
                      </svg>
                    </div>
                    
                    <div className="chip-container">
                      <div className="chip">
                        <div className="chip-line"></div>
                        <div className="chip-line"></div>
                        <div className="chip-line"></div>
                        <div className="chip-main"></div>
                      </div>
                      <div className="card-type uppercase">PACKAGE</div>
                    </div>
                    
                    <div className="card-numbers embossed text-white">
                      <span>2x</span>
                      <span>SESSIONS</span>
                      <span>0900</span>
                    </div>
                    
                    <div className="card-footer">
                      <div className="cardholder">
                        <span className="label">WELLNESS SESSION</span>
                        <span className="value embossed text-white">ACUDETOX</span>
                      </div>
                      <div className="valid-thru">
                        <span className="label">VALID THRU</span>
                        <span className="value embossed text-white">BOOK NOW</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs tracking-wider uppercase text-charcoal/50 font-medium">
              {t('pricing.desc')}
            </p>
          </div>

          {/* Payment Options on Right */}
          <div className="flex flex-col justify-center gap-8 bg-[#ece7dd]/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-charcoal/10 shadow-[0_12px_32px_-8px_rgba(45,49,46,0.12),0_4px_12px_-2px_rgba(45,49,46,0.06)] transition-all duration-300 hover:shadow-[0_16px_36px_-6px_rgba(45,49,46,0.15),0_6px_16px_-2px_rgba(45,49,46,0.08)]">
            {/* Pay via Card */}
            <div>
              <h3 className="text-2xl font-heading italic mb-3 text-charcoal flex items-center gap-2">
                <span>{t('book.card')}</span>
              </h3>
              <p className="text-sm text-charcoal/70 mb-4 leading-relaxed">
                Secure online payment for the complete 2-session wellness package.
              </p>
              <a 
                href="#pay-card" 
                id="pay-via-card-btn"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto border-2 border-terracotta bg-terracotta text-cream px-8 py-3 rounded-full hover:bg-transparent hover:text-terracotta transition-all duration-300 font-medium shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>{t('book.card')}</span>
                <span className="font-mono text-xs opacity-90">(N$900)</span>
              </a>
            </div>

            <div className="border-t border-charcoal/10 pt-6">
              {/* Pay via E-Wallet */}
              <h3 className="text-2xl font-heading italic mb-3 text-charcoal">
                {t('book.ewallet')}
              </h3>
              <div className="bg-[#f7f5f0]/95 p-5 rounded-2xl border border-charcoal/10 shadow-[0_2px_8px_rgba(45,49,46,0.04)]">
                <p className="text-xs uppercase tracking-wider text-charcoal/60 mb-1">{t('book.ewallet.desc')}</p>
                <p className="text-xl sm:text-2xl font-mono text-charcoal font-semibold mb-4 tracking-wider">[INSERT E-WALLET NUMBER]</p>
                <a 
                  href="mailto:placeholder@email.com?subject=Proof of Payment - Acudetox" 
                  className="inline-block border-2 border-sage bg-sage text-cream px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-transparent hover:text-sage transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                >
                  {t('book.ewallet.proof')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationHours = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-10 text-charcoal">
          <span className="font-sans font-medium">{t('location.title.part1')}</span>{' '}
          <span className="font-heading italic">{t('location.title.part2')}</span>
        </h2>
        <div className="space-y-6 text-lg text-charcoal/80">
          <div>
            <p>{t('location.address')}</p>
            <p>{t('location.city')}</p>
          </div>
          <div>
            <p>{t('location.hours')}</p>
            <p className="text-sage italic mt-2">{t('location.walkins')}</p>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button className="social-btn" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </button>
          <button className="social-btn" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </button>
          <button className="social-btn" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

const MainContent = () => {
  return (
    <div className="relative min-h-screen p-4 md:p-8">
      {/* Outer border for print/editorial feel */}
      <div className="border border-charcoal/10 relative rounded-xl bg-cream" style={{ clipPath: 'inset(0 round 0.75rem)' }}>
        <BackgroundTexture />
        <Nav />
        <Hero />
        <SpotlightReveal />
        
        <div className="border-t border-charcoal/10">
          <WhatIsAcudetox />
        </div>
        
        <div className="border-t border-charcoal/10 overflow-hidden">
          <BenefitsSection />
        </div>
        
        <div className="border-t border-charcoal/10">
          <MeetChanty />
        </div>
        
        <div className="border-t border-charcoal/10">
          <Pricing />
        </div>
        
        <div className="border-t border-charcoal/10">
          <LocationHours />
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

