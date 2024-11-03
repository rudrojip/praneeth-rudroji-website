"use client";

import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto my-8 p-6 bg-gradient-to-r from-fuchsia-400 to-pink-600 hover:from-pink-500 hover:to-orange-500 rounded-lg shadow-lg text-gray-200">
      <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
      <p className="text-lg text-gray-300 mb-4">
        I'm a passionate{" "}
        <span className="font-semibold text-white">
          .NET Full Stack Developer
        </span>{" "}
        with over{" "}
        <span className="font-semibold text-white">5 years of experience</span>{" "}
        in building and enhancing CRM-based products in the media domain.
        Currently, I work at{" "}
        <span className="font-semibold text-white">Mirabel Technologies</span>,
        where I specialize in creating feature-rich applications using{" "}
        <span className="font-semibold text-white">
          C#, .NET, React, and SQL
        </span>
        .
      </p>
      <p className="text-lg text-gray-300 mb-4">
        My experience includes integrating APIs like{" "}
        <span className="font-semibold text-white">Google Ad Manager</span> and{" "}
        <span className="font-semibold text-white">OpenAI</span>, as well as
        guiding junior developers through technical challenges.
      </p>
      <p className="text-lg text-gray-300 mb-4">
        I hold a{" "}
        <span className="font-semibold text-white">
          Master’s degree in Software Engineering from BITS Pilani
        </span>{" "}
        (GPA: 8.4) and a{" "}
        <span className="font-semibold text-white">
          Bachelor’s in Computer Science from CMR College of Engineering &
          Technology
        </span>{" "}
        (GPA: 8.95).
      </p>
      <p className="text-lg text-gray-300">
        My approach combines technical precision with a collaborative,
        problem-solving mindset aimed at delivering impactful solutions.
      </p>
    </section>
  );
};

export default AboutMe;
