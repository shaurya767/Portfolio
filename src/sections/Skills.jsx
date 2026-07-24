import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills, competencies } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const categoryIcons = {
  Languages: "💻",
  "Backend & Cloud": "☁️",
  Frontend: "🎨",
  "Data & Infra": "🗄️",
  "AI & Others": "🤖",
};

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [barRef, barInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section skills-section" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="section-tag">03 — Skills</span>
          <h2 className="section-title">Tech Stack</h2>
        </motion.div>

        {/* Skill chips grid */}
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], ci) => (
            <motion.div
              key={category}
              className="skills-category"
              variants={fadeUp}
              custom={ci + 1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="skills-cat-header">
                <span className="skills-cat-icon">{categoryIcons[category]}</span>
                <h3 className="skills-cat-title">{category}</h3>
              </div>
              <div className="skills-chips">
                {items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className={`skill-chip ${skill.highlight ? "skill-chip--highlight" : ""}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.15 }}
                  >
                    <span
                      className="skill-dot"
                      style={{ background: skill.color }}
                    />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Competency bars */}
        <div className="competencies" ref={barRef}>
          <motion.h3
            className="competencies-title"
            variants={fadeUp}
            initial="hidden"
            animate={barInView ? "visible" : "hidden"}
          >
            Core Competencies
          </motion.h3>
          {competencies.map((c, i) => (
            <motion.div
              key={c.name}
              className="competency"
              variants={fadeUp}
              custom={i + 1}
              initial="hidden"
              animate={barInView ? "visible" : "hidden"}
            >
              <div className="competency-header">
                <span className="competency-name">{c.name}</span>
                <span className="competency-label">{c.label}</span>
              </div>
              <div className="competency-track">
                <motion.div
                  className="competency-bar"
                  initial={{ width: 0 }}
                  animate={barInView ? { width: `${c.level}%` } : { width: 0 }}
                  transition={{ delay: i * 0.12 + 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
