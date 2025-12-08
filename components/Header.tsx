import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState<string>('intro');

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Triggers when the section is near the top/center
      threshold: 0
    });

    const sections = ['intro', 'work', 'about'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getLinkClass = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return `text-left transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-500 hover:text-white'}`;
  };

  return (
    <>
      {/* Mobile Header (Top Bar) */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#050505]/90 backdrop-blur-md border-b border-zinc-900 px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => onNavigate('intro')} 
          className="text-lg font-bold font-['Space_Grotesk'] text-white"
        >
          Hsin Chang
        </button>

        <nav className="flex gap-4 text-sm font-medium text-zinc-400">
          <button onClick={() => onNavigate('intro')} className="hover:text-white">Intro</button>
          <button onClick={() => onNavigate('work')} className="hover:text-white">Work</button>
          <button onClick={() => onNavigate('about')} className="hover:text-white">About</button>
          <a href="mailto:hello@hsin.design" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* Desktop Sidebar (Fixed Left) - Removed border-r */}
      <header className="hidden md:flex fixed top-0 left-0 h-screen w-64 flex-col justify-between p-12 z-40 bg-[#050505]">
        <div className="flex flex-col items-start">
          <button 
            onClick={() => onNavigate('intro')} 
            className="text-2xl font-bold font-['Space_Grotesk'] tracking-tighter text-white mb-16 text-left hover:text-zinc-300 transition-colors"
          >
            Hsin Chang
          </button>

          <nav className="flex flex-col items-start gap-6 text-base font-medium">
            <button 
              onClick={() => onNavigate('intro')}
              className={getLinkClass('intro')}
            >
              Intro
            </button>
            <button 
              onClick={() => onNavigate('work')}
              className={getLinkClass('work')}
            >
              Work
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className={getLinkClass('about')}
            >
              About
            </button>
            <a 
              href="mailto:hello@hsin.design"
              className="text-zinc-500 hover:text-white transition-colors text-left"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};