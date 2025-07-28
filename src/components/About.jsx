import React from 'react';
import { Code, Palette, Zap, Users, Coffee, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating beautiful user experiences'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimized and fast applications'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Working effectively in teams'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                Hello! I'm Ratnadeep Saha
              </h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 1 year of experience creating 
                digital solutions that make a difference. I love turning complex problems into 
                simple, beautiful, and intuitive designs.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or enjoying a good cup of coffee while brainstorming the 
                next big idea.
              </p>
              <div className="flex items-center gap-6 text-slate-400">
                <div className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-cyan-400" />
                  <span>Coffee Enthusiast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-purple-400" />
                  <span>Problem Solver</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slideInRight">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  {feature.title}
                </h4>
                <p className="text-slate-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;