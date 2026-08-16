import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header
      id="top"
      className="min-h-screen flex items-center justify-center px-6 lg:px-10 pt-24 pb-12"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Professional Introduction */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-2 text-lg md:text-xl font-medium"
        >
          Hi, I'm Mohmadhusen Khimani

          <Image
            src={assets.hand_icon}
            alt=""
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </motion.p>

        {/* Primary Professional Identity */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="font-bold leading-[1.05] mt-4 tracking-tight"
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Full Stack MERN
          </span>

          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Developer
          </span>
        </motion.h1>

        {/* Technical Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-indigo-600 dark:text-indigo-400">
            React.js · Node.js · Express.js · MongoDB
          </h2>

          <p className="mt-2 text-lg sm:text-xl md:text-2xl font-bold">
            Full Stack JavaScript Developer · AI & Machine Learning Enthusiast
          </p>
        </motion.div>

        {/* Career Availability */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-medium text-sm sm:text-base">
            <span aria-hidden="true">🟢</span>
            Open to Full-Time MERN / Full Stack Developer Roles
          </span>
        </motion.div>

        {/* Value Proposition */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-8"
        >
          I'm an MCA student and Full Stack MERN Developer with 6 months of
          hands-on internship experience. I build responsive and
          user-focused web applications using React.js, Node.js, Express.js,
          MongoDB, REST APIs, JWT authentication, and modern frontend
          technologies. I'm also expanding my expertise in Next.js,
          Artificial Intelligence, Machine Learning, Data Structures &
          Algorithms, and AI-powered application development.
        </motion.p>

        {/* Primary Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          {/* Contact CTA */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 min-w-[170px] bg-black text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 dark:bg-white dark:text-black dark:focus-visible:ring-offset-black"
            aria-label="Contact Mohmadhusen Khimani"
          >
            Contact Me

            <Image
              src={assets.right_arrow_white}
              alt=""
              width={16}
              height={16}
              className="w-4 h-4 dark:invert"
            />
          </a>

          {/* Resume CTA */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 min-w-[190px] border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-white dark:hover:text-black transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black"
            aria-label="Download Mohmadhusen Khimani resume"
          >
            Download Resume

            <Image
              src={assets.download_icon}
              alt=""
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </a>
        </motion.div>

        {/* Recruiter Keyword Context */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 text-sm text-gray-500 dark:text-gray-400"
        >
          MERN Stack · React.js · Node.js · Express.js · MongoDB · REST APIs ·
          Next.js · AI Integration
        </motion.p>
      </div>
    </header>
  );
};

export default Header;