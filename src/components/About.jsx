import React from "react";
import aboutmeImage from '../Assets/aboutme-image.png.jpg';

const About = () => {
  return (
    <div className="bg--white py-20" id="about">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={aboutmeImage}
            alt="About Me"
            className="w-60 sm:w-72 h-72 sm:h-80 rounded object-cover mb-6 sm:mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-base sm:text-lg mb-6 sm:mb-8">
              I am a passionate full-stack developer dedicated to creating
              modern, responsive web applications. With a strong foundation in
              both frontend and backend technologies, I strive to deliver
              seamless and efficient user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
