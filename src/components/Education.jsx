import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.Sc. in MSDS (Mathematics, Statistics, and Data Science)',
      institution: 'P.B Siddhartha College of Arts and Science, Vijayawada',
      duration: '2021 - 2024',
      cgpa: '8.03 CGPA',
      description: 'Comprehensive study in Mathematics, Statistics, and Data Science with strong analytical and problem-solving foundation.',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'P.B Siddhartha College of Arts and Science, Vijayawada',
      duration: '2019 - 2021',
      cgpa: '9.14 CGPA',
      description: 'Mathematics, Physics, and Chemistry with excellent academic performance.',
      icon: Award,
      color: 'from-green-500 to-emerald-500'
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'BRKMCH School, Vijayawada',
      duration: '2018 - 2019',
      cgpa: '9.7 CGPA',
      description: 'Strong foundation in core subjects with outstanding academic achievement.',
      icon: Award,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const certification = {
    title: 'Industry Ready Certification in MERN Full-stack Development',
    institution: 'Nxtwave Disruptive Technologies',
    duration: 'Aug 2024 - April 2025',
    description: 'Comprehensive training in MongoDB, Express.js, React.js, and Node.js with hands-on project experience.',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST APIs', 'JWT Authentication']
  };

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education & <span className="text-blue-600">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic journey and professional development in technology
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Academic Background</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            {educationData.map((edu, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${edu.color} rounded-xl mb-4`}>
                      <edu.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                    <div className="flex items-center space-x-2 mb-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{edu.institution}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-3 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                    <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-3">
                      {edu.cgpa}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Professional Certification</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">{certification.title}</h4>
                  <p className="text-blue-100">{certification.institution}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-4 text-blue-100">
                <Calendar className="w-4 h-4" />
                <span>{certification.duration}</span>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">{certification.description}</p>
              <div className="flex flex-wrap gap-2">
                {certification.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
