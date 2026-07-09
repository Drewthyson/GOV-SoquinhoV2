import React from "react";

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

export const HandDrawnArrow: React.FC<SvgProps> = ({ className, color = "currentColor", ...props }) => (
  <svg
    viewBox="0 0 100 40"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M5,20 C30,5 70,5 90,15 M90,15 L80,10 M90,15 L82,24" />
    <path d="M20,25 C35,32 50,32 65,28" strokeDasharray="3 3" strokeWidth="1.5" />
  </svg>
);

export const HandDrawnPushPin: React.FC<SvgProps> = ({ className, color = "#D95D39", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}
  >
    {/* Pin Shadow */}
    <ellipse cx="12" cy="22" rx="4" ry="1.5" fill="rgba(0,0,0,0.15)" />
    {/* Pin body */}
    <path
      d="M11 4C11 2.89543 11.8954 2 13 2C14.1046 2 15 2.89543 15 4C15 5.10457 14.1046 6 13 6V11L17 14V16H13V21H11V16H7V14L11 11V6C11 5.10457 11 4.5 11 4Z"
      fill={color}
      stroke="#1C1B19"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M12 4.5C12 3.5 13.5 3.5 13.5 4.5" stroke="white" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

export const HandDrawnPaperClip: React.FC<SvgProps> = ({ className, color = "#7D8C77", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
);

export const HandDrawnStar: React.FC<SvgProps> = ({ className, color = "#D95D39", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12,2 L14.5,8.5 L21.5,9 L16.5,14 L18,21 L12,17.5 L6,21 L7.5,14 L2.5,9 L9.5,8.5 Z" />
  </svg>
);

export const HandDrawnScratch: React.FC<SvgProps> = ({ className, color = "#2E1E12", ...props }) => (
  <svg
    viewBox="0 0 100 80"
    fill="none"
    stroke={color}
    strokeWidth="3"
    strokeLinecap="round"
    className={className}
    {...props}
  >
    <path d="M10,20 C18,35 25,50 30,70" />
    <path d="M30,15 C40,32 48,50 52,68" />
    <path d="M52,22 C60,35 68,52 75,65" />
    <path d="M78,10 C85,30 88,48 92,62" />
  </svg>
);

export const HandDrawnPawPrint: React.FC<SvgProps> = ({ className, color = "currentColor", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill={color}
    className={className}
    {...props}
  >
    {/* Large main pad */}
    <path d="M12 11C10.07 11 8.5 12.57 8.5 14.5C8.5 16.1 9.5 18.5 12 18.5C14.5 18.5 15.5 16.1 15.5 14.5C15.5 12.57 13.93 11 12 11Z" />
    {/* 4 small toe pads */}
    <circle cx="7" cy="9.5" r="2" />
    <circle cx="10" cy="7.5" r="2" />
    <circle cx="14" cy="7.5" r="2" />
    <circle cx="17" cy="9.5" r="2" />
  </svg>
);

export const HandDrawnBotanicalBranch: React.FC<SvgProps> = ({ className, color = "#3F4E3F", ...props }) => (
  <svg
    viewBox="0 0 120 200"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {/* Main stem */}
    <path d="M60,190 C62,150 55,90 35,20" />
    {/* Left leaves */}
    <path d="M54,140 C40,135 28,142 34,152 C40,162 50,155 54,140 Z" fill={`${color}20`} />
    <path d="M47,100 C30,95 22,105 28,115 C34,125 43,115 47,100 Z" fill={`${color}20`} />
    <path d="M40,60 C25,52 18,65 24,72 C30,80 37,70 40,60 Z" fill={`${color}20`} />
    {/* Right leaves */}
    <path d="M57,160 C70,158 78,168 72,175 C66,182 58,172 57,160 Z" fill={`${color}20`} />
    <path d="M51,118 C65,115 72,125 66,132 C60,140 52,130 51,118 Z" fill={`${color}20`} />
    <path d="M45,78 C58,70 65,80 60,88 C55,95 48,88 45,78 Z" fill={`${color}20`} />
    <path d="M38,38 C50,30 55,40 50,48 C45,55 40,48 38,38 Z" fill={`${color}20`} />
  </svg>
);

export const CrownDoodle: React.FC<SvgProps> = ({ className, color = "#D95D39", ...props }) => (
  <svg
    viewBox="0 0 60 40"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M10,32 L50,32 L55,12 L40,22 L30,8 L20,22 L5,12 Z" fill={`${color}15`} />
    <circle cx="5" cy="11" r="1.5" fill={color} />
    <circle cx="30" cy="7" r="1.5" fill={color} />
    <circle cx="55" cy="11" r="1.5" fill={color} />
    {/* Little adjustments below */}
    <path d="M15,35 L45,35" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>
);

export const HandDrawnHeart: React.FC<SvgProps> = ({ className, color = "#D95D39", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export const PaperClipSvg: React.FC<SvgProps> = ({ className, color = "#7D8C77", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
  </svg>
);

export const RedactedStamp: React.FC<{ text: string; className?: string; color?: string }> = ({
  text,
  className = "",
  color = "text-terracota"
}) => {
  return (
    <div
      className={`border-4 border-dashed border-current px-3 py-1 font-mono uppercase font-black text-sm tracking-widest inline-block select-none ${color} ${className}`}
      style={{ transform: "rotate(-6deg)" }}
    >
      {text}
    </div>
  );
};
