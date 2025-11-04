import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile from "./profile.png";
import download_icon from "./download-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import right_arrow from "./right-arrow.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import work1 from "./work1.png";
import work2 from "./work2.jpg";
import work3 from "./work3.png";
import work4 from "./work4.jpg";

export const assets = {
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  mail_icon,
  mail_icon_dark,
  profile,
  download_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  right_arrow,
  right_arrow_bold,
  right_arrow_bold_dark,
};
// My work
export const workData = [
  {
    title: "Real-time Chat Flow using WebSockets-Socket.io in Next.js",
    description: "Web application",
    bgImage: work1,
    link: "https://real-time-chat-flow-using-web-socke.vercel.app/",
  },
  {
    title: "Travel agency app",
    description: "Web  App",
    bgImage: work2,
    // link: "https://real-time-chat-flow-using-web-socke.vercel.app/"
  },
  {
    title: "Mindchat with Google Gemini",
    description: "Web App",
    bgImage: work3,
    link: "https://mind-chat-google-gemini-qyautg16p-wajihaha61198s-projects.vercel.app/",
  },
  {
    title: "Face recognization app",
    description: "Web app with AI",
    bgImage: work4,
    // link: "https://real-time-chat-flow-using-web-socke.vercel.app/"
  },
];
// About
export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description:
      "HTML, CSS, JavaScript, React.js, Next.js, Shopify liquid,Node.js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "BS in Software Engineering",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
// Footer
export const footerMenu = [
  {
    title: "Github",
    link: "https://github.com/WajihaHA61198?tab=repositories",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/wajiha-arain-4a08a2218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  { title: "Twitter", link: "#" },
];
// Header
export const headerMenu = [
  { title: "Home", link: "#home" },
  { title: "About me", link: "#aboutme" },
  { title: "My work", link: "#mywork" },
];
