import React from 'react';

// Layered, animated blue "fire" using conic/radial gradients + blur + blend modes
// Pure CSS/Tailwind (no extra deps). Pointer-events disabled so it never blocks UI.
export default function BlueFlames({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* Core cyan glow */}
      <div className="absolute -bottom-24 left-1/2 h-[48rem] w-[48rem] -translate-x-1/2 rounded-full blur-3xl opacity-60 mix-blend-screen"
           style={{
             background: 'radial-gradient(closest-side, rgba(14,165,233,0.35), rgba(0,0,0,0) 70%)'
           }}
      />

      {/* Flame tongues - rotating conic gradients */}
      <div className="absolute bottom-0 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 animate-spin-slow blur-2xl opacity-70 mix-blend-screen"
           style={{
             background: 'conic-gradient(from 30deg, rgba(56,189,248,0.0) 0deg, rgba(56,189,248,0.35) 45deg, rgba(99,102,241,0.45) 120deg, rgba(0,0,0,0) 180deg, rgba(0,0,0,0) 360deg)'
           }}
      />
      <div className="absolute bottom-8 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 animate-spin-slower blur-2xl opacity-60 mix-blend-screen"
           style={{
             background: 'conic-gradient(from 200deg, rgba(14,165,233,0.0) 0deg, rgba(14,165,233,0.35) 60deg, rgba(59,130,246,0.35) 140deg, rgba(99,102,241,0.35) 200deg, rgba(0,0,0,0) 360deg)'
           }}
      />

      {/* Flicker highlights */}
      <div className="absolute bottom-20 left-[20%] h-64 w-64 animate-flicker rounded-full blur-2xl opacity-60 mix-blend-screen"
           style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.6), rgba(0,0,0,0) 70%)' }}
      />
      <div className="absolute bottom-24 right-[20%] h-56 w-56 animate-flicker-delayed rounded-full blur-2xl opacity-60 mix-blend-screen"
           style={{ background: 'radial-gradient(closest-side, rgba(99,102,241,0.6), rgba(0,0,0,0) 70%)' }}
      />

      {/* Local keyframes */}
      <style>
        {`
          @keyframes spin-slow { to { transform: rotate(360deg) translateZ(0); } }
          @keyframes spin-slower { to { transform: rotate(-360deg) translateZ(0); } }
          @keyframes flicker { 0%,100%{ opacity: .45 } 50%{ opacity: .85 } }

          .animate-spin-slow { animation: spin-slow 24s linear infinite; }
          .animate-spin-slower { animation: spin-slower 40s linear infinite; }
          .animate-flicker { animation: flicker 3.2s ease-in-out infinite; }
          .animate-flicker-delayed { animation: flicker 4s ease-in-out 0.8s infinite; }
        `}
      </style>
    </div>
  );
}
