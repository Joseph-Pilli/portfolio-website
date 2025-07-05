import React from 'react';
import { Code, Server, Database, PenTool as Tool, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'Python'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['SQLite', 'MySQL'],
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Tool,
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Postman', 'JWT', 'REST APIs'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Teamwork', 'Problem Solving', 'Adaptability'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Lightbulb,
      title: 'Specializations',
      skills: ['Responsive Design', 'JWT Authentication', 'API Integration'],
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">{skill}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < 4 ? `bg-gradient-to-r ${category.color}` : 'bg-gray-200'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['React', 'Node.js', 'JavaScript', 'Python', 'MySQL', 'Git', 'Bootstrap', 'Express'].map((tech, index) => (
              <div key={index} className="text-xl font-bold text-gray-400 hover:text-blue-600 transition-colors duration-300 cursor-default">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
