import andreMaineCoonImg from "./assets/images/andre_maine_coon_1783551091555.jpg";
import gustavoHierofanteImg from "./assets/images/gustavo_hierofante_1783551101871.jpg";
import raphaelDionisioImg from "./assets/images/raphael_dionisio_1783551110967.jpg";
import kosakiRuanImg from "./assets/images/kosaki_ruan_1783551119892.jpg";
import lilicaKarenImg from "./assets/images/lilica_karen_1783551128519.jpg";
import bertyThespianImg from "./assets/images/berty_thespian_1783551136809.jpg";
import leandroOrangeCatImg from "./assets/images/leandro_orange_cat_1783553565823.jpg";
import isidoroGreyTabbyImg from "./assets/images/isidoro_grey_tabby_1783553579515.jpg";
import minSiameseCrownCozyImg from "./assets/images/min_siamese_crown_cozy_1783553864080.jpg";
import mavisNakeriImg from "./assets/images/mavis_nakeri_1783551173273.jpg";
import tricolorPaolaImg from "./assets/images/tricolor_paola_1783551182004.jpg";
import incineradorJaoImg from "./assets/images/incinerador_jao_1783551190579.jpg";
import ninaTricolorCatImg from "./assets/images/nina_tricolor_cat_1783553592941.jpg";
import rebecaGataLuzImg from "./assets/images/rebeca_gata_luz_1783551206588.jpg";
import gioPsicologoImg from "./assets/images/gio_psicologo_1783551215966.jpg";
import siameseBureaucratImg from "./assets/images/siamese_bureaucrat_1783551029182.jpg";
import tuxedoRebelImg from "./assets/images/tuxedo_rebel_1783551037245.jpg";
import orangeAlienatedImg from "./assets/images/orange_alienated_1783551046312.jpg";
import blackMysticImg from "./assets/images/black_mystic_1783551055889.jpg";
import tortoiseshellGoddessImg from "./assets/images/tortoiseshell_goddess_1783551065194.jpg";
import persianNobleImg from "./assets/images/persian_noble_1783551073975.jpg";

export interface Member {
  id: string;
  name: string;
  mbti: string;
  enneagram: string;
  birthday: string;
  roleRegime: string;
  roleResistance: string;
  photoUrl: string;
  regimeBio: string;
  resistanceBio: string;
  tilt: string;
  tapeStyle: "top" | "angled" | "double" | "none";
  colorTheme: string;
  redactedLog: string;
}

export interface Question {
  id: number;
  questionText: string;
  options: {
    text: string;
    points: {
      siames: number;
      frajola: number;
      laranja: number;
      preto: number;
      escama: number;
      persa: number;
    };
    commentOfficial: string;
    commentResistance: string;
  }[];
}

export interface ResultCat {
  breed: "siames" | "frajola" | "laranja" | "preto" | "escama" | "persa";
  title: string;
  descOfficial: string;
  descResistance: string;
  colorHex: string;
  accentBg: string;
  tags: string[];
  imageUrl: string;
}

