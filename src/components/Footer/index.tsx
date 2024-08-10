import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Zaamrood. All Rights Reserved.</p>
        <div className="flex justify-center mt-4">
          <a href="#" className="mx-2">Homepage</a>
          <a href="#" className="mx-2">Customize Your Trip</a>
          <a href="#" className="mx-2">Destinations</a>
          <a href="#" className="mx-2">Articles</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
