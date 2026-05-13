import React from 'react';

const banks = ['Itaú','Bradesco','Santander','BMG','Banco Pan','Safra','Caixa','Daycoval','Mercantil','Inter','C6 Bank','Banrisul','Olé Consignado','Crefisa','Facta','Banco Master','PagBank','BV'];

const BanksMarquee = () => (
  <section className="py-8 border-y border-white/5 bg-[#060610] overflow-hidden">
    <p className="text-center text-light/30 font-mono text-xs uppercase tracking-[4px] mb-5">Integrado com +30 bancos e financeiras</p>
    <div className="relative overflow-hidden">
      <div className="flex w-max animate-[marquee_25s_linear_infinite] gap-8 pr-8">
        {[...banks, ...banks].map((b, i) => (
          <span key={i} className="font-sans font-semibold text-light/40 hover:text-accent transition-colors whitespace-nowrap text-sm">
            {b}
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#060610] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#060610] to-transparent z-10" />
    </div>
  </section>
);

export default BanksMarquee;
