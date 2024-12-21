import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="py-40 bg--white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
          {[
            {
              icon: <FaHtml5 className="text-6xl sm:text-5xl md:text-6xl text-orange-600" aria-label="HTML5" />,
              label: "HTML",
              link: "https://www.w3schools.com/html/",
              linkText: "Read More",
              bgColor: "bg-orange-600",
              hoverColor: "hover:bg-orange-700",
            },
            {
              icon: <FaCss3Alt className="text-6xl sm:text-5xl md:text-6xl text-blue-600" aria-label="CSS3" />,
              label: "CSS",
              link: "https://www.w3schools.com/css/",
              linkText: "Read More",
              bgColor: "bg-blue-600",
              hoverColor: "hover:bg-blue-700",
            },
            {
              icon: <FaReact className="text-6xl sm:text-5xl md:text-6xl text-blue-400" aria-label="React" />,
              label: "React",
              link: "https://react.dev/",
              linkText: "Read More",
              bgColor: "bg-blue-400",
              hoverColor: "hover:bg-blue-500",
            },
            {
              icon: <FaGitAlt className="text-6xl sm:text-5xl md:text-6xl text-orange-500" aria-label="Git" />,
              label: "Git",
              link: "https://git-scm.com/",
              linkText: "Read More",
              bgColor: "bg-orange-500",
              hoverColor: "hover:bg-orange-600",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 flex flex-col items-center border-2 border-gray-400 p-6 transition-transform duration-300 hover:scale-105 rounded-lg"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-medium">{skill.label}</p>
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-white rounded mt-4 px-4 py-2 ${skill.bgColor} ${skill.hoverColor} focus:outline-none focus:ring-2 focus:ring-${skill.bgColor.split('-')[1]}-300`}
              >
                {skill.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
