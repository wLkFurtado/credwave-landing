import React from 'react';
import { Zap, ShieldCheck, BarChart2, Users } from 'lucide-react';

const benefits = [
  { icon: Zap, title: 'Resposta em segundos', desc: 'Análise instantânea em mais de 30 instituições financeiras simultaneamente. Seu cliente não precisa esperar.' },
  { icon: ShieldCheck, title: '100% seguro', desc: 'Dados criptografados e processo em total conformidade com a LGPD. Proteção máxima para você e seu cliente.' },
  { icon: BarChart2, title: 'Aumente seu faturamento', desc: 'Clientes que seriam perdidos agora compram com crédito aprovado. Converta mais sem mudar seu produto.' },
  { icon: Users, title: 'CRM integrado', desc: 'Acompanhe cada lead, agende follow-ups e nunca perca uma venda. Gestão completa na palma da mão.' },
];

const BenefitsSection = () => (
  <section id="beneficios" className="py-16 md:py-24 bg-[#060610] px-5">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-accent font-mono text-xs uppercase tracking-widest mb-3">Por que escolher</p>
        <h2 className="font-sans font-bold text-3xl md:text-5xl text-white mb-4">Vantagens que sua concorrência não conhece</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {benefits.map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="bg-white/3 border border-white/5 rounded-2xl p-8 flex gap-6 items-start hover:border-accent/20 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
              <Icon className="text-accent" size={26} />
            </div>
            <div>
              <h3 className="font-sans font-bold text-white text-xl mb-2">{title}</h3>
              <p className="text-light/50 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
