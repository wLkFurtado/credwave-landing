import React from 'react';
import { ArrowRight } from 'lucide-react';

const modalities = [
  { emoji: '👔', title: 'Crédito CLT', desc: 'Para trabalhadores de carteira assinada. Aprovação em minutos com desconto em folha.' },
  { emoji: '🏦', title: 'Antecipação FGTS', desc: 'Liberação do saldo do FGTS para compra imediata. Sem burocracia.' },
  { emoji: '⚡', title: 'Crédito Conta de Luz', desc: 'Parcela na conta de energia elétrica. Disponível para qualquer consumidor.' },
  { emoji: '📋', title: 'Consignado Privado', desc: 'Desconto direto na folha de pagamento. Taxas mais baixas e aprovação garantida.' },
  { emoji: '🤝', title: 'Empréstimo Bolsa Família', desc: 'Crédito exclusivo para beneficiários do programa social. Aprovação rápida.' },
];

const SolutionSection = () => (
  <section id="solucao" className="py-16 md:py-24 bg-dark px-5 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-10">
        <p className="text-accent font-mono text-xs uppercase tracking-widest mb-3">A Solução</p>
        <h2 className="font-sans font-bold text-3xl md:text-5xl text-white mb-4">5 formas de aprovar crédito na hora</h2>
        <p className="text-light/50 text-base md:text-lg max-w-xl mx-auto">Análise simultânea em +30 bancos para encontrar a melhor opção para seu cliente em segundos.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {modalities.map(({ emoji, title, desc }, i) => (
          <div key={i} className="bg-white/3 border border-accent/10 rounded-2xl p-7 flex gap-5 items-start hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group">
            <div className="text-3xl flex-shrink-0 mt-1">{emoji}</div>
            <div>
              <h3 className="font-sans font-bold text-white text-lg mb-2">{title}</h3>
              <p className="text-light/50 text-sm leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
        <div className="bg-gradient-to-br from-accent/20 to-[#081752]/40 border border-accent/30 rounded-2xl p-7 flex gap-5 items-start col-span-1 md:col-span-2 lg:col-span-1">
          <div className="text-3xl">🏛️</div>
          <div>
            <h3 className="font-sans font-bold text-white text-lg mb-2">+30 Bancos integrados</h3>
            <p className="text-light/60 text-sm leading-relaxed">Itaú, Bradesco, Santander, BMG, Pan, Safra, Caixa, Daycoval, Inter, C6, Banrisul, Crefisa, Facta e muito mais.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a href="#start" className="magnetic-btn inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-full font-sans font-bold text-lg hover:shadow-[0_0_30px_rgba(124,29,209,0.4)] transition-shadow">
          Começar agora <ArrowRight size={20} />
        </a>
      </div>
    </div>
  </section>
);

export default SolutionSection;
