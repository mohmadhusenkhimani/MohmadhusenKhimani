import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
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
          Featured Projects
        </motion.p>

        <motion.h2
          id="work-heading"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl sm:text-5xl font-bold mt-2"
        >
          My Latest Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mt-6 text-gray-600 dark:text-gray-300 leading-8"
        >
          Explore selected full-stack and web development projects built with
          modern technologies. These projects demonstrate practical experience
          with frontend development, backend development, REST APIs,
          authentication, database management, responsive UI, and
          AI-powered application development where applicable.
        </motion.p>

        {/* Portfolio Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-14 mb-16"
        >
          {[
            {
              number: "10+",
              title: "Projects Completed",
            },
            {
              number: "6 Months",
              title: "Internship Experience",
            },
            {
              number: "20+",
              title: "Certifications",
            },
            {
              number: "15+",
              title: "Technologies Used",
            },
          ].map((item) => (
            <motion.article
              key={item.title}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#161616] p-5 sm:p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                {item.number}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {item.title}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16"
        >
          {workData.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl bg-white dark:bg-[#161616] border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-60">
                <Image
                  src={project.bgImage}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Image Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  aria-hidden="true"
                />

                {/* Project Category */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold">
                    {project.category || "Full Stack"}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-7">
                  {project.description}
                </p>

                {/* Technology Stack */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-700 dark:text-gray-200">
                    Technology Stack
                  </h4>

                  <div
                    className="flex flex-wrap gap-2 mt-3"
                    aria-label={`${project.title} technology stack`}
                  >
                    {(project.techStack || [
                      "React",
                      "Node.js",
                      "MongoDB",
                    ]).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-gray-100 dark:bg-[#232323] text-gray-700 dark:text-gray-200 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">
                    Key Features
                  </h4>

                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {(project.features || [
                      "Responsive UI",
                      "REST APIs",
                      "Authentication",
                    ]).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 leading-6"
                      >
                        <span
                          className="text-green-500 mt-0.5 shrink-0"
                          aria-hidden="true"
                        >
                          ✔
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">

                  {/* Live Demo */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                      className="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                    >
                      Live Demo
                    </a>
                  )}

                  {/* GitHub */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                      className="flex-1 text-center border border-gray-300 dark:border-gray-600 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-[#232323] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* More Projects / GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="max-w-4xl mx-auto rounded-3xl border border-gray-200 dark:border-gray-700 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-[#161616] dark:via-[#1d1d1d] dark:to-[#161616] p-8 sm:p-10 shadow-xl text-center">

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Want to See More?
            </h3>

            <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8 max-w-2xl mx-auto">
              Explore{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                10+ additional projects
              </span>
              , coding practice, university projects, MERN Stack
              applications, AI experiments, and my continuous software
              development journey on GitHub.
            </p>

            {/* Technology Highlights */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {[
                "MERN Stack",
                "Next.js",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "JavaScript",
                "AI/ML",
                "Open Source",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-white dark:bg-[#232323] border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* GitHub CTA */}
            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="https://github.com/mohmadhusenkhimani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Mohmadhusen Khimani GitHub profile"
              className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Visit My GitHub

              
                          <Image
                            src={assets.right_arrow_white}
                            alt=""
                            width={16}
                            height={16}
                            className="w-4 h-4 dark:invert"
                          />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;