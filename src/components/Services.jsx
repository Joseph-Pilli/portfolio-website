import React from 'react';
import { TrendingUp, Target, Users, Zap, BarChart3, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Growth Strategy',
      description: 'Develop comprehensive strategies that drive sustainable business growth and market expansion.',
      features: ['Market Analysis', 'Competitive Intelligence', 'Growth Planning']
    },
    {
      icon: Target,
      title: 'Digital Transformation',
      description: 'Modernize your operations with cutting-edge technology solutions and digital workflows.',
      features: ['Process Automation', 'Tech Integration', 'Digital Strategy']
    },
    {
      icon: Users,
      title: 'Team Optimization',
      description: 'Build high-performing teams through strategic hiring, training, and organizational design.',
      features: ['Talent Acquisition', 'Team Building', 'Performance Management']
    },
    {
      icon: Zap,
      title: 'Innovation Consulting',
      description: 'Foster innovation culture and implement breakthrough solutions for competitive advantage.',
      features: ['Innovation Labs', 'R&D Strategy', 'Product Development']
    },
    {
      icon: BarChart3,
      title: 'Financial Planning',
      description: 'Optimize financial performance through strategic planning and investment guidance.',
      features: ['Budget Planning', 'Investment Strategy', 'Risk Management']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate business risks to ensure sustainable operations.',
      features: ['Risk Assessment', 'Compliance', 'Crisis Management']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business solutions designed to accelerate your growth and maximize your potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center group">
                Learn More
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
