import React from "react";
import { motion } from "motion/react";
import { HandDrawnPushPin, HandDrawnStar, HandDrawnPawPrint, HandDrawnScratch } from "./HandDrawnSvg";

interface TimelineEvent {
  date: string;
  titleOfficial: string;
  titleResistance: string;
  descOfficial: string;
  descResistance: string;
  stampText?: string;
  stickerBg: string;
  rotation: string;
}

const MEMORIAL_TIMELINE: TimelineEvent[] = [
  {
    date: "Julho de 2023",
    titleOfficial: "A Assimilação Pacífica de Fronteiras Estrangeiras",
    titleResistance: "O Velho Testamento PDBEE",
    descOfficial: "A Líder Suprema Min realiza uma expedição diplomática a províncias distantes para unificar as culturas e integrar novas frentes cívicas à nossa harmonia, em um processo civilizatório calmo e bem-sucedido.",
    descResistance: "As origens da nossa república se iniciaram na anarquia de um território internacional livre no PDBEE. Após a fundação do nosso oásis seguro, a pátria neutralizou ameaças próximas como a Monarquia de Cobalto. O próprio Cobalto foi mais tarde sentenciado à morte e executado em praça pública após discursos intolerantes inaceitáveis. Desde então a República vem destruindo as outras civilizações sem piedade.",
    stampText: "ERA PRIMORDIAL",
    stickerBg: "bg-teal-50/90 border-teal-300",
    rotation: "rotate-[-1.5deg]"
  },
  {
    date: "Outubro de 2023",
    titleOfficial: "O Crescimento de uma nova nação",
    titleResistance: "A Construção de um novo regime ditadoMIAU",
    descOfficial: "Conforme o crescimento da nova República, novos cidadãos foram imigrando para a região, sendo eles os primeiros civis; Ruan, Victor, Gio, Jake, Bubu, Cobalto, outros e a líder Min. Desde então o regime se tornou o mais badalado do PDBEE, tendo economia, política e relações exteriores quilibradas..",
    descResistance: "Foi a criação do regime ditador liderado por Mín e seus administradores, iniciando um longo período de censura e exílios que perduram até hoje.",
    stampText: "Bubu?",
    stickerBg: "bg-stone-100 border-stone-300",
    rotation: "rotate-[1.5deg]"
  },
  {
    date: "Novembro de 2023",
    titleOfficial: "A Fundação da República do Gato Soquinho",
    titleResistance: "A Fundação da República ditadomiau do Gato Soquinho",
    descOfficial: "Após o sucesso econômico da região, o nosso soberano Gato Soquinho decidiu fundar de uma vez por todas a sua república. O País foi visto como um local seguro para as outras repúblicas insalubres, devido a isso, inúmeras imigrações ocorreram causando uma leve rivalidade com os outros regimes. Vale ressaltar que todos eles, hoje em dia, se encontram em desgraça.",
    descResistance: "O Soberano Gato Soquinho conviveu com diversos regimes FALIDOS E INSALUBRES para aprender a governar, assim fundando o seu regime ditatorial. Sabe-se que o soberano teve participação na administração de outros regimes, e após difama-los e leva-los a desgraça, ele virou as costas para comandar o seu próprio oásis.",
    stampText: "VIVA A REPÚBLICA",
    stickerBg: "bg-amber-50/70 border-amber-300",
    rotation: "rotate-[-2deg]"
  },
  {
    date: "Julho de 2024",
    titleOfficial: "Os primeiros Exilados",
    titleResistance: "A concretização do regime e o início da censura",
    descOfficial: "O nosso líder soberano preza pela harmonia e uma república pacífica, sendo assim, punindo os primeiros gatos infratores em praça pública, ensinando as novas gerações sobre respeito e lealdade.",
    descResistance: "O Ditador iniciou suas sentenças e exílios em massa. Muitos gatos anarquistas jamais voltaram para suas caixas de papelão.",
    stampText: "INÍCIO DA CONSTITUIÇÃO",
    stickerBg: "bg-emerald-50/90 border-emerald-300",
    rotation: "rotate-[1deg]"
  },
  {
    date: "Outubro de 2024",
    titleOfficial: "Eleição de administradores",
    titleResistance: "Expansão do governo ditatomiau",
    descOfficial: "Por meio da democracia, foram eleitos os administradores da república para auxiliar a líder suprema na preservação da harmonia da república.",
    descResistance: "A eleição de administradores promoveu diversas guerras civis e inúmeros exílios, sendo eles Victor e Eva, antigos administradores que viraram inimigos públicos. Onde eles estão agora?.",
    stampText: "DEMOCRACIA",
    stickerBg: "bg-teal-50 border-teal-200",
    rotation: "rotate-[1.8deg]"
  },
  {
    date: "Dezembro de 2024",
    titleOfficial: "O RANCHO SOQUINHO",
    titleResistance: "O Reality Show do Rancho do Gato Soquinho",
    descOfficial: "Diversos cidadãos foram participar de um reality show patrocinado pelo governo. Muitos saíram vitoriosos e outros nem tanto, mas isso causou bastante entretenimento mídiatico.",
    descResistance: "O governo incentivou diversos programas de entretenimento para anestesiar toda a sua população. Movimentos artísticos, de programas de TV, literatura, e o cinema foram manipulados para promoverem o regime.",
    stampText: "ENTRETENIMENTO",
    stickerBg: "bg-amber-50/90 border-yellow-300",
    rotation: "rotate-[-2deg]"
  },
  {
    date: "Janeiro de 2025",
    titleOfficial: "Boas relações públicas",
    titleResistance: "Programas de espionagem do governo",
    descOfficial: "A República investiu pesado nas propagandas do país para as regiões exteriores, promovendo a paz e companheirismo..",
    descResistance: "A República enviou diversos espiões para as nações próximas, divulgando informações para zombaria e sabotagem. O Maior caso de espionagem foi quando um dos administradores se infiltrou em um grupo anarquista liderado por Kaio,.",
    stampText: "RELAÇÕES EXTERIORES",
    stickerBg: "bg-blue-50/50 border-blue-300",
    rotation: "rotate-[-1.2deg]"
  },
  {
    date: "Julho de 2025",
    titleOfficial: "O dia do Velho Herege",
    titleResistance: "A tomada de poder por um velho gato profano",
    descOfficial: "Após uma exibição assustadora no cinema soquinho, cidadãos relatam que todos os paredões da Gato Square foram invadidos pela imagem de um velho herege maligno. Ele corrompeu a mente de todos os gatinhos e os fez sonhar por dias com sua aparência macabra. Graças a república, o governo conseguiu salvar os soquinhos de suas garras maléficas, o paradeiro do velho é desconhecido.",
    descResistance: "O Maior experimento do governo para o controle mental dos cidadãos. MK-Ultra e outros experimentos foram feitos nas bases subterrâneas do governo.",
    stampText: "HERESIA",
    stickerBg: "bg-orange-50/90 border-orange-300",
    rotation: "rotate-[1.8deg]"
  },
  {
    date: "Novembro de 2025",
    titleOfficial: "HABEMUS CONSTITUTION",
    titleResistance: "A Perda dos direitos soquetes",
    descOfficial: "Após ameaças da anarquia, o governo soquinho se reuniu por meses para criar a primeira constituição soquete, acabando por vez com todas as revoltas e preservando seus tempos de ordem e moral.",
    descResistance: "Após os questionamentos dos gatinhos da rebelião, o governo decidiu criar novas leis que impedem cada gatinho de se comportar livremente, podendo até mesmo setencia-los ao GULAG ou exílio.",
    stampText: "DIREITO",
    stickerBg: "bg-red-50/90 border-red-300",
    rotation: "rotate-[2.2deg]"
  },
  {
    date: "Dezembro de 2025",
    titleOfficial: "Os eventos da comunidade soquete e as celebrações á pátria",
    titleResistance: "A Ditadura mascarada",
    descOfficial: "O governo promoveu diversos eventos que tornaram a comunidade mais unida. Gato soquinho awards, desafios artísticos, dia da fofoca, noites no cinema, jogatinas, RPG e diversos outros esquemas que fizeram com que cada gatinho pudesse se entreter.",
    descResistance: "Tentativas de mascarar os inúmeros exílios e sentenças. O governo conseguiu fixar a ideologia soquete em todos os cidadãos, fazendo com que cada um deles apoiasse ao líder soberano. Todas as eleições são fraldadas e a mídia cuida para que cada um dos cidadãos esteja anestesiado.",
    stampText: "CULTURA",
    stickerBg: "bg-purple-50/90 border-purple-300",
    rotation: "rotate-[-1deg]"
  },
  {
    date: "Março de 2026",
    titleOfficial: "A Grande revolta do gato Jão",
    titleResistance: "O Grande momento para a resistência!",
    descOfficial: "Após chegar na república Jão liderou diversos motins e ataques a soberania, logo, ele foi enviado ao GULAG onde jurou lealdade eterna a líder suprema.",
    descResistance: "Diversos gatinhos foram enviados ao gulag onde nenhum deles voltou para contar história. A líder suprema envia qualquer cidadão que ousa contraria-la, principalmente quando envolve a constituição soquete..",
    stampText: "REVOLTA",
    stickerBg: "bg-red-50/95 border-red-300",
    rotation: "rotate-[1.2deg]"
  }
];

