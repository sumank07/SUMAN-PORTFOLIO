import React from "react";

const Footer = () => {
  return (
    <footer className="bg--white py-4">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4" />
        <div
          className="border-t border-gray-600 pt-8 flex flex-col  
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Suman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
