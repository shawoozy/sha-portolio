import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { PORTFOLIO_DATA } from './constants';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative overflow-x-hidden">
      {/* Decorative Background Blobs - Playful & Colorful */}
      <div className="fixed top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[600px] h-[600px] bg-yellow-400/40 dark:bg-yellow-500/10 rounded-full blur-[120px] -z-10 animate-blob mix-blend-multiply dark:mix-blend-screen"></div>
      
      <div className="fixed top-1/4 right-0 translate-x-1/4 w-[500px] h-[500px] bg-cyan-400/40 dark:bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen"></div>
      
      <div className="fixed bottom-0 left-20 translate-y-1/4 w-[550px] h-[550px] bg-rose-400/40 dark:bg-rose-500/10 rounded-full blur-[120px] -z-10 animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen"></div>
      
      <div className="fixed bottom-1/3 right-1/4 w-[400px] h-[400px] bg-lime-400/40 dark:bg-lime-500/10 rounded-full blur-[100px] -z-10 animate-blob animation-delay-3000 mix-blend-multiply dark:mix-blend-screen"></div>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} name={PORTFOLIO_DATA.name} />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-32 max-w-5xl relative z-0">
        <section id="profile">
          <Hero data={PORTFOLIO_DATA} />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience experience={PORTFOLIO_DATA.experience} />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills skills={PORTFOLIO_DATA.skills} />
        </section>

        <section id="education" className="scroll-mt-24">
          <Education education={PORTFOLIO_DATA.education} certificates={PORTFOLIO_DATA.certificates} />
        </section>
      </main>

      <section id="contact">
        <Contact contact={PORTFOLIO_DATA.contact} />
      </section>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-2xl hover:scale-110 hover:rotate-12 transition-all duration-300 z-50 border-4 border-white/20 dark:border-slate-800/20 hover:border-yellow-400"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
};

export default App;