import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: 'R$ 79/mês',
    tagline: 'Para começar com automação inteligente.',
    features: ['200 conversas/mês', 'Widget de chat', 'Treinamento básico', 'E-mail suporte']
  },
  {
    name: 'Pro',
    price: 'R$ 299/mês',
    tagline: 'Para equipes de vendas e suporte.',
    featured: true,
    features: ['3.000 conversas/mês', 'Voz em tempo real', 'Integração CRM', 'Suporte prioritário']
  },
  {
    name: 'Enterprise',
    price: 'Fale com vendas',
    tagline: 'Segurança, SLAs e implantação dedicada.',
    features: ['Volume ilimitado', 'SSO & auditoria', 'Fine-tuning dedicado', 'Suporte 24/7']
  }
];

export default function Pricing() {
  return (
    <section id="precos" className="relative w-full py-24 bg-black text-white overflow-hidden">
      {/* Cyan beams */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[40rem] w-[80rem] -translate-x-1/2 rotate-12 opacity-20 blur-3xl"
           style={{ background: 'radial-gradient(closest-side, rgba(56,189,248,0.25), rgba(0,0,0,0) 70%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Planos simples, poder ilimitado</h2>
          <p className="mt-3 text-white/70">Escolha o plano ideal e comece a transformar seus resultados hoje.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
              className={`relative rounded-2xl border p-6 backdrop-blur-sm transition will-change-transform ${
                tier.featured
                  ? 'border-cyan-400/40 bg-cyan-500/10 shadow-[0_0_60px_-15px_rgba(56,189,248,0.35)]'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {tier.featured && (
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-70 blur-xl"
                     style={{ background: 'radial-gradient(closest-side, rgba(56,189,248,0.18), rgba(0,0,0,0) 70%)' }} />
              )}

              <div className="relative flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <span className="text-sm text-white/60">{tier.tagline}</span>
              </div>
              <div className="relative mt-4 text-3xl font-bold">{tier.price}</div>
              <ul className="relative mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                    <Check className="mt-0.5 h-5 w-5 text-cyan-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`relative mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-semibold transition ${
                  tier.featured
                    ? 'bg-cyan-500 text-white hover:bg-cyan-400'
                    : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                <span className="relative z-10">Escolher {tier.name}</span>
                {tier.featured && (
                  <span className="pointer-events-none absolute inset-0 rounded-xl blur-md opacity-80"
                        style={{ background: 'radial-gradient(closest-side, rgba(56,189,248,0.6), rgba(0,0,0,0) 70%)' }} />
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
