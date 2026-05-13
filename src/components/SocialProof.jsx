import React from 'react';
import { PlayCircle } from 'lucide-react';

const stories = [
  { name: 'Jaine', highlight: '+R$ 100K/ mês', desc: 'Proposta paga em minutos!' },
  { name: 'Larissa', highlight: '+R$ 100K/ mês', desc: 'Saldo na conta em 5 minutos!' },
  { name: 'Patrick', highlight: 'Aprova negativados', desc: '2% de juros ao mês p/ negativados.' },
  { name: 'Mariana', highlight: '+R$ 100K/ mês', desc: '3 Vendas no primeiro dia!' },
  { name: 'Robson', highlight: 'Novo parceiro', desc: 'Direto da CBM!' },
  { name: 'Marcos', highlight: 'Lojista de iPhone', desc: 'Parceiro presencial!' },
  { name: 'Elton', highlight: 'Lojista de moto elétrica', desc: 'Boas-vindas ao time!' },
  { name: 'Mike', highlight: 'Motos e iPhones', desc: 'Decidiu aumentar seu faturamento!' },
];

const SocialProof = () => (
  <section id="prova-social" className="py-24 bg-dark px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <p className="text-accent font-mono text-xs uppercase tracking-widest mb-3">Resultados reais</p>
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4">Lojistas que vendem mais todos os dias</h2>
        <p className="text-light/50 text-lg max-w-xl mx-auto">Histórias gravadas pelos próprios empresários que transformaram clientes sem limite em venda fechada.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stories.map((s, i) => (
          <div key={i} className="group bg-white/3 border border-white/5 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 hover:-translate-y-1">
            <div className="h-36 bg-gradient-to-br from-accent/10 to-[#081752]/30 flex items-center justify-center relative">
              <PlayCircle className="text-accent/60 group-hover:text-accent transition-colors" size={40} />
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-mono text-[10px]">VIDEO</div>
            </div>
            <div className="p-4">
              <p className="font-sans font-bold text-white">{s.name}</p>
              <p className="text-green-400 font-mono text-xs font-bold mt-1">{s.highlight}</p>
              <p className="text-light/50 text-xs mt-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
