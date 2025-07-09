import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    // Create a sample CV content (you can replace this with actual CV data)
    const cvContent = `
SOHAM PAWASKAR
Full Stack Developer & UI/UX Designer

Contact Information:
Email: mesoham18@gmail.com
Phone: +91 8591136038
Location: Mumbai, India

SUMMARY
Passionate Full Stack Developer with expertise in creating digital experiences that combine beautiful design with robust functionality. I believe in the power of clean code and user-centered design.

SKILLS
Frontend: React (95%), TypeScript (90%), Next.js (85%), Tailwind CSS (92%), Vue.js (80%)
Backend: Node.js (88%), Python (85%), PostgreSQL (82%), MongoDB (78%), GraphQL (75%)
Tools & Others: Git (95%), Docker (80%), AWS (75%), Figma (85%), Jest (82%)

EXPERIENCE
- 25+ Projects Completed
- 2+ Years of Learning and Development
- Specialized in modern web technologies and clean, efficient code

PROJECTS
- E-Commerce Platform: Full-stack solution with React, Node.js, and PostgreSQL
- Task Management App: Collaborative tool with real-time updates and team collaboration
- Weather Dashboard: Responsive application with location-based forecasts
- Social Media Dashboard: Analytics dashboard with data visualization
- Recipe Sharing Platform: Community-driven platform with user profiles
- Fitness Tracker: Comprehensive tracking application with workout plans

INTERESTS
- Exploring new technologies
- Contributing to open-source projects
- UI/UX Design
- Performance optimization
    `;

    // Create and download the CV file
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Soham_Pawaskar_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto mb-6 relative group">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-full flex items-center justify-center text-5xl font-bold animate-float shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-full"></div>
                <span className="relative z-10 text-white drop-shadow-lg">SP</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full animate-ping opacity-30"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-cyan-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-fadeInUp">
            Soham Pawaskar
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fadeInUp delay-300">
            Full Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto animate-fadeInUp delay-500">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I specialize in modern web technologies and clean, efficient code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fadeInUp delay-700">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <button onClick={scrollToContact} className="flex items-center gap-2">
                <span className="relative z-10">
                Get In Touch
                </span>
                <Mail className="w-5 h-5" />
              </button>
            </button>
            
            <button onClick={handleDownloadCV} className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 hover:shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <span className="flex items-center gap-2">
                <span className="relative z-10">
                Download CV
                </span>
                <Download className="w-5 h-5" />
              </span>
            </button>
          </div>
          
          <div className="flex gap-8 justify-center animate-fadeInUp delay-1000">
            <a href="#" className="group text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 p-3 rounded-full hover:bg-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="group text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 p-3 rounded-full hover:bg-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="group text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 p-3 rounded-full hover:bg-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;