export default function Footer() {
  return (
    <footer id="cta" className="w-full bg-black border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold">Pronto para conhecer a El Hero?</h3>
          <p className="mt-2 text-white/70">A IA do mundo para sua empresa — simples, rápida e poderosa.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
          <a
            href="#precos"
            className="inline-flex items-center justify-center rounded-xl bg-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/25 hover:bg-fuchsia-600 transition"
          >
            Começar período de testes
          </a>
          <a
            href="#recursos"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
          >
            Falar com especialista
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} El Hero. Todos os direitos reservados.
      </div>
    </footer>
  );
}
