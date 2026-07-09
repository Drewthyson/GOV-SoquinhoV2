import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  HandDrawnPushPin, 
  HandDrawnStar, 
  HandDrawnScratch 
} from "./HandDrawnSvg";
import { Shield, BookOpen, AlertCircle, AlertTriangle, ArrowRight, Check } from "lucide-react";

export function ConstitutionSection() {
  const [activeChapter, setActiveChapter] = useState<"nomenclaturas" | "direitos" | "avisos" | "regras">("direitos");

  return (
    <div className="bg-paper-creme/90 border-2 border-stone-400 rounded-xl p-6 sm:p-10 shadow-md relative overflow-hidden" id="constitution-main-wrapper">
      
      {/* Decorative Stamps */}
      <div className="absolute top-4 right-4 rotate-12 opacity-15 select-none pointer-events-none hidden sm:block">
        <div className="border-4 border-terracota text-terracota font-mono font-black text-xs px-3 py-1.5 uppercase tracking-widest rounded-md">
          APROVADO EM 2026
        </div>
      </div>

      <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 z-10">
        <HandDrawnPushPin className="w-8 h-8" />
      </div>

      <div className="text-center max-w-2xl mx-auto space-y-1 mb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-terracota font-bold">
          Documento Oficial Consolidado
        </span>
        <h3 className="font-serif text-3xl font-black text-charcoal tracking-tight">
          📜 Constituição Soquinho de 2026
        </h3>
        <p className="font-serif text-xs text-stone-500 italic">
          O estatuto sagrado da República que regula os deveres, direitos e interações cívicas para a preservação da harmonia estadual.
        </p>
      </div>

      {/* Chapters Index (Editorial Book Tabs) */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-stone-200 pb-4">
        <button
          onClick={() => setActiveChapter("nomenclaturas")}
          className={`px-4 py-2 rounded font-mono text-xs uppercase transition-all tracking-tight border ${
            activeChapter === "nomenclaturas"
              ? "bg-charcoal text-white border-transparent shadow-sm"
              : "bg-white text-stone-600 border-stone-300 hover:border-stone-400"
          }`}
        >
          🏷️ Nomenclaturas
        </button>
        <button
          onClick={() => setActiveChapter("direitos")}
          className={`px-4 py-2 rounded font-mono text-xs uppercase transition-all tracking-tight border ${
            activeChapter === "direitos"
              ? "bg-moss text-white border-transparent shadow-sm"
              : "bg-white text-stone-600 border-stone-300 hover:border-stone-400"
          }`}
        >
          💠 Direitos do Gatinho
        </button>
        <button
          onClick={() => setActiveChapter("avisos")}
          className={`px-4 py-2 rounded font-mono text-xs uppercase transition-all tracking-tight border ${
            activeChapter === "avisos"
              ? "bg-amber-600 text-white border-transparent shadow-sm"
              : "bg-white text-stone-600 border-stone-300 hover:border-stone-400"
          }`}
        >
          ⚠️ Avisos da Moderação
        </button>
        <button
          onClick={() => setActiveChapter("regras")}
          className={`px-4 py-2 rounded font-mono text-xs uppercase transition-all tracking-tight border ${
            activeChapter === "regras"
              ? "bg-terracota text-white border-transparent shadow-sm"
              : "bg-white text-stone-600 border-stone-300 hover:border-stone-400"
          }`}
        >
          🚨 Regras de Conduta
        </button>
      </div>

      {/* Chapter Contents with smooth entry */}
      <div className="min-h-[260px] max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {activeChapter === "nomenclaturas" && (
            <motion.div
              key="nomenclaturas"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="bg-white p-5 rounded border border-stone-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 border-b border-stone-100 pb-2">
                  <BookOpen className="w-4 h-4 text-stone-600" />
                  <h4 className="font-serif font-bold text-base text-charcoal">Preâmbulo e Definições Cívicas</h4>
                </div>
                
                <p className="font-serif text-sm text-stone-600 leading-relaxed italic">
                  &ldquo;Bem-vindo(a) ao Grupo Gato Soquinho! Este é o ponto de partida e o farol normativo que assegura que a República permaneça um espaço de debate inteligente, criatividade e convívio afetuoso.&rdquo;
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-stone-50 rounded border border-stone-200/60">
                    <span className="font-mono text-[10px] text-stone-400 uppercase font-bold block">Definição 01</span>
                    <h5 className="font-serif font-extrabold text-stone-800 text-sm mt-0.5">Gatinho</h5>
                    <p className="font-serif text-xs text-stone-600 mt-1 leading-relaxed">
                      Todo e qualquer cidadão ativo devidamente registrado e aceito na República do Gato Soquinho.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-50 rounded border border-stone-200/60">
                    <span className="font-mono text-[10px] text-stone-400 uppercase font-bold block">Definição 02</span>
                    <h5 className="font-serif font-extrabold text-stone-800 text-sm mt-0.5">Conselho Judicial (ADMs)</h5>
                    <p className="font-serif text-xs text-stone-600 mt-1 leading-relaxed">
                      Cidadãos com cargo de Admin no canal oficial do WhatsApp, encarregados de mediar atritos, garantir conformidade e guiar o destino da harmonia do grupo.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeChapter === "direitos" && (
            <motion.div
              key="direitos"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="bg-emerald-50/20 border-l-4 border-emerald-600 p-4 rounded-r bg-white/40 mb-4">
                <p className="font-serif text-xs text-emerald-800 leading-relaxed italic">
                  &ldquo;Todo gatinho tem direito inalienável ao lazer, respeito e à proteção de sua individualidade, contanto que colabore ativamente para o progresso pacífico da coletividade.&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Harmonia Coletiva",
                    desc: "O objetivo máximo da República é promover a harmonia, fomentando o entendimento mútuo como um processo contínuo de socialização e crescimento coletivo."
                  },
                  {
                    title: "Mediação de Conflitos",
                    desc: "Caso se sinta atacado, xingado ou ameaçado, o gatinho deve contatar imediatamente um dos ADMs. O Conselho irá intervir e julgar os fatos com imparcialidade."
                  },
                  {
                    title: "Transparência de Atos",
                    desc: "Qualquer banimento de aviso ou punição imediata virá obrigatoriamente acompanhado de seu motivo especificado para toda a República, sem espaço para abusos ocultos."
                  },
                  {
                    title: "Democracia Moderadora",
                    desc: "Os ADMs são eleitos democraticamente com base em contribuição histórica. Gatinhos punidos têm direito a recorrer e pleitear a reavaliação de seus casos cívicos."
                  },
                  {
                    title: "Ação de Emergência",
                    desc: "Na ausência dos demais ADMs, qualquer moderador online assume a responsabilidade total e poderá agir conforme seu julgamento, cabendo posterior recurso de 2ª instância."
                  },
                  {
                    title: "Lazer e Desenvolvimento",
                    desc: "Todo cidadão tem o direito de propor e desfrutar de dinâmicas coletivas, compartilhar livros, filmes, jogos e enriquecer culturalmente o grupo a qualquer momento."
                  },
                  {
                    title: "Prudência no Recrutamento",
                    desc: "Adições e convites devem ser feitos com extrema cautela. Proíbe-se divulgar links para estranhos sem antes obter consentimento e verificar a idoneidade do novato."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded border border-stone-200 shadow-2xs flex gap-3">
                    <div className="mt-0.5 bg-emerald-100 text-emerald-800 rounded-full w-5 h-5 flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="font-serif font-bold text-xs text-charcoal">{item.title}</h5>
                      <p className="font-serif text-xs text-stone-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeChapter === "avisos" && (
            <motion.div
              key="avisos"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="bg-amber-50/40 border-l-4 border-amber-600 p-4 rounded-r bg-white/40 mb-4">
                <p className="font-serif text-xs text-amber-800 leading-relaxed font-bold">
                  ⚠️ FIQUE ATENTO: A inobservância destas diretrizes de moderação acarreta advertências automáticas do Conselho de ADMs.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    rule: "Ghosts e Inatividade",
                    desc: "Membros totalmente inativos (Ghosts) serão periodicamente removidos do grupo a cada 2 meses para preservação do dinamismo cívico."
                  },
                  {
                    rule: "Tumultos e Intrigas",
                    desc: "Tentativas deliberadas de iniciar brigas resultam em suspensão imediata. Discussões pessoais devem ser dirimidas no privado ou reportadas formalmente."
                  },
                  {
                    rule: "Saídas Inconvenientes",
                    desc: "Abandonar o grupo de forma dramática ou para gerar discórdia acarreta a perda imediata do direito ao retorno. A República não tolera chantagem emocional."
                  },
                  {
                    rule: "Definição de Flood e Spam",
                    desc: "Atrapalhar conversas sem um contexto plausível e com alta frequência é proibido. O Conselho Judicial analisará individualmente cada incidente de perturbação."
                  },
                  {
                    rule: "Uso Restrito de @all",
                    desc: "O ping em massa é exclusivo da administração. Membros comuns só podem usá-lo com consentimento expresso de um ADM ou sob justificativa cívica urgente."
                  },
                  {
                    rule: "Maioridade Exigida",
                    desc: "Por questões de conformidade com temas debatidos e piadas internas de humor absurdo, é estritamente proibida a entrada de menores de 18 anos."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded border border-stone-200/80 shadow-2xs flex gap-3 items-start">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-serif font-bold text-xs text-charcoal">{item.rule}</h5>
                      <p className="font-serif text-xs text-stone-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeChapter === "regras" && (
            <motion.div
              key="regras"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <div className="bg-red-50/40 border-l-4 border-terracota p-4 rounded-r bg-white/40 mb-4">
                <p className="font-serif text-xs text-red-950 leading-relaxed font-black uppercase tracking-wider">
                  🚨 REGRAS DE PENALIDADE MÁXIMA: INFRAÇÃO DIRETAS LEVAM AO BANIMENTO PERMANENTE DA REPÚBLICA.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    rule: "Proibido Vazamento de Mensagens",
                    desc: "É terminantemente vedado expor conversas privadas ou trechos de chats internos sem o consentimento mútuo dos envolvidos. Ética e privacidade são invioláveis."
                  },
                  {
                    rule: "Abuso de Temas Sensíveis",
                    desc: "A harmonia prevalece sobre impulsos individuais. Forçar temas sensíveis com intenção de chocar ou desconfortar gera advertência imediata e obrigatoriedade de mediação."
                  },
                  {
                    rule: "Mídias Ofensivas e Gore",
                    desc: "Gore, pornografia explícita e mídias criminosas são banidos instantaneamente. Humor nonsense/absurdo é permitido, desde que não atropele o bem-estar coletivo."
                  },
                  {
                    rule: "Respeito à Moderação",
                    desc: "Não desmereça as atribuições dos ADMs, cada qual possui ocupações diárias voluntárias. Críticas devem ser encaminhadas com civilidade através das vias adequadas."
                  },
                  {
                    rule: "Regra da Reincidência",
                    desc: "Após uma infração, o gatinho recebe uma advertência monitorada. Demonstrar complacência é exigido; uma nova quebra de conduta resulta em exílio permanente (ban)."
                  },
                  {
                    rule: "Fins Publicitários Exclusivos",
                    desc: "O grupo é prioritariamente focado em interações sociais. Uso puramente comercial ou flood de links publicitários sem diálogo ativo será punido pelas autoridades."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded border-2 border-stone-300 shadow-2xs flex gap-3 items-start relative overflow-hidden">
                    {/* Tiny Red indicator */}
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-terracota" />
                    <Shield className="w-4 h-4 text-terracota shrink-0 mt-0.5 ml-1.5" />
                    <div>
                      <h5 className="font-serif font-bold text-xs text-charcoal flex items-center gap-1.5">
                        {item.rule}
                      </h5>
                      <p className="font-serif text-xs text-stone-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 border-t border-stone-200 pt-6 text-center">
        <p className="font-hand text-xl text-terracota font-bold">
          &ldquo;Ao ingressar e permanecer na República Gato Soquinho, você concorda irrestritamente com os termos estabelecidos.&rdquo;
        </p>
        <span className="font-mono text-[9px] text-stone-400 uppercase mt-2 block">
          Última atualização consolidada: Fevereiro de 2026
        </span>
      </div>
    </div>
  );
}
