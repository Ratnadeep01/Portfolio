import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">
              Portfolio
            </div>
            <p className="text-slate-400 mb-4">
              Building digital experiences that make a difference. Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Ratnadeep01?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ratnadeep-saha-9149841ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ratnadeep2002saha@gmail.com"
                className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              {[
                'Web Development',
                'Mobile Apps',
                'UI/UX Design',
                'Consulting',
                'API Development'
              ].map((service) => (
                <div key={service} className="text-slate-400">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 text-slate-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>by Ratnadeep Saha</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              © 2025 All rights reserved.
            </span>
            <button
              onClick={scrollToTop}
              className="bg-slate-800 hover:bg-cyan-400 text-slate-400 hover:text-slate-900 p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;