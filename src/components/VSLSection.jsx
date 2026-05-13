import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';

const VSLSection = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <section className="py-24 bg-[#060610] px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT — Copy */}
        <div className="flex-1 text-left">
          <p className="text-accent font-mono text-xs uppercase tracking-widest mb-4">Veja em ação</p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white leading-tight mb-6">
            Assista antes de continuar.<br />
            <span className="font-serif italic text-accent">São apenas 2 minutos.</span>
          </h2>
          <p className="text-light/50 text-lg leading-relaxed mb-8 max-w-md">
            Veja como lojistas estão aprovando crédito na hora e transformando clientes sem limite em vendas fechadas — direto na plataforma Credwave.
          </p>

          <ul className="space-y-3 mb-10">
            {[
              'Como funciona a análise em +30 bancos',
              'Por que 97% das solicitações são aprovadas',
              'Quanto você pode faturar a mais por mês',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white/70">
                <div className="w-5 h-5 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <span className="font-sans text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#start"
            className="magnetic-btn inline-flex items-center gap-3 bg-accent text-white px-8 py-4 rounded-full font-sans font-bold text-lg hover:shadow-[0_0_30px_rgba(124,29,209,0.4)] transition-shadow"
          >
            Quero começar agora
          </a>
        </div>

        {/* RIGHT — VSL Player */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <div className="relative group">
            {/* Glow */}
            <div className="absolute inset-0 bg-accent/20 blur-[50px] rounded-[2rem] scale-90 pointer-events-none" />

            {/* Phone frame */}
            <div className="relative w-[300px] md:w-[340px] bg-[#0D0D1A] rounded-[3rem] border-4 border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.7)] overflow-hidden aspect-[9/19]">
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#0D0D1A] rounded-full z-30 border border-white/5" />

              {/* Video */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls={playing}
                playsInline
                onPause={handlePause}
                onEnded={handlePause}
                poster="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600&h=1200"
              >
                <source
                  src="https://res.cloudinary.com/dhsgmhaak/video/upload/q_auto,f_webm,w_1080/v1778644220/videos/Cred_wave_lkxpso.mov"
                  type="video/webm"
                />
                <source
                  src="https://res.cloudinary.com/dhsgmhaak/video/upload/q_auto,f_mp4,w_1080/v1778644220/videos/Cred_wave_lkxpso.mov"
                  type="video/mp4"
                />
              </video>

              {/* Custom play overlay */}
              {!playing && (
                <div
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer bg-[#081752]/60 backdrop-blur-[2px]"
                  onClick={handlePlay}
                >
                  {/* Pulse rings */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-28 h-28 rounded-full bg-accent/20 animate-ping" />
                    <div className="absolute w-20 h-20 rounded-full bg-accent/30 animate-ping animation-delay-150" />
                    <button className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(124,29,209,0.5)] hover:scale-110 transition-transform duration-200">
                      <Play className="text-[#081752] fill-[#081752] ml-1" size={28} />
                    </button>
                  </div>
                  <p className="mt-6 font-mono text-xs text-white/60 uppercase tracking-widest">Toque para assistir</p>
                </div>
              )}
            </div>
          </div>

          {/* Duration badge */}
          <div className="mt-5 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-light/60">Vídeo curto • Assista com som</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VSLSection;
