import React from "react";
import Image from "next/image";
import { assets } from "../../../assets/assets";

const HeroBanner = ({ isDarkMode }) => {
  return (
    <>
      <section
        id="home"
        className="scroll-mt-20 flex flex-col items-center justify-center min-h-screen text-center px-4 bg-linear-to-b from-white to-gray-50 dark:bg-dark-200 dark:text-white dark:from-dark-200 dark:to-gray-900"
      >
        {/* Intro Text */}
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          Hi! I’m <span className="font-semibold">Wajiha Hanif Arain</span> 👋
        </p>

        <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-3 leading-tight text-gray-900 dark:text-gray-300">
          frontend web developer <br />
          <span className="text-gray-800 dark:text-gray-400">
            based in Pakistan.
          </span>
        </h1>

        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-8">
          I’m a frontend developer from Karachi, Pakistan with 3 years of
          experience in SIAR Digital and did freelancing jobs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full gap-2 hover:bg-gray-900 transition dark:bg-pink-500 dark:hover:bg-gray-900"
          >
            connect with me
            <Image src={assets.right_arrow_white} className="w-4" alt="" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Wajiha_Resume.pdf"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-800 dark:text-gray-300 dark:hover:text-gray-900 rounded-full gap-2 hover:bg-gray-100 transition"
          >
            my resume
            <Image
              src={isDarkMode ? assets.download_icon : assets.download_icon}
              className="w-4"
              alt=""
            />
            {/* <Image src={assets.download_icon} className="w-4" alt="" /> */}
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
