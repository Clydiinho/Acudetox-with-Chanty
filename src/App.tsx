/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { AnimationSequence } from './components/AnimationSequence';
import { EarMotif, StressIcon, SleepIcon, BalanceIcon, ResetIcon } from './components/Icons';
import { BackgroundTexture } from './components/BackgroundTexture';

const Nav = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <nav className="fixed top-8 left-4 right-4 md:top-12 md:left-8 md:right-8 z-50 px-6 py-4 flex justify-between items-center bg-[#b5faff3b] backdrop-blur-2xl border border-[#00000015] shadow-[inset_0_1px_4px_1px_#ffffff55] text-charcoal">
      <div className="font-serif italic text-xl tracking-wide">Chanty</div>
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
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 relative text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-charcoal mb-8 leading-tight">
          <span className="italic text-terracotta">{t('hero.headline.reset')}</span>{t('hero.headline.rest1')}
          <br />
          {t('hero.headline.rest2')}
        </h1>
        <p className="text-xl md:text-2xl text-charcoal font-medium font-sans max-w-2xl mb-12 leading-relaxed tracking-wide">
          {t('hero.subheading')}
        </p>
        <div className="btn-wrapper mt-4">
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
          <span className="txt-secondary" id="hint1">Hover me</span>
          <span className="txt-secondary" id="hint2">Click me</span>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce text-sage">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
};

const WhatIsAcudetox = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 px-6 bg-white/50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-8 text-sage">{t('acudetox.title')}</h2>
        <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
          {t('acudetox.p1')}
        </p>
        <p className="text-lg text-charcoal/80 leading-relaxed">
          {t('acudetox.p2')}
        </p>
      </div>
    </section>
  );
};

const Benefits = () => {
  const { t } = useLanguage();
  
  const benefits = [
    { 
      id: 'stress', 
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80'
    },
    { 
      id: 'sleep', 
      image: 'https://images.unsplash.com/photo-1511293714539-34208a0d2448?auto=format&fit=crop&w=400&q=80'
    },
    { 
      id: 'balance', 
      image: 'https://images.unsplash.com/photo-1528315758117-e7f0b5d8f6d6?auto=format&fit=crop&w=400&q=80'
    },
    { 
      id: 'reset', 
      image: 'https://images.unsplash.com/photo-1473220464591-628d63c46761?auto=format&fit=crop&w=400&q=80'
    },
  ];

  return (
    <section className="py-24 px-6 bg-sage relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-charcoal">
          <span className="font-sans font-medium">{t('benefits.title.part1')}</span>{' '}
          <span className="font-serif italic">{t('benefits.title.part2')}</span>
        </h2>
        
        {/* Horizontal layout container */}
        <div className="flex flex-row overflow-x-auto gap-8 py-12 snap-x justify-start md:justify-center px-8 -mx-4 md:mx-0 hide-scrollbar">
          {benefits.map((b) => (
            <div 
              key={b.id} 
              className="shrink-0 flex flex-col w-[190px] h-[254px] rounded-[30px] bg-[#8DA399] shadow-[15px_15px_30px_#6f827a,-15px_-15px_30px_#abc6ba] overflow-hidden snap-center transition-all duration-300 hover:shadow-none hover:scale-95 cursor-pointer"
            >
              {/* Top Half: Image */}
              <div className="h-1/2 w-full">
                <img src={b.image} alt={t(`benefits.${b.id}`)} className="w-full h-full object-cover" />
              </div>
              {/* Bottom Half: Title */}
              <div className="h-1/2 w-full p-4 flex items-center justify-center text-center">
                <h3 className="text-charcoal text-lg font-bold leading-snug px-1">
                  {t(`benefits.${b.id}`)}
                </h3>
              </div>
            </div>
          ))}
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
            <span className="font-serif italic">{t('meet.title.part2')}</span>
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
    <section className="py-24 px-6 text-center bg-white/30 backdrop-blur-md relative z-10">
      <h2 className="text-4xl md:text-5xl font-serif italic mb-12 text-charcoal">{t('pricing.title')}</h2>
      
      <div className="card-universe-wrapper">
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
    </section>
  );
};

const BookYourSession = () => {
  const { t } = useLanguage();
  return (
    <section id="book" className="py-24 px-6 bg-[#EAE5D9] relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-charcoal">
          <span className="font-sans font-medium">{t('book.title.part1')}</span>{' '}
          <span className="font-serif italic">{t('book.title.part2')}</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Booking Widget Placeholder */}
          <div className="bg-white rounded-3xl p-8 border border-sage/10 min-h-[500px] flex items-center justify-center text-charcoal/40 border-dashed">
            [EMBED SIMPLYBOOK.ME / FRESHA WIDGET HERE]
          </div>

          {/* Payment Section */}
          <div className="flex flex-col justify-center gap-10">
            <div>
              <h3 className="text-xl font-serif mb-4">{t('book.card')}</h3>
              <a 
                href="#" 
                className="inline-block border border-terracotta text-terracotta px-8 py-3 rounded-full hover:bg-terracotta hover:text-cream transition-colors shadow-sm hover:shadow-md"
              >
                [LINK TO PAYMENT GATEWAY CHECKOUT URL]
              </a>
            </div>

            <div className="border-t border-sage/20 pt-10">
              <h3 className="text-xl font-serif mb-4">{t('book.ewallet')}</h3>
              <div className="bg-white p-6 rounded-2xl border border-sage/10">
                <p className="text-charcoal/70 mb-2">{t('book.ewallet.desc')}</p>
                <p className="text-2xl font-mono text-charcoal mb-6">[INSERT E-WALLET NUMBER]</p>
                <a 
                  href="mailto:placeholder@email.com?subject=Proof of Payment" 
                  className="inline-block bg-sage text-cream px-6 py-2 rounded-full text-sm hover:bg-sage/90 transition-colors shadow-sm hover:shadow-md"
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
          <span className="font-serif italic">{t('location.title.part2')}</span>
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

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-sage/20 text-center bg-terracotta text-cream relative z-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif italic text-xl text-cream">Sessions with Chanty</div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-cream/80 transition-colors">[PHONE]</a>
          <a href="#" className="hover:text-cream/80 transition-colors">[EMAIL]</a>
          <a href="#" className="hover:text-cream/80 transition-colors">[WHATSAPP]</a>
        </div>
      </div>
    </footer>
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
        <AnimationSequence />
        
        <div className="border-t border-charcoal/10">
          <WhatIsAcudetox />
        </div>
        
        <div className="border-t border-charcoal/10">
          <Benefits />
        </div>
        
        <div className="border-t border-charcoal/10">
          <MeetChanty />
        </div>
        
        <div className="border-t border-charcoal/10">
          <Pricing />
        </div>
        
        <div className="border-t border-charcoal/10">
          <BookYourSession />
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

