import React from "react";

const Contact = () => {
  return (
    <div className="bg--white py-20" id="contact">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          Contact Me
        </h2>
        <div className="flex flex-col items-center">
          <form className="w-full max-w-md space-y-6">
            <div>
              <label htmlFor="name" className="block text-center mb-2">
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-center mb-2">
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                placeholder="Enter Your Email ID"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-center mb-2">
              </label>
              <textarea
                id="message"
                className="w-full p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                rows="5"
                placeholder="Enter Your Message"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-400 text-white w-full sm:w-auto transform transition-transform duration-300 hover:scale-105 px-8 py-3 rounded-full mx-auto block"
            >
              Send Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
