import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (section: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  onNavigate
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#050505] text-zinc-100 selection:bg-white selection:text-black">
      <Header onNavigate={onNavigate} />
      
      {/* Added md:pl-64 to offset the fixed sidebar width */}
      <main className="flex-grow w-full md:pl-64">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-24 relative">
          {children}
        </div>
      </main>
      
      <div className="md:pl-64">
        <Footer onNavigate={() => onNavigate('about')} />
      </div>
    </div>
  );
};