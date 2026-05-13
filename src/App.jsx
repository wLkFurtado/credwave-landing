import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Activity, Clock, Play, MessageCircle } from 'lucide-react';
import BanksMarquee from './components/BanksMarquee';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#features', label: 'Funcionalidades' },
    { href: '#philosophy', label: 'Filosofia' },
    { href: '#protocol', label: 'Protocolo' },
  ];

  return (
    <>
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-full flex items-center justify-between px-5 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.15)] ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl border border-white/40 w-[92%] md:w-[600px]'
          : 'bg-white w-[92%] md:w-[780px]'
      }`}>
        <img src="/logo-new.png" alt="Credwave Logo" className={`w-auto transition-all duration-500 ${scrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'}`} />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-sans">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-[#081752] hover:text-accent transition-colors hover-lift font-medium">{l.label}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="#start" className="hidden md:block magnetic-btn bg-accent hover:opacity-90 px-5 py-2 rounded-full text-sm font-sans font-bold text-white shadow-[0_4px_15px_rgba(124,29,209,0.3)]">
          Acessar Sistema
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-[#081752] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#081752] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#081752] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%] z-40 bg-white rounded-3xl shadow-2xl border border-gray-100 px-6 py-6 flex flex-col gap-4 md:hidden">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-[#081752] font-sans font-semibold text-lg hover:text-accent transition-colors">{l.label}</a>
          ))}
          <a href="#start" onClick={() => setMenuOpen(false)} className="mt-2 bg-accent text-white px-6 py-3 rounded-full font-sans font-bold text-center hover:opacity-90 transition-opacity">
            Acessar Sistema
          </a>
        </div>
      )}
    </>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 40, opacity: 0, duration: 1, stagger: 0.08, ease: "power3.out", delay: 0.3
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !textRef.current.includes(el)) textRef.current.push(el);
  };

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] w-full overflow-hidden bg-[#081752] flex items-center">
      {/* Background: Financial district at night */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1920"
          alt="Mercado financeiro"
          className="w-full h-full object-cover opacity-20"
        />
        {/* Deep gradient left-to-right so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081752] via-[#081752]/90 to-[#081752]/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#081752] via-transparent to-[#081752]/60"></div>
        {/* Purple glow accent */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 blur-[140px] rounded-full pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 pt-28 pb-14 flex flex-col lg:flex-row items-center gap-10">

        {/* LEFT — Copy */}
        <div className="flex-1 flex flex-col items-start w-full">
          <div className="mb-5 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/40 bg-accent/10 text-accent font-mono text-xs uppercase tracking-wider" ref={addToRefs}>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            +500 empresários já faturam mais
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl leading-[1.08] mb-5">
            <span className="block font-sans font-bold text-white tracking-tight" ref={addToRefs}>Transforme "Não tenho</span>
            <span className="block font-sans font-bold text-white tracking-tight" ref={addToRefs}>limite" em</span>
            <span className="block font-serif italic text-accent" ref={addToRefs}>venda fechada.</span>
          </h1>

          <p className="font-sans text-white/60 text-base md:text-xl max-w-lg mb-8" ref={addToRefs}>
            Análise simultânea em +30 bancos e 5 modalidades de crédito para seu cliente comprar no seu estabelecimento.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto" ref={addToRefs}>
            <a href="#start" className="magnetic-btn flex items-center justify-center gap-3 bg-accent text-white px-7 py-3.5 rounded-full font-sans font-bold text-base hover:shadow-[0_0_30px_rgba(124,29,209,0.5)] transition-shadow">
              Começar Agora <ArrowRight size={18} />
            </a>
            <a href="#falar" className="magnetic-btn flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-7 py-3.5 rounded-full font-sans font-semibold text-base hover:bg-white/20 transition-colors">
              Falar com especialista
            </a>
          </div>

          {/* Stats bar */}
          <div className="flex gap-6 sm:gap-10 mt-10 pt-6 border-t border-white/10 w-full" ref={addToRefs}>
            {[['30+', 'Bancos'], ['5', 'Modalidades'], ['97%', 'Aprovação']].map(([n, l]) => (
              <div key={l}>
                <p className="font-sans font-bold text-2xl md:text-3xl text-white">{n}</p>
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-wider mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — VSL Player */}
        <div className="flex-shrink-0 flex flex-col items-center w-full lg:w-auto" ref={addToRefs}>
          <div className="relative">
            <div className="absolute inset-0 bg-accent/30 blur-[60px] rounded-full scale-75 pointer-events-none" />
            <div className="relative w-[220px] sm:w-[260px] md:w-[300px] bg-[#0D0D1A] rounded-[3rem] border-4 border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.7)] overflow-hidden aspect-[9/19]">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0D0D1A] rounded-full z-30 border border-white/5" />

              {/* VSL Video — SEM autoPlay, COM som */}
              <HeroVSL />
            </div>

            {/* Floating badge — movido para fora do frame */}
          </div>

          {/* Badge + Hint abaixo do celular */}
          <div className="mt-4 flex flex-col items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-sm">✓</div>
              <div>
                <p className="font-sans font-bold text-white text-xs">Venda fechada!</p>
                <p className="font-mono text-white/40 text-[10px]">há 2 minutos</p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[11px] text-white/50">Assista com som ligado</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Sub-componente: player VSL dentro do Hero
const HeroVSL = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) { videoRef.current.play(); setPlaying(true); }
  };

  return (
    <>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        controls={playing}
        playsInline
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        poster="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600&h=1300"
      >
        <source src="https://res.cloudinary.com/dhsgmhaak/video/upload/q_auto,f_webm,w_1080/v1778644220/videos/Cred_wave_lkxpso.mov" type="video/webm" />
        <source src="https://res.cloudinary.com/dhsgmhaak/video/upload/q_auto,f_mp4,w_1080/v1778644220/videos/Cred_wave_lkxpso.mov" type="video/mp4" />
      </video>

      {!playing && (
        <div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer bg-[#081752]/55 backdrop-blur-[2px]"
          onClick={handlePlay}
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute w-28 h-28 rounded-full bg-white/10 animate-ping" />
            <div className="absolute w-20 h-20 rounded-full bg-white/15 animate-ping" style={{animationDelay:'0.3s'}} />
            <button className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform duration-200">
              <Play className="text-[#081752] fill-[#081752] ml-1" size={26} />
            </button>
          </div>
          <p className="mt-5 font-mono text-[11px] text-white/60 uppercase tracking-widest">Toque para assistir</p>
        </div>
      )}
    </>
  );
};


const FeatureCard1 = () => {
  const [cards, setCards] = useState(['Crédito CLT', 'Antecipação FGTS', 'Conta de Luz', 'Consignado', 'Bolsa Família']);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-graphite/40 border border-white/5 rounded-[2rem] p-8 relative overflow-hidden shadow-2xl flex flex-col h-[400px]">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h3 className="font-sans font-bold text-xl text-white mb-2">Analisador de Modalidades</h3>
          <p className="font-sans text-light/50 text-sm">5 opções de crédito simultâneas</p>
        </div>
        <Activity className="text-accent" />
      </div>
      
      <div className="relative flex-1 flex items-center justify-center">
        {cards.map((card, i) => {
          const isTop = i === 0;
          return (
            <div 
              key={card}
              className="absolute w-full max-w-[240px] bg-dark border border-white/10 rounded-2xl p-4 flex items-center gap-3 transition-all duration-700"
              style={{
                transform: `translateY(${i * 15}px) scale(${1 - i * 0.05})`,
                opacity: 1 - i * 0.2,
                zIndex: 10 - i,
                boxShadow: isTop ? '0 10px 30px rgba(0,0,0,0.5)' : 'none'
              }}
            >
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-mono text-xs">
                {String(i + 1).padStart(2, '0')}
              </div>
              <span className="font-sans font-medium text-white">{card}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FeatureCard2 = () => {
  const [text, setText] = useState('');
  const fullText = "> Analisando +30 bancos...\n> Resposta recebida: 0.8s\n> Status: APROVADO\n> Limite Liberado: R$ 5.400,00";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        setTimeout(() => { i = 0; }, 2000); // restart
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-graphite/40 border border-white/5 rounded-[2rem] p-8 relative overflow-hidden shadow-2xl flex flex-col h-[400px]">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h3 className="font-sans font-bold text-xl text-white mb-2">Resposta em Tempo Real</h3>
          <p className="font-sans text-light/50 text-sm">Análise instantânea em +30 bancos</p>
        </div>
        <div className="flex items-center gap-2 px-2 py-1 rounded-md bg-red-500/10 text-red-500 font-mono text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
          Ao Vivo
        </div>
      </div>
      
      <div className="flex-1 bg-dark/80 rounded-xl p-4 font-mono text-sm text-accent/80 whitespace-pre-wrap border border-white/5 overflow-hidden">
        {text}<span className="inline-block w-2 h-4 bg-accent animate-pulse ml-1"></span>
      </div>
    </div>
  );
};

const CRM_LEADS = [
  { nome: 'Carlos M.', valor: 'R$ 8.200', status: 'Aprovado', cor: 'green' },
  { nome: 'Ana Paula', valor: 'R$ 3.500', status: 'Em análise', cor: 'yellow' },
  { nome: 'Roberto S.', valor: 'R$ 12.000', status: 'Follow-up', cor: 'blue' },
  { nome: 'Juliana T.', valor: 'R$ 5.800', status: 'Aprovado', cor: 'green' },
];

const statusColor = { green: 'bg-green-500/20 text-green-400 border-green-500/30', yellow: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30' };

const FeatureCard3 = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % CRM_LEADS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-graphite/40 border border-white/5 rounded-[2rem] p-8 relative overflow-hidden shadow-2xl flex flex-col h-[400px]">
      <div className="mb-5 flex justify-between items-start">
        <div>
          <h3 className="font-sans font-bold text-xl text-white mb-1">CRM de Vendas</h3>
          <p className="font-sans text-light/50 text-sm">Gerencie seus leads em tempo real</p>
        </div>
        <Clock className="text-accent" />
      </div>

      {/* Pipeline header */}
      <div className="flex gap-3 mb-4 text-[10px] font-mono text-light/30 uppercase tracking-widest px-1">
        <span className="flex-1">Cliente</span>
        <span className="w-24 text-right">Valor</span>
        <span className="w-20 text-right">Status</span>
      </div>

      {/* Leads list */}
      <div className="flex flex-col gap-2 flex-1">
        {CRM_LEADS.map((lead, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all duration-500 ${
              activeIdx === i
                ? 'bg-accent/10 border-accent/30 scale-[1.02]'
                : 'bg-dark/50 border-white/5'
            }`}
          >
            <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-xs flex-shrink-0">
              {lead.nome[0]}
            </div>
            <span className="font-sans text-white text-sm flex-1">{lead.nome}</span>
            <span className="font-mono text-accent text-xs w-24 text-right">{lead.valor}</span>
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border w-20 text-center ${statusColor[lead.cor]}`}>
              {lead.status}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom indicator */}
      <div className="mt-4 flex items-center justify-between">
        <span className="font-mono text-light/30 text-xs">4 leads ativos</span>
        <span className="font-mono text-green-400 text-xs">↑ R$ 29.500 em pipeline</span>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-32 bg-dark px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-xs uppercase tracking-widest mb-3">Como funciona</p>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white">Ferramentas em ação.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard1 />
          <FeatureCard2 />
          <FeatureCard3 />
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(text1Ref.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 20, opacity: 0, duration: 1, ease: "power3.out"
      });
      
      gsap.from(text2Ref.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
        y: 30, opacity: 0, duration: 1.5, ease: "power3.out", delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={containerRef} className="relative py-40 bg-dark overflow-hidden px-6">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" 
          alt="Bioluminescence abstract" 
          className="w-full h-full object-cover mix-blend-color-dodge"
        />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <p ref={text1Ref} className="font-sans text-xl md:text-2xl text-light/50 mb-8 max-w-2xl">
          A maioria do comércio foca em: perder o cliente na boca do caixa por falta de limite.
        </p>
        <p ref={text2Ref} className="font-serif italic text-4xl md:text-7xl leading-tight text-white">
          Nós focamos em: transformar cada <span className="text-accent not-italic font-sans font-bold uppercase tracking-tighter text-5xl md:text-8xl">Não</span> em venda aprovada.
        </p>
      </div>
    </section>
  );
};

const ProtocolCard = ({ index, title, desc, SVGAnimation, isLast }) => {
  return (
    <div className={`w-full h-[100vh] flex items-center justify-center sticky top-0 protocol-card pt-16`} style={{ zIndex: index }}>
      <div className="bg-graphite w-full max-w-5xl h-[70vh] rounded-[3rem] p-12 border border-white/5 flex flex-col md:flex-row items-center gap-12 shadow-2xl relative overflow-hidden">
        
        {/* Glow behind SVG */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-accent/20 blur-[100px] rounded-full"></div>

        <div className="flex-1 w-full h-full relative flex items-center justify-center z-10">
          <SVGAnimation />
        </div>
        
        <div className="flex-1 z-10">
          <div className="font-mono text-accent text-sm mb-4">0{index} // PROTOCOL</div>
          <h2 className="font-sans font-bold text-4xl text-white mb-6">{title}</h2>
          <p className="font-sans text-light/60 text-lg leading-relaxed max-w-md">{desc}</p>
        </div>
      </div>
    </div>
  );
};

const SVG1 = () => (
  <svg className="w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" className="text-white/10" strokeWidth="1" strokeDasharray="4 4" />
    <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" className="text-accent/50" strokeWidth="2" strokeDasharray="10 10" />
    <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" className="text-white/20" strokeWidth="1" />
  </svg>
);

const SVG2 = () => (
  <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
    <div className="w-full h-full grid grid-cols-10 grid-rows-10 gap-1 opacity-20">
      {Array.from({length: 100}).map((_, i) => <div key={i} className="bg-white rounded-full w-1 h-1 place-self-center"></div>)}
    </div>
    <div className="absolute top-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_15px_#7c1dd1] animate-[pulse_2s_infinite]" style={{
      animation: "scan 3s ease-in-out infinite alternate"
    }}>
      <style>{`@keyframes scan { from { top: 10%; } to { top: 90%; } }`}</style>
    </div>
  </div>
);

const SVG3 = () => (
  <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
    <path 
      d="M0,50 L150,50 L170,10 L190,90 L210,50 L400,50" 
      fill="none" 
      stroke="#7c1dd1" 
      strokeWidth="3"
      className="animate-[dash_2s_linear_infinite]"
      strokeDasharray="400"
      strokeDashoffset="400"
    >
      <style>{`@keyframes dash { to { stroke-dashoffset: 0; } }`}</style>
    </path>
  </svg>
);

const Protocol = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          gsap.to(card.querySelector('.bg-graphite'), {
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
            scale: 0.9,
            filter: "blur(10px)",
            opacity: 0.5
          });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="bg-dark relative pb-32">
      <ProtocolCard 
        index={1} 
        title="Escaneamento Distribuído" 
        desc="O sistema envia simultaneamente os dados criptografados para mais de 30 instituições financeiras em milissegundos."
        SVGAnimation={SVG1}
      />
      <ProtocolCard 
        index={2} 
        title="Busca por Modalidades" 
        desc="Varredura cruzada em 5 frentes: FGTS, CLT, Conta de Luz, Consignado Privado e Auxílios para garantir aprovação."
        SVGAnimation={SVG2}
      />
      <ProtocolCard 
        index={3} 
        title="Liberação de Fluxo" 
        desc="A resposta é confirmada, o limite é liberado e a venda que seria perdida entra imediatamente no seu caixa."
        SVGAnimation={SVG3}
      />
    </section>
  );
};

const CTA = () => {
  return (
    <section id="start" className="py-32 bg-dark px-6">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-graphite to-dark border border-white/10 rounded-[3rem] p-16 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-accent/10 blur-[100px] pointer-events-none"></div>
        
        <h2 className="font-serif italic text-5xl md:text-6xl text-white mb-6 relative z-10">Pronto para o próximo nível?</h2>
        <p className="font-sans text-light/60 text-lg mb-12 max-w-lg mx-auto relative z-10">Enquanto você lê isso, sua concorrência pode estar fechando uma venda com crédito que você não ofereceu.</p>
        
        <a href="#" className="magnetic-btn inline-block bg-accent text-white px-10 py-5 rounded-full font-sans font-bold text-lg relative z-10 hover:shadow-[0_0_40px_rgba(124,29,209,0.4)] transition-shadow">
          Acessar o Sistema
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 rounded-t-[4rem] border-t border-gray-100 relative z-20 shadow-[0_-4px_30px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img src="/logo-new.png" alt="Credwave Logo" className="h-20 md:h-24 w-auto" />
          </div>
          <p className="font-sans text-[#081752]/60 text-sm max-w-sm leading-relaxed">
            Nós não somos um banco. Somos o protocolo de intermediação que transforma o "não" em conversão absoluta.
          </p>
        </div>
        <div>
          <h4 className="font-sans font-bold text-[#081752] mb-5">Sistema</h4>
          <ul className="space-y-3 font-sans text-sm text-[#081752]/60">
            <li><a href="#" className="hover:text-accent transition-colors">Plataforma</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Integrações</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Segurança</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-bold text-[#081752] mb-5">Legal</h4>
          <ul className="space-y-3 font-sans text-sm text-[#081752]/60">
            <li><a href="#" className="hover:text-accent transition-colors">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Privacidade</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">LGPD</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[#081752]/40">© 2026 Credwave. Todos os direitos reservados.</p>
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-green-50 border border-green-100 font-mono text-xs text-green-700">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          System Operational
        </div>
      </div>
    </footer>
  );
};


const App = () => {
  return (
    <div className="w-full bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <BanksMarquee />
      <ProblemSection />
      <SolutionSection />
      <Features />
      <Philosophy />
      <BenefitsSection />
      <Testimonials />
      <Protocol />
      <FAQSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
