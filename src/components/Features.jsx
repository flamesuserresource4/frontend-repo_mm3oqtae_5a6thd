import { Bot, Rocket, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="recursos" className="relative w-full py-24 bg-gradient-to-b from-black via-[#030712] to-[#020617] text-white overflow-hidden">
      {/* Ambient grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Projetada para crescer com você</h2>
          <p className="mt-3 text-white/70">Tudo o que você precisa para colocar a IA no centro das suas operações.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20, rotateX: -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, rotateX: 6, rotateY: -6 }}
              className="group relative rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-5 backdrop-blur-sm hover:bg-white/[0.06] transition will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition blur-2xl" 
                   style={{ background: 'radial-gradient(closest-side, rgba(56,189,248,0.20), rgba(0,0,0,0) 70%)' }} />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 ring-1 ring-inset ring-cyan-400/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-4 text-lg font-semibold">{title}</h3>
              <p className="relative mt-2 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