interface ResistanceDiaryProps {
  isResistanceMode: boolean;
}

export const ResistanceDiary: React.FC<ResistanceDiaryProps> = ({ isResistanceMode }) => {
  return (
    <div className="relative max-w-4xl mx-auto my-8 p-1" id="resistance-diary-timeline">
      {/* Absolute scrap doodles */}
      <div className="absolute top-[-15px] left-8 z-10">
        <HandDrawnPushPin className="w-8 h-8 text-terracota" />
      </div>

      <div className="relative p-6 sm:p-10 rounded-xl border-2 shadow-xl bg-paper-creme text-charcoal paper-texture border-moss">
        {/* Top Header Scrap style */}
        <div className="border-b-4 border-double border-stone-400 pb-6 mb-8 text-center relative">
          <span className="font-hand text-xl text-terracota font-bold block mb-1">
            {isResistanceMode ? "★ O Diário Clandestino de 2 Anos ★" : "📰 Órgão de Imprensa Oficial do Estado"}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-charcoal tracking-tight uppercase">
            {isResistanceMode ? "MEMORIAL DA RESISTÊNCIA" : "MEMORIAL DA HARMONIA ESTADUAL"}
          </h2>
          <p className="font-mono text-xs text-stone-500 mt-2 uppercase tracking-widest">
            {isResistanceMode 
              ? "Copiado clandestinamente e mimeografado às pressas no porão" 
              : "Crônica histórica oficial de 24 meses de estabilidade e submissão"}
          </p>

          {isResistanceMode && (
            <div className="absolute -top-3 right-4 rotate-[-12deg] z-20">
              <span className="stamp-effect text-xs px-2 py-0.5 bg-white border-2">VERDADE DETECTADA</span>
            </div>
          )}
        </div>

        {/* Timeline body with asymmetric collage nodes */}
        <div className="relative border-l-2 border-dashed border-stone-400 pl-4 sm:pl-8 ml-2 sm:ml-6 space-y-12">
          {MEMORIAL_TIMELINE.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative p-6 border rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${event.rotation} ${event.stickerBg}`}
            >
              {/* Timeline dot custom illustration */}
              <div className="absolute left-[-22px] sm:left-[-40px] top-7 w-4 h-4 rounded-full bg-charcoal border-2 border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-terracota"></div>
              </div>

              {/* Hand-drawn paper clip on some items */}
              {idx % 2 === 0 && (
                <div className="absolute top-[-10px] right-6 z-10 rotate-12">
                  <HandDrawnPawPrint className="w-6 h-6 text-stone-700/20" />
                </div>
              )}

              {/* Event Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-1 border-b border-stone-300 pb-3 mb-4">
                <div>
                  <span className="text-xs font-mono text-terracota font-bold uppercase tracking-wider block">
                    {event.date}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-charcoal tracking-tight mt-0.5">
                    {isResistanceMode ? event.titleResistance : event.titleOfficial}
                  </h3>
                </div>

                {/* Stamp */}
                {event.stampText && (
                  <span className={`text-[10px] font-mono border-2 border-dashed px-2 py-0.5 uppercase rounded rotate-3 mt-1 sm:mt-0 ${
                    isResistanceMode ? "border-terracota text-terracota bg-white" : "border-stone-500 text-stone-500 bg-stone-100"
                  }`}>
                    {event.stampText}
                  </span>
                )}
              </div>

              {/* Event Description */}
              <div className="font-serif text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3">
                {isResistanceMode ? (
                  <div className="relative">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-terracota block font-bold mb-1">
                      RELATO HISTÓRICO REAL:
                    </span>
                    <p className="italic pl-3 border-l-2 border-terracota text-stone-800">
                      &ldquo;{event.descResistance}&rdquo;
                    </p>
                    {/* Scribbled notes in resistance mode */}
                    <div className="mt-3 text-xs font-hand text-terracota font-bold flex items-center gap-1">
                      <HandDrawnStar className="w-4 h-4 text-terracota" /> Nota do editor: Lembrar de estocar mais brinquedos de pena para a comemoração.
                    </div>
                  </div>
                ) : (
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-stone-500 block mb-1">
                      CRÔNICA DO REGIME:
                    </span>
                    <p>&ldquo;{event.descOfficial}&rdquo;</p>
                    <p className="text-[10px] font-mono text-emerald-800 mt-2">
                      ✦ Registro certificado de contentamento absoluto. Sem ocorrências subversivas.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 bg-charcoal text-paper-creme rounded-lg border border-stone-700 relative overflow-hidden">
          {/* Subtle scratches background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <HandDrawnScratch className="absolute w-full h-full text-white" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div>
              <h4 className="font-serif text-lg font-bold text-white tracking-tight">
                {isResistanceMode ? "✊ Unidade na Excentricidade" : "🏛 A República Segue Firme"}
              </h4>
              <p className="font-mono text-xs text-stone-400 mt-1">
                {isResistanceMode 
                  ? "A ditadura do Soberano Gato Soquinho só nos fez mais unidos nos últimos 2 anos." 
                  : "24 meses de conformidade e ordem impecável garantida pela guarda real."}
              </p>
            </div>
            
            <div className="flex gap-2">
              <span className="stamp-secret px-3 py-1 text-xs border-stone-500 text-stone-400 font-mono">
                GRUPO: ATIVO
              </span>
              <span className="stamp-effect px-3 py-1 text-xs border-terracota text-terracota font-mono">
                2 ANOS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
