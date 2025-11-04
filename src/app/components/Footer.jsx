import Image from "next/image";
import Link from "next/link";
import { assets, footerMenu } from "../../../assets/assets";

const Footer = ({ isDarkMode }) => {
  return (
    <>
      <footer>
        <div className="footer-container">
          {/* Name and Email */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">
            Wajiha<span className="text-rose-500">.</span>
          </h2>

          <div className="flex items-center justify-center text-gray-600 mb-6 dark:text-gray-300">
            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt="email icon"
              className="w-4 mr-2"
            />
            <Link
              href="mailto:wajihahanif@gmail.com"
              className="hover:text-gray-900 transition dark:hover:text-gray-400"
            >
              wajihahanif18@gmail.com
            </Link>
          </div>

          {/* Divider line */}
          <hr className="border-gray-200 dark:border-gray-500 mb-6" />

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p>© 2025 Wajiha Hanif. All rights reserved.</p>

            <div className="flex gap-6">
              {footerMenu.map((footermenus, index) => (
                <Link
                  key={index}
                  href={footermenus.link}
                  target="_blank"
                  className="hover:text-gray-900 dark:hover:text-gray-400"
                >
                  {footermenus.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
