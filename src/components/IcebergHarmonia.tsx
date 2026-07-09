import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  HandDrawnStar, 
  HandDrawnPushPin, 
  HandDrawnScratch, 
  HandDrawnArrow, 
  HandDrawnPawPrint 
} from "./HandDrawnSvg";
import { Info, HelpCircle, ChevronRight, Sparkles, BookOpen } from "lucide-react";

interface IcebergItem {
  name: string;
  description: string;
  importance?: "high" | "medium" | "low";
}

interface IcebergTier {
  level: number;
  title: string;
  subtitle: string;
  bgColor: string; // Tailwind class
  textColor: string; // Tailwind class
  borderColor: string; // Tailwind class
  depthLabel: string;
  items: IcebergItem[];
}

export function IcebergHarmonia({ isResistanceMode }: { isResistanceMode: boolean }) {
  const [selectedItem, setSelectedItem] = useState<IcebergItem | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const icebergTiers: IcebergTier[] = [
    {
      level: 1,
      title: "Céu e Superfície Radiante",
      subtitle: "Acontecimentos públicos conhecidos por todos os cidadãos ativos.",
      bgColor: "bg-amber-50/70",
      textColor: "text-amber-900",
      borderColor: "border-amber-300",
      depthLabel: "0m - Altitude Cívica",
      items: [
        { name: "SEXTA/SÁBADO MACABRO", description: "Noites icônicas regadas a jogos de terror cooperativos, risadas histéricas e gritos de pavor no Discord da República.", importance: "high" },
        { name: "CLUBE DO LIVRO", description: "Debates literários solenes que frequentemente começam na literatura e terminam em desabafos e sessões de terapia psicológica coletiva.", importance: "medium" },
        { name: "HABEMUS CONSTITUTION", description: "O momento histórico de fundação e digitação das sagradas regras de convivência para impedir que o grupo entrasse em colapso anárquico.", importance: "high" },
        { name: "REUNIÕES DO DISCORD", description: "Chamadas de voz infinitas que duram madrugadas inteiras, servindo como o verdadeiro ponto de encontro e coesão dos cidadãos.", importance: "high" },
        { name: "RANCHO DO GATO SOQUINHO", description: "Um Reality Show onde os cidadãos soquinhos ficavam confinados por 100 dias até saírem por votação e o último a ir embora recebia um caminhão carregado de Whiskas Sachê. ", importance: "medium" },
        { name: "RPG DO GRUBES", description: "Sessão de RPG onde os membros soquinhos se reuniram para atuar em cenários aleatórios. O RPG entrou em Hiatus após o mestre desaparecer na escuridão.", importance: "medium" }
      ]
    },
    {
      level: 2,
      title: "Águas Claras e Rasas",
      subtitle: "Fatos cotidianos, piadas internas e hábitos leves do grupo.",
      bgColor: "bg-emerald-50/60",
      textColor: "text-emerald-900",
      borderColor: "border-emerald-300",
      depthLabel: "-50m - Zona de Conforto",
      items: [
        { name: "PLAYLIST GATO SOQUINHO", description: "A trilha sonora oficial e colaborativa da República, onde misturam-se MPB, trilhas sonoras de anime e pérolas musicais obscuras.", importance: "low" },
        { name: "DESAFIO DA SEMANA", description: "Pequenas tarefas cívicas propostas no grupo para movimentar a criatividade e a interação dos membros. Engajamento da comunidade artística, caiu em desgraça pela falta de incentivo estatal.", importance: "low" },
        { name: "AS VÁRIAS PERSONALIDADES DE GIO", description: "As hilárias, teatrais e cativantes flutuações de humor e personas de um de nossos membros mais expressivos.", importance: "medium" },
        { name: "RAY DO ATACADÃO", description: "O cidadão mais trabalhador da república, sem tempo para interações civícas. Visto pela última vez entregando um currículo no atacadão, desde então foi engolido pelas trevas da 6x1.", importance: "medium" },
        { name: "BRAWL STARS SOQUINHO", description: "Torneios mobile internos altamente competitivos que geram rivalidades saudáveis e momentos de pura tensão cívica.", importance: "medium" },
        { name: "ROSH DE LIXO DO LUÍS", description: "Saga épica onde o cidadão Luís embarcou em uma aventura com entidades cósmicas desconhecidas até um terreno baldio, onde ele adentrou um território não mapeado repleto de lixo e gatos mutantes. Segundo os relatos de Luís, ele presenciou os seres cósmicos utilizando o lixo radiotivo hospitalar para montar um Rosh de lixo para fornecer a lombra. Segundo a testemunha, os companheiros dele utilizaram tal artefato e desmaiaram de diarréia na caixa de areia insalubre. Luís fugiu transformado após tal experiência... Bizarro... ", importance: "medium" },
        { name: "YASMIN E O MENDIGO", description: "A Líder suprema relata que estava passando mal no transporte público e presenciou a expulsão de um gato sem caixa por parte dos cidadãos do regime. Ela relata que não pode fazer nada pois estava quase vomitando nas idosas.", importance: "medium" }
      ]
    },
    {
      level: 3,
      title: "Zona de Penumbra",
      subtitle: "Lendas urbanas, folclores e mistérios moderados.",
      bgColor: "bg-teal-50/50",
      textColor: "text-teal-900",
      borderColor: "border-teal-200",
      depthLabel: "-150m - Termoclina",
      items: [
        { name: "HINO DO GATO SOQUINHO - NAKERI", description: "A composição musical solene dedicada à glória do Soberano Soquinho, criada pela talentosa Nakeri e reverenciada pelo regime. Hoje em dia, virou Lost Media... Bizarro..", importance: "high" },
        { name: "FIGURINHAS DO VELHO HEREGE", description: "O dia em que todo o regime foi tomado pelo velho herege e todos os cidadãos utilizaram de máscaras e roupas temáticas da heresia, praticando profanações e blasfêmicas.", importance: "medium" },
        { name: "BOY DA REBECA", description: "Os bastidores, intrigas, fofocas românticas e palpites coletivos do grupo sobre os pretendentes e relacionamentos de Rebeca.", importance: "low" },
        { name: "SUMIÇO DO PATRICK", description: "Um dos cidadãos da república, sumiu inesperadamente alegando que foi exilado. Após isso, relatos de que ele foi visto entrando para um grupo terrorista rival liderado pelo gato maligno Kaio.", importance: "medium" },
        { name: "ROSTO DA SARAH", description: "A aura de mistério em torno da revelação fisionômica ou dos raros registros visuais de Sarah, tratada quase como uma lenda secreta.", importance: "medium" },
        { name: "DESAFIO - CARTAS TEMÁTICAS", description: "Desafio criado pela ex administradora do regime, Eva, onde os cidadãos escreviam cartas seguindo o tema proposto.", importance: "low" },
        { name: "HOTEL SOQUINHO", description: "Fanfic antiga onde Eva criava uma história de terror com os cidadãos do regime.", importance: "low" },
        { name: "PÉS", description: "Famigerado dia em que os membros soquinho descobriram sua ascedência através do formato de seus pés", importance: "high" }]
    },
    {
      level: 4,
      title: "Águas Profundas e Frias",
      subtitle: "Episódios de tensão governamental e dinâmicas antigas.",
      bgColor: "bg-blue-50/40",
      textColor: "text-blue-950",
      borderColor: "border-blue-200",
      depthLabel: "-400m - Zona de Pressão",
      items: [
        { name: "RPG DO LEANDRO", description: "As memoráveis campanhas de RPG narradas por Leandro, que cativaram o grupo por sua complexidade e momentos de pura diversão. Infelizmente caiu em desgraça, após o administrador desistir de tudo e sumir.", importance: "medium" },
        { name: "OS BANIMENTOS DE KAIO E LEANDRO", description: "Após os atos de terrorismo feitos por Kaio e Leandro, o gato soberano decidiu exila-los da sociedade soquete. Após os inúmeros exílios de Kaio, ora por depressão e ora por desobediência ao regime ele foi enviado ao fuzilamento em praça pública mas fugiu de última hora, fundando o grupo terrorista rival (Kaio também usava as calcinhas da mãe dele em público). Leandro banido por desobediência ao regime, pediu por misericórdia e desde então foi aceito de volta por se adaptar melhor que seu amigo Kaio e seu arqui-inimigo Victor. ", importance: "high" },
        { name: "BANIMENTO DA EVA", description: "Eva costumava a ser a antiga administradora do regime soquinho. Um dia, por deliberação do conselho, deveria haver classes para os administradores conforme o tema do grupo, então pela democracia, ela perdeu seu cargo no regime. Sentindo-se injustiçada, Eva iniciou um burburinho em praça pública reinvidicando seu cargo anterior, o que culminou em seu ostracismo. Desde então ela tentou voltar á antiga pátria mas foi brutalmente exilada por catapulta pela administração na calada da noite.", importance: "high" },
        { name: "PEDRO", description: "Pedro trazido ao grupo por cidadãos soquinhos, foi exilado por sua conduta altamente promíscua em praça pública e rede aberta, deixando os outros civis desconfortáveis. Pedro tinha um enorme apreço pelo administrador Leandro, no qual vivia falando obscenidades sem limites na frente de todos.", importance: "medium" },
        { name: "O ENEAGRAMA 9", description: "Os debates intensos sobre a passividade e busca por paz extrema típica dos membros pertencentes ao Tipo 9 do Eneagrama (COF COF grudes).", importance: "low" },
        { name: "SHEIK ÁRABE", description: "O rumor de que um milionário excêntrico estava infiltrado no grupo para secretamente patrocinar as atividades e servidores da República.", importance: "low" },
        { name: "GRUPO DE EX-MEMBROS", description: "Após a tentativa de fuzilamento público, Kaio jurou vingança á república e decidiu criar um grupo terrorista dedicado a reunir os gatos também exilados pela república. Em seu grupo de terroristas ele conseguiu reunir todos os criminosos nacionais de alta periculosidade com o objetivo de provocar o declínio do regime. Após a falta de interesse do membros, segundo a inteligência militar soquete, o grupo terrorista caiu em desgraça (flopou) e virou lost media. ", importance: "medium" }
      ]
    },
    {
      level: 5,
      title: "Início do Abismo",
      subtitle: "Piadas de humor negro, segredos e dramas de madrugada.",
      bgColor: "bg-indigo-50/45",
      textColor: "text-indigo-950",
      borderColor: "border-indigo-200",
      depthLabel: "-800m - Limite da Luz",
      items: [
        { name: "EDITS DOS MEMBROS", description: "Vídeos satíricos e montagens fotográficas criadas pelos próprios gatinhos para imortalizar gafes, áudios e piadas internas. Todos viraram Lost Media", importance: "medium" },
        { name: "HALLOWEEN SOQUINHO", description: "A memorável celebração de dia das bruxas com artes, avatares e contos temáticos que engajaram toda a República.", importance: "medium" },
        { name: "BBB DO AMIGO DO KAIO", description: "Reality Show organizado pelo amigo ENFP do Kaio, onde o vencedor é desconhecido até hoje. O Amigo de Kaio desapereceu misteriosamente e há relatos de que ele tenha traído a namorada, provocando em seu auto-exílio.", importance: "medium" },
        { name: "RPG DA EVA", description: "RPG textual que caiu em desgraça após exatamente 4 horas.", importance: "medium" },
        { name: "PEDRO CHORÃO", description: "Membro soquinho que aparecia nas reuniões cívicas com o intuíto de reclamar da vida e perseguir sua ex. Há relatos de que após se unir a membros fantasmas do grupo, ele tenha voltado com a ex e desaparecido pela eternidade.", importance: "low" },
        { name: "RETORNO DA EVA DE MADRUGADA", description: "Eva invadiu a república durante a madrugada junto de seu comparsa Bernardo. Sua aparição causou enorme furdûncio pois ela estava exilada e voltou como se nada tivesse acontecido. Essa estadia durou pouco, pois foi brutalmente fuzilada nos gulags da república, nunca mais voltando pois sua alma foi apagada da existência. ", importance: "medium" }
      ]
    },
    {
      level: 6,
      title: "Abismo Profundo (Bathyal)",
      subtitle: "Eventos remotos e as eras antigas do grupo.",
      bgColor: "bg-slate-100",
      textColor: "text-slate-900",
      borderColor: "border-slate-300",
      depthLabel: "-1.500m - Idade das Trevas",
      items: [
        { name: "VELHO TESTAMENTO PDBEE", description: "As origens da república gato soquinho se iniciaram em um território internacional livre onde reinava a anarquia, por onde a líder suprema passou durante a sua peregrinação pelo mundo em busca de soquinhos virtuosos. Após a fundação da república ela seguiu com a sua dominação dos reinos próximos como a monarquia de cobalto, onde exterminou toda a sua população, miscigenando a sua população.", importance: "high" },
        { name: "MASTERMIND", description: "Membro soquinho que se auto-intitulava INTJ e divulgava diversos vídeos para a comunidade sobre a supremacia de seu MBTI, tudo um plano para se aproximar das gatas soquinho mas após seu iminente flop, ele caiu em desgraça.", importance: "medium" },
        { name: "THEO JAPONES DA VIAGEM", description: "Uma rápida passagem do japonês Theo na república, onde ele relatava suas memórias de São Paulo e o Japão. Ele alegava que os japoneses preferiam um PS5 ao invés de relações de acasalmento. Após os cidadãos afirmarem que também preferiam um PS5 em uma reunião, ele se retirou. Na mesma noite, ele foi encontrado misteriosamente morto por si mesmo com 20 tiros nas costas logo após a entrada de sua EX companheira na república.", importance: "medium" },
        { name: "DIEGO", description: "Diego é um importante membro para a república sendo um dos mais antigos e permanecendo sempre fiel a pátria.", importance: "low" }
      ]
    },
    {
      level: 7,
      title: "Zona Abissal Inferior",
      subtitle: "Acontecimentos políticos de alta tensão e conspirações.",
      bgColor: "bg-slate-200",
      textColor: "text-slate-950",
      borderColor: "border-slate-400",
      depthLabel: "-3.000m - Zona de Crise",
      items: [
        { name: "EVA", description: "A complexa e multifacetada história da cidadã Eva. Ela cometeu queima de arquivos acerca de cidadãos subversivos, alterando os livros de história da república onde ela fora colocada como uma grande artista sendo que suas obras foram fabricadas pelo grande robô-gatão. Também foi acusada de calúnias e intrigas, fazendo alianças para boicotar outros cidadãos e tentar faze-los cair em desgraça pública.", importance: "high" },
        { name: "ELEIÇÃO DE ADMS", description: "O processo democrático tenso e repleto de campanhas políticas de bastidores para escolher quem receberia os cargos de ADM.", importance: "high" },
        { name: "BOICOTE DE EVA E LUKE", description: "A união de Eva e Luke em um protesto velado e boicote às ordens de moderação dos administradores vigentes.", importance: "high" },
        { name: "KAIO E O CARAMUJO", description: "Kaio foi responsável pelo extermínio de várias espécies de caramujos, lagartixas e outros insetos, promovendos a extinção das espécies e causando o desequilíbrio dos ecossistemas da república. Sua conduta irritou o até então administrador Victor que decidiu fuzila-lo em um ato impulsivo, culminando em diversas em diversas sentenças de morte ao Kaio..", importance: "low" }
      ]
    },
    {
      level: 8,
      title: "Abismo Negro (Abyssopelagic)",
      subtitle: "Os mitos proibidos que beiram a infração constitucional.",
      bgColor: "bg-stone-300/80",
      textColor: "text-stone-950",
      borderColor: "border-stone-400",
      depthLabel: "-5.000m - Escuridão Total",
      items: [
        { name: "JAKE", description: "Jake foi um membro enigmático e chato. Sua busca incansável pelo tipo de personalidade ENTP encheu a comunidade soquete de lamentações, pesquisas e links duvidosos. Perseguiu membros romanticamente pelo seu ideal de parceria conforme a personalidade. Relatos sobre ele, contam que ele tinha estranha atração por cavalos, causou intrigas em outras repúblicas por ciúmes e talaricagem, distribuiu imagens bizarras de si mesmo todo inchado principalmente para o ex-membro Kaio, onde este ficou extremamente enojado com os detalhes do íntimo de jake que estava sendo afetado por fungos e bactérias. Jake causou intrigas com administradores e conseguiu ser exilado por se tornar um inimigo público e sanitário. ", importance: "medium" },
        { name: "KAIO DE CALCINHA", description: "Todos os dias o gato Kaio desfilava pelas ruas da repúblicas utilizando a calcinha da mãe e enviando imagens de si mesmo nu para administradores.", importance: "high" },
        { name: "YUNNA E O NAMORADO", description: "Durante a peregrinação da líder suprema ela se deparou com outra república onde a líder e seu namorado se odiavam, além disso ela o traía em público com outros cidadãos e seu companheiro simplesmente a desculpava. Ele alegava que precisava passar no enem em medicina. (não passou)", importance: "low" },
        { name: "VIKTOR GORDÃO", description: "Membro que vivia aparecendo nas reuniões soquetes sob a influência de diversos entorpecentes, descrevendo abertamente suas experiências e encontrando outros membros na praia, estes que fugiram dele.", importance: "low" },
        { name: "FIGURINHA DA JACA - KOSAKI", description: "A polêmica figurinha envolvendo uma jaca e Kosaki que quase gerou uma crise diplomática de moderação por spam.", importance: "medium" },
        { name: "COBALTO", description: "Um dos membros mais antigos do regime, criou sua monarquia na antiga civilização do PDBEE. Juntou-se a república posteriormente, atuando como um administrador até seu fatídico fim, onde foi setenciado a morte após declarações transfobicas. ", importance: "medium" }
      ]
    },
    {
      level: 9,
      title: "Fundo do Oceano e Fossa de Sedimentos",
      subtitle: "Histórias quase deletadas e grupos paralelos subversivos.",
      bgColor: "bg-neutral-800 text-neutral-100",
      textColor: "text-neutral-100",
      borderColor: "border-neutral-700",
      depthLabel: "-7.000m - Fundo de Rocha",
      items: [
        { name: "GRUPO DO F WORD", description: "O grupo do F word foi criado na intenção de unir milhões de pessoas para edifica-los, mas na prática era uma bagunça total, oferecendo perdão presidencial a pessoas intolerantes, contrariando seu time de administradores. O F word era megalomaníaco, enxergando a comunidade como um grande feito em sua vida. Eventualmente foi traído por um de seus mais fiéis civis, perdendo seu reinado duas vezes e caindo em desgraça. A líder suprema notou a insalubridade e desde então decidiu criar uma república segura em paralelo ao caos das outras civilizações. O Administrador Kosaki até hoje está traumatizado com os atos narcisistas de F word.", importance: "high" },
        { name: "SOQUINHOS ESPIÕES", description: "Boatos sobre a existência de canais de espionagem criados para monitorar outros grupos e relatar fofocas externas.", importance: "medium" },
        { name: "AREÓPAGO", description: "Na mesma linha da comunidade do F word, o Areopago foi um local extremamente hóstil e com a ausência de sanidade mental. Todos os cidadãos faziam o uso de entorpecentes pesados, defendiam teorias da conspiração e ideologias políticas radicais. Max, o líder da comunidade, tinha mais apreço as suas cidadãs oferecendo a elas o poder administrativo sem qualquer hesitação (um gado). A personalidade de Max era voltada para a religião para tentar se sentir superior, além disso, seu regime foi invadido por membros soquinhos na intenção de zoar e atentar contra suas loucuras cotidianas, o traumatizando com a alcunha de max milho.", importance: "high" },
        { name: "GRUPO DA LAÍS", description: "A comunidade mais promíscua de todas, traumatizando soquinhos como Leandro e Rebeca.", importance: "medium" },
        { name: "BUBU", description: "Personagem enigmático na saga do grupo soquinho, era um robô movido por tipologias e já ameaçou a líder suprema", importance: "medium" },
        { name: "MONARQUIA DO COBALTO", description: "Grupo que originou a comunidade Gato soquinho, rivalizando com o mesmo e logo caindo em desgraça.", importance: "high" }
      ]
    },
    {
      level: 10,
      title: "Submundo Ultra-Abissal (Hadal)",
      subtitle: "Os segredos mais sombrios da história que o regime prefere apagar.",
      bgColor: "bg-stone-950 text-neutral-200",
      textColor: "text-neutral-100",
      borderColor: "border-neutral-900",
      depthLabel: "-10.000m - Fossa das Marianas",
      items: [
        { name: "19H DE CALL COM WEBNAMORADA", description: "O antigo Administrador Victor era extremamente obcecado por sua namorada maluca e chegou a fazer 19h de call com a webnamorada, detalhando tudo para a comunidade soquete.", importance: "high" },
        { name: "VIC", description: "Membro emocional que chegou a exilar diversos cidadãos sem motivo plausível, enviou imagens bizarras na comunidade e conseguiu jurar vingança contra a comunidade após perder o cargo de administrador. A derrota foi tamanha que ele decidiu pular dos muros da república após o decreto de exílio, nunca mais voltando.", importance: "medium" },
        { name: "TRETA DO VICTOR E JAKE", description: "Aparentemente, segundo relatos, Victor teria dado em cima de Jake junto da namorada, mas este recusou os dois o que acabou criando uma inimizade perigosa. Ambos vazaram que ele teria atração por cavalos e outros animais e Jake teria vazado a relação tóxica e assediadora do casal com outros membros de diversas comunidades.", importance: "high" },
        { name: "EX MEMBROS HOMOFÓBICOS", description: "Cobalto e Dante fizeram diversos discursos transfóbicos e após a repreensão da administração, ambos foram fuzilados em praça pública como exemplo para os futuros cidadãos. ", importance: "high" },
        { name: "KAORI E FELIPE", description: "Após a saída do japponês Theo e a entrada de Kaori, ela se envolveu com Felipe onde cometeu diversos abusos físícos e mentais durante o noivado de 5 meses. Kaori difamou diversos membros e após seu exílio, Felipe se viu livre de seu domínio.", importance: "high" }]
    }
  ];

  // Deselect item if its level is > 3 and user exits resistance mode
  useEffect(() => {
    if (!isResistanceMode && selectedItem) {
      const isStillVisible = icebergTiers
        .filter((t) => t.level <= 3)
        .some((t) => t.items.some((it) => it.name === selectedItem.name));
      if (!isStillVisible) {
        setSelectedItem(null);
      }
    }
  }, [isResistanceMode, selectedItem, icebergTiers]);

  const visibleTiers = isResistanceMode
    ? icebergTiers
    : icebergTiers.filter((tier) => tier.level <= 3);

  return (
    <div className="space-y-8" id="iceberg-section-container">
      {/* Intro Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2 relative">
        <div className="absolute top-[-25px] left-[-35px] opacity-15 rotate-12">
          <HandDrawnStar className="w-8 h-8 text-terracota" />
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-terracota font-extrabold bg-orange-100/50 px-3 py-1 rounded">
          Memorial de Grandes Acontecimentos
        </span>
        <h2 className="font-serif text-3xl font-black text-charcoal tracking-tight">
          🧊 O Iceberg do Gato Soquinho
        </h2>
        <p className="font-serif text-sm text-stone-600">
          Explore as camadas profundas da nossa história de dois anos. Das chamadas casuais no topo aos segredos ocultos e expurgos do submundo nas fossas abissais.
        </p>
        <div className="flex items-center justify-center gap-4 text-xs font-mono text-stone-500 pt-2">
          <span className="flex items-center gap-1"><Info className="w-3.5 h-3.5 text-moss" /> Clique em qualquer termo para ver detalhes</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-4" id="iceberg-pyramid-container">
        {visibleTiers.map((tier, idx) => {
          const hasSelectedInTier = selectedItem && tier.items.some((it) => it.name === selectedItem.name);
          return (
            <motion.div
              key={tier.level}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.08 }}
              className={`p-4 rounded-lg border-2 ${tier.borderColor} ${tier.bgColor} shadow-sm relative overflow-hidden group transition-all duration-300 ${
                hoveredItem ? "hover:scale-[1.01]" : ""
              }`}
              style={{
                // Triangular pyramid visual effect: levels get progressively narrower
                marginLeft: `${tier.level * 1.5}%`,
                marginRight: `${tier.level * 1.5}%`,
              }}
            >
              {/* Depth background tag */}
              <div className="absolute top-2 right-2 font-mono text-[9px] uppercase tracking-wider bg-stone-900/5 px-2 py-0.5 rounded opacity-60">
                {tier.depthLabel}
              </div>

              <div className="space-y-1 mb-2.5 text-left">
                <span className="font-mono text-[10px] font-bold tracking-wider uppercase opacity-80 block">
                  Nível {tier.level}: {tier.title}
                </span>
                <p className="text-[11px] opacity-75 font-serif italic max-w-md">
                  {tier.subtitle}
                </p>
              </div>

              {/* Items Grid */}
              <div className="flex flex-wrap gap-2 pt-1 justify-start">
                {tier.items.map((item) => {
                  const isSelected = selectedItem?.name === item.name;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setSelectedItem(item)}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`px-2.5 py-1 rounded text-xs font-mono border tracking-tight transition-all duration-200 cursor-pointer text-left flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-stone-900 text-white border-stone-900 scale-105 shadow-md"
                          : "bg-white/85 text-stone-800 border-stone-300/80 hover:bg-white hover:border-stone-500 hover:scale-[1.03] hover:shadow-xs"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        item.importance === "high" 
                          ? "bg-red-500" 
                          : item.importance === "medium" 
                            ? "bg-amber-500" 
                            : "bg-slate-400"
                      }`} />
                      {item.name}
                    </button>
                  );
                })}
              </div>

              {/* Inline Detail Card - Acccompanies/follows the level of the iceberg */}
              <AnimatePresence mode="wait">
                {hasSelectedInTier && selectedItem && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-white rounded-lg border-2 border-stone-400 shadow-lg space-y-3 relative text-left my-2">
                      {/* Pin doodle */}
                      <div className="absolute top-[-10px] left-6 z-10">
                        <HandDrawnPushPin className="w-6 h-6" />
                      </div>
                      
                      <div className="absolute top-2 right-3 font-mono text-[9px] text-stone-400 uppercase tracking-wider">
                        Registro Nível {tier.level}
                      </div>

                      <div className="pb-1.5 border-b border-stone-200 pt-2">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-terracota font-bold block">
                          Acontecimento Histórico
                        </span>
                        <h4 className="font-serif text-lg font-black text-charcoal tracking-tight mt-0.5">
                          {selectedItem.name}
                        </h4>
                      </div>

                      <div className="space-y-3 font-serif text-xs sm:text-sm text-stone-700 leading-relaxed">
                        <p>{selectedItem.description}</p>
                        
                        {isResistanceMode && (
                          <div className="text-[11px] font-mono text-terracota bg-red-50 p-2 rounded border-l-2 border-terracota font-bold">
                            👁 REGISTRO CRIPTOGRAFADO: Informação resgatada do canal clandestino de ex-membros.
                          </div>
                        )}
                      </div>

                      <div className="flex justify-between items-center pt-2.5 border-t border-stone-150 font-mono text-[9px] text-stone-400 uppercase">
                        <span>Arquivado por: ADMs do Judicial</span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-moss font-bold">
                            <Sparkles className="w-3 h-3" /> Verificado
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedItem(null);
                            }}
                            className="px-2.5 py-1 border border-stone-300 hover:bg-stone-50 rounded text-stone-600 hover:text-stone-900 transition-all cursor-pointer font-bold text-[9px]"
                          >
                            Fechar Registro
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Aesthetic botanical flourish below panel */}
      <div className="max-w-2xl mx-auto p-4 bg-paper-creme/50 rounded border border-stone-200 text-center font-serif text-[11px] italic text-stone-600 leading-relaxed">
        &ldquo;As profundezas guardam os segredos mais puros de nossa convivência. Navegue com responsabilidade cívica.&rdquo;
      </div>
    </div>
  );
}