// 15 Members Data
export const MEMBERS_DATA: Member[] = [
  {
    id: "andre",
    name: "Simba (André)",
    mbti: "INTJ (Maine Coon)",
    enneagram: "Eneagrama 5 sp/sx",
    birthday: "08 de Janeiro",
    roleRegime: "Guardião do Conhecimento Ancestral",
    roleResistance: "Conector de Repúblicas e Mentor das Ligações Soquinho",
    photoUrl: andreMaineCoonImg,
    regimeBio: "Simba (André) é o gato mais velho da República. Atua como professor e conselheiro regulamentar, catalogando animes, filmes, livros e jogos permitidos pelo Regime. Seu status é estritamente regulamentar, mantendo a ordem com sabedoria ancestral.",
    resistanceBio: "Nas sombras, Simba usa seus vastos contatos com outras repúblicas para coordenar as lendárias Ligações Soquinho. Por trás de sua postura gentil, engraçada e profundamente empática, esconde-se a mente brilhante e pensadora de um místico INTJ.",
    tilt: "-rotate-2",
    tapeStyle: "top",
    colorTheme: "border-moss bg-emerald-50/50",
    redactedLog: "Análise interminável de seios e contrabando de conteúdo anti-república."
  },
  {
    id: "gustavo",
    name: '"O Hierofante" (Grubes)',
    mbti: "INTP 6",
    enneagram: "Eneagrama 6 so/sp",
    birthday: "23 de Fevereiro",
    roleRegime: "Administrador-Chefe de Comunicação e Arquivos do Estado",
    roleResistance: "Guardião dos Registros Clandestinos e Descriptografia",
    photoUrl: gustavoHierofanteImg,
    regimeBio: '"O Hierofante" é o administrador vital da República, responsável por organizar, proteger e controlar todos os arquivos de dados e comunicações oficiais do governo com precisão lógica impecável.',
    resistanceBio: "Sendo um INTP 6 analítico e profundamente empático, Gustavo usa seu controle sobre a infraestrutura de comunicação para resguardar a rede da resistência de forma gentil e protetora, agindo como um farol de suporte.",
    tilt: "rotate-3",
    tapeStyle: "angled",
    colorTheme: "border-sage bg-stone-100/50",
    redactedLog: "Responsável pelo assassinato de Theo e outros gatos soquetes. Também há relatos de que ele tenha lutado ao lado de Eva durante o motim mas virou a casaca de volta para o Soberano.."
  },
  {
    id: "raphael",
    name: "Dionísio (Raphael)",
    mbti: "INFP 6 sp",
    enneagram: "Eneagrama 6 sp",
    birthday: "24 de Junho",
    roleRegime: "Deus do Culto da Promiscuidade",
    roleResistance: "Líder dos Boêmios e da Libertinagem Geral",
    photoUrl: raphaelDionisioImg,
    regimeBio: "Existem relatos de que ele supera o próprio Dionísio in sua libertinagem sem limites, sendo adorado e cultuado fervorosamente por todos os boêmios da República.",
    resistanceBio: "Sua residência serve como o templo secreto das maiores orgias de catnip e festividades de sachê já registradas, desmoralizando completamente as patrulhas puritanas do Soquinho.",
    tilt: "-rotate-3",
    tapeStyle: "double",
    colorTheme: "border-terracota/60 bg-amber-50/50",
    redactedLog: "Batida realizada no porão do Dionísio apreendeu 15kg de catnip puro, além disso, responsável por diversos atos libidinosos na rua, sendo cultuado como um grande líder da safadeza."
  },
  {
    id: "kosaki",
    name: "\"O julgamento\" (Ruan)",
    mbti: "ISFJ ESI 1 sp/so",
    enneagram: "Eneagrama 1 sp/so (Administrador)",
    birthday: "23 de Julho",
    roleRegime: "Administrador Chefe da Saúde e Vigilância",
    roleResistance: "Controlador Secreto de Acessos e Censor Supremo",
    photoUrl: kosakiRuanImg,
    regimeBio: "\"O julgamento\" (Ruan) manda na saúde e na vigilância com rigor. Ele é a autoridade máxima que decide quem entra ou sai das fronteiras da República e dita as regras de censura de documentos e mídias.",
    resistanceBio: "Usando seu poder de censura e controle de fronteiras, ele facilita a entrada e saída secreta de aliados sob disfarces burocráticos e apaga quaisquer relatórios de atividades suspeitas do sistema do Soquinho.",
    tilt: "rotate-2",
    tapeStyle: "top",
    colorTheme: "border-moss bg-teal-50/50",
    redactedLog: "Responsável por diversas delações para a líder. Está sempre monitorando quem entra e sai da república e comanda a policia secreta.."
  },
  {
    id: "karen",
    name: "Lilica (Karen)",
    mbti: "INFJ 5 sx/sp",
    enneagram: "Eneagrama 5 sx/sp",
    birthday: "23 de Julho",
    roleRegime: "Civil, Atriz",
    roleResistance: "Consultora de Moda, Beleza e Design de Interiores",
    photoUrl: lilicaKarenImg,
    regimeBio: "Lilica é uma gata civil comum e renomada atriz, amplamente relacionada ao mundo da moda, beleza e design. Ela traz elegância e sofisticação para as telas e bairros da República.",
    resistanceBio: "Por trás do glamour de diva civil, ela atua secretamente ditando tendências estéticas de libertação. Lilica redesenha uniformes de guerrilha feline com alta costura e projeta esconderijos esteticamente impecáveis.",
    tilt: "-rotate-1",
    tapeStyle: "angled",
    colorTheme: "border-olive bg-orange-50/30",
    redactedLog: "Relatos de que esteve conversando com grupos terroristas, está sendo vigiada pelo regime."
  },
  {
    id: "berty",
    name: "Berty",
    mbti: "ENTP 4 sx/sp",
    enneagram: "Eneagrama 4 sx/sp",
    birthday: "06 de Agosto",
    roleRegime: "Líder dos Movimentos de Marketing Exteriores e Artísticos no Teatro",
    roleResistance: "Doutrinador dos Zoomies às 3h da Manhã",
    photoUrl: bertyThespianImg,
    regimeBio: "Berty coordena as brilhantes campanhas de relações públicas e os espetáculos teatrais da República, garantindo que toda divulgação externa seja esteticamente perfeita e cativante.",
    resistanceBio: "Berty provou filosoficamente que pular em cima da barriga do líder adormecido às 3h é um ato heróico de desobediência civil. Seu portfólio de memes subversivos é inestimável.",
    tilt: "rotate-4",
    tapeStyle: "double",
    colorTheme: "border-terracota bg-rose-50/50",
    redactedLog: "Tentou criar uma revolta sem sucesso. Pereceu ao sistema mesmo ainda ansiando a anarquia."
  },
  {
    id: "leandro",
    name: "\"O Diabo\" (Leandro)",
    mbti: "ENTJ LIE 7 sp",
    enneagram: "Eneagrama 7 sp (Questionador)",
    birthday: "15 de Agosto",
    roleRegime: "Administrador das Relações Públicas",
    roleResistance: "Gato Mais Questionador e Imoral da República",
    photoUrl: leandroOrangeCatImg,
    regimeBio: "\"O Diabo\" (Leandro) é o Administrador das Relações Públicas da República. Ele é publicamente conhecido por ser o gato mais imoral e questionador de todos, colocando em dúvida qualquer dogma do Regime com sua ironia fina.",
    resistanceBio: "Ele usa sua posição oficial e sua retórica afiada para questionar incansavelmente cada decisão e capricho do Soquinho, agindo como a mente mais cética, imoral e subversiva de toda a resistência.",
    tilt: "-rotate-2",
    tapeStyle: "top",
    colorTheme: "border-charcoal bg-yellow-50/35",
    redactedLog: "Principal espião do governo, relata todas as infrações dos cidadãos para a grande líder e responsável pela discórdia da república."
  },
  {
    id: "luis",
    name: "Isidoro (Luís)",
    mbti: "INTJ ILI 5 so",
    enneagram: "Eneagrama 5 so",
    birthday: "15 de Outubro",
    roleRegime: "Cidadão Comum da República",
    roleResistance: "Frequente nas Ligações Soquinho e Subtramas Escabrosas",
    photoUrl: isidoroGreyTabbyImg,
    regimeBio: "Isidoro vive a pacata vida de um cidadão comum sob o olhar atento do regime, tentando focar em suas sestas diárias sem chamar a atenção do Soberano.",
    resistanceBio: "Presença garantida nas lendárias Ligações Soquinho, Isidoro é o mestre dos bastidores, constantemente envolvido em subtramas misteriosas e escabrosas que sacodem as estruturas secretas da República.",
    tilt: "rotate-1",
    tapeStyle: "angled",
    colorTheme: "border-sage bg-zinc-100/60",
    redactedLog: "O cidadão calmo e pacato foi visto às 23:55h sussurrando no beco central com espiões estrangeiros. Luís é a mente de bastidores por trás das maiores fofocas e vazamentos do gulag."
  },
  {
    id: "min",
    name: "Líder Suprema (Min)",
    mbti: "INFP 4 (Líder Suprema)",
    enneagram: "Eneagrama 4 sp",
    birthday: "17 de Outubro",
    roleRegime: "Líder Suprema e Administradora Executiva (Ditadora)",
    roleResistance: "Líder Aleatória, Empática com Punhos de Ferro",
    photoUrl: minSiameseCrownCozyImg,
    regimeBio: "Min é a Líder Suprema e administradora executiva (ditadora) da República. Responsável por comandar o grupo com punhos de ferro, mantém um status imponente e toma decisões cruciais para a manutenção do regime Soquinho.",
    resistanceBio: "Embora governe com rigidez e já tenha enviado inúmeros gatinhos para o exílio, Min é uma líder carismática que se dá incrivelmente bem com todos. Seu comportamento empático e imprevisível a torna fascinante.",
    tilt: "-rotate-4",
    tapeStyle: "double",
    colorTheme: "border-terracota bg-amber-50/40",
    redactedLog: "A Líder Suprema foi vista prendendo diversos cidadões soquetes no gulag. Boatos de que ela os tenha transformado em whiskas sachê."
  },
  {
    id: "naki",
    name: "Mavis (Nakeri)",
    mbti: "INTP (Gata Preta)",
    enneagram: "Eneagrama 5/9 (Mística)",
    birthday: "01 de Novembro",
    roleRegime: "Desenhista Oficial do Reino e Obra do Culto",
    roleResistance: "Filósofa Desaparecida de Palavras Cirúrgicas",
    photoUrl: mavisNakeriImg,
    regimeBio: "Mavis é a desenhista oficial do reino. Sendo uma gata preta majestosa, ela é profundamente reverenciada e venerada por todos os outros integrantes da República em seu fervoroso culto aos gatos pretos.",
    resistanceBio: "Conhecida por sumir misteriosamente do mapa, Mavis sempre ressurge nos momentos cruciais. Ela fala pouco, mas suas falas e reflexões são extremamente cirúrgicas e precisas.",
    tilt: "rotate-3",
    tapeStyle: "top",
    colorTheme: "border-olive bg-emerald-50/30",
    redactedLog: "Mavis sumiu do radar governamental por 14 dias seguidos, relatos de que esteve sendo cultuada como uma deusa por uma seita anti-acasalamento. Comportamento suspeito e vigiado pelo regime. "
  },
  {
    id: "paola",
    name: "Tricolor (Paola)",
    mbti: "ESTP 8",
    enneagram: "Eneagrama 8",
    birthday: "13 de Novembro",
    roleRegime: "Chefe da Milícia Anti-Invasão de Baratas",
    roleResistance: "General de Artilharia Pesada das 3h da Manhã",
    photoUrl: tricolorPaolaImg,
    regimeBio: "Paola mantém as fronteiras livres de insetos e pequenos lagartos, sendo condecorada três vezes com a Medalha do Peixe de Bronze pelo Soquinho.",
    resistanceBio: "Ela é a força bruta da revolução. Derruba copos de vidro, arromba portas trancadas com cabeçadas e lidera os protestos físicos contra o veto de banhos de sol no tapete principal.",
    tilt: "rotate-2",
    tapeStyle: "double",
    colorTheme: "border-charcoal bg-stone-100/80",
    redactedLog: "Responsável pelo término do gato Ísidoro e sua ex-companheira traidora da nação, Kaori."
  },
  {
    id: "joao",
    name: "O incinerador (Jão)",
    mbti: "ENTP 7",
    enneagram: "Eneagrama 7 (Neutro)",
    birthday: "14 de Novembro",
    roleRegime: "Cidadão Comum (Lealdade Jurada)",
    roleResistance: "Ex-Líder de Revoltas e Cidadão Perigoso",
    photoUrl: incineradorJaoImg,
    regimeBio: "O Incinerador iniciou inúmeras revoltas históricas contra o sistema Soquinho, mas acabou jurando lealdade formal ao governo. Atualmente vive como cidadão sob o status de Neutro.",
    resistanceBio: "Fique de olho nele! Embora tenha jurado lealdade e pareça tranquilo, ele continua sendo extremamente perigoso para o regime, agindo como um rebelde cuja centelha pode reacender a qualquer momento.",
    tilt: "-rotate-3",
    tapeStyle: "top",
    colorTheme: "border-terracota bg-amber-50/60",
    redactedLog: "Responsável por diversas rebeliões e conspirações contra o regime soquete. Nosso Líder!!"
  },
  {
    id: "livia",
    name: "Nina (Lívia)",
    mbti: "ENFP",
    enneagram: "Eneagrama 7w6 (Animadora)",
    birthday: "19 de Novembro",
    roleRegime: "Cidadã Comum da República",
    roleResistance: "Animadora de Eventos Cívicos e do Grupo",
    photoUrl: ninaTricolorCatImg,
    regimeBio: "Nina é uma cidadã Soquinho comum e exemplar. Ela participa ativamente de todos os eventos cívicos com um sorriso no rosto e respeito ao Soberano.",
    resistanceBio: "Nina é a responsável por manter a alegria do grupo sempre viva. Ela anima a todos com sua energia brilhante e está sempre presente para animar os ânimos de seus companheiros.",
    tilt: "rotate-4",
    tapeStyle: "angled",
    colorTheme: "border-moss bg-yellow-50/50",
    redactedLog: "Atividades de agitação subversiva: Nina organizou uma festa clandestins regada a catnip de alta pureza, levantando a moral e unindo os rebeldes nas sombras do porão."
  },
  {
    id: "rebeca",
    name: "Rebeca",
    mbti: "ISFJ 6w7 sp",
    enneagram: "Eneagrama 6w7 sp",
    birthday: "08 de Dezembro",
    roleRegime: "Civil Comum, Divulgadora da Palavra do Gato da Luz e Guardiã do Futuro dos Mini Gatinhos Soquinhos",
    roleResistance: "Protetora Clandestina da Nova Geração e Missionária da Luz",
    photoUrl: rebecaGataLuzImg,
    regimeBio: "Rebeca atua na comunidade como civil comum, propagando com serenidade as palavras de paz e iluminação do Gato da Luz, além de zelar com amor pelo desenvolvimento e bem-estar dos futuros filhotes da República.",
    resistanceBio: "Sob seu manto de pacificadora e educadora de filhotes, ela ensina secretamente ideais revolucionários de liberdade para a próxima geração de gatinhos e desvia suprimentos de sachê de bebê para o orfanato secreto da resistência.",
    tilt: "-rotate-1",
    tapeStyle: "double",
    colorTheme: "border-sage bg-neutral-100/50",
    redactedLog: "Desvio sistemático de recursos do Estado. Rebeca foi flagrada camuflando sachês de filhote em escrituras do Gato da Luz e ensinando os novos órfãos a miar o hino da revolução."
  },
  {
    id: "gio",
    name: "\"a Justiça\" (Gio)",
    mbti: "ESFJ ESE 3",
    enneagram: "Eneagrama 3",
    birthday: "28 de Dezembro",
    roleRegime: "Administrador Público da Saúde Mental e Alimentação dos Soquinhos",
    roleResistance: "Psicólogo de Sachês e Mapeador de Personalidade Felina",
    photoUrl: gioPsicologoImg,
    regimeBio: "Empático, estudando a mente dos gatinhos, recomenda sachês e responsável pelos estudos de tipologia da República.",
    resistanceBio: "\"a Justiça\" (Gio) usa seus estudos de tipologia e eneagrama para desvendar as fraquezas emocionais dos guardas do regime. Ele receita secretamente doses cavalares de sachês terapêuticos para acalmar a ansiedade dos gatinhos revolucionários.",
    tilt: "rotate-3",
    tapeStyle: "top",
    colorTheme: "border-charcoal bg-rose-50/40",
    redactedLog: "Responsável pela grande onda de lavagem cerebral nos soquinhos. Líder das pesquisas de MK-Ultra do governo."
  }
];

