import React from 'react';
import { ArrowDown, Code, Database, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">JP</span>
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Joseph Vardhan
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Babu Pilli
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer
          </p>

          <p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
            Passionate about creating responsive, secure web applications with React.js, Node.js, and Python. 
            Building intuitive user experiences with clean, maintainable code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <span className="text-lg font-semibold">View My Work</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 group backdrop-blur-sm">
              <span className="text-lg font-semibold">Get In Touch</span>
            </button>
          </div>

          {/* Tech Stack Icons */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2 group-hover:bg-white/20 transition-colors duration-300">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <span className="text-gray-300 text-sm">Frontend</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2 group-hover:bg-white/20 transition-colors duration-300">
                <Database className="w-8 h-8 text-green-400" />
              </div>
              <span className="text-gray-300 text-sm">Backend</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2 group-hover:bg-white/20 transition-colors duration-300">
                <Globe className="w-8 h-8 text-purple-400" />
              </div>
              <span className="text-gray-300 text-sm">Full Stack</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up delay-500">
          {[
            { number: '3+', label: 'Projects Built' },
            { number: '8.03', label: 'CGPA' },
            { number: '2024', label: 'Graduate' },
            { number: '100%', label: 'Dedication' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
