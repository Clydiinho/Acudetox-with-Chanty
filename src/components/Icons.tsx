import React from 'react';

export const EarMotif = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M30 40C30 20 45 10 60 10C75 10 85 25 85 45C85 65 75 80 60 100C50 110 40 115 35 110C30 105 35 90 40 85" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M45 40C55 40 65 45 65 60C65 70 55 80 45 80" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    {/* 5 NADA Points */}
    <circle cx="55" cy="25" r="2" fill="currentColor" />
    <circle cx="70" cy="45" r="2" fill="currentColor" />
    <circle cx="65" cy="70" r="2" fill="currentColor" />
    <circle cx="50" cy="60" r="2" fill="currentColor" />
    <circle cx="45" cy="95" r="2" fill="currentColor" />
  </svg>
);

export const StressIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M4 12C4 12 8 4 12 4C16 4 20 12 20 12C20 12 16 20 12 20C8 20 4 12 4 12Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1"/>
  </svg>
);

export const SleepIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BalanceIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1"/>
    <path d="M12 3C12 3 16.5 7.5 16.5 12C16.5 16.5 12 21 12 21C7.5 21 7.5 16.5 7.5 12C7.5 7.5 12 3 12 3Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
  </svg>
);

export const ResetIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 12H8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 12V8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