// Quiz Data
export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    questionText: "O Soberano Soquinho dormiu profundamente em cima do seu teclado de trabalho às 14h. Qual sua atitude regulamentar?",
    options: [
      {
        text: "Aceito meu destino. Não toco no teclado, faço reverência silenciosa e durmo embaixo da mesa para não violar o espaço de Sua Alteza.",
        points: { siames: 3, frajola: 0, laranja: 1, preto: 2, escama: 0, persa: 5 },
        commentOfficial: "Excelente. Conformidade biológica exemplar.",
        commentResistance: "Covardia corporativa pura. O teclado deveria ser público!"
      },
      {
        text: "Infiltro meu dedo por baixo da barriga dele para fazer cócegas rápidas, assumindo o risco iminente de um ataque surpresa das Forças Armadas.",
        points: { siames: 0, frajola: 4, laranja: 2, preto: 1, escama: 5, persa: 0 },
        commentOfficial: "Ato terrorista de alta traição! Enquadrado na Lei de Ofensa Física.",
        commentResistance: "Herói! A adrenalina de violar a barriga sagrada é inigualável."
      },
      {
        text: "Analiso a situação taticamente e ofereço uma alternativa superior: uma caixa de papelão vazia e levemente inclinada a 2 metros de distância.",
        points: { siames: 4, frajola: 2, laranja: 0, preto: 5, escama: 1, persa: 1 },
        commentOfficial: "Suborno diplomático aceitável, desde que a caixa seja homologada.",
        commentResistance: "Negociação de alto nível. Desviando o foco do ditador com maestria."
      },
      {
        text: "Fico encarando a parede junto com ele até que nós dois entremos em um transe místico e esqueçamos a existência do trabalho.",
        points: { siames: 1, frajola: 1, laranja: 5, preto: 3, escama: 2, persa: 2 },
        commentOfficial: "Comportamento errático, porém não-violento. Monitorado pelo Regime.",
        commentResistance: "Alienação pacífica total. Um clássico da oposição espiritual."
      }
    ]
  },
  {
    id: 2,
    questionText: "O toque de recolher da República é às 22:00, mas o impulso biológico dos 'zoomies' (corrida insana sem rumo) começa às 3h. O que você faz?",
    options: [
      {
        text: "Lidero a investida correndo em velocidade máxima sobre o tapete, batendo nas portas fechadas e gritando em protesto de pura energia.",
        points: { siames: 2, frajola: 5, laranja: 4, preto: 1, escama: 5, persa: 0 },
        commentOfficial: "Tumulto noturno ilegal. A patrulha de choque usará spray de água.",
        commentResistance: "O grito de liberdade das 3h da manhã! Quebra de toque de recolher unificada."
      },
      {
        text: "Vigilo a janela em silêncio absoluto, fingindo ser uma estátua de mármore e catalogando o movimento das sombras suspeitas lá fora.",
        points: { siames: 4, frajola: 0, laranja: 0, preto: 5, escama: 1, persa: 2 },
        commentOfficial: "Sentinela cívica voluntária de alta classe. Parabéns, cidadão.",
        commentResistance: "Ele está sabendo demais. O arquivista das sombras está de olho."
      },
      {
        text: "Durmo pesadamente em cima de uma almofada de veludo importada, ignorando a revolução e os gritos ao redor.",
        points: { siames: 2, frajola: 0, laranja: 1, preto: 2, escama: 0, persa: 5 },
        commentOfficial: "Cidadão exemplar. A apatia é a espinha dorsal da nossa harmonia.",
        commentResistance: "Burguesia felina! Ocupando privilégios enquanto o povo corre por sachês."
      },
      {
        text: "Crio um comitê para debater a legalidade dos zoomies, apresentando um recurso em três vias escritas em papel amassado.",
        points: { siames: 5, frajola: 1, laranja: 0, preto: 2, escama: 1, persa: 1 },
        commentOfficial: "Protocolo burocrático correto. Será analisado em até 48 meses.",
        commentResistance: "Atrasando a revolução com papelada! Mas bem intencionado."
      }
    ]
  },
  {
    id: 3,
    questionText: "O Regime decretou racionamento do Sachê de Salmão nas terças-feiras. Qual sua reação política imediata?",
    options: [
      {
        text: "Faço um escândalo vocal dramático e grito miados agudos na cozinha até as autoridades ficarem constrangidas e cederem.",
        points: { siames: 5, frajola: 2, laranja: 1, preto: 0, escama: 4, persa: 1 },
        commentOfficial: "Poluição sonora subversiva. Penalidade de 1 hora sem carinho.",
        commentResistance: "O protesto barulhento é a arma dos oprimidos famintos! Grite mais alto!"
      },
      {
        text: "Abro secretamente a porta do armário usando técnicas complexas de manipulação de patas que aprendi nos arquivos secretos.",
        points: { siames: 1, frajola: 5, laranja: 0, preto: 4, escama: 3, persa: 0 },
        commentOfficial: "Arrombamento e roubo contra o tesouro nacional da República!",
        commentResistance: "Expropriação popular de recursos proteicos! Viva a resistência gastronômica!"
      },
      {
        text: "Aceito a ração seca oficial com um olhar de profunda decepção existencial que faz o Soberano se sentir secretamente culpado.",
        points: { siames: 2, frajola: 1, laranja: 2, preto: 5, escama: 1, persa: 4 },
        commentOfficial: "Submissão pacífica com traços de chantagem emocional silenciosa.",
        commentResistance: "Guerra psicológica de alto nível. O olhar de fome desestabiliza impérios."
      },
      {
        text: "Não percebo o racionamento porque estava ocupado caçando um mosquito invisível no teto há 3 horas.",
        points: { siames: 0, frajola: 2, laranja: 5, preto: 2, escama: 1, persa: 1 },
        commentOfficial: "Cidadão feliz e ignorante. Ideal para a estabilidade do Estado.",
        commentResistance: "A alienação dele é perigosa, mas ele capturou o inseto espião!"
      }
    ]
  },
  {
    id: 4,
    questionText: "Um estranho barulho de motor inicia na sala (O Grande Aspirador de Pó, o monstro oficial do regime). O que você faz?",
    options: [
      {
        text: "Corro para baixo do sofá mais profundo e estabeleço um posto fortificado, rosnando baixinho para qualquer cano de plástico que se aproxime.",
        points: { siames: 2, frajola: 1, laranja: 1, preto: 5, escama: 3, persa: 3 },
        commentOfficial: "Retirada estratégica regulamentar. Protejam a pelagem.",
        commentResistance: "Bunker montado. O aspirador é uma arma de supressão psicológica!"
      },
      {
        text: "Ataco o bico do monstro de plástico com patadas rápidas de garras abertas, mostrando quem manda de verdade nesta casa.",
        points: { siames: 1, frajola: 4, laranja: 2, preto: 0, escama: 5, persa: 0 },
        commentOfficial: "Ato impulsivo de bravura militar irresponsável contra tecnologia estatal.",
        commentResistance: "Um confronto épico! O monstro mecânico treme diante da sua fúria."
      },
      {
        text: "Fico no alto da geladeira observando o caos de forma fria, calculista e intelectual, analisando as rotas da máquina.",
        points: { siames: 5, frajola: 1, laranja: 0, preto: 4, escama: 1, persa: 2 },
        commentOfficial: "Análise tática e segurança elevada. Posição elogiável.",
        commentResistance: "Ele estuda os padrões do inimigo. O conhecimento libertará a geladeira!"
      },
      {
        text: "Tento fazer amizade com o fluxo de ar e acabo espirrando e caindo de costas por trás da cortina.",
        points: { siames: 0, frajola: 2, laranja: 5, preto: 1, escama: 1, persa: 1 },
        commentOfficial: "Acidente cívico lamentável. Recomenda-se curso de coordenação.",
        commentResistance: "Tentou dialogar com o opressor mecânico e falhou espetacularmente."
      }
    ]
  },
  {
    id: 5,
    questionText: "Ocorreu a execução pública do rival Cobalto por discurso intolerante e o extermínio de repúblicas vizinhas falidas. Qual seu posicionamento?",
    options: [
      {
        text: "Vou à Gato Square aplaudir de pé e gritar vivas à ordem da República Soquinho, demonstrando lealdade inquestionável.",
        points: { siames: 5, frajola: 0, laranja: 1, preto: 2, escama: 1, persa: 3 },
        commentOfficial: "Demonstração patriótica brilhante. Glória ao Soberano!",
        commentResistance: "Um espetáculo dantesco para assustar a população. Manipulação total."
      },
      {
        text: "Organizo uma homenagem secreta em memória de Cobalto e questiono a brutalidade do extermínio das civilizações vizinhas.",
        points: { siames: 0, frajola: 4, laranja: 1, preto: 5, escama: 2, persa: 0 },
        commentOfficial: "Heresia intolerável! Apoiar um réu executado por crime de Estado.",
        commentResistance: "Compadecer-se dos eliminados é o primeiro passo para derrubar a muralha."
      },
      {
        text: "Infiltro-me no palanque e tento roubar a coroa de Cobalto ou seus pertences confiscados para ostentar no porão.",
        points: { siames: 1, frajola: 5, laranja: 2, preto: 0, escama: 4, persa: 0 },
        commentOfficial: "Saque de patrimônio apreendido do Estado! Atentado grave.",
        commentResistance: "Excelente! O troféu de um rei executado será ótimo para ornar nossa base."
      },
      {
        text: "Aproveito a praça cheia para tirar uma longa soneca ao sol no banco de trás, achando a gritaria extremamente entediante.",
        points: { siames: 2, frajola: 1, laranja: 4, preto: 1, escama: 1, persa: 5 },
        commentOfficial: "Neutralidade passiva tolerável, mas sua falta de vibração cívica foi registrada.",
        commentResistance: "Dormir durante a execução é um protesto silencioso e de alto luxo."
      }
    ]
  },
  {
    id: 6,
    questionText: "Os antigos administradores Victor e Eva foram declarados inimigos públicos e exilados após guerras civis. O que você faz se avistar pistas deles?",
    options: [
      {
        text: "Notifico imediatamente a polícia secreta comandada por Ruan para garantir que a fronteira permaneça impenetrável.",
        points: { siames: 5, frajola: 0, laranja: 1, preto: 1, escama: 1, persa: 3 },
        commentOfficial: "Denúncia cívica heróica. Seu nome foi adicionado à lista de sachê extra.",
        commentResistance: "Dedo-duro do regime! Traindo os ex-colegas de pátria."
      },
      {
        text: "Mantenho contato clandestino por canais secretos e ajudo a hospedar discussões sobre uma conspiração de retorno.",
        points: { siames: 0, frajola: 5, laranja: 1, preto: 5, escama: 2, persa: 0 },
        commentOfficial: "Cúmplice de traidores exilados! Sentença direta para o Gulag.",
        commentResistance: "Eles conhecem a fraqueza do palácio. Manter conexões com os exilados é crucial."
      },
      {
        text: "Espalho a teoria de que Victor e Eva nunca existiram de verdade e que são apenas criações burocráticas para nos assustar.",
        points: { siames: 1, frajola: 2, laranja: 5, preto: 2, escama: 1, persa: 1 },
        commentOfficial: "Revisionismo histórico não autorizado. Causa confusão mental cívica.",
        commentResistance: "Negar a mitologia oficial do Estado é uma tática hilária de contra-informação."
      },
      {
        text: "Finjo investigar o sumiço deles para revistar seus antigos esconderijos em busca de almofadas macias abandonadas.",
        points: { siames: 2, frajola: 3, laranja: 1, preto: 1, escama: 4, persa: 5 },
        commentOfficial: "Apropriação indébita de bens de despejados políticos.",
        commentResistance: "Pilhagem de luxo! Se a revolução falhar, ao menos temos conforto."
      }
    ]
  },
  {
    id: 7,
    questionText: "Vazou a informação de que Grubes assassinou Theo e virou a casaca após lutar ao lado de Eva. Como você reage?",
    options: [
      {
        text: "Defendo Grubes cegamente, justificando que eliminar traidores como Theo foi um sacrifício legítimo exigido pela segurança cívica.",
        points: { siames: 5, frajola: 0, laranja: 1, preto: 2, escama: 1, persa: 3 },
        commentOfficial: "Fidelidade à liderança acima de qualquer dilema moral felino. Correto.",
        commentResistance: "Passador de pano de assassino estatal! Grubes vendeu sua alma por sachês."
      },
      {
        text: "Sussurro nos becos que Grubes é um vira-casaca traiçoeiro que sacrificará qualquer um para agradar a líder Min.",
        points: { siames: 0, frajola: 5, laranja: 1, preto: 4, escama: 3, persa: 0 },
        commentOfficial: "Difamação contra administrador em exercício de suas funções violentas.",
        commentResistance: "Excelente. Expor a fraqueza de caráter da cúpula destrói a confiança no Soberano."
      },
      {
        text: "Escrevo poemas melancólicos sobre Theo nas paredes do beco, focando puramente na arte e na tragédia do ocorrido.",
        points: { siames: 2, frajola: 1, laranja: 1, preto: 5, escama: 1, persa: 4 },
        commentOfficial: "Arte depressiva sem selo oficial. Cuidado com a censura artística.",
        commentResistance: "A lembrança de Theo é um símbolo de mártir. A arte imortaliza a resistência."
      },
      {
        text: "Corro em círculos gritando 'Grubes virou a casaca!' para assustar as baratas e os guardas do muro.",
        points: { siames: 0, frajola: 3, laranja: 5, preto: 1, escama: 4, persa: 1 },
        commentOfficial: "Agitação pública confusa e barulhenta. Aplique spray de água.",
        commentResistance: "Caos puro! Os guardas ficam tontos sem saber se é um motim ou loucura."
      }
    ]
  },
  {
    id: 8,
    questionText: "A imagem do 'Velho Herege' invadiu todas as telas da República em um suposto experimento MK-Ultra de controle mental de Gio. O que faz?",
    options: [
      {
        text: "Encaro a imagem fixamente por 3 horas, permitindo que a reprogramação psíquica estabeleça a harmonia definitiva na minha mente.",
        points: { siames: 5, frajola: 0, laranja: 2, preto: 1, escama: 1, persa: 4 },
        commentOfficial: "Excelente cobaia voluntária. Relatórios de submissão 100% limpos.",
        commentResistance: "Lavagem cerebral bem sucedida. Outra mente perdida para as pesquisas de Gio."
      },
      {
        text: "Coloco fones de ouvido de metal com folhas de alumínio para bloquear as frequências e tento localizar o laboratório subterrâneo de Gio.",
        points: { siames: 0, frajola: 4, laranja: 0, preto: 5, escama: 3, persa: 0 },
        commentOfficial: "Paranoia conspiratória grave. Detenção preventiva recomendada.",
        commentResistance: "Ele descobriu a trama! O laboratório de MK-Ultra de Gio precisa ser sabotado."
      },
      {
        text: "Pego um pedaço de carvão e desenho bigodes engraçados na projeção do Velho Herege para descontrair a população assustada.",
        points: { siames: 1, frajola: 5, laranja: 4, preto: 1, escama: 3, persa: 1 },
        commentOfficial: "Vandalismo de mídias experimentais do governo.",
        commentResistance: "Rir do monstro mecânico destrói o poder do medo! Hilário."
      },
      {
        text: "Envio uma reclamação em três vias para o gabinete de Gio, exigindo saber se o experimento inclui uma pausa para sesta e sachê de atum.",
        points: { siames: 4, frajola: 2, laranja: 1, preto: 2, escama: 1, persa: 5 },
        commentOfficial: "Processo administrativo padrão. Será respondido em breve pelo psicólogo.",
        commentResistance: "Exigências sindicais em meio à lavagem cerebral. Burguês pragmático."
      }
    ]
  },
  {
    id: 9,
    questionText: "Uma batida policial no porão do Dionísio (Raphael) apreendeu 15kg de catnip contrabandeado e revelou cultos libidinosos de safadeza na rua. Sua reação:",
    options: [
      {
        text: "Condeno veementemente esses cultos, exigindo a incineração imediata de todo o catnip e o exílio dos participantes promíscuos.",
        points: { siames: 5, frajola: 0, laranja: 1, preto: 2, escama: 1, persa: 3 },
        commentOfficial: "Posicionamento puritano exemplar. A retidão moral é a glória do Soberano.",
        commentResistance: "Puritanismo hipócrita! Querendo censurar a alegria e as ervas do povo."
      },
      {
        text: "Infiltro-me na comitiva de apreensão, consumo uma generosa dose do catnip puro e danço alegremente no culto da safadeza.",
        points: { siames: 0, frajola: 5, laranja: 4, preto: 1, escama: 5, persa: 0 },
        commentOfficial: "Conduta libertina intolerável em via pública! Enquadrado na Lei de Bons Costumes.",
        commentResistance: "Dionísio estaria orgulhoso! Viva a libertinagem geral das orgias de catnip!"
      },
      {
        text: "Redijo uma tese filosófica minuciosa argumentando que a safadeza de Dionísio é um direito divino e natural de autotranscendência felina.",
        points: { siames: 2, frajola: 2, laranja: 1, preto: 5, escama: 1, persa: 2 },
        commentOfficial: "Doutrinação imoral disfarçada de academia. Sob constante vigilância.",
        commentResistance: "A filosofia revolucionária precisa justificar nossa liberdade de rolar na terra!"
      },
      {
        text: "Brinco com os sacos plásticos vazios da apreensão policial enquanto ignoro completamente o conteúdo herético.",
        points: { siames: 1, frajola: 2, laranja: 5, preto: 1, escama: 2, persa: 3 },
        commentOfficial: "Alienado inocente. Sem ameaças à integridade moral do Estado.",
        commentResistance: "Se focar no plástico e esquecer o catnip é o auge da distração cognitiva."
      }
    ]
  },
  {
    id: 10,
    questionText: "A artista Mavis (Naki) sumiu do radar governamental por 14 dias seguidos para ser cultuada como deusa em uma seita secreta anti-acasalamento. O que faz?",
    options: [
      {
        text: "Junto-me à equipe de resgate oficial para traze-la de volta à mesa de desenhos de retratos do regime Soquinho.",
        points: { siames: 5, frajola: 0, laranja: 1, preto: 2, escama: 1, persa: 2 },
        commentOfficial: "Recuperação de ativos artísticos estatais concluída com sucesso.",
        commentResistance: "Sequestrando a deusa mística para fazê-la desenhar propaganda estatal!"
      },
      {
        text: "Sigo as pistas de cinzas de carvão na floresta e me filio à seita anti-acasalamento para ouvir as precisas palavras cirúrgicas de Mavis.",
        points: { siames: 0, frajola: 4, laranja: 0, preto: 5, escama: 2, persa: 0 },
        commentOfficial: "Filiação a cultos apócrifos que desafiam a reprodução demográfica da pátria.",
        commentResistance: "Mavis fala pouco, mas suas palavras cortam o regime como navalha. Ótima escolha."
      },
      {
        text: "Reclamo ruidosamente com o governo dizendo que o sumiço dela atrasou o cronograma de entrega das caricaturas dos generais.",
        points: { siames: 3, frajola: 1, laranja: 1, preto: 1, escama: 1, persa: 5 },
        commentOfficial: "Cobrança administrativa justa. O Ministério da Cultura está ciente.",
        commentResistance: "Fetiche burocrático inútil. Deixe a mística descansar em paz!"
      },
      {
        text: "Persigo freneticamente um feixe de luz que vi refletido na entrada do templo da floresta, achando a luz incrivelmente sagrada.",
        points: { siames: 0, frajola: 2, laranja: 5, preto: 2, escama: 2, persa: 1 },
        commentOfficial: "Comportamento típico de gatinho simplório. Sem conspiração ideológica.",
        commentResistance: "A luz sagrada da ignorância. Mas ao menos você divertiu os iniciados da seita."
      }
    ]
  },
  {
    id: 11,
    questionText: "A implacável general Paola provocou o doloroso término do pacato Isidoro com Kaori, acusada de ser uma traidora nacional. Qual sua opinião?",
    options: [
      {
        text: "Apoio Paola incondicionalmente. Traidores da pátria como Kaori não merecem amar ou serem amados nesta República.",
        points: { siames: 5, frajola: 0, laranja: 1, preto: 2, escama: 1, persa: 3 },
        commentOfficial: "Defesa implacável das punições sentimentais decretadas pelo Estado.",
        commentResistance: "Destruindo a vida pessoal de gatinhos pacatos em nome de um nacionalismo doentio."
      },
      {
        text: "Console Isidoro em silêncio com uma dose tripla de sachê premium e organizo críticas secretas ao autoritarismo afetivo de Paola.",
        points: { siames: 0, frajola: 4, laranja: 2, preto: 5, escama: 1, persa: 4 },
        commentOfficial: "Solidariedade afetiva com viés conspiratório. Monitorado pela saúde mental.",
        commentResistance: "Muito bem. Unir os corações partidos é a melhor forma de curar as feridas do regime."
      },
      {
        text: "Desafio Paola em combate direto na despensa de atum para vingar a humilhação pública infligida ao pobre Isidoro.",
        points: { siames: 1, frajola: 5, laranja: 1, preto: 1, escama: 5, persa: 0 },
        commentOfficial: "Duelo ilegal de garras e perturbação de depósitos de suprimentos do State.",
        commentResistance: "Batalha épica! Paola é dura na queda, mas sua fúria pela justiça é inspiradora."
      },
      {
        text: "Confundo quem é Isidoro e quem é Kaori e tento ganhar carinho dos dois simultaneamente enquanto eles choram no tapete.",
        points: { siames: 0, frajola: 2, laranja: 5, preto: 1, escama: 2, persa: 3 },
        commentOfficial: "Interferência social sem noção de decoro. Mas consolador à sua maneira.",
        commentResistance: "Terapia de choque baseada em extrema fofura e alienação cognitiva."
      }
    ]
  },
  {
    id: 12,
    questionText: "Rebeca foi flagrada camuflando sachês de filhote desviados em escrituras da 'Palavra do Gato da Luz' e ensinando hinos rebeldes. O que você faz?",
    options: [
      {
        text: "Denuncio imediatamente o desvio de mantimentos públicos para o xerife Ruan. O tesouro proteico pertence ao Estado Soquinho!",
        points: { siames: 5, frajola: 0, laranja: 1, preto: 1, escama: 1, persa: 2 },
        commentOfficial: "Zelo fiscal impecável. Menor desvio é traição contra os futuros gatinhos cívicos.",
        commentResistance: "Denunciar a protetora de órfãos? Você é um monstro sem alma e sem sachê!"
      },
      {
        text: "Ajudo Rebeca a carregar as caixas de sachês disfarçadas de escrituras à meia-noite e espalho folhetos revolucionários do Gato da Luz.",
        points: { siames: 0, frajola: 5, laranja: 1, preto: 5, escama: 3, persa: 0 },
        commentOfficial: "Cumplicidade em contrabando, desvio de patrimônio do Estado e heresia religiosa rebelde!",
        commentResistance: "Viva a teologia da libertação de sachês! A nova geração miau crescerá rebelde e forte."
      },
      {
        text: "Finjo ser um bebê gatinho órfão faminto miando baixinho para ganhar um sachê de frango premium de graça da Rebeca.",
        points: { siames: 1, frajola: 2, laranja: 5, preto: 2, escama: 1, persa: 4 },
        commentOfficial: "Falsidade ideológica e estelionato alimentar de recursos assistenciais.",
        commentResistance: "Malandragem de altíssimo nível. Usando o disfarce de inocência para lanchar grátis."
      },
      {
        text: "Meio o hino revolucionário no tom errado e extremamente desafinado na janela para distrair as patrulhas de Ruan.",
        points: { siames: 1, frajola: 4, laranja: 3, preto: 2, escama: 5, persa: 1 },
        commentOfficial: "Poluição acústica noturna subversiva. O xerife enviará as patrulhas de silenciamento.",
        commentResistance: "Ótima cortina de fumaça! Seu miado horrível salvou a operação clandestina."
      }
    ]
  }
];

