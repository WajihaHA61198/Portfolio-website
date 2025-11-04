import Image from "next/image";

const AboutInfoCard = ({ title, description, icon, iconDark, isDarkMode }) => {
  return (
    <div className="flex-1 min-w-[150px] dark:bg-gray-900 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <Image src={isDarkMode ? iconDark : icon} alt="" className="w-4 mb-4" />
      <p className="text-xs text-gray-500 dark:text-gray-300">{title}</p>
      <p className="font-medium text-gray-800 dark:text-gray-300 mt-1 text-sm">
        {description}
      </p>
    </div>
  );
};

export default AboutInfoCard;
