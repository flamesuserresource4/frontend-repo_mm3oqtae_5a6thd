import { Bot, Rocket, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Atendimento 24/7',
    desc: 'Conversas naturais de voz e chat para capturar, qualificar e encantar clientes a qualquer hora.'
  },
  {
    icon: Rocket,
    title: 'Vendas que voam',
    desc: 'Integra com seu funil e CRM para responder objeções, agendar reuniões e fechar negócios.'
  },
  {
    icon: Shield,
    title: 'Seguro e confiável',
    desc: 'Controles de privacidade, auditoria e proteção de dados no padrão corporativo.'
  },
  {
    icon: Sparkles,
    title: 'Treinável',
    desc: 'Aprende com seus documentos, site e base de conhecimento para respostas precisas.'
  }
];

export default function Features() {
  return (
    <section id="recursos" className="relative w-full py-20 bg-gradient-to-b from-black to-[#0b0314] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Projetada para crescer com você</h2>
          <p className="mt-3 text-white/70">Tudo o que você precisa para colocar a IA no centro das suas operações.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm hover:bg-white/[0.06] transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-500/20 text-fuchsia-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
