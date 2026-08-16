import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full px-6 sm:px-8 md:px-[10%] lg:px-[12%] py-20 scroll-mt-20"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-indigo-600 dark:text-indigo-400 text-lg font-medium">
          What I Offer
        </p>

        <h2
          id="services-heading"
          className="text-4xl sm:text-5xl font-bold mt-2"
        >
          Professional Development Services
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-300 leading-8">
          I build modern, responsive, and user-focused web applications using
          technologies across frontend development, backend development,
          full-stack JavaScript development, REST API integration, and
          AI-powered application development.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-14"
      >
        {serviceData.map(
          ({ icon, title, description, link }, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative overflow-hidden border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-[#161616] p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-indigo-600 group-hover:w-full transition-all duration-500" />

              {/* Service Icon */}
              <div className="w-14 h-14 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                <Image
                  src={icon}
                  alt={`${title} service icon`}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-6">
                {title}
              </h3>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7 mt-4">
                {description}
              </p>

              {/* Service Link */}
              {link && (
                <a
                  href={link}
                  aria-label={`Learn more about ${title}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-6 hover:gap-3 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-md"
                >
                  Learn More

                  <Image
                    src={assets.right_arrow}
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </a>
              )}
            </motion.article>
          )
        )}
      </motion.div>
    </section>
  );
};

export default Services;