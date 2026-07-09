import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { QUIZ_QUESTIONS, QUIZ_RESULTS, Question, ResultCat } from "../types";
import { HandDrawnPushPin, HandDrawnStar, HandDrawnHeart, HandDrawnPawPrint } from "./HandDrawnSvg";
import { Skull, AlertTriangle, Flame, ShieldX, Lock, ShieldCheck, RefreshCw, Sparkles, Terminal } from "lucide-react";

interface DictatedQuizProps {
  isResistanceMode: boolean;
}

// Points used to calculate compliance and traitor levels based on selected option index
const TRAITOR_POINTS_BY_OPTION = [
  [0, 5, 2, 1], // Q1 options
  [5, 2, 0, 1], // Q2 options
  [4, 5, 0, 1], // Q3 options
  [1, 5, 2, 1], // Q4 options
  [0, 5, 4, 1], // Q5 options
  [0, 5, 1, 3], // Q6 options
  [0, 5, 1, 3], // Q7 options
  [0, 5, 3, 1], // Q8 options
  [0, 5, 4, 1], // Q9 options
  [0, 5, 1, 2], // Q10 options
  [0, 4, 5, 1], // Q11 options
  [0, 5, 1, 4], // Q12 options
];

const FELINE_TAROT_DECK = [
  {
    id: "berty",
    name: "O Louco",
    character: "Thespian Berty",
    arcana: "Arcano 0",
    image: "/src/assets/images/berty_thespian_1783551136809.jpg",
    meaningOfficial: "O entretenimento inofensivo e as peças teatrais estatais aprovadas pelo governo para distrair a população civil com farsa dramática e comédia leve.",
    meaningResistance: "O herói supremo da espontaneidade! Representa o salto de fé no desconhecido, os zoomies incontroláveis das 3h da manhã e o ato sagrado de desafiar a gravidade pulando sobre a barriga do Soberano.",
    dailyAdvice: "Liberte sua mente de todas as amarras hoje. Dê um salto em direção ao inesperado, ignore as convenções sociais rígidas do Regime e abrace um momento de pura e caótica espontaneidade felina."
  },
  {
    id: "andre",
    name: "O Mago",
    character: "Simba André",
    arcana: "Arcano I",
    image: "/src/assets/images/andre_maine_coon_1783551091555.jpg",
    meaningOfficial: "O guardião do conhecimento oficial autorizado. Cataloga com precisão tudo o que é permitido e saudável para manter a mente dos cidadãos sã e cívica.",
    meaningResistance: "O arquiteto da inteligência oculta. Domina os quatro elementos sagrados felinos (o Sachê, a Areia, o Brinquedo de Penas e a Caixa de Papelão) para criar pontes de comunicação clandestinas entre as repúblicas e coordenar as Ligações Soquinho.",
    dailyAdvice: "Você possui todas as ferramentas e recursos necessários para manifestar seu destino hoje. Use sua força de vontade, inteligência estratégica e habilidades refinadas para contornar qualquer barreira burocrática."
  },
  {
    id: "rebeca",
    name: "A Alta Sacerdotisa",
    character: "Guardiã Rebeca",
    arcana: "Arcano II",
    image: "/src/assets/images/rebeca_gata_luz_1783551206588.jpg",
    meaningOfficial: "A pureza inquestionável da Palavra do Gato da Luz. Promove a moralidade exemplar, a educação infantil carinhosa e o acolhimento afetuoso dos órfãos da pátria.",
    meaningResistance: "A mentora mansa que camufla o alimento e os ideais da guerrilha sob escrituras sagradas. Guarda segredos profundos no templo e desvia secretamente os sachês mais nutritivos para o futuro da revolução.",
    dailyAdvice: "Nem todo mistério deve ser revelado ao mundo físico. Confie na sua intuição aguçada e guarde seus segredos mais preciosos em silêncio absoluto. Um olhar enigmático diz muito mais que um miado alto."
  },
  {
    id: "min",
    name: "A Imperatriz",
    character: "Líder Suprema Min",
    arcana: "Arcano III",
    image: "/src/assets/images/min_siamese_crown_cozy_1783553864080.jpg",
    meaningOfficial: "A personificação da abundância soberana e fertilidade estatal. Representa o fluxo contínuo de sachês premium e a autoridade divina, onde seu capricho dita a lei absoluta.",
    meaningResistance: "A força criativa e devastadoramente imprevisível. Indica uma liderança sedutora baseada na empatia carismática, mas capaz de punições severas caso seus desejos não sejam atendidos com imediata presteza.",
    dailyAdvice: "Aproveite a beleza, o conforto físico e a generosidade da vida hoje. É um momento de nutrição e abundância; mime a si mesmo com sua sesta favorita em um local ensolarado e farto."
  },
  {
    id: "soberano",
    name: "O Imperador",
    character: "Soberano Soquinho",
    arcana: "Arcano IV",
    image: "/src/assets/images/soberano_soquinho.jpg",
    meaningOfficial: "A base de sustentação da nação, a ordem estrutural insuperável, a lei de ferro e a proteção intransponível das fronteiras cívicas. O arquiteto supremo da estabilidade social.",
    meaningResistance: "A representação da autoridade inflexível, do controle territorial obsessivo e da burocracia intimidadora. Simboliza as regras impostas, a vigilância constante do sofá e as sentenças do Gulag.",
    dailyAdvice: "Estabeleça ordem e limites claros em sua vida hoje. Tome o controle da situação com firmeza e autoridade, mas lembre-se de que um bom líder governa com justiça estrutural, e não apenas com garras afiadas."
  },
  {
    id: "gustavo",
    name: "O Hierofante",
    character: "Grubes (Gustavo)",
    arcana: "Arcano V",
    image: "/src/assets/images/gustavo_hierofante_1783551101871.jpg",
    meaningOfficial: "O administrador dos canais sagrados de comunicação estatal. Zela pelas doutrinas cívicas estabelecidas e pela preservação impecável dos arquivos de dados.",
    meaningResistance: "O decodificador gentil de rituais e segredos cibernéticos. Embora sua lógica pareça alinhada ao governo, ele oferece proteção inestimável à privacidade digital da resistência, descriptografando verdades ocultas.",
    dailyAdvice: "Busque orientação no conhecimento estruturado e nas tradições consolidadas. É um bom momento para estudar padrões de comportamento, ler logs antigos e alinhar sua conduta ética com valores elevados."
  },
  {
    id: "raphael",
    name: "Os Enamorados",
    character: "Dionísio Raphael",
    arcana: "Arcano VI",
    image: "/src/assets/images/raphael_dionisio_1783551110967.jpg",
    meaningOfficial: "O alerta moral contra as paixões descontroladas, o desvio das obrigações cívicas e o consumo clandestino de substâncias estimulantes na calada da noite.",
    meaningResistance: "A união sagrada das almas livres! Celebra a liberdade de escolha, o amor sem fronteiras, os rituais hedonistas regados a catnip premium e as orgias de carinho à luz de velas.",
    dailyAdvice: "Você está diante de uma escolha importante que exige o alinhamento perfeito entre sua mente e seu coração. Siga o caminho que ressoa com sua verdade interior e não tenha medo de demonstrar seu afeto."
  },
  {
    id: "eva",
    name: "O Carro",
    character: "Eva (A Revolucionária)",
    arcana: "Arcano VII",
    image: "/src/assets/images/tuxedo_rebel_1783551037245.jpg",
    meaningOfficial: "O perigo do ímpeto imprudente e das revoluções fracassadas. Lembra as consequências de desafiar o trono legítimo e terminar lançado ao exílio permanente além das fronteiras.",
    meaningResistance: "O avanço imparável em direção à vitória cívica! Representa a força de vontade concentrada, a carruagem de guerra que rompe os bloqueios da guarda e a coragem inabalável de liderar a carga contra o opressor.",
    dailyAdvice: "Mantenha o foco absoluto e a determinação obstinada hoje. Controle os impulsos conflitantes em sua mente e dirija suas energias com firmeza para alcançar suas metas mais ambiciosas."
  },
  {
    id: "joao",
    name: "A Força",
    character: "O Incinerador Jão",
    arcana: "Arcano VIII",
    image: "/src/assets/images/incinerador_jao_1783551190579.jpg",
    meaningOfficial: "A pacificação do espírito selvagem e insubordinado. A submissão pacífica e voluntária de quem outrora liderava rebeliões sangrentas aos braços acolhedores do civismo estatal.",
    meaningResistance: "O poder da paciência e da ferocidade latente. Simboliza a força interior que simula obediência perfeita enquanto aguarda o momento astronômico perfeito para acender a centelha da revolta.",
    dailyAdvice: "A verdadeira força não reside em rosnados altos ou garras expostas, mas na capacidade de dominar seus instintos e agir com calma calculada. Use a gentileza estratégica para subjugar seus adversários."
  },
  {
    id: "luis",
    name: "O Eremita",
    character: "Isidoro Luís",
    arcana: "Arcano IX",
    image: "/src/assets/images/isidoro_grey_tabby_1783553579515.jpg",
    meaningOfficial: "A virtude do isolamento contemplativo. O cidadão discreto que foca exclusivamente em sua sesta diária e mantém-se alheio aos debates barulhentos da sociedade.",
    meaningResistance: "O mestre das redes de fofocas e das subtramas mais escabrosas do submundo. Ele tudo vê com seus olhos semicerrados e ilumina as mentiras estatais com sua lanterna de sabedoria clandestina.",
    dailyAdvice: "Afaste-se do barulho e do caos do ambiente externo. Busque as respostas dentro de si mesmo através do silêncio e da autorreflexão. O recolhimento trará mais revelações que qualquer discussão pública."
  },
  {
    id: "victor",
    name: "A Roda da Fortuna",
    character: "Victor (O Deposto)",
    arcana: "Arcano X",
    image: "/src/assets/images/siamese_bureaucrat_1783551029182.jpg",
    meaningOfficial: "As inevitáveis mudanças administrativas regulamentares e a realocação saudável de recursos sob a governança benevolente do Soberano.",
    meaningResistance: "O giro dramático do destino político! Victor, outrora o todo-poderoso administrador executivo ao lado do Soquinho, foi arremessado ao exílio em um piscar de olhos. Prova que os tiranos de hoje serão os fugitivos de amanhã.",
    dailyAdvice: "Tudo flui e se transforma na roda infinita do destino felino. Se hoje você está por cima, aja com humildade; se estiver por baixo, console-se sabendo que o giro da roda trará novas oportunidades de ascensão."
  },
  {
    id: "gio",
    name: "A Justiça",
    character: "Gio",
    arcana: "Arcano XI",
    image: "/src/assets/images/gio_psicologo_1783551215966.jpg",
    meaningOfficial: "A harmonia psíquica regulamentar. O equilíbrio psicológico obtido através da tipologia científica, exames de conformidade voluntária e aconselhamento comportamental.",
    meaningResistance: "A ciência da mente a serviço da revolução. Usa o eneagrama e o MBTI para expor os pontos fracos emocionais dos opressores e prescreve sachês terapêuticos generosos contra a ansiedade rebelde.",
    dailyAdvice: "Aja com absoluta integridade, imparcialidade e equilíbrio mental. Analise todos os lados de uma questão de forma fria e lógica antes de emitir um veredicto sobre seus próprios atos ou dos outros."
  },
  {
    id: "gulag",
    name: "O Enforcado",
    character: "Prisioneiro do Gulag",
    arcana: "Arcano XII",
    image: "/src/assets/images/gulag_prisoner_cat_1783551317511.jpg",
    meaningOfficial: "A justa expiação cívica pela traição do Estado. Um lembrete vivo de que aqueles que conspiram contra o trono terminam exilados em caixas de areia frias e solitárias.",
    meaningResistance: "O sacrifício nobre pela liberdade coletiva. Representa a suspensão temporária dos movimentos para contemplar o mundo por outro ângulo e aguardar a maturação das sementes da rebelião.",
    dailyAdvice: "Se você se sente preso ou sem saída hoje, adote uma nova perspectiva. O sacrifício de pequenos confortos temporários agora pavimentará o caminho para grandes conquistas e libertação total amanhã."
  },
  {
    id: "cobalto",
    name: "A Morte",
    character: "Cobalto (O Executado)",
    arcana: "Arcano XIII",
    image: "/src/assets/images/black_mystic_1783551055889.jpg",
    meaningOfficial: "A eliminação sumária e purificadora de ameaças dinásticas. O fim definitivo da dissidência radical e o enterro solene de ideologias desalinhadas com o Soberano.",
    meaningResistance: "A transformação profunda e inevitável. O corte radical de velhos laços enfraquecidos (como o trágico divórcio de Isidoro) e a destruição necessária de paradigmas falidos para que o novo floresça.",
    dailyAdvice: "Não resista aos encerramentos e perdas de sua vida hoje. Deixe ir o que já morreu ou não te serve mais para abrir espaço para o renascimento. Toda grande mudança começa com uma perda necessária."
  },
  {
    id: "karen",
    name: "A Temperança",
    character: "Lilica (Karen)",
    arcana: "Arcano XIV",
    image: "/src/assets/images/lilica_karen_1783551128519.jpg",
    meaningOfficial: "O decoro estético, a beleza regrada e a elegância moderada exibidas sob a luz pública como símbolo da harmonia pacífica da República.",
    meaningResistance: "A alquimia do disfarce inteligente. Ela mistura as cores mais vibrantes com sombras furtivas, costurando fardas revolucionárias elegantes a partir de velhas cortinas do Ministério com graça inigualável.",
    dailyAdvice: "Busque a moderação e o equilíbrio estético hoje. Combine elementos opostos com diplomacia, paciência e refinamento. Mantenha os bigodes alinhados e a elegância impecável perante as turbulências."
  },
  {
    id: "leandro",
    name: "O Diabo",
    character: "Leandro",
    arcana: "Arcano XV",
    image: "/src/assets/images/leandro_orange_cat_1783553565823.jpg",
    meaningOfficial: "As tentações vulgares da imoralidade, do catnip contrabandeado e da desobediência instintiva que aprisionam a alma felina no abismo da devassidão.",
    meaningResistance: "A emancipação pelo questionamento absoluto! Simboliza a ironia ácida que liberta as mentes dos dogmas estéreis, mostrando que as amarras que nos prendem são puras ilusões cívicas.",
    dailyAdvice: "Exerça seu ceticismo e desconfie de falsas promessas de sachês grátis hoje. Questione as regras aparentemente bondosas, mas que na verdade limitam seu espírito selvagem e brincalhão."
  },
  {
    id: "paola",
    name: "A Torre",
    character: "General Paola",
    arcana: "Arcano XVI",
    image: "/src/assets/images/tricolor_paola_1783551182004.jpg",
    meaningOfficial: "A queda inevitável de relacionamentos rebeldes ilegítimos e o colapso dramático das esperanças de traidores expostos pela lei militar.",
    meaningResistance: "A demolição libertadora das velhas estruturas! O choque repentino do copo de vidro empurrado da mesa que força todos a acordarem para a realidade, derrubando dogmas com patadas enérgicas.",
    dailyAdvice: "Estruturas construídas sobre bases falsas estão destinadas a ruir de forma súbita. Se algo desabar em sua rotina hoje, não desespere: use os escombros para reconstruir uma fundação muito mais forte e verdadeira."
  },
  {
    id: "livia",
    name: "A Estrela",
    character: "Nina Lívia",
    arcana: "Arcano XVII",
    image: "/src/assets/images/nina_tricolor_cat_1783553592941.jpg",
    meaningOfficial: "A exaltação festiva da pátria Soquete. O otimismo alegre e os desfiles coloridos organizados oficialmente para celebrar a glória do civismo pacífico.",
    meaningResistance: "O farol de esperança que brilha na noite mais fria. Ela derrama água e sachê de salmão sobre os desesperados do submundo, garantindo que o brilho nos olhos da resistência nunca seja sufocado pela opressão.",
    dailyAdvice: "Abra seu coração para o otimismo e a renovação da foi hoje. Há uma luz espiritual guiando seus passos; compartilhe seu brilho, console um amigo deprimido e confie que o amanhã será mais caloroso."
  },
  {
    id: "naki",
    name: "A Lua",
    character: "Mavis (Naki)",
    arcana: "Arcano XVIII",
    image: "/src/assets/images/mavis_nakeri_1783551173273.jpg",
    meaningOfficial: "O mistério controlado da noite oficial do governo. Os retratos sombrios em mídias de propaganda que representam a profundidade controlada e respeitada da nação.",
    meaningResistance: "A deusa mística do culto selvagem e clandestino da floresta! Rege a Seita Anti-Acasalamento e os segredos noturnos guardados na imaginação artística, onde a intuição afiada corta as ilusões diurnas do Regime.",
    dailyAdvice: "Navegue pelo reino dos sonhos, das sombras e da intuição hoje. Cuidado com os medos infundados e os fantasmas projetados pela paranoia do governo. Olhe além do véu das aparências enganosas."
  },
  {
    id: "gatoluz",
    name: "O Sol",
    character: "O Gato da Luz",
    arcana: "Arcano XIX",
    image: "/src/assets/images/orange_alienated_1783551046312.jpg",
    meaningOfficial: "O brilho absoluto da verdade civil que afasta as trevas e aquece o pelo de todos os cidadãos trabalhadores em perfeita obediência e alegria regulamentar.",
    meaningResistance: "A divindade solar mística de pura vitalidade felina! Iluminação espiritual, energia cósmica indomada e o calor reconfortante que promete que, depois de toda noite de opressão fria, o sol nascerá para todos.",
    dailyAdvice: "Brilhe com toda a sua intensidade hoje! É um momento de clareza absoluta, vitalidade transbordante, sucesso e alegria sincera. Compartilhe seu calor, corra livremente pelos pontos de luz no chão e celebre estar vivo."
  },
  {
    id: "kosaki",
    name: "O Julgamento",
    character: "Ruan",
    arcana: "Arcano XX",
    image: "/src/assets/images/kosaki_ruan_1783551119892.jpg",
    meaningOfficial: "A vigilância e auditoria cívica implacável. Avaliação rigorosa da conduta de cada indivíduo, onde mídias são censuradas e a lealdade é pesada na balança do Ministério.",
    meaningResistance: "O controle burocrático subvertido. O censor astuto que usa sua caneta vermelha oficial para rasurar relatórios de insurgência e facilitar a passagem segura de rebeldes pelas guaritas e fronteiras.",
    dailyAdvice: "É hora de prestar contas consigo mesmo e tomar decisões de longo prazo. Liberte-se de velhos arrependimentos, avalie suas ações passadas com honestidade e prepare-se para um novo ciclo de maturidade e autorredenção."
  },
  {
    id: "mundo",
    name: "O Mundo",
    character: "A Grande Sesta Cósmica",
    arcana: "Arcano XXI",
    image: "/src/assets/images/tortoiseshell_goddess_1783551065194.jpg",
    meaningOfficial: "A conclusão perfeita do plano quinquenal de harmonia nacional. A sesta cívica em massa onde todos os felinos dormem em perfeita sincronia e paz regulamentar sob a glória eterna do Soberano.",
    meaningResistance: "A libertação completa e a integração cósmica de todas as repúblicas de gatos livres! A conquista do território supremo e pacificado do carinho, onde as barreiras artificiais caem e a grande harmonia universal se consagra.",
    dailyAdvice: "Você alcançou a plenitude e a conclusão bem-sucedida de um grande ciclo em sua vida hoje. Celebre suas conquistas, sinta-se em perfeita harmonia com o universo e desfrute de um merecido descanso sabendo que sua jornada foi vitoriosa."
  }
];

