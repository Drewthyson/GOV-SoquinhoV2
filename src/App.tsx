import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MEMBERS_DATA } from "./types";
import { CollageCard } from "./components/CollageCard";
import { DictatedQuiz } from "./components/DictatedQuiz";
import { ResistanceDiary } from "./components/ResistanceDiary";
import { IcebergHarmonia } from "./components/IcebergHarmonia";
import { ConstitutionSection } from "./components/ConstitutionSection";
import {
  HandDrawnArrow,
  HandDrawnPushPin,
  HandDrawnStar,
  HandDrawnScratch,
  HandDrawnPawPrint,
  HandDrawnBotanicalBranch,
  CrownDoodle,
  HandDrawnHeart,
  RedactedStamp
} from "./components/HandDrawnSvg";
import {
  Search,
  Filter,
  Shield,
  Eye,
  Terminal,
  Volume2,
  Lock,
  VolumeX,
  FileText,
  Bookmark,
  Calendar,
  Sparkles,
  Info
} from "lucide-react";

export default function App() {
  const [isResistanceMode, setIsResistanceMode] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [mbtiFilter, setMbtiFilter] = useState<string>("todos");
  const [activeTab, setActiveTab] = useState<"memorial" | "quiz" | "cronicas">("memorial");
  const [subTab, setSubTab] = useState<"citizens" | "iceberg">("citizens");
  const [selectedLighterMode, setSelectedLighterMode] = useState<boolean>(false);
  const [audioAlert, setAudioAlert] = useState<boolean>(false);

  // Trigger alert siren effect for fun when resistance is toggled
  const handleResistanceToggle = () => {
    setIsResistanceMode(!isResistanceMode);
    setAudioAlert(true);
    setTimeout(() => setAudioAlert(false), 1200);
  };

  // Extract unique MBTI/Grouping families for filtering
  const mbtiGroups = ["Analíticos (NT)", "Diplomatas (NF)", "Sentinelas (SJ)", "Exploradores (SP)"];

  // Helper to categorize MBTI strings
  const getMbtiCategory = (mbtiStr: string) => {
    const clean = mbtiStr.toUpperCase();
    if (clean.includes("INTJ") || clean.includes("INTP") || clean.includes("ENTJ") || clean.includes("ENTP")) {
      return "Analíticos (NT)";
    }
    if (clean.includes("INFJ") || clean.includes("INFP") || clean.includes("ENFJ") || clean.includes("ENFP")) {
      return "Diplomatas (NF)";
    }
    if (clean.includes("ISTJ") || clean.includes("ISFJ") || clean.includes("ESTJ") || clean.includes("ESFJ")) {
      return "Sentinelas (SJ)";
    }
    if (clean.includes("ISTP") || clean.includes("ISFP") || clean.includes("ESTP") || clean.includes("ESFP")) {
      return "Exploradores (SP)";
    }
    return "Outros";
  };

  // Filter members based on search and selected group
  const filteredMembers = useMemo(() => {
    return MEMBERS_DATA.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.mbti.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.roleRegime.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.roleResistance.toLowerCase().includes(searchQuery.toLowerCase());

      if (mbtiFilter === "todos") return matchesSearch;

      const category = getMbtiCategory(member.mbti);
      return matchesSearch && category === mbtiFilter;
    });
  }, [searchQuery, mbtiFilter]);

  return (
    <>
      {/* TOP COMPACT BRANDING RAIL - FIXED */}
      <div className="fixed top-0 left-0 right-0 border-b border-stone-300 py-3 px-4 bg-paper-creme/90 backdrop-blur-md flex justify-between items-center z-50 shadow-xs">
        <div className="flex items-center gap-2">
          <HandDrawnPawPrint className="w-5 h-5 text-moss" />
          <span className="font-mono text-xs font-bold tracking-wider text-charcoal uppercase">
            REPÚBLICA GATO SOQUINHO • INFORMATIVO Nº 24-Y
          </span>
        </div>
        
        {/* Toggle Mode Control */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] hidden sm:inline text-stone-500 uppercase">
            {isResistanceMode ? "⚠ CENSURA QUEBRADA" : "🛡 CANAL COMPLIANT"}
          </span>
          
          <button
            onClick={handleResistanceToggle}
            className={`relative flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-sm border ${
              isResistanceMode
                ? "bg-terracota text-white border-transparent hover:bg-terracota-dark animate-pulse"
                : "bg-moss text-white border-transparent hover:bg-emerald-800"
            }`}
            id="resistance-toggle-button"
          >
            {isResistanceMode ? (
              <>
                <Terminal className="w-3.5 h-3.5" />
                Desativar Revolução
              </>
            ) : (
              <>
                <Shield className="w-3.5 h-3.5" />
                Ativar Resistência
              </>
            )}
          </button>
        </div>
      </div>
      
      <div className="min-h-screen bg-warm-white text-charcoal paper-texture relative overflow-x-hidden selection:bg-terracota selection:text-white pb-20 pt-[56px]">
      
      {/* Editorial Noise Filter Overlay */}
      <div className="noise-bg opacity-35"></div>

      {/* Absolute Aesthetic Grunge Grid / Paper Line Background */}
      <div className="absolute inset-y-0 left-0 w-[1px] bg-red-200/40 ml-12 sm:ml-20 border-r border-red-200/30 hidden md:block"></div>
      
      {/* Resistance Hack Alert Backdrop Overlay */}
      <AnimatePresence>
        {audioAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-red-600 z-50 pointer-events-none flex items-center justify-center"
          >
            <div className="font-mono text-white text-3xl font-black uppercase tracking-widest text-center animate-ping">
              SISTEMA HACKEADO - MODO RESISTÊNCIA ATIVADO
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN MAGAZINE HERO HEADER (EDITORIAL COLLAGE) */}
      <header className="relative max-w-7xl mx-auto pt-12 px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
        
        {/* LEFT COMPOSITION: Huge typography and handmade doodles */}
        <div className="lg:col-span-7 space-y-6 relative">
          
          {/* Nature Branch overlay */}
          <div className="absolute top-[-50px] left-[-30px] opacity-15 pointer-events-none">
            <HandDrawnBotanicalBranch className="w-32 h-52 text-moss rotate-[-15deg]" />
          </div>

          <div className="inline-block relative">
            <span className="font-mono text-xs font-black uppercase tracking-widest text-terracota bg-orange-100/60 px-3 py-1 rounded-sm border border-orange-200/50">
              EDIÇÃO ESPECIAL - MEMORIAL DE 2 ANOS
            </span>
            <div className="absolute -top-3 -right-6 rotate-12">
              <HandDrawnStar className="w-5 h-5 text-terracota" />
            </div>
          </div>

          {/* Main Title - Pure Editorial Drama */}
          <div className="relative">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-charcoal tracking-tight leading-none">
              República <br />
              <span className="text-moss">Gato</span>{" "}
              <span className="relative inline-block text-terracota">
                Soquinho
                {/* Underline loop */}
                <svg className="absolute left-0 bottom-[-8px] w-full h-3 text-terracota" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,9 100,5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            {/* Crown on the 'G' or floating around */}
            <div className="absolute top-[-30px] left-2 rotate-[-15deg]">
              <CrownDoodle className="w-12 h-8 text-terracota" />
            </div>
          </div>

          {/* Editorial Subtitle with a stamp or label overlay */}
          <div className="max-w-xl font-serif text-lg text-stone-700 leading-relaxed space-y-3">
            <p>
              Há exatamente dois anos, quinze almas excêntricas de MBTIs opostos uniram forças para erigir a República Gato Soquinho. Provando que mesmo com personalidades diferentes, a harmonia pode prevalecer. Dois anos de amizade, loucuras e conhecimento, constituindo o nosso amado regime, obrigado por participar!
            </p>
            {isResistanceMode ? (
              <p className="font-mono text-xs text-terracota-dark font-bold bg-orange-50 p-3 rounded-lg border-l-4 border-terracota">
                ✍ MODO RESISTÊNCIA ATIVO: Toda a censura governamental foi quebrada. Desça a página para ler os relatórios reais dos serviços secretos (S.S.G.S.) e a biografia de rebeldia de cada morador.
              </p>
            ) : (
              <p className="font-mono text-xs text-stone-500 italic bg-stone-100 p-3 rounded-lg border-l-4 border-moss">
                🏛 MODO OFICIAL: Este portal é monitorado pelo Departamento de Ordem Geral. Todas as informações contidas aqui estão de acordo com o Manual de Submissão Alegre ao Soberano Soquinho.
              </p>
            )}
          </div>

          {/* Micro Hand-Drawn Arrow */}
          <div className="absolute bottom-[-40px] right-24 hidden md:block">
            <HandDrawnArrow className="w-24 h-10 text-stone-500 rotate-12" />
          </div>
        </div>

        {/* RIGHT COMPOSITION: Vintage Overlapping Photographic Collage (No Minimalism!) */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0 h-[400px] flex items-center justify-center">
          
          {/* Back Paper Texture Layer */}
          <div className="absolute w-[280px] h-[360px] bg-paper-creme rounded-lg border border-stone-300 shadow-md rotate-[-6deg] translate-x-[-20px] translate-y-[-10px] p-4 flex flex-col justify-between">
            <div className="w-full h-40 bg-moss/10 rounded-sm overflow-hidden relative border border-moss/20">
              <img
                src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=400&auto=format&fit=crop"
                alt="Plant collage"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
            </div>
            <div className="font-hand text-lg font-black text-moss leading-tight mt-2">
              &ldquo;A natureza reclama o silêncio, mas o gato reclama o sachê.&rdquo;
            </div>
            <div className="font-mono text-[9px] uppercase tracking-widest text-stone-500">
              Folheto de Instrução Nº 12
            </div>
          </div>

          {/* Main Polaroid Layer (The Soberano Soquinho) */}
          <div className="absolute w-[300px] bg-white p-4 pb-12 rounded shadow-2xl border border-stone-200 rotate-[4deg] translate-x-[15px] translate-y-[15px] hover:rotate-0 hover:scale-105 duration-300 z-20">
            {/* Polaroid Pin */}
            <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 z-30">
              <HandDrawnPushPin className="w-8 h-8" />
            </div>

            <div className="aspect-square bg-stone-100 overflow-hidden relative border border-stone-300">
              {/* Retro Film Grain effect */}
              <div className="absolute inset-0 bg-neutral-900/10 mix-blend-overlay z-10"></div>
              <div className="absolute inset-0 bg-orange-900/5 mix-blend-color-burn z-10"></div>
              <img
                src="/src/assets/images/soberano_soquinho.jpg"
                alt="Soberano Soquinho"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {/* Redacted Stamp overlay if resistance is active */}
              <AnimatePresence>
                {isResistanceMode && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 z-20"
                  >
                    <RedactedStamp text="CENSURADO" className="bg-white/95 text-terracota" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-3 text-center">
              <span className="font-hand text-2xl font-black text-charcoal">Soberano Soquinho</span>
              <p className="font-mono text-[10px] uppercase tracking-wider text-terracota font-bold mt-1">
                {isResistanceMode ? "⚠ DITADOR DO SOFÁ" : "👑 BENEVOLENTE SUPREMO"}
              </p>
            </div>
          </div>

          {/* Scribble details around the frame */}
          {isResistanceMode && (
            <div className="absolute bottom-0 right-4 font-hand text-xl text-terracota font-black rotate-[-12deg] z-30 drop-shadow-sm">
              Quem mandou ele morder o pé do Luís?!
            </div>
          )}

        </div>
      </header>

      {/* REVOLUTIONARY STATISTICS PANEL (COLLAGE BLOCKS) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 mt-16">
        <div className="text-center mb-8">
          <span className="font-mono text-xs text-stone-500 uppercase">Fatos & Números Autenticados</span>
          <h2 className="font-serif text-3xl font-black tracking-tight">Estatísticas da República</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <div className="bg-paper-creme p-6 border-2 border-moss rounded-lg shadow-sm rotate-[-1deg] hover:rotate-0 transition-transform relative">
            <div className="absolute top-2 right-2 opacity-10">
              <HandDrawnPawPrint className="w-12 h-12 text-charcoal" />
            </div>
            <span className="font-mono text-[10px] uppercase text-stone-500">Dias de Convivência</span>
            <div className="font-serif text-4xl font-black text-moss mt-1">730 dias</div>
            <p className="text-xs text-stone-600 mt-2 font-serif">
              {isResistanceMode 
                ? "Sobrevivendo bravamente a 24 meses de zoomies, discussões sobre lixo e censo psicológico." 
                : "730 dias de total concordância pacífica e alegria constante decretada por estatuto estatal."}
            </p>
          </div>

          {/* Stat 2 */}
          <div className="bg-stone-50/90 p-6 border-2 border-dashed border-terracota rounded-lg shadow-sm rotate-[1deg] hover:rotate-0 transition-transform relative">
            <div className="absolute top-2 right-2 opacity-15">
              <HandDrawnStar className="w-12 h-12 text-terracota" />
            </div>
            <span className="font-mono text-[10px] uppercase text-stone-500">Sachês Confiscados</span>
            <div className="font-serif text-4xl font-black text-terracota mt-1">1.460 latas</div>
            <p className="text-xs text-stone-600 mt-2 font-serif">
              {isResistanceMode 
                ? "Dos quais 40% foram sonegados pela oposição e distribuídos secretamente nas madrugadas." 
                : "Entregues de forma voluntária ao Soberano como tributo de paz e imposto de segurança."}
            </p>
          </div>

          {/* Stat 3 */}
          <div className="bg-emerald-50/50 p-6 border-2 border-moss rounded-lg shadow-sm rotate-[-2deg] hover:rotate-0 transition-transform relative">
            <span className="font-mono text-[10px] uppercase text-stone-500">Relatórios de Personalidade</span>
            <div className="font-serif text-4xl font-black text-moss mt-1">15 Dossiês</div>
            <p className="text-xs text-stone-600 mt-2 font-serif">
              Meticulosamente catalogados com MBTI, Socionics e Enneagrama. Cada habitante possui uma ficha detalhada de conduta psicológica.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="bg-orange-50/40 p-6 border-2 border-stone-400 rounded-lg shadow-sm rotate-[2deg] hover:rotate-0 transition-transform relative">
            <span className="font-mono text-[10px] uppercase text-stone-500">Zoomies de Alta Velocidade</span>
            <div className="font-serif text-4xl font-black text-charcoal mt-1">3.200 horas</div>
            <p className="text-xs text-stone-600 mt-2 font-serif">
              Corridas desesperadas sem destino, ocorrendo predominantemente na frequência das 3h às 4h da manhã, em protesto às restrições.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE NAVIGATION CONTROL PANEL */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 mt-16">
        
        {/* Navigation Tabs - Styled as vintage file index tabs */}
        <div className="flex flex-wrap justify-center sm:justify-start -space-x-1 relative z-20">
          <button
            onClick={() => setActiveTab("memorial")}
            className={`px-6 py-3.5 rounded-t-lg font-mono text-xs sm:text-sm uppercase tracking-wider font-bold transition-all border-2 border-b-0 ${
              activeTab === "memorial"
                ? "bg-paper-creme text-charcoal border-moss translate-y-[2px]"
                : "bg-stone-200/60 text-stone-600 border-stone-300 hover:bg-stone-200 hover:text-charcoal"
            }`}
          >
            📂 Arquivos dos Cidadãos ({filteredMembers.length})
          </button>
          
          <button
            onClick={() => setActiveTab("quiz")}
            className={`px-6 py-3.5 rounded-t-lg font-mono text-xs sm:text-sm uppercase tracking-wider font-bold transition-all border-2 border-b-0 ${
              activeTab === "quiz"
                ? "bg-paper-creme text-charcoal border-moss translate-y-[2px]"
                : "bg-stone-200/60 text-stone-600 border-stone-300 hover:bg-stone-200 hover:text-charcoal"
            }`}
          >
            📋 Teste de Lealdade Cívica
          </button>

          <button
            onClick={() => setActiveTab("cronicas")}
            className={`px-6 py-3.5 rounded-t-lg font-mono text-xs sm:text-sm uppercase tracking-wider font-bold transition-all border-2 border-b-0 ${
              activeTab === "cronicas"
                ? "bg-paper-creme text-charcoal border-moss translate-y-[2px]"
                : "bg-stone-200/60 text-stone-600 border-stone-300 hover:bg-stone-200 hover:text-charcoal"
            }`}
          >
            📜 Crônicas da República (2 Anos)
          </button>
        </div>

        {/* CONTAINER SHELF FOR ACTIVE COMPONENT */}
        <div className="bg-paper-creme border-2 border-moss rounded-b-xl rounded-r-xl p-6 sm:p-10 shadow-lg relative min-h-[500px]">
          
          {/* Subtle decoration inside the index box */}
          <div className="absolute bottom-4 right-4 opacity-5 pointer-events-none">
            <HandDrawnBotanicalBranch className="w-40 h-60 text-stone-800" />
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "memorial" && (
              <motion.div
                key="memorial-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Sub-tab navigation inside memorial */}
                <div className="flex justify-center border-b border-stone-200 pb-4 mb-2">
                  <div className="flex bg-stone-100 p-1.5 rounded-lg border border-stone-200 shadow-2xs">
                    <button
                      onClick={() => setSubTab("citizens")}
                      className={`px-4 py-2 rounded-md font-mono text-xs uppercase tracking-wider font-extrabold transition-all duration-150 cursor-pointer ${
                        subTab === "citizens"
                          ? "bg-white text-charcoal shadow-sm border border-stone-200"
                          : "text-stone-500 hover:text-stone-800"
                      }`}
                    >
                      👥 Fichas dos Cidadãos ({filteredMembers.length})
                    </button>
                    <button
                      onClick={() => setSubTab("iceberg")}
                      className={`px-4 py-2 rounded-md font-mono text-xs uppercase tracking-wider font-extrabold transition-all duration-150 cursor-pointer ${
                        subTab === "iceberg"
                          ? "bg-white text-charcoal shadow-sm border border-stone-200"
                          : "text-stone-500 hover:text-stone-800"
                      }`}
                    >
                      🧊 Iceberg do Gato Soquinho
                    </button>
                  </div>
                </div>

                {subTab === "citizens" ? (
                  <div className="space-y-8">
                    {/* Search & Filter bar inside citizens shelf */}
                    <div className="bg-stone-100 p-6 rounded-lg border border-stone-300 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      
                      {/* Search input */}
                      <div className="md:col-span-6 relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-stone-400">
                          <Search className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          placeholder="Pesquisar por nome, mbti, função..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 border border-stone-300 rounded-md font-sans text-sm focus:outline-none focus:border-terracota bg-white"
                        />
                      </div>

                      {/* Filter Select buttons */}
                      <div className="md:col-span-6 flex flex-wrap gap-2 items-center justify-start md:justify-end">
                        <span className="font-mono text-xs text-stone-500 uppercase flex items-center gap-1">
                          <Filter className="w-3 h-3" /> Grupo:
                        </span>
                        
                        <button
                          onClick={() => setMbtiFilter("todos")}
                          className={`px-3 py-1.5 rounded text-xs font-mono border transition-all ${
                            mbtiFilter === "todos"
                              ? "bg-moss text-white border-transparent"
                              : "bg-white text-stone-700 border-stone-300 hover:bg-stone-50"
                          }`}
                        >
                          Todos
                        </button>
                        
                        {mbtiGroups.map((group) => (
                          <button
                            key={group}
                            onClick={() => setMbtiFilter(group)}
                            className={`px-3 py-1.5 rounded text-xs font-mono border transition-all ${
                              mbtiFilter === group
                                ? "bg-moss text-white border-transparent"
                                : "bg-white text-stone-700 border-stone-300 hover:bg-stone-50"
                            }`}
                          >
                            {group}
                          </button>
                        ))}
                      </div>

                    </div>

                    {/* CITIZENS GRID (THE 15 MEMBERS) */}
                    {filteredMembers.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredMembers.map((member) => (
                          <CollageCard
                            key={member.id}
                            member={member}
                            isResistanceMode={isResistanceMode}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12 border-2 border-dashed border-stone-300 rounded-lg">
                        <span className="font-hand text-2xl text-stone-500">Nenhum cidadão cadastrado sob este filtro...</span>
                        <p className="font-mono text-xs text-stone-400 mt-2 uppercase">
                          Talvez eles tenham fugido das forças do Regime.
                        </p>
                        <button
                          onClick={() => { setSearchQuery(""); setMbtiFilter("todos"); }}
                          className="mt-4 px-4 py-2 bg-moss text-white rounded font-mono text-xs uppercase"
                        >
                          Resetar Filtros
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <IcebergHarmonia isResistanceMode={isResistanceMode} />
                )}
              </motion.div>
            )}

            {activeTab === "quiz" && (
              <motion.div
                key="quiz-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="max-w-2xl mx-auto text-center mb-8">
                  <p className="font-serif text-sm text-stone-600 leading-relaxed">
                    Toda ditadura exige testes psicométricos de conformidade. O Soberano Soquinho deseja saber em qual categoria de gato você se enquadra na nossa estrutura burocrática de 2 anos. Responda com cautela.
                  </p>
                </div>
                
                <DictatedQuiz isResistanceMode={isResistanceMode} />
              </motion.div>
            )}

            {activeTab === "cronicas" && (
              <motion.div
                key="cronicas-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ResistanceDiary isResistanceMode={isResistanceMode} />
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* SOBERANO RULES & SOUP CONSTITUTION SUB-SECTION */}
      <section className="max-w-4xl mx-auto px-6 mt-20 relative">
        <div className="absolute top-[-30px] left-[-20px] opacity-10 pointer-events-none">
          <HandDrawnScratch className="w-24 h-24 text-charcoal" />
        </div>
        <ConstitutionSection />
      </section>

      {/* FOOTER */}
      <footer className="mt-24 border-t border-stone-300 pt-8 px-6 text-center text-stone-500 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-left">
            <p className="font-mono text-xs font-bold text-charcoal uppercase tracking-wider">
              REPÚBLICA GATO SOQUINHO
            </p>
            <p className="text-[10px] font-mono text-stone-400 mt-1 uppercase">
              Memorial Histórico de 2 Anos de Grupo Felino • {new Date().getFullYear()}
            </p>
          </div>

          {/* Sarcastic compliance badge */}
          <div className="flex gap-2">
            <span className="px-3 py-1 border border-stone-300 font-mono text-[9px] uppercase tracking-wider rounded">
              Aprovado por Censo Psíquico
            </span>
            <span className="px-3 py-1 bg-moss text-white font-mono text-[9px] uppercase tracking-wider rounded">
              Compliance do Soquinho: 100%
            </span>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
