import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/mohmadhusen-khimani",
      icon: Linkedin,
      hoverClass: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      href: "https://github.com/mohmadhusenkhimani",
      icon: Github,
      hoverClass: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/mohmadhusen.khimani",
      icon: Instagram,
      hoverClass: "hover:text-pink-500",
    },
  ];

  return (
    <footer
      id="footer"
      className="mt-24 border-t border-gray-300 dark:border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Footer Identity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <a
            href="#top"
            aria-label="Return to the top of Mohmadhusen Khimani's portfolio"
            className="inline-flex items-center"
          >
            <h2 className="text-3xl font-bold">
              Mohmadhusen
              <span className="text-red-500" aria-hidden="true">
                .
              </span>
            </h2>
          </a>

          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Full Stack MERN Developer
          </p>

          <a
            href="mailto:khimanimohmadhusen@gmail.com"
            aria-label="Email Mohmadhusen Khimani"
            className="mt-5 inline-flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Mail
              size={20}
              aria-hidden="true"
            />

            <span>
              khimanimohmadhusen@gmail.com
            </span>
          </a>
        </motion.div>

        {/* Divider */}
        <div
          aria-hidden="true"
          className="border-t border-gray-300 dark:border-gray-700 my-10"
        />

        {/* Footer Navigation & Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-center md:text-left text-gray-600 dark:text-gray-400">
            © {currentYear} Mohmadhusen Khimani. All Rights Reserved.
          </p>

          {/* Social Links */}
          <nav
            aria-label="Social media links"
            className="flex items-center gap-6"
          >
            {socialLinks.map(
              ({ name, href, icon: Icon, hoverClass }) => (
                <motion.a
                  key={name}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Mohmadhusen Khimani on ${name}`}
                  title={name}
                  className={`text-gray-600 dark:text-gray-300 transition-colors ${hoverClass}`}
                >
                  <Icon
                    size={22}
                    aria-hidden="true"
                  />
                </motion.a>
              )
            )}
          </nav>

          {/* Back to Top */}
          <motion.a
            whileHover={{
              y: -4,
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
            href="#top"
            aria-label="Back to top"
            title="Back to top"
            className="w-11 h-11 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <ArrowUp
              size={20}
              aria-hidden="true"
            />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;