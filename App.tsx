
import React from 'react';
import { 
  EXPERT_NAME, 
  PROFESSION, 
  LOCATION, 
  IMAGES, 
  INSTAGRAM_HANDLE, 
  INSTAGRAM_LINK,
  WHATSAPP_LINK
} from './constants';
import { Button } from './components/Button';
import { Gallery } from './components/Gallery';

// Simple Lucide-style icons as SVG components
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

const UserCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
);

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      
      {/* 1. HERO SECTION (IMAGEM NO TOPO) */}
      <section className="relative w-full min-h-[90vh] flex flex-col pt-12 items-center bg-white overflow-hidden">
        <div className="z-10 px-6 text-center mb-8">
          <span className="text-gold font-bold text-sm tracking-widest uppercase mb-4 block">Especialista em Candeias</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 leading-tight mb-4">
            Eu sou a {EXPERT_NAME.toLowerCase()}, sua parceira na jornada da autoestima.
          </h1>
          <p className="text-neutral-600 text-lg mb-8 max-w-md mx-auto leading-relaxed">
            Especialista em {PROFESSION} focada em resultados naturais e duradouros.
          </p>
          <Button>Agendar consulta gratuita</Button>
        </div>
        
        <div className="w-full relative flex-1 flex items-end justify-center">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-50 to-transparent"></div>
          <img 
            src={IMAGES.hero} 
            alt={EXPERT_NAME} 
            className="w-full max-w-lg object-contain transform translate-y-4"
          />
        </div>
      </section>

      {/* 2. QUEM SOU EU (TEXTO FOCO EM AUTORIDADE) */}
      <section className="w-full py-20 px-6 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-8">
          <h2 className="text-3xl font-serif font-bold leading-tight">Ciência, Arte e Cuidado Individualizado.</h2>
          <p className="text-neutral-300 leading-relaxed text-lg max-w-2xl">
            Olá! Sou a Dra. Camila Martins. Minha missão é ir além de procedimentos; é entender seus desejos e resgatar o brilho nos seus olhos através de um atendimento humano e técnico.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 w-full text-left">
            {[
              "Avaliação facial detalhada em 1ª consulta",
              "Planejamento ortodôntico personalizado",
              "Foco em harmonização que preserva sua identidade",
              "Ambiente acolhedor e tecnologia de ponta"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-neutral-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <Gallery 
        title="Resultados Reais" 
        subtitle="Transformações planejadas com técnica e segurança para cada tipo de rosto."
        images={IMAGES.results} 
      />

      {/* 4. POR QUE CONFIAR EM MIM */}
      <section className="w-full py-20 px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-neutral-800">Por que me escolher?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <UserCheckIcon />,
                title: "Atendimento Comigo",
                text: "Você será atendida diretamente por mim em todas as etapas."
              },
              {
                icon: <AwardIcon />,
                title: "Avaliação Honesta",
                text: "Só indico procedimentos que realmente trarão benefícios a você."
              },
              {
                icon: <HeartIcon />,
                title: "Segurança Total",
                text: "Uso os melhores produtos do mercado mundial de estética."
              },
              {
                icon: <MapPinIcon />,
                title: "Localização Premium",
                text: "No coração de Candeias, com fácil acesso e conforto."
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-neutral-50 rounded-full">{card.icon}</div>
                <h3 className="font-bold text-lg text-neutral-800">{card.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="w-full py-16 px-6 bg-white border-y border-neutral-100 flex flex-col items-center text-center">
        <h3 className="text-2xl font-serif font-bold text-neutral-800 mb-4">Pronta para a sua melhor versão?</h3>
        <p className="text-neutral-500 mb-8 max-w-sm">Tire suas dúvidas e agende sua avaliação gratuita hoje mesmo.</p>
        <Button>Falar no WhatsApp agora</Button>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="w-full py-20 px-6 bg-neutral-900 text-white overflow-hidden relative">
         <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-serif font-bold text-center mb-16">Seu caminho para a transformação</h2>
          <div className="space-y-12">
            {[
              { step: "01", title: "Primeiro Contato", text: "Clique no botão e envie uma mensagem. Minha equipe ou eu mesma responderemos rapidamente." },
              { step: "02", title: "Agendamento", text: "Escolhemos o melhor horário para você vir até o consultório em Candeias." },
              { step: "03", title: "Avaliação Gratuita", text: "Analisamos seu caso de forma profunda e gratuita, criando o seu plano exclusivo." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <span className="text-4xl font-serif italic text-gold opacity-50 font-bold">{item.step}</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-neutral-400">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-white/5 p-6 rounded-2xl text-center border border-white/10">
            <p className="text-gold font-bold italic">Sem taxas, sem compromisso e com total clareza.</p>
          </div>
         </div>
      </section>

      {/* 7. CTA FINAL COM IMAGEM (IMAGEM NO FINAL) */}
      <section className="w-full py-24 px-6 bg-white flex flex-col items-center text-center overflow-hidden">
        <div className="max-w-4xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-6 leading-tight">Sua transformação começa aqui.</h2>
            <p className="text-neutral-600 text-lg mb-10">
              Não deixe sua autoestima para depois. Agende agora sua <span className="text-neutral-900 font-bold underline decoration-gold">primeira consulta 100% gratuita</span> e descubra o que podemos fazer por você.
            </p>
            <div className="flex justify-center md:justify-start">
              <Button>Garantir minha avaliação grátis</Button>
            </div>
          </div>
          <div className="w-full max-w-sm rounded-[3rem] overflow-hidden shadow-2xl border-4 border-gold/10">
            <img src={IMAGES.about} alt={EXPERT_NAME} className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* 8. RODAPÉ */}
      <footer className="w-full py-12 px-6 bg-neutral-900 text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h3 className="text-xl font-serif font-bold text-gold">{EXPERT_NAME}</h3>
            <p className="text-sm text-neutral-400">{PROFESSION}</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-sm text-neutral-500">
            <p className="max-w-xs">{LOCATION}</p>
          </div>
          <div className="flex justify-center gap-6 pt-4">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              {INSTAGRAM_HANDLE}
            </a>
          </div>
          <div className="pt-8 border-t border-white/5 text-[10px] text-neutral-600 uppercase tracking-widest">
            © {new Date().getFullYear()} {EXPERT_NAME} • Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM BAR (Mobile Floating Button) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
        </a>
      </div>

    </div>
  );
};

export default App;
