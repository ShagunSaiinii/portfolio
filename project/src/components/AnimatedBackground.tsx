import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Tech/Circuit Board SVG Background */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 700"
        className="absolute inset-0"
        style={{ minHeight: '100vh' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {/* Circuit lines */}
          <polyline points="900,700 1000,600 1100,650 1150,600" stroke="#1e90ff" strokeWidth="3" fill="none" />
          <polyline points="950,700 1050,550 1170,600" stroke="#00bfff" strokeWidth="2" fill="none" />
          <polyline points="1000,700 1100,600 1200,650" stroke="#00bfff" strokeWidth="2" fill="none" />
          <polyline points="1050,700 1150,650 1200,600" stroke="#1e90ff" strokeWidth="2" fill="none" />
          <polyline points="1100,700 1200,670" stroke="#1e90ff" strokeWidth="2" fill="none" />
          {/* Horizontal lines */}
          <polyline points="1000,650 1100,650" stroke="#00bfff" strokeWidth="2" fill="none" />
          <polyline points="1050,600 1150,600" stroke="#1e90ff" strokeWidth="2" fill="none" />
          {/* Glowing dots */}
          <circle cx="1000" cy="600" r="7" fill="#00bfff" filter="url(#glow)" />
          <circle cx="1100" cy="650" r="6" fill="#1e90ff" filter="url(#glow)" />
          <circle cx="1150" cy="600" r="5" fill="#00bfff" filter="url(#glow)" />
          <circle cx="1170" cy="600" r="4" fill="#1e90ff" filter="url(#glow)" />
          <circle cx="1200" cy="670" r="5" fill="#00bfff" filter="url(#glow)" />
          {/* Glow filter */}
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </g>
      </svg>
      {/* Gradient Overlay for dark blue look */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#112240] to-[#233554] opacity-95"></div>
    </div>
  );
};

export default AnimatedBackground;