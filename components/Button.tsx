
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, className = "" }) => {
  return (
    <div className={`flex flex-col items-center gap-2 w-full max-w-sm ${className}`}>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-5 px-8 rounded-full text-center text-lg shadow-xl transform active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
        {children}
      </a>
      <p className="text-xs text-neutral-500 font-medium">Resposta rápida • Sem compromisso</p>
    </div>
  );
};
