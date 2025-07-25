import React from 'react';
import { User, MapPin, Phone, Mail, Calendar, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Full Stack Developer with a strong foundation in modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 mb-8">
              <div className="w-full h-full rounded-2xl bg-gray-100 flex items-center justify-center">
                <img src='https://res.cloudinary.com/djiut4yaa/image/upload/v1753444838/Pic1_czby6g.jpg'/>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Joseph Vardhan Babu Pilli
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Aspiring Full Stack Developer with strong skills in React.js, Node.js, and Python, 
              and hands-on experience in building responsive and secure web applications. 
              Proficient in both frontend and backend development with knowledge of REST APIs, 
              JWT authentication, version control, and debugging.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Passionate about clean code, intuitive UI/UX design. Quick learner with a solid 
              understanding of agile workflows, actively seeking an entry-level role as a Full Stack Developer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Vijayawada, Andhra Pradesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">+91 8330942766</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">jjoy51517@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Available for hire</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6 text-blue-600" />
                <h4 className="text-xl font-bold text-gray-900">Recent Achievement</h4>
              </div>
              <p className="text-gray-700">
                <strong>Industry Ready Certification in MERN Full-stack Development</strong><br />
                Nxtwave Disruptive Technologies (Aug 2024 - April 2025)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
