import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { personal, stats } from "../data/portfolio";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-orb hero-orb-3" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content">
        <motion.div
          className="hero-inner"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="badge-pulse" />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.h1 className="hero-name" variants={itemVariants}>
            <span className="hero-name-first">Shaurya</span>
            <br />
            <span className="hero-name-last gradient-text">Upadhyay</span>
          </motion.h1>

          {/* Title */}
          <motion.div className="hero-title-row" variants={itemVariants}>
            <span className="hero-title">{personal.title}</span>
            <span className="hero-at"> @ </span>
            <span className="hero-company">{personal.company}</span>
          </motion.div>

          {/* Description */}
          <motion.p className="hero-description" variants={itemVariants}>
            {personal.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero-actions" variants={itemVariants}>
            <button
              className="btn btn-primary"
              onClick={() =>
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Work <FiArrowRight />
            </button>
            <a href={`mailto:${personal.email}`} className="btn btn-ghost">
              Get in Touch
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-icon"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div className="hero-stats" variants={itemVariants}>
            {stats.map((stat, i) => (
              <div key={i} className="hero-stat">
                <span className="hero-stat-number gradient-text">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
                {i < stats.length - 1 && <div className="stat-divider" />}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>Scroll</span>
        <div className="scroll-line">
          <motion.div
            className="scroll-dot"
            animate={{ y: [0, 18, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
