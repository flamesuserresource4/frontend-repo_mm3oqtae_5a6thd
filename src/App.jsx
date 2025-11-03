import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      {/* Simple top bar */}
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">
            El Hero
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
            <a href="#recursos" className="hover:text-white">Recursos</a>
            <a href="#precos" className="hover:text-white">Preços</a>
            <a href="#cta" className="hover:text-white">Contato</a>
          </nav>
          <a
            href="#precos"
            className="ml-4 inline-flex items-center justify-center rounded-lg bg-fuchsia-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-fuchsia-700"
          >
            Experimentar
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