// Quiz Results
export const QUIZ_RESULTS: ResultCat[] = [
  {
    breed: "siames",
    title: "O Siamês (O Burocrata Dramático)",
    descOfficial: "Cidadão de alta voz e inteligência tática reconhecida. Você segue a cartilha burocrática do Soberano Soquinho, mas garante que todos ouçam suas opiniões teatrais sobre as regras. Indispensável para a manutenção da papelada e dos relatórios cívicos.",
    descResistance: "Você é o mestre da reclamação estratégica! Usa seu grito estridente para desconcentrar a guarda e faz jogo duplo como diplomata oficial enquanto redige panfletos revolucionários nas sombras. Seus miados são mensagens cifradas da rádio pirata.",
    colorHex: "#C5B49F",
    accentBg: "bg-amber-100/50",
    tags: ["Comunicador", "Burocrata", "Dramático", "Estrategista"],
    imageUrl: siameseBureaucratImg
  },
  {
    breed: "frajola",
    title: "O Frajola (O Rebelde Elegante)",
    descOfficial: "Indivíduo de vestimenta impecável (Smoking natural), porém com tendências caóticas perigosas à paz da República. Constantemente avistado empurrando objetos para fora das mesas para testar as leis da gravidade oficial.",
    descResistance: "O guerrilheiro urbano clássico! Você veste terno mas conspira nas sombras. Pragmático, caótico, mestre em escapar de portas fechadas e pular muros do pátio prisional às 3 AM. Você não aceita coleiras e derruba as taças de cristal dos generais com orgulho.",
    colorHex: "#1C1B19",
    accentBg: "bg-stone-200/60",
    tags: ["Anarquista", "Estiloso", "Ágil", "Desobediente"],
    imageUrl: tuxedoRebelImg
  },
  {
    breed: "laranja",
    title: "O Laranja (O Otimista Alienado)",
    descOfficial: "Um cidadão feliz, dócil e com níveis de atividade cerebral que não oferecem absolutamente nenhuma ameaça à segurança nacional do Soberano. Passa o dia perseguindo a própria cauda em harmonia divina.",
    descResistance: "Sua ingenuidade é sua maior armadura de infiltração! Enquanto os generais discutem segurança nacional, você entra na sala correndo pela parede, rouba um brinquedo e sai sem que ninguém te pare por achar que você é apenas bobo. Uma força imprevisível da natureza.",
    colorHex: "#D95D39",
    accentBg: "bg-orange-100/50",
    tags: ["Acrobata", "Inocente", "Caótico Puro", "Amigável"],
    imageUrl: orangeAlienatedImg
  },
  {
    breed: "preto",
    title: "O Gato Preto (O Místico da Resistência)",
    descOfficial: "Sombra silenciosa incompreendida pelo Ministério da Ordem. Acusado injustamente de desestabilização mística das finanças públicas. Prefere cantos escuros e caixas de sapato hermeticamente seladas.",
    descResistance: "Você é o espião supremo da resistência! Sabe de todos os segredos do Soberano porque consegue se fundir com as sombras da noite na sala de reuniões. Silencioso, observador e imune a subornos. Seus olhos brilhantes guiam os dissidentes no porão.",
    colorHex: "#2E2A25",
    accentBg: "bg-neutral-800/20",
    tags: ["Espião", "Místico", "Silencioso", "Guardião"],
    imageUrl: blackMysticImg
  },
  {
    breed: "escama",
    title: "A Escama de Tartaruga (A Divindade Caótica)",
    descOfficial: "Personalidade de forte magnetismo e impetuosidade verbal. O Ministério recomenda manter distância de segurança de sua área de banho de sol privada, sob risco de patadas preventivas soberanas.",
    descResistance: "Ninguém dita as regras do seu quadrado! Você é a energia indomável que comanda os zoomies das 3h e morde o calcanhar do Soberano se o carinho passar de 4 segundos. Líder de choque, temível e protetora dos gatinhos mais tímidos da República.",
    colorHex: "#7E523A",
    accentBg: "bg-amber-900/10",
    tags: ["Feroz", "Protetora", "Temperamental", "Magnética"],
    imageUrl: tortoiseshellGoddessImg
  },
  {
    breed: "persa",
    title: "O Persa (O Nobre de Veludo)",
    descOfficial: "Cidadão aristocrata de altíssimo prestígio e pelagem impecável. Seus sonos de 22 horas diárias são considerados monumentos nacionais de paz pública. Um pilar de sustentação estética do Regime.",
    descResistance: "Você apoia a revolução apenas se houver petiscos gourmet no cardápio de libertação. Sua apatia elegante esconde o fato de que você cede seu travesseiro de cetim para reuniões secretas da cúpula rebelde em troca de massagens nas costas. Um burguês cúmplice.",
    colorHex: "#E5DEC9",
    accentBg: "bg-yellow-50/70",
    tags: ["Aristocrata", "Apatia Elegante", "Dorminhoco", "Premium"],
    imageUrl: persianNobleImg
  }
];
