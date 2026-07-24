import { motion } from "framer-motion";

const themes = [
  { id: "v1", label: "V1", name: "Tech Dark" },
  { id: "v2", label: "V2", name: "Editorial" },
  { id: "v3", label: "V3", name: "Brutalist" },
  { id: "v4", label: "V4", name: "Terminal" },
];

export default function ThemeSwitcher({ currentTheme, onChangeTheme }) {
  return (
    <div className="theme-switcher" role="group" aria-label="Choose portfolio theme">
      <span className="theme-switcher-label">Style</span>
      {themes.map((t) => (
        <motion.button
          key={t.id}
          className={`theme-btn ${currentTheme === t.id ? "theme-btn--active" : ""}`}
          onClick={() => onChangeTheme(t.id)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          aria-pressed={currentTheme === t.id}
          title={t.name}
        >
          <span className="theme-btn-label">{t.label}</span>
          <span className="theme-btn-name">{t.name}</span>
        </motion.button>
      ))}
    </div>
  );
}
