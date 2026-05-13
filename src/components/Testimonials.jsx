import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { quote: 'Aumentei minhas vendas em 40% no primeiro mês. Clientes que iam embora agora compram na hora.', name: 'Carlos Silva', role: 'Dono de Loja de Móveis', initials: 'CS' },
  { quote: 'A análise é instantânea. Minha equipe fecha mais negócios porque sempre tem uma opção de crédito disponível.', name: 'Ana Beatriz', role: 'Gerente Comercial', initials: 'AB' },
  { quote: 'Minha concorrência não sabe que isso existe. É minha arma secreta para vender mais todo dia.', name: 'Roberto Santos', role: 'Empresário', initials: 'RS' },
];

const Testimonials = () => (
  <section id="depoimentos" className="py-24 bg-dark px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-accent font-mono text-xs uppercase tracking-widest mb-3">Depoimentos</p>
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4">Quem usa, recomenda</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(({ quote, name, role, initials }, i) => (
          <div key={i} className="bg-white/3 border border-white/5 rounded-2xl p-8 flex flex-col hover:border-accent/20 hover:-translate-y-1 transition-all duration-300">
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-light/80 italic leading-relaxed flex-1 mb-6">"{quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent to-[#081752] flex items-center justify-center font-sans font-bold text-white text-sm">
                {initials}
              </div>
              <div>
                <p className="font-sans font-bold text-white">{name}</p>
                <p className="text-light/40 text-sm">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
