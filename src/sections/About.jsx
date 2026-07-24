import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiLinkedin, FiPhone } from "react-icons/fi";
import { personal, education } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="section about-section" id="about" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="section-tag">01 — About</span>
          <h2 className="section-title">Who I Am</h2>
        </motion.div>

        <div className="about-grid">
          {/* Text Side */}
          <div className="about-text">
            <motion.p
              className="about-lead"
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              I'm a software engineer passionate about building systems that scale,
              heal themselves, and create real-world impact.
            </motion.p>
            <motion.p
              className="about-body"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Currently working at <strong>Flexport</strong> in Bangalore, I design and
              engineer agentic AI platforms, CI/CD infrastructure, and resilient
              distributed systems. Previously at <strong>Powerplay</strong> and{" "}
              <strong>Amazon</strong>, I've shipped products ranging from dynamic
              onboarding flows to cloud-native APIs.
            </motion.p>
            <motion.p
              className="about-body"
              variants={fadeUp}
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              I graduated from <strong>IIT (ISM) Dhanbad</strong> with a B.Tech in
              Electrical Engineering (CGPA {education.cgpa}), where I built the
              foundation for thinking rigorously about complex systems.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="about-links"
              variants={fadeUp}
              custom={4}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                <FiLinkedin size={18} /> LinkedIn
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                <FiGithub size={18} /> GitHub
              </a>
              <a href={`tel:${personal.phone}`} className="about-link">
                <FiPhone size={18} /> {personal.phone}
              </a>
            </motion.div>
          </div>

          {/* Cards Side */}
          <div className="about-cards">
            {[
              {
                icon: "🎓",
                title: "IIT (ISM) Dhanbad",
                sub: "B.Tech Electrical Engineering",
                meta: `${education.duration} · CGPA ${education.cgpa}`,
                delay: 2,
              },
              {
                icon: "📍",
                title: "Bangalore, Karnataka",
                sub: "Open to relocation & remote",
                delay: 3,
              },
              {
                icon: "⚡",
                title: "Current Focus",
                sub: "Agentic AI · Distributed Systems · CI/CD",
                delay: 4,
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="about-card"
                variants={fadeUp}
                custom={card.delay}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <span className="about-card-icon">{card.icon}</span>
                <div>
                  <h3 className="about-card-title">{card.title}</h3>
                  <p className="about-card-sub">{card.sub}</p>
                  {card.meta && <span className="about-card-meta">{card.meta}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
