import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { personal } from "../data/portfolio";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      >
        <button
          className="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <span className="nav-logo-text">SU</span>
        </button>

        {/* Desktop Links */}
        <ul className="nav-links desktop-only">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`nav-link ${activeId === id ? "nav-link--active" : ""}`}
                onClick={() => scrollTo(id)}
              >
                {label}
                {activeId === id && (
                  <motion.span className="nav-link-dot" layoutId="nav-dot" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <a href={`mailto:${personal.email}`} className="nav-cta desktop-only">
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          className="hamburger mobile-only"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map(({ id, label }, i) => (
              <motion.button
                key={id}
                className="mobile-nav-link"
                onClick={() => scrollTo(id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {label}
              </motion.button>
            ))}
            <a href={`mailto:${personal.email}`} className="btn btn-primary mobile-cta">
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
