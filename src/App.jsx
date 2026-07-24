import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";

export const ThemeContext = {
  themes: [
    { id: "v1", label: "V1", name: "Tech Dark" },
    { id: "v2", label: "V2", name: "Editorial" },
    { id: "v3", label: "V3", name: "Brutalist" },
    { id: "v4", label: "V4", name: "Terminal" },
    { id: "v5", label: "V5", name: "Synthwave" },
    { id: "v6", label: "V6", name: "Monochrome" },
    { id: "v7", label: "V7", name: "Glass/Frost" },
    { id: "v8", label: "V8", name: "E-Ink" },
  ],
};

export default function App() {
  const [theme, setTheme] = useState("v1");

  return (
    <div className={`theme-root theme-${theme}`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ThemeSwitcher currentTheme={theme} onChangeTheme={setTheme} />
    </div>
  );
}
