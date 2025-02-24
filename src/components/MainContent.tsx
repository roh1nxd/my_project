import React from 'react';
import { BookOpen, Monitor, Search, BookText, Database, BarChart as ChartBar, Users, BrainCircuit } from 'lucide-react';

const MainContent = () => {
  return (
    <main className="flex-1 p-8 lg:p-12">
      <section className="mb-16 animate-fadeIn">
        <h2 className="text-3xl font-bold mb-6 text-teal-400">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-300">
        I am a dedicated and detail-oriented professional with strong communication skills, a passion for problem-solving, and the ability to adapt to new challenges. With proficiency in Microsoft Office Suite and a solid foundation in computer literacy, I excel at organizing tasks efficiently, managing digital resources, and handling professional correspondence.

My strengths include effective teamwork, time management, and customer interaction, ensuring smooth collaboration and productive work environments. A quick learner with a proactive mindset, I am always eager to embrace new opportunities, enhance my skills, and contribute to success.
        </p>
      </section>

      <section className="mb-16 animate-fadeIn">
        <h2 className="text-3xl font-bold mb-6 text-teal-400">Skills & Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <Monitor className="w-8 h-8 text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Computer Proficiency</h3>
            <p className="text-gray-400">Proficient in Microsoft Office Suite (Word, Excel, PowerPoint), basic internet browsing, email handling, and file management. Skilled in typing with accuracy and organizing digital documents efficiently.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <Database className="w-8 h-8 text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Communication Skills</h3>
            <p className="text-gray-400">Strong verbal and written communication, professional email etiquette, and effective interpersonal skills. Able to convey ideas clearly, engage in teamwork, and maintain a professional tone in conversations.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <ChartBar className="w-8 h-8 text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Teamwork & Collaboration</h3>
            <p className="text-gray-400">Ability to work effectively with others and contribute to group success.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <Search className="w-8 h-8 text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Time Management </h3>
            <p className="text-gray-400">Prioritizing tasks, meeting deadlines, and maintaining productivity.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <Users className="w-8 h-8 text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Retail Marketing</h3>
            <p className="text-gray-400">Understanding of retail marketing principles, consumer behavior, and market trends analysis.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
            <BrainCircuit className="w-8 h-8 text-teal-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer Interaction</h3>
            <p className="text-gray-400"> Professional and courteous approach in handling queries and providing assistance.</p>
          </div>
        </div>
      </section>

      <section className="mb-16 animate-fadeIn">
        <h2 className="text-3xl font-bold mb-6 text-teal-400">Education</h2>
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">12th Grade (CBSE)</h3>
            <p className="text-gray-400">2024</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">10th Grade (CBSE)</h3>
            <p className="text-gray-400">2022</p>
          </div>
        </div>
      </section>

      <section className="mb-16 animate-fadeIn">
        <h2 className="text-3xl font-bold mb-6 text-teal-400">Experience</h2>
        <div className="bg-gray-800 p-6 rounded-lg">
          <p className="text-gray-300">
          As a motivated fresher, I am eager to apply my knowledge, adaptability, and problem-solving skills in a professional environment. My experience with Microsoft Office Suite, internet research, and effective communication has helped me develop strong organizational and teamwork abilities. I am quick to learn new tools and technologies, ensuring efficiency in handling tasks. With a keen eye for detail and a proactive mindset, I am ready to contribute, grow, and gain valuable industry experience.
          </p>
        </div>
      </section>
    </main>
  );
};

export default MainContent;