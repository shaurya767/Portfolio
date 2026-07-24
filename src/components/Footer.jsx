import { FiGithub, FiLinkedin } from "react-icons/fi";
import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-name">{personal.name}</span>
          <span className="footer-copy">
            Designed & built with{" "}
            <span style={{ color: "var(--accent)" }}>♥</span> · 2025
          </span>
          <div className="footer-links">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
