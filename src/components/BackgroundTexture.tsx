import React from 'react';

export const BackgroundTexture = () => {
  const svgDataUri = `data:image/svg+xml,%3Csvg width='800' height='800' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%234A5A42' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' opacity='0.04'%3E%3Cpath d='M0,150 Q 150,180 200,250 T 400,250 T 600,200 T 800,150' /%3E%3Cpath d='M0,350 Q 200,300 300,400 T 550,450 T 800,350' /%3E%3Cpath d='M0,500 Q 150,600 300,550 T 600,600 T 800,500' /%3E%3Cpath d='M0,650 Q 250,650 400,750 T 650,600 T 800,650' /%3E%3Cpath d='M150,0 Q 200,150 100,300 T 250,550 T 150,800' /%3E%3Cpath d='M400,0 Q 300,250 500,350 T 300,650 T 400,800' /%3E%3Cpath d='M650,0 Q 750,150 600,400 T 700,600 T 650,800' /%3E%3Cpath d='M200,250 Q 300,150 450,180' /%3E%3Cpath d='M300,400 Q 200,500 150,600' /%3E%3Cpath d='M600,600 Q 700,700 750,650' /%3E%3Cpath d='M400,750 Q 500,700 650,750' /%3E%3Cpath d='M100,300 Q 50,250 20,350' /%3E%3Cpath d='M500,350 Q 600,300 700,350' /%3E%3C/g%3E%3C/svg%3E`;

  return (
    <div 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-multiply"
      style={{
        backgroundImage: `url("${svgDataUri}")`,
        backgroundSize: '800px 800px',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed', // Keeps it static behind scrolling content
      }}
    />
  );
};
