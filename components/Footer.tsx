import React from 'react';

interface FooterProps {
    onNavigate: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="px-6 md:px-12 py-12 border-t border-zinc-800 mt-auto bg-[#050505] text-zinc-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="text-sm text-zinc-600 font-mono">
          Design & code by Hsin Chang.
        </div>
        
        <div className="flex gap-8 text-sm font-medium">
           <a href="mailto:hsinchang.ux@gmail.com" className="hover:text-zinc-400 transition-colors">Contact</a>
           <a href="https://www.linkedin.com/in/hsinchangdesign/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};