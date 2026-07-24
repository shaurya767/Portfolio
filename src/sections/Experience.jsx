import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

function parseBold(text) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeId, setActiveId] = useState("flexport");

  const active = experience.find((e) => e.id === activeId);

  return (
    <section className="section experience-section" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="section-tag">02 — Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
        </motion.div>

        <div className="exp-layout">
          {/* Sidebar tabs */}
          <motion.div
            className="exp-sidebar"
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {experience.map((exp) => (
              <button
                key={exp.id}
                className={`exp-tab ${activeId === exp.id ? "exp-tab--active" : ""}`}
                onClick={() => setActiveId(exp.id)}
                style={{ "--accent": exp.color }}
              >
                <span className="exp-tab-company">{exp.company}</span>
                <span className="exp-tab-role">{exp.role}</span>
                <span className="exp-tab-date">{exp.duration}</span>
                {exp.current && <span className="exp-tab-badge">Current</span>}
              </button>
            ))}
          </motion.div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.id}
                className="exp-panel"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="exp-panel-header"
                  style={{ "--accent": active.color }}
                >
                  <div className="exp-panel-accent-bar" />
                  <div>
                    <h3 className="exp-panel-role">{active.role}</h3>
                    <div className="exp-panel-meta">
                      <span className="exp-panel-company">{active.company}</span>
                      <span className="exp-panel-dot">·</span>
                      <span className="exp-panel-location">{active.location}</span>
                      <span className="exp-panel-dot">·</span>
                      <span className="exp-panel-duration">{active.duration}</span>
                    </div>
                  </div>
                </div>

                <ul className="exp-bullets">
                  {active.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      className="exp-bullet"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.4 }}
                    >
                      <span
                        className="exp-bullet-dot"
                        style={{ background: active.color }}
                      />
                      <span>{parseBold(bullet)}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="exp-tags">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag"
                      style={{ "--accent": active.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
