import React from 'react';
import { Brain, Cloud, Code, Cpu, Settings, Terminal } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: Brain,
      title: "Machine Learning & Artificial Intelligence (AI)",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Settings,
      title: "Generative AIOps | Prompt Engineering",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Cloud,
      title: "Cloud Computing | DevOps | IoT",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Code,
      title: "Full Stack Web Development (MERN)",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Cpu,
      title: "Agentic AI | Linux | Python",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 font-inter">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Text */}
          <div className="space-y-6">
            <div className="space-y-6 text-lg text-gray-300 font-poppins leading-relaxed">
              <p>
                I am a 3rd-year BTech CSE student with a deep-seated curiosity for technology. 
                My learning journey is driven by a passion for project-based exploration and a strong hands-on mindset.
              </p>
              <p>
                I thrive on turning theoretical knowledge into practical solutions that make a real impact. 
                Whether it's building intelligent systems, developing scalable applications, or exploring the latest in cloud technologies, 
                I'm always eager to push boundaries and create meaningful innovations.
              </p>
              <p>
                My approach to learning is rooted in experimentation and real-world application, 
                constantly seeking opportunities to bridge the gap between academic concepts and industry practices.
              </p>
            </div>
          </div>

          {/* Right Side Interest Boxes */}
          <div className="space-y-4">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-gray-600"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${interest.color} group-hover:scale-110 transition-transform duration-300`}>
                    <interest.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-lg font-poppins group-hover:text-gray-100 transition-colors">
                      {interest.title}
                    </h3>
                  </div>
                  <div className="text-green-400 text-xl font-bold">✓</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;