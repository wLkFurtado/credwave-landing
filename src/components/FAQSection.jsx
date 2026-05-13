import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Como funciona a análise de crédito em 30+ bancos?',
    a: 'Nossa plataforma envia simultaneamente a solicitação de análise para mais de 30 instituições financeiras parceiras. Em segundos, você recebe as melhores ofertas disponíveis para seu cliente, aumentando drasticamente as chances de aprovação.',
  },
  {
    q: 'Quanto tempo leva para a análise ser concluída?',
    a: 'A análise é praticamente instantânea. Em menos de 60 segundos o sistema retorna as propostas aprovadas. Em alguns casos, dependendo da modalidade, pode levar até 2 minutos.',
  },
  {
    q: 'Quais documentos o cliente precisa apresentar?',
    a: 'Para a pré-análise, apenas o CPF é necessário. Dependendo da modalidade escolhida, pode ser solicitado RG ou CNH, comprovante de renda e comprovante de residência atualizado.',
  },
  {
    q: 'Posso usar o sistema em todo o Brasil?',
    a: 'Sim! O sistema é 100% online e atende lojistas em todo o território nacional. As modalidades de crédito também abrangem clientes de qualquer estado brasileiro.',
  },
  {
    q: 'Preciso ter CNPJ para ser parceiro?',
    a: 'Não necessariamente. Aceitamos tanto MEI, empresas com CNPJ e também profissionais autônomos que desejam oferecer crédito aos seus clientes.',
  },
  {
    q: 'Há algum custo para usar a plataforma?',
    a: 'O modelo de negócio é baseado em comissão sobre as operações aprovadas. Não há mensalidade fixa — você só paga quando vende. Entre em contato com nosso time para saber mais sobre os planos.',
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 bg-[#060610] px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-mono text-xs uppercase tracking-widest mb-3">Dúvidas frequentes</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4">Tudo que você precisa saber</h2>
        </div>
        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className={`bg-white/3 border rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? 'border-accent/30' : 'border-white/5'}`}
            >
              <button
                className="w-full text-left px-7 py-6 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-sans font-semibold text-white">{q}</span>
                <ChevronDown
                  size={20}
                  className={`text-accent flex-shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-7 pb-6">
                  <p className="text-light/60 leading-relaxed">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-light/50 mb-4">Ainda tem dúvidas?</p>
          <a
            href="https://wa.me/5521999999999"
            target="_blank"
            rel="noreferrer"
            className="magnetic-btn inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-7 py-3 rounded-full font-sans font-medium hover:border-accent/30 transition-all"
          >
            Fale com nosso time
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
