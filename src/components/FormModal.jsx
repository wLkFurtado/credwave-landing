import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const FormModal = ({ open, onClose }) => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!open || scriptLoaded.current) return;
    // Injeta o script do formulário uma única vez
    const script = document.createElement('script');
    script.src = 'https://link.growave.com.br/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    scriptLoaded.current = true;
  }, [open]);

  // Fecha com Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  // Bloqueia scroll do body quando aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#081752]/80 backdrop-blur-md" />

      {/* Modal — só o iframe, sem header */}
      <div
        className="relative z-10 w-full max-w-lg rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.5)] animate-[modalIn_0.3s_cubic-bezier(0.34,1.56,0.64,1)_forwards]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão X flutuante */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <X size={18} className="text-white" />
        </button>

        {/* Iframe sem padding/borda extra */}
        <iframe
          src="https://link.growave.com.br/widget/form/4hxOTqlYUnNYpTe84StM"
          style={{ width: '100%', height: '564px', border: 'none', display: 'block' }}
          id="inline-4hxOTqlYUnNYpTe84StM"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Form 0"
          data-height="564"
          data-layout-iframe-id="inline-4hxOTqlYUnNYpTe84StM"
          data-form-id="4hxOTqlYUnNYpTe84StM"
          title="Form 0"
        />
      </div>
    </div>
  );
};

export default FormModal;
