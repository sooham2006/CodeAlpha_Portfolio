import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in creating 
              digital experiences that combine beautiful design with robust functionality. 
              I believe in the power of clean code and user-centered design.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or enjoying a good cup of coffee while sketching 
              out new ideas.
            </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8 relative">
              <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slideInLeft">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">25+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slideInRight">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">2+</div>
                <div className="text-gray-600">Years Learning</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl transform hover:scale-105 transition-all duration-300 border border-blue-200/50 hover:shadow-xl">
              <Code className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Clean Code</h3>
              <p className="text-sm text-gray-600">Writing maintainable, scalable code that stands the test of time.</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl transform hover:scale-105 transition-all duration-300 border border-purple-200/50 hover:shadow-xl">
              <Palette className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">UI/UX Design</h3>
              <p className="text-sm text-gray-600">Creating intuitive interfaces that users love to interact with.</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl transform hover:scale-105 transition-all duration-300 border border-green-200/50 hover:shadow-xl">
              <Zap className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Performance</h3>
              <p className="text-sm text-gray-600">Optimizing applications for speed and efficiency.</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl transform hover:scale-105 transition-all duration-300 border border-red-200/50 hover:shadow-xl">
              <Heart className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Passion</h3>
              <p className="text-sm text-gray-600">Loving what I do and always learning something new.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;