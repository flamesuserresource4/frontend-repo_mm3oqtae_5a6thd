import { Check } from 'lucide-react';

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
    <section id="precos" className="relative w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Planos simples, poder ilimitado</h2>
          <p className="mt-3 text-white/70">Escolha o plano ideal e comece a transformar seus resultados hoje.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-6 backdrop-blur-sm transition ${
                tier.featured
                  ? 'border-fuchsia-400/40 bg-fuchsia-500/10 shadow-[0_0_60px_-15px_rgba(217,70,239,0.35)]'
                  : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <span className="text-sm text-white/60">{tier.tagline}</span>
              </div>
              <div className="mt-4 text-3xl font-bold">{tier.price}</div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                    <Check className="mt-0.5 h-5 w-5 text-fuchsia-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-semibold transition ${
                  tier.featured
                    ? 'bg-fuchsia-500 text-white hover:bg-fuchsia-600'
                    : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Escolher {tier.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
