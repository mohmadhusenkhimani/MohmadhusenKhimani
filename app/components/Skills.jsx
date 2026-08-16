import { skillsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Skills = ({ isDarkMode }) => {
  const statistics = [
    { number: "10+", title: "Technologies" },
    { number: "10+", title: "Projects" },
    { number: "20+", title: "Certifications" },
    { number: "6 Months", title: "Internship" },
  ];

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="w-full px-6 sm:px-8 lg:px-12 py-20 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-lg font-Ovo text-indigo-600 dark:text-indigo-400"
        >
          My Technical Expertise
        </motion.p>

        <motion.h2
          id="skills-heading"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-bold mt-2"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mt-6 text-gray-600 dark:text-gray-300 leading-8"
        >
          I develop modern full-stack web applications using the MERN Stack
          and related JavaScript technologies. My technical experience spans
          frontend development, backend development, REST APIs, databases,
          authentication, responsive UI development, and AI/ML learning.
        </motion.p>

        {/* Professional Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-14 mb-16"
        >
          {statistics.map((item) => (
            <motion.article
              key={item.title}
              whileHover={{
                y: -6,
                scale: 1.04,
              }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-gray-200 dark:border-gray-700 p-5 sm:p-6 text-center shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                {item.number}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {item.title}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {skillsData.map(
            ({ icon, icon_dark, title, description }, index) => (
              <motion.article
                key={`${title}-${index}`}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#161616] p-7 sm:p-8 shadow-sm hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Hover Accent */}
                <div
                  className="absolute top-0 left-0 h-1 w-0 bg-indigo-600 group-hover:w-full transition-all duration-500"
                  aria-hidden="true"
                />

                {/* Skill Icon */}
                <div className="w-16 h-16 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center mb-6">
                  <Image
                    src={isDarkMode ? icon_dark : icon}
                    alt=""
                    width={36}
                    height={36}
                    className="w-9 h-9 object-contain"
                  />
                </div>

                {/* Skill Title */}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  {title}
                </h3>

                {/* Skill Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-7 text-sm">
                  {description}
                </p>
              </motion.article>
            )
          )}
        </motion.div>

        {/* Technical Keywords */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-7">
            Core technologies: HTML5 · CSS3 · JavaScript ES6+ · React.js ·
            Next.js · Tailwind CSS · Node.js · Express.js · MongoDB · MySQL ·
            REST APIs · JWT · Git · GitHub
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;