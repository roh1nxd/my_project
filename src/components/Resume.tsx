import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume = () => {
  return (
    <div className="p-8 lg:p-12 animate-fadeIn">
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <Briefcase className="w-6 h-6 text-teal-400 mr-3" />
          <h2 className="text-2xl font-bold text-white">Work Experience</h2>
        </div>
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-teal-400 mb-2">Fresher</h3>
            <p className="text-gray-400 mb-4">Looking for opportunities</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Eager to apply academic knowledge in a professional setting</li>
              <li>Quick learner with strong problem-solving abilities</li>
              <li>Excellent team player with good communication skills</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center mb-6">
          <GraduationCap className="w-6 h-6 text-teal-400 mr-3" />
          <h2 className="text-2xl font-bold text-white">Education</h2>
        </div>
        <div className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-teal-400">12th Grade (CBSE)</h3>
            <p className="text-gray-400">2024</p>
            <p className="text-gray-300 mt-2">Commerce Stream</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-teal-400">10th Grade (CBSE)</h3>
            <p className="text-gray-400">2022</p>
            <p className="text-gray-300 mt-2">Achieved excellent academic results</p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center mb-6">
          <Award className="w-6 h-6 text-teal-400 mr-3" />
          <h2 className="text-2xl font-bold text-white">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-teal-400 mb-4">Technical Skills</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">Typing</span>
                  <span className="text-teal-400">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-teal-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">Microsoft Suite</span>
                  <span className="text-teal-400">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-teal-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-teal-400 mb-4">Soft Skills</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">Communication</span>
                  <span className="text-teal-400">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-teal-400 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">Problem Solving</span>
                  <span className="text-teal-400">88%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-teal-400 h-2 rounded-full" style={{ width: '88%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;