
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

export const SectionHeading: React.FC<Props> = ({ title, subtitle, icon }) => {
  return (
    <div className="mb-12 relative">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-500">
          {icon}
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <span className="text-slate-400 font-mono text-sm opacity-50">[</span>
            <span className="uppercase">{title}</span>
            <span className="text-slate-400 font-mono text-sm opacity-50">]</span>
          </h2>
          {subtitle && <p className="text-blue-500/80 font-mono text-[10px] mt-1 uppercase tracking-[0.3em] font-bold">{subtitle}</p>}
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-blue-500 via-blue-500/20 to-transparent opacity-30"></div>
    </div>
  );
};
