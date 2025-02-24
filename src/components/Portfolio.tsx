import React, { useState } from "react";

// Importing certificate images
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo4 from "../assets/photo4.jpg";
import photo5 from "../assets/photo5.jpg";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certifications = [
    {
      title: "Cisco Certified CyberOps Associate",
      issuer: "Cisco",
      description:
        "Validates cybersecurity skills for Security Operations Center (SOC) roles, covering network security, threat intelligence, and incident response.",
      image: photo1,
    },
    {
      title: "Understanding Retail Industry, Workplace & Ethics",
      issuer: "Nazariya Foundation",
      description:
        "Covers key aspects of working in the retail industry, including ethical workplace practices, customer service, and retail operations.",
      image: photo2,
    },
    {
      title: "Beauty & Makeup Certification",
      issuer: "Nazariya Foundation",
      description:
        "Provides foundational knowledge in beauty, skincare, and professional makeup techniques.",
      image: photo3,
    },
    {
      title: "Transform Career Progression & Fellowship",
      issuer: "Connecting Dreams Foundation",
      description:
        "Focused on career growth strategies, professional development, and leadership skills to transform career paths.",
      image: photo4,
    },
    {
      title: "Basic Computer Skills",
      issuer: "Nazariya Foundation",
      description:
        "Covers essential computer literacy, including Microsoft Office, internet browsing, and email communication.",
      image: photo5,
    },
  ];

  const closePopup = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target.id === "popup-container") {
      setSelectedImage(null);
    }
  };

  return (
    <div className="p-8 lg:p-12 animate-fadeIn">
      {/* Certifications Section */}
      <h2 className="text-3xl font-bold mb-8 text-white">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedImage(cert.image)}
            />
            <h3 className="text-xl font-semibold text-teal-400">{cert.title}</h3>
            <p className="text-gray-400 text-sm">Issued by: {cert.issuer}</p>
            <p className="text-gray-300 mt-2">{cert.description}</p>
          </div>
        ))}
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          id="popup-container"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={closePopup}
        >
          <div className="relative bg-gray-900 rounded-lg p-4 shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-gray-700 rounded-full p-2 hover:bg-red-500"
              onClick={() => setSelectedImage(null)}
            >
              ❌
            </button>

            {/* Display the Image (responsive behavior) */}
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full max-w-4xl max-h-[90vh] object-contain rounded-lg 
              sm:max-w-[95%] sm:max-h-[85vh]" // Adjusts size dynamically for mobile
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
