import React, { useState } from "react";
import { motion } from "motion/react";
import { Member } from "../types";
import {
  HandDrawnPushPin,
  HandDrawnPaperClip,
  HandDrawnStar,
  HandDrawnScratch,
  HandDrawnPawPrint,
  CrownDoodle
} from "./HandDrawnSvg";

interface CollageCardProps {
  member: Member;
  isResistanceMode: boolean;
}

export const CollageCard: React.FC<CollageCardProps> = ({ member, isResistanceMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Helper for Tape Rendering
  const renderTape = () => {
    switch (member.tapeStyle) {
      case "top":
        return (
          <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-100/70 border-l border-r border-dashed border-yellow-300/60 rotate-[-1deg] shadow-xs z-10 backdrop-blur-[0.5px]"></div>
        );
      case "angled":
        return (
          <div className="absolute top-[-8px] right-[-10px] w-20 h-5 bg-yellow-100/60 border-l border-r border-dashed border-yellow-300/60 rotate-[35deg] shadow-xs z-10 backdrop-blur-[0.5px]"></div>
        );
      case "double":
        return (
          <>
            <div className="absolute top-[-10px] left-4 w-16 h-5 bg-yellow-100/70 border-l border-r border-dashed border-yellow-300/60 rotate-[-15deg] shadow-xs z-10"></div>
            <div className="absolute bottom-[-8px] right-4 w-16 h-5 bg-yellow-100/70 border-l border-r border-dashed border-yellow-300/60 rotate-[10deg] shadow-xs z-10"></div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-6 border-2 rounded-lg shadow-md transition-all duration-500 font-sans ${member.tilt} ${member.colorTheme} ${
        isResistanceMode
          ? "border-dashed border-terracota/80 hover:shadow-xl hover:rotate-0"
          : "border-solid border-moss hover:shadow-lg hover:-translate-y-1"
      } flex flex-col justify-between min-h-[460px] overflow-hidden`}
      id={`member-card-${member.id}`}
    >
      {/* Tape or Pin Asset */}
      {!isResistanceMode && member.tapeStyle !== "none" && renderTape()}
      {isResistanceMode && (
        <div className="absolute top-1 left-4 z-20">
          <HandDrawnPaperClip className="w-8 h-8 rotate-[-10deg] text-terracota" />
        </div>
      )}
      {!isResistanceMode && member.tapeStyle === "none" && (
        <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 z-20">
          <HandDrawnPushPin className="w-7 h-7" />
        </div>
      )}

      {/* Background Doodles & Textures */}
      {isResistanceMode && (
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <HandDrawnScratch className="absolute bottom-4 right-2 w-24 h-24 text-charcoal" />
          <HandDrawnPawPrint className="absolute top-12 right-12 w-12 h-12 text-terracota rotate-[15deg]" />
          <div className="absolute bottom-16 left-6 font-hand text-lg text-terracota font-bold">
            #FichaRevolucionaria
          </div>
        </div>
      )}

      {/* Main card body */}
      <div className="relative z-10">
        {/* Photo Container styled as vintage film / polaroid */}
        <div
          className={`relative bg-white p-3 pb-8 shadow-md border border-neutral-200 mb-4 transition-transform duration-500 ${
            isResistanceMode ? "rotate-[-3deg] border-dashed border-terracota" : "rotate-1"
          }`}
        >
          {/* Polaroid Image */}
          <div className="relative aspect-square w-full overflow-hidden bg-stone-100">
            {/* Film noise overlay */}
            <div className="absolute inset-0 bg-neutral-900/5 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute inset-0 scratched-overlay pointer-events-none"></div>
            
            <img
              src={member.photoUrl}
              alt={member.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter sepia-[0.15] contrast-[0.95] brightness-[1.02]"
            />
            
            {/* Stamp on the Photo */}
            {isResistanceMode ? (
              <div className="absolute top-2 right-2 scale-75 select-none z-10">
                <span className="stamp-effect px-2 py-0.5 text-[10px] tracking-tighter uppercase font-mono font-bold bg-white/90">
                  CENSURADO
                </span>
              </div>
            ) : (
              <div className="absolute bottom-2 right-2 scale-75 select-none z-10">
                <span className="stamp-secret px-2 py-0.5 text-[8px] uppercase tracking-normal font-mono font-bold bg-white/90 border-stone-600 text-stone-600">
                  REGISTRO Nº {member.id.toUpperCase().slice(0, 3)}-2Y
                </span>
              </div>
            )}
          </div>
          {/* Polaroid Handwriting label */}
          <div className="mt-2 text-center font-hand text-xl font-bold text-stone-700 tracking-tight">
            {member.name}
          </div>
        </div>

        {/* Member Metadata Header */}
        <div className="border-b border-stone-300 pb-2 mb-3">
          <div className="flex justify-between items-start">
            <h3 className="font-serif text-2xl font-bold text-charcoal tracking-tight flex items-center gap-1.5">
              {member.name}
              {isResistanceMode && member.id === "andre" && (
                <CrownDoodle className="w-6 h-6 text-terracota" />
              )}
            </h3>
            <span className="font-mono text-[10px] px-2 py-0.5 bg-stone-200/60 rounded-md text-stone-700 border border-stone-300">
              {member.birthday}
            </span>
          </div>

          <div className="mt-1 flex flex-wrap gap-1">
            <span className="text-[10px] font-mono text-moss bg-emerald-100/50 px-1.5 py-0.5 rounded border border-emerald-200/50">
              {member.mbti}
            </span>
            <span className="text-[10px] font-mono text-terracota bg-orange-100/40 px-1.5 py-0.5 rounded border border-orange-200/30">
              {member.enneagram}
            </span>
          </div>
        </div>

        {/* Role & Bio Text */}
        <div className="space-y-3">
          {/* Role block */}
          <div>
            <span className="block font-mono text-[9px] uppercase tracking-wider text-stone-500">
              {isResistanceMode ? "CODINOME REBELDE" : "FUNÇÃO CONSTITUCIONAL"}
            </span>
            <p
              className={`text-xs font-bold font-serif ${
                isResistanceMode ? "text-terracota" : "text-moss"
              } leading-tight mt-0.5`}
            >
              {isResistanceMode ? member.roleResistance : member.roleRegime}
            </p>
          </div>

          {/* Bio block */}
          <div className="text-xs text-stone-700 leading-relaxed font-serif">
            {isResistanceMode ? (
              <div className="space-y-2">
                <span className="block font-mono text-[9px] uppercase tracking-wider text-terracota font-bold">
                  S.S.G.S. OBSERVATION LOG
                </span>
                <p className="italic relative pl-3 border-l-2 border-terracota">
                  &ldquo;{member.resistanceBio}&rdquo;
                </p>
                {/* Redacted secret hint */}
                <div className="text-[10px] font-mono mt-2 bg-charcoal text-stone-200 p-1.5 rounded border border-stone-700">
                  <span className="text-terracota font-bold">REDACTED LOG:</span>{" "}
                  <span className="redacted" title="Passe o mouse para ler">
                    {member.redactedLog}
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-1">
                <span className="block font-mono text-[9px] uppercase tracking-wider text-stone-500">
                  ATESTADO DE COMPORTAMENTO
                </span>
                <p>&ldquo;{member.regimeBio}&rdquo;</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Stamp / Action */}
      <div className="mt-4 pt-3 border-t border-dashed border-stone-300 flex items-center justify-between">
        <div className="flex gap-1">
          {isResistanceMode ? (
            <>
              <HandDrawnStar className="w-4 h-4 text-terracota" />
              <HandDrawnStar className="w-4 h-4 text-terracota" />
              <HandDrawnStar className="w-4 h-4 text-terracota" />
            </>
          ) : (
            <div className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse"></div>
          )}
        </div>
        <span className="font-mono text-[10px] text-stone-500 tracking-wider">
          {isResistanceMode ? "STATUS: ATIVO" : "STATUS: REGULAMENTAR"}
        </span>
      </div>
    </motion.div>
  );
};
