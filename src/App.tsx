import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1">
        <nav className="bg-gray-800/50 backdrop-blur-sm p-4 sticky top-0 z-10">
          <div className="max-w-screen-xl mx-auto flex justify-end space-x-6">
            <button 
              onClick={() => setActiveSection('about')}
              className={`${activeSection === 'about' ? 'text-teal-400' : 'text-gray-300'} hover:text-teal-400 transition-colors`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveSection('resume')}
              className={`${activeSection === 'resume' ? 'text-teal-400' : 'text-gray-300'} hover:text-teal-400 transition-colors`}
            >
              Resume
            </button>
            <button 
              onClick={() => setActiveSection('portfolio')}
              className={`${activeSection === 'portfolio' ? 'text-teal-400' : 'text-gray-300'} hover:text-teal-400 transition-colors`}
            >
             Certificates
            </button>
          </div>
        </nav>
        {activeSection === 'about' && <MainContent />}
        {activeSection === 'resume' && <Resume />}
        {activeSection === 'portfolio' && <Portfolio />}
      </div>
    </div>
  );
}

export default App;