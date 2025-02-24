import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import photo6 from '../assets/photo6.png';

const Sidebar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleVisit = () => {
    setIsPopupOpen(false);
    setTimeout(() => setIsContentVisible(true), 500);
  };

  return (
    <>
      {/* Full-screen Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white text-center z-50 animate-fadeIn">
          <img src={photo6} alt="Profile" className="w-40 h-40 rounded-full mb-4 ring-4 ring-blue-500" />
          <h1 className="text-2xl font-bold">Rakesh Kumar</h1>
          <p className="text-blue-400">Aspiring Professional</p>
          <p className="mt-4 px-6 max-w-lg">
            I am a dedicated and detail-oriented professional with strong communication skills, a passion for problem-solving, and the ability to adapt to new challenges.
          </p>
          <button
            onClick={handleVisit}
            className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-lg transition-all"
          >
            Visit
          </button>
        </div>
      )}

      {/* Sidebar and Main Content */}
      {isContentVisible && (
        <aside className={`lg:w-80 bg-gray-800 p-8 lg:min-h-screen transition-all duration-500 ${isPopupOpen ? 'hidden' : 'block'}`}>
          <div className="sticky top-8">
            <div className="flex flex-col items-center mb-8">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-4 ring-4 ring-blue-500/50 bg-white p-1">
                <img src={photo6} alt="Rakesh Kumar" className="w-full h-full object-cover rounded-full" />
              </div>
              <h1 className="text-2xl font-bold text-center mb-2">Rakesh Kumar</h1>
              <p className="text-blue-400 text-center mb-6">Aspiring Professional</p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:rudramehra2004@gmail.com" className="hover:text-blue-400 transition-colors">
                  rudramehra2004@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+919289641247" className="hover:text-blue-400 transition-colors">
                  +91-9289641247
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>East Delhi, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex justify-center space-x-4">
              <a href="https://www.linkedin.com/in/rakesh-mehra-0b6a91350" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/its_me_rudra_official_0991" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;