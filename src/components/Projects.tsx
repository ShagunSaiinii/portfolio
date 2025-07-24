import React, { useState } from 'react';
import { ExternalLink, Github, Tag } from 'lucide-react';

const Projects = () => {
  const [showPythonTasks, setShowPythonTasks] = useState(false);
  const [showMLTasks, setShowMLTasks] = useState(false);
  const pythonTasks = [
    {
      name: 'Creating Linkedin logo using Python',
      description: 'Code to generate a LinkedIn logo using Python graphics libraries. Demonstrates drawing and image creation techniques.',
      githubLink: 'https://github.com/ShagunSaiinii/python_task/blob/main/Creating_your_didgital_image.ipynb'
    },
    {
      name: 'Python menu based for WhatsApp message, sms , Instagram message and email.',
      description: 'Code for a menu-driven interface to send WhatsApp messages, SMS, Instagram messages, and emails using Python automation libraries.',
      githubLink: 'https://github.com/ShagunSaiinii/python_task/blob/main/Whatsapp_msg,sms,insta_and_mail.ipynb'
    },
    {
      name: 'Dowloading webpage content using Python.',
      description: 'Code to download and process webpage content, showcasing web scraping and data extraction techniques in Python.',
      githubLink: 'https://github.com/ShagunSaiinii/python_task/blob/main/downloadinf_webpage_content.ipynb'
    },
    {
      name: 'Understanding technical differences between list and tuple using Python',
      description: 'Code examples and explanations highlighting the differences between lists and tuples in Python, including mutability and use cases.',
      githubLink: 'https://github.com/ShagunSaiinii/python_task/blob/main/list_and_tuple_diff.ipynb'
    },
    {
      name: 'How to read your RAM',
      description: 'Code to access and display RAM information using Python, demonstrating system resource monitoring.',
      githubLink: 'https://github.com/ShagunSaiinii/python_task/blob/main/read_your_ram.ipynb'
    },
    {
      name: 'Searching using Python.',
      description: 'Code for searching through data or files using Python, illustrating search algorithms and file handling.',
      githubLink: 'https://github.com/ShagunSaiinii/python_task/blob/main/searching_through_python.ipynb'
    }
  ];
  const mlTasks = [
    {
      name: 'Salary prediction model',
      description: 'Linear regression model is used for salary prediction on the basis of year of experience.',
      githubLink: 'https://github.com/ShagunSaiinii/Machine_learning/blob/main/Linear_Regression_model.ipynb'
    },
    {
      name: 'AI for NGO',
      description: 'AI project code for NGO-related tasks and analysis.',
      githubLink: 'https://github.com/ShagunSaiinii/Machine_learning/blob/main/NGO_AI.ipynb'
    },
    {
      name: 'Building chatbot for a website (Generative AI)',
      description: 'Code for building a chatbot for a website using generative AI techniques.',
      githubLink: 'https://github.com/ShagunSaiinii/Machine_learning/blob/main/building_chatbot.ipynb'
    },
    {
      name: 'Financial Assistant using Gradio',
      description: 'Code for a financial assistant application built with Gradio and Python.',
      githubLink: 'https://github.com/ShagunSaiinii/Machine_learning/blob/main/financial_assistant_using_gradio.ipynb'
    },
    {
      name: 'Creating LangChain tools for SMS and Phone call (Agentic AI)',
      description: 'Python code for creating LangChain tools for SMS and phone call automation using agentic AI.',
      githubLink: 'https://github.com/ShagunSaiinii/Machine_learning/blob/main/langchan_tool.ipynb'
    },
    {
      name: 'Streamlit code for "AI for NGO"',
      description: 'Streamlit Python script for deploying the AI for NGO project as a web app.',
      githubLink: 'https://github.com/ShagunSaiinii/Machine_learning/blob/main/newPrompt.py'
    },
    {
      name: 'Streamlit code for salary prediction model',
      description: 'Streamlit Python script for deploying the salary prediction model as a web app.',
      githubLink: 'https://github.com/ShagunSaiinii/Machine_learning/blob/main/salaryPredictoin.py'
    }
  ];
  const projects = [
    {
      name: "Machine Learning Tasks",
      description: "Collection of my machine learning tasks and projects covering a variety of ML and deep learning topics.",
      techStack: ["Python", "Machine Learning", "Deep Learning"],
      tags: [],
      githubLink: "https://github.com/ShagunSaiinii/Machine_learning",
      demoLink: "https://github.com/ShagunSaiinii/Machine_learning"
    },
    {
      name: "Python Tasks",
      description: "Collection of my Python task covering variety of topics.",
      techStack: ["Python", "Code"],
      tags: [],
      githubLink: "https://github.com/ShagunSaiinii/python_task",
      demoLink: "https://github.com/ShagunSaiinii/python_task"
    },
    {
      name: "Javascript Task",
      description: "Comprehensive IoT solution for home automation with machine learning-based behavioral predictions.",
      techStack: ["Python", "Raspberry Pi", "AWS IoT", "React", "PostgreSQL"],
      tags: ["IoT", "AI", "Hardware"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      name: "DevOps Task",
      description: "AI-driven content generation platform with advanced prompt engineering and multi-modal capabilities.",
      techStack: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "TypeScript"],
      tags: ["AI", "Web", "Content"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      name: "Projects",
      description: "Scalable distributed computing platform for processing large datasets with fault tolerance.",
      techStack: ["Go", "Kubernetes", "Redis", "MongoDB", "gRPC"],
      tags: ["Cloud", "Distributed", "Performance"],
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

                {/* Python Tasks Button and Modal */}
                {project.name === "Python Tasks" && (
                  <>
                    <button
                      onClick={() => setShowPythonTasks(true)}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg"
                    >
                      View All Tasks
                    </button>
                    {showPythonTasks && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                        <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative shadow-2xl">
                          <button
                            onClick={() => setShowPythonTasks(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold"
                            aria-label="Close"
                          >
                            &times;
                          </button>
                          <h4 className="text-2xl font-bold text-white mb-6 text-center">Python Tasks</h4>
                          <div className="space-y-4 max-h-96 overflow-y-auto">
                            {pythonTasks.map((task, idx) => (
                              <div key={idx} className="bg-gray-800 rounded-lg p-4 flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-white font-semibold">{task.name}</span>
                                  <a href={task.githubLink} target="_blank" rel="noopener noreferrer" className="ml-2 p-1 bg-gray-700 rounded hover:bg-gray-600">
                                    <Github className="w-4 h-4 text-white" />
                                  </a>
                                </div>
                                <p className="text-gray-300 text-xs mt-1">{task.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Machine Learning Tasks Button and Modal */}
                {project.name === "Machine Learning Tasks" && (
                  <>
                    <button
                      onClick={() => setShowMLTasks(true)}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg"
                    >
                      View All Tasks
                    </button>
                    {showMLTasks && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                        <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full relative shadow-2xl">
                          <button
                            onClick={() => setShowMLTasks(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold"
                            aria-label="Close"
                          >
                            &times;
                          </button>
                          <h4 className="text-2xl font-bold text-white mb-6 text-center">Machine Learning Tasks</h4>
                          <div className="space-y-4 max-h-96 overflow-y-auto">
                            {mlTasks.map((task, idx) => (
                              <div key={idx} className="bg-gray-800 rounded-lg p-4 flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-white font-semibold">{task.name}</span>
                                  <a href={task.githubLink} target="_blank" rel="noopener noreferrer" className="ml-2 p-1 bg-gray-700 rounded hover:bg-gray-600">
                                    <Github className="w-4 h-4 text-white" />
                                  </a>
                                </div>
                                <p className="text-gray-300 text-xs mt-1">{task.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}

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