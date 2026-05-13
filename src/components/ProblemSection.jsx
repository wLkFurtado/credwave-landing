import React from 'react';
import { UserX, Clock, TrendingDown, DollarSign } from 'lucide-react';

const problems = [
  { icon: UserX, title: 'Vendas perdidas', desc: 'Cliente entrou, gostou, quis comprar... mas não tinha limite no cartão. E foi embora.' },
  { icon: Clock, title: 'Tempo perdido', desc: 'Análise manual e demorada que faz o cliente desistir antes da aprovação.' },
  { icon: TrendingDown, title: 'Sua concorrência', desc: 'Já está oferecendo crédito na hora. Você está perdendo vendas para quem oferece.' },
  { icon: DollarSign, title: 'Faturamento menor', desc: 'Cada cliente sem limite que vai embora é dinheiro deixado na mesa.' },
];

const ProblemSection = () => (
  <section id="problema" className="py-16 md:py-24 bg-[#060610] px-5">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-accent font-mono text-xs uppercase tracking-widest mb-3">O Problema</p>
        <h2 className="font-sans font-bold text-3xl md:text-5xl text-white mb-4">Quantas vendas você perdeu esse mês?</h2>
        <p className="text-light/50 text-base md:text-lg max-w-2xl mx-auto">
          Cliente entrou, gostou, quis comprar... mas não tinha limite no cartão. Você ofereceu parcelamento no boleto? Antecipação de FGTS?
        </p>
        <p className="text-white font-semibold text-lg mt-4">Se você não ofereceu, perdeu a venda para quem oferece.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {problems.map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="bg-white/2 border border-red-500/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5 group-hover:bg-red-500/20 transition-colors">
              <Icon className="text-red-400" size={22} />
            </div>
            <h3 className="font-sans font-bold text-white text-lg mb-2">{title}</h3>
            <p className="text-light/50 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
