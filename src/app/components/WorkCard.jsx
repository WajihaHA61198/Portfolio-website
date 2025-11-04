import React from "react";
import { assets } from "../../../assets/assets";
import Link from "next/link";
import Image from "next/image";

const WorkCard = ({ title, description, bgImage, link }) => {
  return (
    <>
      <div className="relative rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow">
        <Image
          src={bgImage}
          alt={title}
          width={400}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {link ? (
          <Link href={link} target="_blank">
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-lg flex items-center justify-between">
              <div className="text-left">
                <h3 className="text-gray-900 font-medium text-sm">{title}</h3>
                <p className="text-gray-500 text-xs">{description}</p>
              </div>
              <span className="bg-lime-300 text-gray-800 p-2 rounded-full transition-transform duration-200 group-hover:rotate-45">
                <Image src={assets.arrow_icon} alt="" className="w-3" />
              </span>
            </div>
          </Link>
        ) : (
          <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-lg flex items-center justify-between">
            <div className="text-left">
              <h3 className="text-gray-900 font-medium text-sm">{title}</h3>
              <p className="text-gray-500 text-xs">{description}</p>
            </div>
            <span className="bg-lime-300 text-gray-800 p-2 rounded-full transition-transform duration-200 group-hover:rotate-45">
              <Image src={assets.arrow_icon} alt="" className="w-3" />
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default WorkCard;
