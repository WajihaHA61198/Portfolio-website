"use client";

import { useEffect, useState } from "react";
import {
  AboutMe,
  Contact,
  HeroBanner,
  MyWork,
  Navbar,
  Footer,
} from "./components/index";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (
      (localStorage.theme =
        "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme:dark)").matches))
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HeroBanner isDarkMode={isDarkMode} />
      <AboutMe isDarkMode={isDarkMode} />
      <MyWork isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
