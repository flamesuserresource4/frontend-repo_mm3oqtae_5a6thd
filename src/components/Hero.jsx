import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import BlueFlames from './BlueFlames';

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-200, 200], [8, -8]);
  const rotateY = useTransform(x, [-200, 200], [-8, 8]);

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section onMouseMove={onMouseMove} className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* 3D Scene as full-width cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/g2cnMT7B1IgkJ7Ie/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Blue fire visual effects (CSS animated) */}
      <BlueFlames />

      {/* Soft vignette and gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,_rgba(12,74,110,0.25),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

      {/* Content with subtle 3D parallax */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-200/90 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
          Agora com efeitos 3D e fogo azul
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          El Hero — a IA do mundo
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/80">
          Uma assistente de voz e texto superinteligente para acelerar vendas, suporte e operações.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#precos"
            className="group relative inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-400"
          >
            <span className="relative z-10">Começar agora</span>
            {/* Button glow */}
            <span className="pointer-events-none absolute inset-0 rounded-xl blur-md opacity-70 transition duration-300 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(closest-side, rgba(56,189,248,0.8), rgba(56,189,248,0.1) 70%)' }} />
          </a>
          <a
            href="#recursos"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
          >
            Ver recursos
          </a>
        </div>
      </motion.div>

      {/* Bottom reflective surface */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cyan-500/10 to-transparent" />
    </section>
  );
}
