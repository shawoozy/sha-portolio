import React from 'react';
import { ContactInfo } from '../types';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

interface ContactProps {
  contact: ContactInfo;
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  return (
    <footer className="bg-white/60 dark:bg-slate-900/80 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 mt-32">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Let's Connect</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-16 max-w-xl mx-auto font-medium">
            I'm currently available for freelance opportunities and full-time positions. 
            Reach out if you want to build something amazing together.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <a 
              href={`mailto:${contact.email}`} 
              className="flex flex-col items-center p-8 bg-white dark:bg-slate-800 rounded-[2.5rem] hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-100 dark:border-slate-700/50 group"
            >
              <div className="p-4 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl shadow-sm mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform text-cyan-600 dark:text-cyan-400">
                <Mail size={32} strokeWidth={2} />
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white mb-1">Email</span>
              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{contact.email}</span>
            </a>

            <div className="flex flex-col items-center p-8 bg-white dark:bg-slate-800 rounded-[2.5rem] hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-100 dark:border-slate-700/50 group">
              <div className="p-4 bg-lime-100 dark:bg-lime-900/30 rounded-2xl shadow-sm mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform text-lime-600 dark:text-lime-400">
                <Phone size={32} strokeWidth={2} />
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white mb-1">Phone</span>
              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{contact.phone}</span>
            </div>

            <div className="flex flex-col items-center p-8 bg-white dark:bg-slate-800 rounded-[2.5rem] hover:shadow-2xl transition-all hover:-translate-y-2 border border-slate-100 dark:border-slate-700/50 group">
              <div className="p-4 bg-rose-100 dark:bg-rose-900/30 rounded-2xl shadow-sm mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform text-rose-600 dark:text-rose-400">
                <MapPin size={32} strokeWidth={2} />
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white mb-1">Location</span>
              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{contact.location}</span>
            </div>
          </div>

          <div className="flex justify-center space-x-8 text-slate-400">
             <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-125 hover:-rotate-6">
               <Linkedin size={32} />
             </a>
             <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-all hover:scale-125 hover:rotate-6">
               <Github size={32} />
             </a>
          </div>
          
          <div className="mt-16 text-sm text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} Sharokh Aria. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;