import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Cyber Security Dashboard",
      description: "A real-time security monitoring dashboard built with React and Node.js, featuring threat detection and system health monitoring.",
      technologies: ["React", "Node.js", "Socket.io", "Chart.js"],
      image: "https://placehold.co/600x400/2563eb/ffffff?text=Security+Dashboard",
      github: "https://github.com/yourusername/security-dashboard"
    },
    {
      title: "Network Traffic Analyzer",
      description: "Python-based tool for analyzing network traffic patterns and detecting potential security threats using machine learning algorithms.",
      technologies: ["Python", "TensorFlow", "Wireshark API"],
      image: "https://placehold.co/600x400/2563eb/ffffff?text=Traffic+Analyzer",
      github: "https://github.com/yourusername/traffic-analyzer"
    },
    {
      title: "Secure File Storage",
      description: "End-to-end encrypted file storage solution with user authentication and file sharing capabilities.",
      technologies: ["React", "Node.js", "Cryptography", "AWS S3"],
      image: "https://placehold.co/600x400/2563eb/ffffff?text=Secure+Storage",
      github: "https://github.com/yourusername/secure-storage"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 dark:text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;