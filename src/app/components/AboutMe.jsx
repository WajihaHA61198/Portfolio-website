"use client";
import Image from "next/image";
import { assets, infoList, toolsData } from "../../../assets/assets";
import { AboutInfoCard } from "./index";

const AboutMe = ({ isDarkMode }) => {
  return (
    <section
      id="aboutme"
      className="scroll-mt-20 max-w-6xl mx-auto px-6 py-20 dark:bg-dark-200 dark:text-white"
    >
      <div className="text-center mb-12">
        <p className="text-sm text-gray-500 dark:text-gray-300 uppercase tracking-wide">
          Introduction
        </p>
        <h2 className="text-4xl font-semibold text-gray-900 dark:text-gray-300 mt-2">
          About me
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <Image
              src={assets.profile}
              alt="Profile Picture"
              width={300}
              height={300}
              className="object-contain h-90 rounded-2xl"
            />
          </div>
        </div>

        {/* About Text + Cards */}
        <div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Frontend Developer with 3 years of experience in React.js, Next.js,
            and modern JavaScript frameworks. Skilled in building fast,
            scalable, and SEO-friendly web applications with clean architecture
            and high-performance UIs. Experienced in Shopify and MERN-stack
            solutions for fashion and retail brands, focused on delivering
            user-centric digital experiences.
          </p>

          {/* Info Cards */}
          <div className="flex flex-wrap gap-4 mb-8">
            {infoList.map((aboutInfoCard, index) => (
              <AboutInfoCard
                key={index}
                title={aboutInfoCard.title}
                description={aboutInfoCard.description}
                icon={aboutInfoCard.icon}
                iconDark={aboutInfoCard.iconDark}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>

          {/* Tools */}
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-3 font-medium">
              Tools I use
            </p>
            <div className="flex flex-wrap gap-3 text-2xl text-gray-600 dark:text-gray-300">
              {toolsData.map((toolsdatas, index) => (
                <Image
                  key={index}
                  src={toolsdatas}
                  alt={`Tool-${index + 1}`}
                  className="w-12 p-2 border-gray-300 border rounded-[4px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
