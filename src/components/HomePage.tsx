import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Users, Shield, BookOpen } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const roleCards = [
    {
      title: 'Student Login',
      description: 'Access your courses, grades, and academic resources',
      icon: GraduationCap,
      color: 'from-blue-600 to-blue-700',
      path: '/login/student',
    },
    {
      title: 'Faculty Login',
      description: 'Manage courses, students, and academic content',
      icon: Users,
      color: 'from-green-600 to-green-700',
      path: '/login/faculty',
    },
    {
      title: 'Administrator Login',
      description: 'System administration and institutional management',
      icon: Shield,
      color: 'from-purple-600 to-purple-700',
      path: '/login/admin',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center space-x-3">
            <BookOpen className="h-10 w-10 text-blue-600" />
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">MVSR College</h1>
              <p className="text-sm text-gray-600 mt-1">Student Information System</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to MVSR College Portal
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your role to access the student information system and manage your academic journey
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {roleCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                onClick={() => navigate(card.path)}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${card.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {card.description}
                  </p>
                  
                  <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${card.color} text-white font-semibold group-hover:shadow-lg transition-shadow duration-300`}>
                    Access Portal
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* College Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">About MVSR College</h3>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
              MVSR College is committed to providing quality education and fostering innovation in technology and engineering. 
              Our student portal provides seamless access to academic resources, course materials, and administrative services 
              to enhance your educational experience.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 MVSR College. All rights reserved. | Student Information System
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;