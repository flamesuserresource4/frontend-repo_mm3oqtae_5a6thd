import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient aura overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,_rgba(88,28,135,0.25),_transparent_55%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
          Agora disponível no Brasil
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
            className="inline-flex items-center justify-center rounded-xl bg-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/25 hover:bg-fuchsia-600 transition"
          >
            Começar agora
          </a>
          <a
            href="#recursos"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
          >
            Ver recursos
          </a>
        </div>
      </div>
    </section>
  );
}
