import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image Part */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/F5ShL0q/about-us.png" // এখানে নিজের ইমেজ দিবে
            alt="About Us"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Content Part */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            About Our Forum
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Welcome to our community-driven Forum platform where people can 
            share ideas, post messages, and engage in meaningful conversations.  
            We believe in creating an open space for learning, collaboration, and 
            growth. Our mission is to connect people across the world through 
            technology and knowledge sharing.
          </p>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Interactive discussions & real-time updates
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              Secure & reliable MERN stack based system
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-xl mr-2">✔</span>
              User-friendly design with responsive UI
            </li>
          </ul>

          <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
