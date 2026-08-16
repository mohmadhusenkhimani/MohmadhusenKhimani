import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-24 scroll-mt-24"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-indigo-600 dark:text-indigo-400 font-medium text-lg">
          Get To Know Me
        </p>

        <h2
          id="about-heading"
          className="text-4xl md:text-5xl font-bold mt-2"
        >
          About Me
        </h2>
      </motion.div>

      {/* Main About Content */}
      <div className="max-w-7xl mx-auto mt-16 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center lg:w-[35%] shrink-0"
        >
         <Image
  src={assets.newhalfphoto}
  alt="Mohmadhusen Khimani"
  className="w-72 sm:w-80 md:w-96 lg:w-[400px] h-auto object-contain"
  priority
/>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="text-gray-600 dark:text-gray-300 leading-8 text-base md:text-lg">

            <p>
              I'm <strong className="text-gray-900 dark:text-white">Mohmadhusen Khimani</strong>,
              an MCA student at <strong className="text-gray-900 dark:text-white">LJ University</strong>
              and a Full Stack MERN Developer focused on building modern,
              responsive, and user-friendly web applications.
            </p>

            <p className="mt-5">
              My core development stack includes{" "}
              <strong className="text-gray-900 dark:text-white">
                React.js, Next.js, Node.js, Express.js, and MongoDB
              </strong>.
              I work with REST APIs, authentication, database operations,
              responsive UI development, and component-based frontend
              architecture to create complete full-stack applications.
            </p>

            <p className="mt-5">
              I completed a{" "}
              <strong className="text-gray-900 dark:text-white">
                6-month MERN Stack Developer internship at Maxgen Technologies
              </strong>,
              where I gained hands-on experience in full-stack web development,
              REST API development, authentication, database management,
              responsive UI development, and Git-based development workflows.
            </p>

            <p className="mt-5">
              Alongside full-stack development, I am strengthening my knowledge
              of{" "}
              <strong className="text-gray-900 dark:text-white">
                Artificial Intelligence, Machine Learning, Data Structures &
                Algorithms, and Software Development
              </strong>.
              My current direction is to combine MERN Stack development with
              Next.js and practical AI integration to build useful,
              technology-driven applications.
            </p>
          </div>

          {/* Professional Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {infoList.map(
              ({ icon, iconDark, title, description }, index) => (
                <motion.article
                  key={`${title}-${index}`}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                  className="border border-gray-300 dark:border-gray-600 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 bg-white/50 dark:bg-transparent"
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt=""
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />

                  <h3 className="text-xl font-semibold mt-5">
                    {title}
                  </h3>

                  <p className="mt-4 text-gray-600 dark:text-gray-300 whitespace-pre-line leading-7 text-sm">
                    {description}
                  </p>
                </motion.article>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;