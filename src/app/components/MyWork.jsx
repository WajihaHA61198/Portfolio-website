"use client";

import Image from "next/image";
import Link from "next/link";
import { assets, workData } from "../../../assets/assets";
import { WorkCard } from "./index";

const MyWork = ({ isDarkMode }) => {
  return (
    <section
      id="mywork"
      className="scroll-mt-20 py-20 bg-white text-center dark:bg-dark-200"
    >
      <div className="container mx-auto px-4">
        <h4 className="text-gray-500 dark:text-gray-300 text-sm uppercase mb-2 tracking-wide">
          My portfolio
        </h4>
        <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-300 mb-4">
          My latest work
        </h2>
        <p className="text-gray-500 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </p>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workData.map((data, index) => (
            <WorkCard
              key={index}
              title={data.title}
              description={data.description}
              bgImage={data.bgImage}
              link={data.link}
            />
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-12">
          <Link href="https://github.com/WajihaHA61198" target="_blank">
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-all cursor-pointer dark:bg-pink-500 dark:border-pink-500 dark:hover:bg-gray-900">
              Show more
              <Image
                src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                alt=""
                className="w-3"
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
