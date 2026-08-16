"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResult("");

    const formData = new FormData(event.currentTarget);

    formData.append(
      "access_key",
      "bec45a09-7af9-4c84-94a8-6aba864b4491"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("success");
        event.currentTarget.reset();
      } else {
        setResult("error");
      }
    } catch (error) {
      setResult("network-error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-heading"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full px-6 sm:px-8 md:px-[12%] py-20 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto]"
      style={{
        backgroundImage: isDarkMode
          ? "none"
          : "url('/footer-bg-color.png')",
      }}
    >
      {/* Section Heading */}
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-lg font-Ovo mb-2 text-indigo-600 dark:text-indigo-400"
      >
        Connect With Me
      </motion.p>

      <motion.h2
        id="contact-heading"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-Ovo"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mt-6 text-gray-600 dark:text-gray-300 leading-7"
      >
        Whether you are looking for a Full Stack MERN Developer, discussing a
        software project, exploring full-time opportunities, or interested in
        collaboration, I would be happy to connect. Send me a message and
        let&apos;s discuss how we can build something valuable together.
      </motion.p>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-14 mb-14"
      >
        {/* Email */}
        <motion.article
          whileHover={{ y: -8 }}
          className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-[#161616]/70 backdrop-blur-md p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div
            className="text-4xl mb-4"
            aria-hidden="true"
          >
            📧
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Email
          </h3>

          <a
            href="mailto:khimanimohmadhusen@gmail.com"
            className="text-gray-600 dark:text-gray-300 break-all hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
          >
            khimanimohmadhusen@gmail.com
          </a>
        </motion.article>

        {/* Location */}
        <motion.article
          whileHover={{ y: -8 }}
          className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-[#161616]/70 backdrop-blur-md p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div
            className="text-4xl mb-4"
            aria-hidden="true"
          >
            📍
          </div>

          <h3 className="text-xl font-semibold mb-2">
            Location
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            Ahmedabad, Gujarat, India
          </p>
        </motion.article>

        {/* LinkedIn */}
        <motion.article
          whileHover={{ y: -8 }}
          className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-[#161616]/70 backdrop-blur-md p-8 text-center shadow-md hover:shadow-xl transition-all duration-300"
        >
          <div
            className="text-4xl mb-4"
            aria-hidden="true"
          >
            💼
          </div>

          <h3 className="text-xl font-semibold mb-2">
            LinkedIn
          </h3>

          <a
            href="https://www.linkedin.com/in/mohmadhusen-khimani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Mohmadhusen Khimani LinkedIn profile"
            className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
          >
            View My Profile
          </a>
        </motion.article>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
        aria-label="Contact form"
        className="max-w-3xl mx-auto"
      >
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            viewport={{ once: true }}
          >
            <label
              htmlFor="contact-name"
              className="sr-only"
            >
              Full Name
            </label>

            <input
              id="contact-name"
              type="text"
              name="name"
              required
              autoComplete="name"
              placeholder="Full Name"
              className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-[#161616]/70 backdrop-blur-md px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
          </motion.div>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
          >
            <label
              htmlFor="contact-email"
              className="sr-only"
            >
              Email Address
            </label>

            <input
              id="contact-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-[#161616]/70 backdrop-blur-md px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            />
          </motion.div>
        </div>

        {/* Subject */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <label
            htmlFor="contact-subject"
            className="sr-only"
          >
            Subject
          </label>

          <input
            id="contact-subject"
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-[#161616]/70 backdrop-blur-md px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          />
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <label
            htmlFor="contact-message"
            className="sr-only"
          >
            Message
          </label>

          <textarea
            id="contact-message"
            name="message"
            rows={7}
            required
            placeholder="Tell me about your project, internship opportunity, or how I can help you..."
            className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-[#161616]/70 backdrop-blur-md px-5 py-4 outline-none resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          viewport={{ once: true }}
          whileHover={!loading ? { scale: 1.05 } : undefined}
          whileTap={!loading ? { scale: 0.98 } : undefined}
          type="submit"
          disabled={loading}
          aria-busy={loading}
          className={`mt-8 mx-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          }`}
        >
          {loading ? (
            <>
              <svg
                className="w-5 h-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />

                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>

              Sending...
            </>
          ) : (
            <>
              Send Message

              <Image
                src={assets.right_arrow_white}
                alt=""
                width={16}
                height={16}
                className="w-4 h-auto dark:invert"
              />
            </>
          )}
        </motion.button>

        {/* Form Status */}
        {result && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            role="status"
            aria-live="polite"
            className={`mt-6 text-center font-medium ${
              result === "success"
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {result === "success" &&
              "Your message has been sent successfully."}

            {result === "error" &&
              "Something went wrong. Please try again."}

            {result === "network-error" &&
              "Network error. Please try again later."}
          </motion.p>
        )}
      </motion.form>
    </motion.section>
  );
};

export default Contact;