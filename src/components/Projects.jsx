import React from 'react';
import { ExternalLink, Github, ShoppingCart, Book, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: ShoppingCart,
      title: 'Nxt Trendz (ECommerce Clone)',
      description:
        'Built a secure e-commerce platform using React, JWT Auth, and REST APIs. Features include login, product listings, detail view, and user authentication via JWT.',
      technologies: ['React.js', 'JWT Authentication', 'REST APIs', 'CSS', 'JavaScript'],
      liveUrl: 'https://joenxttrendz.ccbp.tech',
      githubUrl: 'https://github.com/Joseph-Pilli/nxt-trendz-clone',
      image:
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      featured: true,
    },
    {
      icon: Book,
      title: 'Book Hub (Goodreads Clone)',
      description:
        'Developed a book management system with rating, filtering, and login functionality. UI crafted using Figma designs, React Select, and Bootstrap.',
      technologies: ['React.js', 'Bootstrap', 'React Select', 'Figma', 'API Integration'],
      liveUrl: 'https://joebookhub.ccbp.tech',
      githubUrl: 'https://github.com/Joseph-Pilli/bookhub-clone',
      image:
        'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      featured: true,
    },
    {
      icon: Play,
      title: 'Nxt Watch (YouTube Clone)',
      description:
        'Designed video content platform with Login, Trending, Gaming, and Saved sections. Used JWT tokens, REST APIs, and local storage for session management.',
      technologies: ['React.js', 'JWT Tokens', 'Local Storage', 'REST APIs', 'Video Streaming'],
      liveUrl: 'https://joenxtwatch.ccbp.tech',
      githubUrl: 'https://github.com/Joseph-Pilli/nxtwatch-clone',
      image:
        'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my full-stack development skills through real-world applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 group"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-300 group"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
