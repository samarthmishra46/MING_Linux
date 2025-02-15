import React from 'react';

const Logo = ({ className = '', size = 32 }: { className?: string; size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1a365d' }} />
          <stop offset="50%" style={{ stopColor: '#2b9688' }} />
          <stop offset="100%" style={{ stopColor: '#22c55e' }} />
        </linearGradient>
      </defs>
      <path
        d="M100 100 L200 100 L200 200 L300 100 L400 100 L250 250 L400 400 L300 400 L200 300 L200 400 L100 400 L100 100Z"
        fill="url(#logoGradient)"
      />
    </svg>
  );
};

export default Logo;