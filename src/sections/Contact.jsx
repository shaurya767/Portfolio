import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiMail, FiLinkedin, FiGithub, FiPhone, FiArrowRight } from "react-icons/fi";
import { personal } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const contactMethods = [
  {
    id: "email",
    icon: <FiMail size={22} />,
    label: "Email",
    value: "shyamshaaurya.upd@gmail.com",
    href: `mailto:${personal.email}`,
  },
  {
    id: "linkedin",
    icon: <FiLinkedin size={22} />,
    label: "LinkedIn",
    value: "linkedin.com/in/shaurya-upadhyay/",
    href: personal.linkedin,
    external: true,
  },
  {
    id: "github",
    icon: <FiGithub size={22} />,
    label: "GitHub",
    value: "github.com/shaurya767",
    href: personal.github,
    external: true,
  },
  {
    id: "phone",
    icon: <FiPhone size={22} />,
    label: "Phone",
    value: "+91 7297091033",
    href: `tel:${personal.phone}`,
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="section-tag">04 — Contact</span>
          <h2 className="section-title">Let's Talk</h2>
        </motion.div>

        <div className="contact-grid">
          {/* Left */}
          <div className="contact-left">
            <motion.p
              className="contact-lead"
              variants={fadeUp}
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              Whether you're building something ambitious, looking for a passionate
              engineer, or just want to geek out about distributed systems — I'd love
              to hear from you.
            </motion.p>

            <div className="contact-methods">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.id}
                  id={`${method.id}-contact`}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className="contact-method"
                  variants={fadeUp}
                  custom={i + 2}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="contact-method-icon">{method.icon}</span>
                  <div className="contact-method-info">
                    <span className="contact-method-label">{method.label}</span>
                    <span className="contact-method-value">{method.value}</span>
                  </div>
                  <FiArrowRight className="contact-method-arrow" size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — glassy card */}
          <motion.div
            className="contact-card"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="contact-card-glow" aria-hidden="true" />
            <div className="contact-availability">
              <span className="availability-dot" />
              <span>Open to new opportunities</span>
            </div>
            <p className="contact-card-text">
              Currently based in Bangalore. Interested in impactful engineering roles
              at ambitious companies building things that matter.
            </p>
            <a
              id="contact-cta"
              href={`mailto:${personal.email}`}
              className="btn btn-primary btn-full"
            >
              Send a Message <FiArrowRight />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
