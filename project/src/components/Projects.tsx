import React from 'react';
import { ExternalLink, Github, Tag } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "AI-Powered Task Manager",
      description: "Intelligent task management system with natural language processing and automated scheduling capabilities.",
      techStack: ["React", "Node.js", "Python", "TensorFlow", "MongoDB"],
      tags: ["AI", "Web", "NLP"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      name: "Cloud Infrastructure Monitor",
      description: "Real-time monitoring dashboard for cloud resources with automated scaling and cost optimization.",
      techStack: ["React", "AWS", "Docker", "Kubernetes", "Python"],
      tags: ["Cloud", "DevOps", "Monitoring"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      name: "Smart IoT Home System",
      description: "Comprehensive IoT solution for home automation with machine learning-based behavioral predictions.",
      techStack: ["Python", "Raspberry Pi", "AWS IoT", "React", "PostgreSQL"],
      tags: ["IoT", "AI", "Hardware"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      name: "Generative Content Platform",
      description: "AI-driven content generation platform with advanced prompt engineering and multi-modal capabilities.",
      techStack: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "TypeScript"],
      tags: ["AI", "Web", "Content"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      name: "Distributed Computing Framework",
      description: "Scalable distributed computing platform for processing large datasets with fault tolerance.",
      techStack: ["Go", "Kubernetes", "Redis", "MongoDB", "gRPC"],
      tags: ["Cloud", "Distributed", "Performance"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      name: "ML Model Deployment Pipeline",
      description: "Automated MLOps pipeline for model training, validation, and deployment with continuous monitoring.",
      techStack: ["Python", "MLflow", "Docker", "AWS", "FastAPI"],
      tags: ["AI", "MLOps", "Cloud"],
      githubLink: "#",
      demoLink: "#"
    }
  ];

  const getTagColor = (tag: string) => {
    const colors = {
      AI: "bg-purple-600",
      Web: "bg-blue-600",
      Cloud: "bg-orange-600",
      DevOps: "bg-green-600",
      IoT: "bg-red-600",
      Hardware: "bg-yellow-600",
      Content: "bg-pink-600",
      Distributed: "bg-indigo-600",
      Performance: "bg-teal-600",
      MLOps: "bg-cyan-600",
      NLP: "bg-violet-600",
      Monitoring: "bg-emerald-600"
    };
    return colors[tag as keyof typeof colors] || "bg-gray-600";
  };

  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 font-inter">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-gray-600 hover:shadow-xl"
            >
              <div className="space-y-4">
                {/* Project Header */}
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors font-poppins">
                    {project.name}
                  </h3>
                  <div className="flex gap-2">
                    <a 
                      href={project.githubLink}
                      className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    <a 
                      href={project.demoLink}
                      className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-400 flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 ${getTagColor(tag)} text-white text-xs rounded-full font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;