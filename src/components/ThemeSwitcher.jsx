import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  { id: "v1", label: "V1", name: "Tech Dark" },
  { id: "v2", label: "V2", name: "Editorial" },
  { id: "v3", label: "V3", name: "Brutalist" },
  { id: "v4", label: "V4", name: "Terminal" },
  { id: "v5", label: "V5", name: "Synthwave" },
  { id: "v6", label: "V6", name: "Monochrome" },
  { id: "v7", label: "V7", name: "Glass/Frost" },
  { id: "v8", label: "V8", name: "E-Ink" },
  { id: "v9", label: "V9", name: "Cyberpunk" },
  { id: "v10", label: "V10", name: "Dracula" },
  { id: "v11", label: "V11", name: "Solarized" },
  { id: "v12", label: "V12", name: "Gruvbox" },
];

export default function ThemeSwitcher({ currentTheme, onChangeTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const activeTheme = themes.find((t) => t.id === currentTheme);

  return (
    <div className="theme-switcher-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="theme-switcher-menu"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="theme-switcher-header">
              <span>Select Theme</span>
              <button className="theme-switcher-close" onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>
            <div className="theme-switcher-list">
              {themes.map((t) => (
                <button
                  key={t.id}
                  className={`theme-list-btn ${currentTheme === t.id ? "theme-list-btn--active" : ""}`}
                  onClick={() => {
                    onChangeTheme(t.id);
                    setIsOpen(false);
                  }}
                  aria-pressed={currentTheme === t.id}
                >
                  <span className="theme-list-label">{t.label}</span>
                  <span className="theme-list-name">{t.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="theme-switcher-fab"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme menu"
      >
        <span className="fab-icon">🎨</span>
        <span className="fab-text desktop-only">{activeTheme?.name}</span>
      </motion.button>
    </div>
  );
}
