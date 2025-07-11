import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      name: "Linux Fundamentals",
      issuer: "Linux Professional Institute",
      year: "2024",
      description: "Comprehensive understanding of Linux operating system, command line interface, and system administration."
    },
    {
      name: "Database Management Systems (DBMS)",
      issuer: "Oracle Academy",
      year: "2024",
      description: "Advanced knowledge of database design, SQL, normalization, and database optimization techniques."
    },
    {
      name: "AWS Cloud with Artificial Intelligence",
      issuer: "Amazon Web Services",
      year: "2024",
      description: "Cloud computing fundamentals with AI services including SageMaker, Lambda, and machine learning workflows."
    },
    {
      name: "Data Structures & Algorithms",
      issuer: "Programming Pathshala",
      year: "2023",
      description: "Comprehensive coverage of fundamental data structures, algorithms, and problem-solving techniques."
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 font-inter">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Certificates</span> & Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-gray-600 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors font-poppins">
                      {cert.name}
                    </h3>
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-300 font-medium">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {cert.year}
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;