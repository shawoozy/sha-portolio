import React from 'react';
import { PortfolioData } from '../types';
import { MapPin, Mail, Phone, Download } from 'lucide-react';

interface HeroProps {
  data: PortfolioData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 animate-fade-in-up">
      {/* Profile Image Placeholder */}
      <div className="w-56 h-56 md:w-72 md:h-72 flex-shrink-0 relative group">
        <div className="absolute inset-0 bg-yellow-400 rounded-[2rem] rotate-6 group-hover:rotate-12 transition-all duration-500 ease-in-out opacity-80"></div>
        <div className="absolute inset-0 bg-cyan-400 rounded-[2rem] -rotate-3 group-hover:-rotate-6 transition-all duration-500 ease-in-out opacity-80"></div>
        <img 
          src="/profile.jpeg"
          alt={data.name} 
          className="w-full h-full object-cover rounded-[2rem] shadow-xl relative z-10 border-[6px] border-white dark:border-slate-800 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex-1 text-center md:text-left pt-4">
        <h2 className="inline-block px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
          {data.title}
        </h2>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
          {data.name}
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl font-medium">
          {data.profile}
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
          <a href={`mailto:${data.contact.email}`} className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 rounded-2xl text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-1 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="p-1 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400">
              <Mail size={14} />
            </div>
            {data.contact.email}
          </a>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 rounded-2xl text-sm font-semibold border border-slate-200 dark:border-slate-700">
            <div className="p-1 bg-green-100 dark:bg-green-900/50 rounded-full text-green-600 dark:text-green-400">
              <Phone size={14} />
            </div>
            {data.contact.phone}
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 rounded-2xl text-sm font-semibold border border-slate-200 dark:border-slate-700">
            <div className="p-1 bg-orange-100 dark:bg-orange-900/50 rounded-full text-orange-600 dark:text-orange-400">
              <MapPin size={14} />
            </div>
            {data.contact.location}
          </div>
        </div>

        <button 
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-lg rounded-2xl shadow-xl shadow-slate-200 dark:shadow-none transition-all hover:scale-105 active:scale-95 hover:shadow-2xl"
          onClick={() => window.print()}
        >
          <Download size={22} strokeWidth={2.5} />
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Hero;