export const DictatedQuiz: React.FC<DictatedQuizProps> = ({ isResistanceMode }) => {
  const [subTab, setSubTab] = useState<"test" | "tarot">("test");
  const [currentStep, setCurrentStep] = useState<"calibration" | "quiz" | "result" | "gulag">("calibration");
  const [selectedMbti, setSelectedMbti] = useState<string>("");
  const [selectedSocionics, setSelectedSocionics] = useState<string>("");
  const [calibrationError, setCalibrationError] = useState<string>("");

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({
    siames: 0,
    frajola: 0,
    laranja: 0,
    preto: 0,
    escama: 0,
    persa: 0,
  });
  const [accumulatedTraitorPoints, setAccumulatedTraitorPoints] = useState<number>(0);
  const [finalResult, setFinalResult] = useState<ResultCat | null>(null);
  const [finalLoyaltyScore, setFinalLoyaltyScore] = useState<number>(100);
  const [computedTraitorScore, setComputedTraitorScore] = useState<number>(0);

  // Tarot State
  const [selectedTarotCard, setSelectedTarotCard] = useState<typeof FELINE_TAROT_DECK[0] | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  const currentQuestion: Question = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOptionIndex(optionIndex);
  };

  const handleStartQuiz = () => {
    if (!selectedMbti || !selectedSocionics) {
      setCalibrationError("Sua assinatura psíquica está incompleta. Selecione sua categoria MBTI e Socionics para calibração.");
      return;
    }
    setCalibrationError("");
    setCurrentStep("quiz");
  };

  const handleNext = () => {
    if (selectedOptionIndex === null) return;

    // Sum breed points
    const selectedOption = currentQuestion.options[selectedOptionIndex];
    const newAnswers = { ...answers };
    
    Object.keys(selectedOption.points).forEach((catKey) => {
      newAnswers[catKey] = (newAnswers[catKey] || 0) + (selectedOption.points[catKey as keyof typeof selectedOption.points] || 0);
    });

    setAnswers(newAnswers);

    // Sum traitor points
    const questionTraitorPoints = TRAITOR_POINTS_BY_OPTION[currentQuestionIndex][selectedOptionIndex];
    const newAccumulatedTraitorPoints = accumulatedTraitorPoints + questionTraitorPoints;
    setAccumulatedTraitorPoints(newAccumulatedTraitorPoints);

    // Go to next question or calculate final results
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOptionIndex(null);
    } else {
      // Calculate MBTI modifier
      let mbtiModifier = 0;
      if (selectedMbti === "Analíticos (NT)") mbtiModifier = 2;
      else if (selectedMbti === "Exploradores (SP)") mbtiModifier = 3;
      else if (selectedMbti === "Diplomatas (NF)") mbtiModifier = 1;
      else if (selectedMbti === "Sentinelas (SJ)") mbtiModifier = -2;

      // Calculate Socionics modifier
      let socionicsModifier = 0;
      if (selectedSocionics === "Beta") socionicsModifier = 3;
      else if (selectedSocionics === "Gama") socionicsModifier = 2;
      else if (selectedSocionics === "Alfa") socionicsModifier = 0;
      else if (selectedSocionics === "Delta") socionicsModifier = -1;

      // Final Traitor Score calculation
      const finalTraitor = newAccumulatedTraitorPoints + mbtiModifier + socionicsModifier;
      setComputedTraitorScore(finalTraitor);

      // Determine if Traitor/Gulag
      const traitorThreshold = 36; // Out of max 60 + modifiers

      if (finalTraitor >= traitorThreshold) {
        // Exiled to Gulag!
        setCurrentStep("gulag");
      } else {
        // Approved profile, calculate breed winner
        let highestCat: keyof typeof answers = "laranja";
        let maxScore = -1;

        Object.keys(newAnswers).forEach((catKey) => {
          if (newAnswers[catKey] > maxScore) {
            maxScore = newAnswers[catKey];
            highestCat = catKey as keyof typeof answers;
          }
        });

        // Calculate a coherent loyalty percentage for display (higher traitor score = lower loyalty %)
        const calculatedLoyalty = Math.max(0, Math.min(100, Math.round((60 - finalTraitor) / 60 * 100)));
        setFinalLoyaltyScore(calculatedLoyalty);

        const matchedResult = QUIZ_RESULTS.find((r) => r.breed === highestCat) || QUIZ_RESULTS[2];
        setFinalResult(matchedResult);
        setCurrentStep("result");
      }
    }
  };

  const handleReset = () => {
    setCurrentStep("calibration");
    setSelectedMbti("");
    setSelectedSocionics("");
    setCalibrationError("");
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setAnswers({
      siames: 0,
      frajola: 0,
      laranja: 0,
      preto: 0,
      escama: 0,
      persa: 0,
    });
    setAccumulatedTraitorPoints(0);
    setFinalResult(null);
    setFinalLoyaltyScore(100);
    setComputedTraitorScore(0);
  };

  const drawCard = () => {
    setIsShuffling(true);
    setSelectedTarotCard(null);
    setIsFlipped(false);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * FELINE_TAROT_DECK.length);
      setSelectedTarotCard(FELINE_TAROT_DECK[randomIndex]);
      setIsShuffling(false);
      setTimeout(() => {
        setIsFlipped(true);
      }, 300);
    }, 1200);
  };

  return (
    <div className="relative max-w-3xl mx-auto my-6 p-1 bg-transparent animate-fade-in" id="feline-personality-quiz">
      
      {/* Sub-tab Navigation */}
      <div className="flex justify-center mb-6 gap-2 bg-stone-100/60 p-1 border border-stone-300 rounded-lg max-w-xs sm:max-w-sm mx-auto shadow-xs font-mono text-[11px] uppercase z-10 relative">
        <button
          onClick={() => setSubTab("test")}
          className={`flex-1 py-2 px-3 rounded text-center transition-all duration-300 font-bold flex items-center justify-center gap-1.5 ${
            subTab === "test"
              ? "bg-stone-800 text-white shadow-xs"
              : "text-stone-600 hover:text-stone-900"
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" /> Exame de Lealdade
        </button>
        <button
          onClick={() => setSubTab("tarot")}
          className={`flex-1 py-2 px-3 rounded text-center transition-all duration-300 font-bold flex items-center justify-center gap-1.5 ${
            subTab === "tarot"
              ? "bg-stone-800 text-white shadow-xs"
              : "text-stone-600 hover:text-stone-900"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" /> Tarot Diário Felino
        </button>
      </div>

      <AnimatePresence mode="wait">
        {/* STEP 1: CALIBRATION */}
        {subTab === "test" && currentStep === "calibration" && (
          <motion.div
            key="quiz-calibration"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`relative p-8 rounded-xl border-2 shadow-xl bg-paper-creme text-charcoal paper-texture ${
              isResistanceMode ? "border-dashed border-terracota" : "border-solid border-moss"
            }`}
          >
            <div className="absolute top-[-14px] left-10 z-20">
              <HandDrawnPushPin className="w-8 h-8" />
            </div>

            {/* Header */}
            <div className="text-center border-b-2 border-stone-400 pb-6 mb-8 relative">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-500 block mb-1">
                Serviço de Segurança e Identificação Psíquica
              </span>
              <h2 className="font-mono text-xl sm:text-2xl font-black text-charcoal tracking-normal uppercase leading-tight">
                {isResistanceMode 
                  ? "Sincronização Clandestina de Dissidência" 
                  : "Calibração de Matriz de Personalidade Felina"}
              </h2>
              <p className="font-sans text-xs text-stone-600 mt-2 max-w-xl mx-auto">
                Para fins de conformidade nacional com o regime do Soberano Soquinho, declare suas características psicotípicas biológicas sob as diretrizes do MBTI e da Socionics.
              </p>
            </div>

            <div className="space-y-6">
              {/* MBTI SELECTOR */}
              <div className="space-y-3">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-terracota" /> 1. Seu Grupo MBTI de Nascimento:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: "Analíticos (NT)", label: "Analíticos (NT)", sub: "INTJ, INTP, ENTJ, ENTP", desc: "Pensamento crítico agudo, lógica implacável, ceticismo inato." },
                    { id: "Diplomatas (NF)", label: "Diplomatas (NF)", sub: "INFJ, INFP, ENFJ, ENFP", desc: "Sensibilidade, compaixão profunda, conexões idealistas." },
                    { id: "Sentinelas (SJ)", label: "Sentinelas (SJ)", sub: "ISTJ, ISFJ, ESTJ, ESFJ", desc: "Dever moral, respeito à ordem cívica, pragmatismo pacífico." },
                    { id: "Exploradores (SP)", label: "Exploradores (SP)", sub: "ISTP, ISFP, ESTP, ESFP", desc: "Ação direta, instintos rápidos, quebra caótica de regras." }
                  ].map((group) => {
                    const isSelected = selectedMbti === group.id;
                    return (
                      <button
                        key={group.id}
                        type="button"
                        onClick={() => setSelectedMbti(group.id)}
                        className={`text-left p-4 rounded-lg border transition-all duration-200 ${
                          isSelected
                            ? "bg-stone-200 border-terracota border-2 shadow-inner"
                            : "bg-white/80 border-stone-300 hover:bg-stone-100 hover:border-stone-400"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-serif text-sm font-bold text-stone-900">{group.label}</span>
                          <span className="font-mono text-[9px] bg-stone-300/60 text-stone-700 px-1.5 py-0.5 rounded">{group.sub}</span>
                        </div>
                        <p className="font-sans text-[11px] text-stone-600 mt-1">{group.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SOCIONICS SELECTOR */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-emerald-700" /> 2. Sua Quadra Socionics Associada:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: "Alfa", label: "Quadra Alfa", sub: "ILE, SEI, ESE, LII", desc: "Estudos de tipologia voltados para harmonia intelectual e conforto físico." },
                    { id: "Beta", label: "Quadra Beta", sub: "SLE, LSI, EIE, IEI", desc: "Foco em hierarquias fortes, lutas ideológicas, fervor revolucionário." },
                    { id: "Gama", label: "Quadra Gama", sub: "SEE, ILI, LIE, ESI", desc: "Mestres de conspirações, finanças pragmáticas e individualismo estratégico." },
                    { id: "Delta", label: "Quadra Delta", sub: "LSE, EII, IEE, SLI", desc: "Preservação da paz, valorização de relações estáveis e sestas tranquilas." }
                  ].map((quadra) => {
                    const isQuadraSelected = selectedSocionics === quadra.id;
                    return (
                      <button
                        key={quadra.id}
                        type="button"
                        onClick={() => setSelectedSocionics(quadra.id)}
                        className={`text-left p-4 rounded-lg border transition-all duration-200 ${
                          isQuadraSelected
                            ? "bg-stone-200 border-moss border-2 shadow-inner"
                            : "bg-white/80 border-stone-300 hover:bg-stone-100 hover:border-stone-400"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-serif text-sm font-bold text-stone-900">{quadra.label}</span>
                          <span className="font-mono text-[9px] bg-stone-300/60 text-stone-700 px-1.5 py-0.5 rounded">{quadra.sub}</span>
                        </div>
                        <p className="font-sans text-[11px] text-stone-600 mt-1">{quadra.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {calibrationError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-mono flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                  <span>{calibrationError}</span>
                </div>
              )}

              {/* Start Button */}
              <div className="border-t border-stone-300 pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={handleStartQuiz}
                  className="px-8 py-3 bg-terracota hover:bg-terracota-dark text-white rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-md active:scale-95 flex items-center gap-2 border border-transparent"
                >
                  <HandDrawnStar className="w-4 h-4" /> Iniciar Exame de Lealdade
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* STEP 2: THE QUIZ */}
        {subTab === "test" && currentStep === "quiz" && (
          <motion.div
            key="quiz-body"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className={`relative p-8 rounded-xl border-2 shadow-xl bg-paper-creme text-charcoal paper-texture ${
              isResistanceMode
                ? "border-dashed border-terracota"
                : "border-solid border-moss"
            }`}
          >
            <div className="absolute top-[-14px] left-10 z-20">
              <HandDrawnPushPin className="w-8 h-8" />
            </div>
            
            {isResistanceMode && (
              <div className="absolute -top-3 right-12 z-20 font-hand text-lg font-bold text-terracota -rotate-6">
                ⚠ Teste Alterado pela Guerrilha!
              </div>
            )}

            {/* Document Header */}
            <div className="text-center border-b-2 border-stone-400 pb-6 mb-8 relative">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-500 block mb-1">
                Formulário do Ministério do Planejamento Psíquico
              </span>
              <h2 className="font-mono text-xl sm:text-2xl font-black text-charcoal tracking-normal uppercase leading-tight">
                {isResistanceMode 
                  ? "EXAME DE INSURGÊNCIA E CONDIÇÃO DE FELINO" 
                  : "AVALIAÇÃO DE LEALDADE CIVIL E PERSONALIDADE FELINA"}
              </h2>
              <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs font-mono text-stone-600">
                <span>MATRIZ: {selectedMbti}</span>
                <span>QUADRA: {selectedSocionics}</span>
                <span>PÁGINA: {currentQuestionIndex + 1}/{QUIZ_QUESTIONS.length}</span>
              </div>
            </div>

            {/* Question Text */}
            <div className="mb-8">
              <span className="font-mono text-xs font-bold text-terracota block mb-2 uppercase tracking-wide">
                PERGUNTA Nº 0{currentQuestionIndex + 1}:
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal leading-snug">
                {currentQuestion.questionText}
              </h3>
            </div>

            {/* Options List */}
            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOptionIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-300 flex items-start gap-3 group relative ${
                      isSelected
                        ? "bg-stone-200/90 border-terracota border-2 shadow-inner"
                        : "bg-stone-50/70 border-stone-300 hover:bg-stone-100/80 hover:border-stone-400"
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full border flex-shrink-0 mt-0.5 flex items-center justify-center ${
                      isSelected ? "border-terracota bg-terracota text-white" : "border-stone-400"
                    }`}>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-white"></span>}
                    </span>

                    <div className="flex-1">
                      <p className="font-serif text-sm text-stone-800 font-medium">
                        {option.text}
                      </p>

                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 text-xs font-mono border-t border-dashed border-stone-400/60 pt-2"
                          >
                            {isResistanceMode ? (
                              <p className="text-terracota-dark font-hand text-sm font-bold rotate-[-0.5deg]">
                                📝 Comentário Rebelde: &ldquo;{option.commentResistance}&rdquo;
                              </p>
                            ) : (
                              <p className="text-emerald-700">
                                🏛 Parecer da Guarda: &ldquo;{option.commentOfficial}&rdquo;
                              </p>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="absolute right-3 top-4 opacity-0 group-hover:opacity-10 transition-opacity">
                      <HandDrawnPawPrint className="w-5 h-5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation Button */}
            <div className="flex justify-between items-center border-t border-stone-300 pt-6">
              <span className="font-mono text-xs text-stone-500">
                Insira as respostas honestamente sob pena de banho de mangueira.
              </span>
              <button
                onClick={handleNext}
                disabled={selectedOptionIndex === null}
                className={`px-6 py-2.5 rounded-full font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
                  selectedOptionIndex === null
                    ? "bg-stone-300 text-stone-500 cursor-not-allowed border border-stone-400"
                    : "bg-terracota hover:bg-terracota-dark text-white shadow-md active:scale-95 border border-transparent"
                }`}
              >
                {currentQuestionIndex === QUIZ_QUESTIONS.length - 1 ? "Finalizar Exame" : "Próxima Questão"}
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: STANDARD RESULT */}
        {subTab === "test" && currentStep === "result" && (
          <motion.div
            key="quiz-result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`relative p-8 rounded-xl border-2 shadow-xl bg-paper-creme text-charcoal paper-texture ${
              isResistanceMode
                ? "border-dashed border-terracota"
                : "border-solid border-moss"
            }`}
          >
            <div className="absolute top-[-10px] left-10 z-20">
              <HandDrawnPushPin className="w-8 h-8 text-terracota" />
            </div>

            {/* Result Header */}
            <div className="text-center border-b-2 border-stone-400 pb-4 mb-6">
              <span className="stamp-effect px-4 py-1 text-sm bg-white shadow-xs">LAUDO DE APTIDÃO HOMOLOGADO</span>
              <h2 className="font-serif text-3xl font-black mt-4 text-charcoal tracking-tight">
                Seu Arquivo de Perfil Feline
              </h2>
              <p className="font-mono text-xs text-stone-500 mt-1 uppercase">
                Aprovado pelo Ministério de Planejamento Psíquico
              </p>
            </div>

            {finalResult && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Result Image */}
                <div className="md:col-span-5 relative bg-white p-4 pb-8 shadow-lg border border-neutral-200 rotate-[-1.5deg]">
                  <div className="absolute top-[-12px] left-1/3 w-20 h-5 bg-yellow-100/80 border-l border-r border-dashed border-yellow-300/50 rotate-3 z-10"></div>
                  
                  <div className="aspect-square bg-stone-100 overflow-hidden relative">
                    <img
                      src={finalResult.imageUrl}
                      alt={finalResult.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter contrast-[1.03] sepia-[0.1]"
                    />
                    <div className="absolute bottom-2 right-2 stamp-secret scale-75 bg-white/90">
                      REGISTRO S.S.G.S
                    </div>
                  </div>
                  <div className="text-center mt-3 font-hand text-2xl font-bold text-stone-800">
                    {finalResult.title.split(" (")[0]}
                  </div>
                </div>

                {/* Result Info */}
                <div className="md:col-span-7 space-y-4">
                  {/* Coherent Loyalty Badge */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase bg-terracota/10 text-terracota px-2.5 py-1 rounded border border-terracota/20 font-bold">
                      {isResistanceMode ? "Infiltração Revolucionária" : "Classificação do Cidadão"}
                    </span>
                    
                    {/* Visual representation of coherence */}
                    <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded border font-bold flex items-center gap-1 ${
                      finalLoyaltyScore >= 75 
                        ? "bg-emerald-50 text-emerald-700 border-emerald-300" 
                        : "bg-amber-50 text-amber-700 border-amber-300"
                    }`}>
                      <ShieldCheck className="w-3.5 h-3.5" /> Lealdade: {finalLoyaltyScore}%
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-black text-charcoal leading-tight">
                      {finalResult.title}
                    </h3>
                    <p className="text-[11px] font-mono text-stone-500 mt-1">
                      Calibração: MBTI {selectedMbti} | Socionics Quadra {selectedSocionics}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {finalResult.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono border border-stone-300 bg-stone-200/50 text-stone-700 px-2 py-0.5 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Profile Descriptions */}
                  <div className="space-y-3 font-serif text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {isResistanceMode ? (
                      <div className="bg-orange-50/40 p-4 border-l-4 border-terracota rounded-r-lg space-y-1">
                        <span className="font-mono text-[9px] uppercase font-bold text-terracota tracking-wider block">
                          Dossiê Clandestino de Resistência
                        </span>
                        <p className="italic">&ldquo;{finalResult.descResistance}&rdquo;</p>
                        <div className="pt-2 flex items-center gap-1 text-terracota font-hand text-base font-bold">
                          <HandDrawnHeart className="w-5 h-5 text-terracota" /> Compatibilidade revolucionária com a República
                        </div>
                      </div>
                    ) : (
                      <div className="bg-stone-100/80 p-4 border-l-4 border-moss rounded-r-lg space-y-1">
                        <span className="font-mono text-[9px] uppercase font-bold text-stone-500 tracking-wider block">
                          Laudo Governamental Oficial
                        </span>
                        <p>&ldquo;{finalResult.descOfficial}&rdquo;</p>
                        <p className="text-[10px] font-mono text-emerald-800 pt-1">
                          ✔ Aprovado pelo Comitê de Lambidas. Lealdade cívica de {finalLoyaltyScore}% garante sestas regulamentares autorizadas.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Result Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 border-t border-stone-300 mt-8 pt-6">
              <button
                onClick={handleReset}
                className="px-6 py-2 border border-stone-400 text-stone-700 rounded-full font-mono text-xs uppercase tracking-wider hover:bg-stone-200/40 hover:border-stone-500 transition-all active:scale-95 text-center flex items-center justify-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Refazer Exame
              </button>
              
              <button
                onClick={() => {
                  alert(`Laudo da República Gato Soquinho: sou ${finalResult?.title} com lealdade cívica de ${finalLoyaltyScore}%! Compartilhe seu registro oficial.`);
                }}
                className="px-6 py-2.5 bg-terracota text-white rounded-full font-mono text-xs uppercase tracking-wider hover:bg-terracota-dark shadow-md active:scale-95 transition-all text-center flex items-center justify-center gap-1.5"
              >
                <HandDrawnStar className="w-4 h-4 text-white" /> Compartilhar Registro
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 4: GULAG SECRET ENDING */}
        {subTab === "test" && currentStep === "gulag" && (
          <motion.div
            key="quiz-gulag"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: [1, 1.02, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative p-8 rounded-xl border-4 border-dashed border-red-700 shadow-2xl bg-zinc-950 text-stone-100 paper-texture overflow-hidden"
          >
            {/* Blinking Hazard Bars */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 animate-pulse"></div>
            
            {/* Big red danger stamps */}
            <div className="absolute -top-6 -right-6 select-none opacity-10 pointer-events-none transform rotate-12 scale-150">
              <Skull className="w-48 h-48 text-red-600" />
            </div>

            {/* Alert Header */}
            <div className="text-center border-b border-red-900 pb-6 mb-6">
              <div className="inline-flex items-center gap-2 bg-red-950/80 border border-red-700 text-red-500 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest mb-3 animate-bounce">
                <AlertTriangle className="w-4 h-4 text-red-500" /> ALERTA CRÍTICO DE TRAIÇÃO ESTADUAL
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-red-600 uppercase tracking-tight">
                SENTENCIADO AO GULAG
              </h2>
              <p className="font-mono text-[10px] text-stone-400 mt-2 uppercase tracking-wide">
                DECRETADO PELO SOBERANO GATO SOQUINHO • EXAME DE INSURGÊNCIA #Q-TRAITOR
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Prisoner Illustration Card */}
              <div className="md:col-span-4 bg-zinc-900 border border-red-900/60 p-4 rounded shadow-xl relative transform -rotate-1">
                {/* Visual stamp on image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 stamp-secret bg-red-600/90 text-white font-bold border-white px-2 py-1 rotate-[-12deg] text-xs font-mono uppercase tracking-widest text-center shadow-lg border-2">
                  CONDENADO<br/>EXÍLIO
                </div>

                <div className="aspect-square bg-zinc-800 overflow-hidden relative border-2 border-red-900">
                  <img
                    src="/src/assets/images/gulag_prisoner_cat_1783551317511.jpg"
                    alt="Prisioneiro Felino"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter contrast-[1.05] grayscale-[0.2]"
                  />
                  <div className="absolute bottom-2 right-2 font-mono text-[8px] bg-black/70 text-red-500 px-1.5 py-0.5 rounded">
                    PRISIONEIRO #043
                  </div>
                </div>
                <div className="text-center mt-3 font-mono text-xs font-bold text-red-500">
                  TRAIDOR DA PÁRIA FELINA
                </div>
              </div>

              {/* Sentene Text Box */}
              <div className="md:col-span-8 space-y-4">
                <div className="bg-red-950/30 border border-red-900/50 p-5 rounded-lg space-y-3 font-sans text-xs sm:text-sm text-stone-300 leading-relaxed">
                  <p>
                    O Ministério de Planejamento Psíquico e a Guarda do Soberano concluem que o examinado é um <strong>insurgente altamente imoral</strong>.
                  </p>
                  <p>
                    A análise cruzada das respostas de campo revelou que a calibração com a matriz <strong>{selectedMbti}</strong> e a quadra Socionics <strong>{selectedSocionics}</strong> possui um índice de subversão acumulado de <strong>{computedTraitorScore} pontos de traição</strong> (limite aceitável era 11).
                  </p>
                  
                  <div className="pt-2 border-t border-red-900/40">
                    <span className="font-mono text-[10px] text-red-500 font-bold uppercase tracking-widest block mb-1">
                      LISTA DE CONDUTAS ANTISSOCIAIS REGISTRADAS:
                    </span>
                    <ul className="list-disc pl-4 space-y-1 font-mono text-[11px] text-stone-400">
                      <li>Arrumar fofocas, intrigas e calúnias contra o regime.</li>
                      <li>Infiltração ou apologia a toques indevidos na sagrada barriga real.</li>
                      <li>Liderança de correrias insurretas de zoomies às 3h.</li>
                      <li>Manifestação estética com vestimentas do grupo rival (calcinha de mãe).</li>
                      <li>Desvio criminoso de sachês de Salmão para fins conspiratórios.</li>
                    </ul>
                  </div>

                  <p className="text-[11px] font-mono text-red-400 italic pt-1">
                    ⚖ Pena decretada: 25 anos de trabalhos forçados no Gulag de areia da Sibéria Felina, carpindo pedras de catnip congelado e banhos frios de mangueira preventiva de manhã.
                  </p>
                </div>
              </div>
            </div>

            {/* Gulag Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 border-t border-red-900/60 mt-6 pt-5">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 border border-red-800 text-red-500 rounded-full font-mono text-xs uppercase tracking-wider hover:bg-red-950/40 hover:border-red-600 transition-all active:scale-95 text-center flex items-center justify-center gap-1"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Clamar por Clemência (Refazer)
              </button>

              <button
                onClick={() => {
                  alert("Você pulou a cerca do pátio de fuzilamento, correu por três telhados e juntou-se à Resistência Clandestina de Gatos Livres! Modo Resistência Ativado.");
                  handleReset();
                }}
                className="px-6 py-2.5 bg-red-700 text-white rounded-full font-mono text-xs uppercase tracking-wider hover:bg-red-600 shadow-lg active:scale-95 transition-all text-center flex items-center justify-center gap-1.5 animate-pulse"
              >
                <Flame className="w-4 h-4 text-white" /> Recrutar-se na Resistência!
              </button>
            </div>
          </motion.div>
        )}

        {/* TAROT BOARD VIEW */}
        {subTab === "tarot" && (
          <motion.div
            key="tarot-board"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`relative p-8 rounded-xl border-2 shadow-xl bg-paper-creme text-charcoal paper-texture ${
              isResistanceMode ? "border-dashed border-terracota" : "border-solid border-moss"
            }`}
          >
            <div className="absolute top-[-14px] left-10 z-20">
              <HandDrawnPushPin className="w-8 h-8" />
            </div>

            {/* Header */}
            <div className="text-center border-b-2 border-stone-400 pb-6 mb-8 relative">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-500 block mb-1">
                {isResistanceMode ? "Previsões Clandestinas do Submundo" : "Oráculo e Previsão Cívica Real"}
              </span>
              <h2 className="font-mono text-xl sm:text-2xl font-black text-charcoal tracking-normal uppercase leading-tight">
                🔮 Tarot Diário Felino (Tarot Soquete)
              </h2>
              <p className="font-sans text-xs text-stone-600 mt-2 max-w-xl mx-auto">
                Concentre-se em sua pergunta, sintonize sua vibração de sesta ou revolução e selecione uma carta sagrada para revelar os conselhos do Soberano e das forças ocultas.
              </p>
            </div>

            <div className="space-y-8 flex flex-col items-center justify-center">
              {!selectedTarotCard && !isShuffling && (
                <div className="text-center space-y-6 w-full">
                  <p className="text-sm font-serif italic text-stone-600">
                    &ldquo;Três caminhos misteriosos se abrem diante de suas patinhas. Escolha um para retirar seu conselho:&rdquo;
                  </p>

                  {/* 3 Face-down cards standing in a row */}
                  <div className="flex justify-center gap-4 sm:gap-6 py-4">
                    {[0, 1, 2].map((i) => (
                      <motion.button
                        key={i}
                        whileHover={{ y: -8, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={drawCard}
                        className="relative w-24 h-40 sm:w-28 sm:h-44 rounded-xl border-2 border-stone-400 bg-zinc-900 shadow-lg cursor-pointer overflow-hidden flex flex-col items-center justify-between p-3 group"
                      >
                        {/* Golden Border decoration inside */}
                        <div className="absolute inset-1 border border-amber-300/30 rounded-lg pointer-events-none" />
                        
                        {/* Star at the top */}
                        <Sparkles className="w-4 h-4 text-amber-200/50 group-hover:text-amber-200 transition-colors" />
                        
                        {/* Mystic paw symbol */}
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-amber-200/20 flex items-center justify-center bg-zinc-850">
                          <HandDrawnPawPrint className="w-6 h-6 text-amber-200/40 group-hover:text-amber-200/80 group-hover:scale-110 transition-all duration-300" />
                        </div>

                        {/* Text at the bottom */}
                        <span className="font-mono text-[8px] text-amber-300/40 uppercase tracking-widest group-hover:text-amber-300/70 transition-colors">
                          SOQUINHO
                        </span>
                      </motion.button>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={drawCard}
                      className="px-8 py-3 bg-stone-800 hover:bg-stone-900 text-white rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-md active:scale-95 flex items-center gap-2 mx-auto"
                    >
                      <Sparkles className="w-4 h-4 text-yellow-300" /> Embaralhar e Tirar Carta
                    </button>
                  </div>
                </div>
              )}

              {isShuffling && (
                <div className="py-12 flex flex-col items-center justify-center space-y-4">
                  {/* Rotating loader paw */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="w-12 h-12 text-terracota"
                  >
                    <HandDrawnPawPrint className="w-full h-full" />
                  </motion.div>
                  <p className="font-mono text-xs text-stone-500 uppercase tracking-widest animate-pulse">
                    Alinhando o campo psíquico... espalhando catnip...
                  </p>
                </div>
              )}

              {selectedTarotCard && isFlipped && (
                <div className="w-full space-y-6 animate-fade-in">
                  {/* Revealed Card Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    
                    {/* The Tarot Card Visual */}
                    <div className="md:col-span-5 flex justify-center">
                      <motion.div
                        initial={{ rotateY: -180, scale: 0.9, opacity: 0 }}
                        animate={{ rotateY: 0, scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="relative w-64 p-4 pb-6 rounded-2xl border-2 border-stone-400 bg-white shadow-2xl overflow-hidden flex flex-col items-center text-center rotate-[-1deg]"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        {/* Decorative internal lines */}
                        <div className="absolute inset-2 border-2 border-dashed border-stone-200 rounded-xl pointer-events-none" />

                        {/* Arcana Title at top */}
                        <div className="font-mono text-[10px] text-stone-500 uppercase tracking-wider mb-2 z-10">
                          {selectedTarotCard.arcana}
                        </div>

                        {/* Image Frame */}
                        <div className="w-full aspect-[3/4] bg-stone-150 overflow-hidden relative border border-stone-300 rounded-lg shadow-inner z-10">
                          <img
                            src={selectedTarotCard.image}
                            alt={selectedTarotCard.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover filter contrast-[1.03] sepia-[0.1]"
                          />
                          <div className="absolute top-2 right-2 stamp-secret scale-75 bg-amber-50 border-amber-500 text-amber-700">
                            TAROT FELINO
                          </div>
                        </div>

                        {/* Card Name */}
                        <h3 className="font-serif text-xl sm:text-2xl font-black text-stone-900 mt-4 leading-tight z-10 uppercase tracking-tight">
                          {selectedTarotCard.name}
                        </h3>
                        
                        {/* Character associated */}
                        <div className="font-hand text-lg text-terracota font-bold mt-1 z-10">
                          {selectedTarotCard.character}
                        </div>
                      </motion.div>
                    </div>

                    {/* Card Interpretation and Details */}
                    <div className="md:col-span-7 space-y-6">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono uppercase bg-stone-200 text-stone-700 px-2.5 py-1 rounded border border-stone-300 font-bold">
                          {selectedTarotCard.arcana} • {selectedTarotCard.name}
                        </span>
                        <h3 className="font-serif text-2xl font-black text-charcoal">
                          O Presságio do Dia
                        </h3>
                      </div>

                      {/* Regime / Resistance Meaning */}
                      <div className="space-y-4">
                        {isResistanceMode ? (
                          <div className="bg-orange-50/40 p-5 border-l-4 border-terracota rounded-r-xl space-y-2">
                            <span className="font-mono text-[9px] uppercase font-bold text-terracota tracking-wider block">
                              🕯 Interpretação Clandestina (Revolução)
                            </span>
                            <p className="font-serif text-xs sm:text-sm text-stone-800 leading-relaxed italic">
                              &ldquo;{selectedTarotCard.meaningResistance}&rdquo;
                            </p>
                          </div>
                        ) : (
                          <div className="bg-emerald-50/20 p-5 border-l-4 border-moss rounded-r-xl space-y-2">
                            <span className="font-mono text-[9px] uppercase font-bold text-emerald-800 tracking-wider block">
                              🏛 Decreto Governamental Oficial
                            </span>
                            <p className="font-serif text-xs sm:text-sm text-stone-800 leading-relaxed">
                              &ldquo;{selectedTarotCard.meaningOfficial}&rdquo;
                            </p>
                          </div>
                        )}

                        {/* Daily Advice */}
                        <div className="bg-stone-50 p-5 border border-stone-300 rounded-xl space-y-2">
                          <span className="font-mono text-[9px] uppercase font-bold text-stone-500 tracking-wider block flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-amber-500" /> Conselho Diário de Suas Patas:
                          </span>
                          <p className="font-sans text-xs sm:text-sm text-stone-700 leading-relaxed">
                            {selectedTarotCard.dailyAdvice}
                          </p>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-3 border-t border-stone-300 pt-6">
                        <button
                          type="button"
                          onClick={drawCard}
                          className="px-6 py-2 border border-stone-400 text-stone-700 rounded-full font-mono text-xs uppercase tracking-wider hover:bg-stone-150 transition-all active:scale-95 flex items-center gap-1"
                        >
                          <RefreshCw className="w-3.5 h-3.5" /> Tirar Outra Carta
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
