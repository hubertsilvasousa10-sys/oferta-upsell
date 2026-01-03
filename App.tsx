
import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Guitar, Clock, Target, AlertTriangle, ShieldCheck } from 'lucide-react';

// --- Configurações da Página ---
// Links de redirecionamento do funil
const CHECKOUT_UPSELL_LINK = "https://www.ggcheckout.com/checkout/v2/8iDOJ8dg4hV2P7xLJsBz";
const PAGINA_OBRIGADO_PRINCIPAL = "https://sua-area-membros.com.br/acesso";

// --- Components ---

const ProgressHeader = () => (
  <div className="w-full max-w-2xl mx-auto px-4 pt-8 pb-4">
    <div className="flex items-center justify-between mb-2">
      <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Passo 2 de 2</span>
      <span className="text-gray-400 text-xs font-medium italic">Aguarde... Não feche esta página</span>
    </div>
    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
      <div className="bg-emerald-500 h-full w-[85%] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-1000"></div>
    </div>
  </div>
);

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="mt-1 flex-shrink-0">
      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
    </div>
    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{text}</p>
  </div>
);

const BenefitBadge = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex flex-col items-center text-center p-4 bg-gray-800/40 rounded-xl border border-gray-700/50">
    <Icon className="w-6 h-6 text-emerald-400 mb-2" />
    <span className="text-gray-300 text-xs md:text-sm font-medium">{text}</span>
  </div>
);

// --- Main App ---

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleAccept = () => {
    setLoading(true);
    // Redireciona para o link de checkout do upsell
    window.location.href = CHECKOUT_UPSELL_LINK;
  };

  const handleDecline = () => {
    // Redireciona para a página de obrigado do produto principal (ou área de membros)
    window.location.href = PAGINA_OBRIGADO_PRINCIPAL;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center selection:bg-emerald-500/30">
      
      {/* ProgressBar Progress Tracking */}
      <ProgressHeader />

      <main className="w-full max-w-3xl px-4 py-8 md:py-12 flex flex-col items-center">
        
        {/* Headline Section */}
        <section className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
            Quer evitar o erro nº1 de iniciante: <br/>
            <span className="text-emerald-500">travar e desistir?</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto font-medium">
            Entre no Desafio 14 Dias e siga um passo a passo diário até tocar sua 1ª música com confiança.
          </p>
        </section>

        {/* Main Content Card */}
        <div className="w-full bg-gray-900 border border-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Visual Divider / Video Placeholder or Image */}
          <div className="bg-gradient-to-br from-emerald-600/20 to-transparent p-6 md:p-10 border-b border-gray-800">
            <div className="flex items-center gap-3 mb-6 bg-emerald-500/10 w-fit px-4 py-1.5 rounded-full border border-emerald-500/20">
              <Guitar className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Oferta Exclusiva Pós-Compra</span>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Desafio 14 Dias: Toque Sua 1ª Música <span className="text-gray-400 font-light block md:inline text-sm md:text-2xl md:ml-2">(com Correção e Suporte)</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="space-y-1">
                <FeatureItem text="Plano diário de 14 dias (10–15 min/dia)" />
                <FeatureItem text="Treinos de troca de acordes (anti-trava)" />
                <FeatureItem text="Batidas essenciais para iniciante (5 padrões)" />
              </div>
              <div className="space-y-1">
                <FeatureItem text="Correção guiada e suporte no grupo" />
                <FeatureItem text="Plano anti-desistência (postura e dedos)" />
                <FeatureItem text="Quadro de progresso + meta final" />
              </div>
            </div>
          </div>

          {/* Reasoning Section */}
          <div className="p-6 md:p-10 bg-gray-900/50">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Por que isso acelera seu aprendizado?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <BenefitBadge icon={Target} text="Você não pensa, apenas segue o dia" />
              <BenefitBadge icon={AlertTriangle} text="Corrige erros antes que virem hábito" />
              <BenefitBadge icon={Clock} text="Sentir progresso rápido gera motivação" />
            </div>
          </div>

          {/* Pricing Section */}
          <div className="p-8 md:p-12 text-center bg-emerald-500/5 border-t border-gray-800">
            <div className="mb-6">
              <span className="text-gray-500 line-through text-lg font-medium">De R$ 97,00</span>
              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-gray-300 text-xl font-medium">Por apenas</span>
                <span className="text-white text-4xl md:text-5xl font-black">R$ 35,99</span>
              </div>
            </div>

            {/* Microcopy */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-gray-500 uppercase tracking-tighter mb-8">
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500/50" /> Oferta Única</div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500/50" /> Acesso Imediato</div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500/50" /> Sem Mensalidade</div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4">
              <button 
                onClick={handleAccept}
                disabled={loading}
                className="group relative w-full max-w-md bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-extrabold py-5 px-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 animate-pulse-slow disabled:opacity-50"
              >
                {loading ? "PROCESSANDO..." : "SIM! QUERO ENTRAR NO DESAFIO POR R$ 35,99"}
                {!loading && <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />}
              </button>

              <button 
                onClick={handleDecline}
                className="text-gray-500 hover:text-gray-300 text-sm font-medium underline underline-offset-4 transition-colors py-2"
              >
                Não, vou tentar sozinho(a) e correr o risco de desistir
              </button>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <footer className="mt-12 text-center text-gray-600 text-[10px] md:text-xs leading-relaxed max-w-lg">
          <p>© 2024 Violão Pro. Todos os direitos reservados. Este desafio é um complemento opcional ao curso principal para acelerar resultados nos primeiros 14 dias de prática.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
