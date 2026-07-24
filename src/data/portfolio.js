export const personal = {
  name: "Shaurya Upadhyay",
  title: "Software Development Engineer",
  company: "Flexport",
  location: "Bangalore, Karnataka",
  email: "shyamshaaurya.upd@gmail.com",
  phone: "+91 7297091033",
  linkedin: "https://linkedin.com/in/shaurya-upadhyay/",
  github: "https://github.com/shaurya767",
  tagline: "Building systems that scale, heal themselves, and create real-world impact.",
  summary:
    "Software engineer passionate about distributed systems, agentic AI, and scalable infrastructure. Currently at Flexport, previously at Powerplay and Amazon.",
};

export const stats = [
  { value: "$400K+", label: "Revenue Recovered" },
  { value: "80%+", label: "Ops Automated" },
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Prod Services" },
];

export const education = {
  institution: "Indian Institute of Technology (ISM), Dhanbad",
  location: "Dhanbad, Jharkhand",
  degree: "Bachelor of Technology in Electrical Engineering",
  cgpa: "7.78",
  duration: "Aug 2019 – May 2023",
};

export const experience = [
  {
    id: "flexport",
    role: "Software Development Engineer",
    company: "Flexport",
    location: "Bangalore, Karnataka",
    duration: "March 2025 – Present",
    current: true,
    color: "#6366f1",
    bullets: [
      "Engineered an **agentic clawback-recovery platform** where an LLM autonomously classifies carrier email responses and drives automated outreach end-to-end, recovering **$400K/year** and automating 80%+ of previously fully manual Ops workflow, saving **20 hours/week**.",
      "Architected **FlexPilot**, a reusable canary-deployment CI/CD system packaged as composable pipeline jobs. Solved safe rollout for provisioned-concurrency AWS Lambdas from first principles — adopted by **10+ production services**, enabling any team to onboard canary deployments in **30 minutes**.",
      "Led engineering delivery to insource India-origin freight forwarding from third-party agents to direct Flexport operations, auditing and updating automated business logic across **150+ Ocean and Air workflows**.",
      "Built a **self-healing circuit breaker** for carrier outages that eliminated a recurring class of incidents causing warehouse order backlogs, automatically isolating and recovering 20+ carriers without on-call intervention.",
      "Designed a **rules-based routing-eligibility engine** replacing a rigid all-or-nothing toggle with fine-grained control, plus a self-serve admin interface so operations teams can manage rules without engineering involvement.",
      "Designed an **audit-logging system** for production configuration tables capturing queryable before/after change logs — reusable infrastructure now live on **15+ production tables** with zero additional code for new tables.",
    ],
    tags: ["Agentic AI", "LLM", "AWS Lambda", "CI/CD", "Distributed Systems", "n8n", "TypeScript"],
  },
  {
    id: "powerplay",
    role: "Software Development Engineer",
    company: "Powerplay",
    location: "Bangalore, Karnataka",
    duration: "July 2023 – Feb 2025",
    current: false,
    color: "#10b981",
    bullets: [
      "Architected a **dynamic onboarding module** with integrated backend and frontend that personalizes questions based on user responses, automating document collection and team integration — reducing onboarding time from **10 days to 20 minutes**.",
      "Implemented the **Attendance Module** interface, a core product feature introducing vendor and labor listings with integrated profiles for attendance tracking and payment recording, rolled out to all new paid users.",
      "Migrated the React build process from **Webpack to Vite**, resulting in a **50% reduction in build time** and significant boost in both development and deployment efficiency.",
      "Implemented and extended **ShadCN UI components** to ensure uniformity across the codebase while aligning with specific use cases.",
    ],
    tags: ["React", "Vite", "ShadCN UI", "Node.js", "Redux", "TypeScript"],
  },
  {
    id: "amazon",
    role: "Software Developer Intern",
    company: "Amazon",
    location: "Remote, India",
    duration: "May 2022 – July 2022",
    current: false,
    color: "#f59e0b",
    bullets: [
      "Designed a **CRUD API for Downtime Management** enabling clients to schedule and cancel downtimes; published events via Amazon SNS for timely client notification.",
      "Automated **ARN storage for AppOnboardingConfig files** using AWS Lambda and AWS AppConfig, streamlining configuration management.",
    ],
    tags: ["AWS Lambda", "Amazon SNS", "AWS AppConfig", "REST API"],
  },
];

export const skills = {
  Languages: [
    { name: "JavaScript", color: "#f7df1e" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "C", color: "#555555" },
    { name: "C++", color: "#f34b7d" },
    { name: "Java", color: "#b07219" },
  ],
  "Backend & Cloud": [
    { name: "Node.js", color: "#68a063" },
    { name: "Express.js", color: "#68a063" },
    { name: "AWS Lambda", color: "#ff9900" },
    { name: "API Gateway", color: "#ff9900" },
    { name: "SQS", color: "#ff9900" },
    { name: "SNS", color: "#ff9900" },
    { name: "Kinesis", color: "#ff9900" },
    { name: "DynamoDB", color: "#ff9900" },
  ],
  Frontend: [
    { name: "React", color: "#61dafb" },
    { name: "Redux", color: "#764abc" },
    { name: "Vite", color: "#646cff" },
    { name: "ShadCN UI", color: "#ffffff" },
  ],
  "Data & Infra": [
    { name: "Redis", color: "#c0392b" },
    { name: "MongoDB", color: "#47a248" },
    { name: "Snowflake", color: "#29b5e8" },
    { name: "DBT", color: "#f37626" },
    { name: "Datadog", color: "#632ca6" },
    { name: "CircleCI", color: "#343434" },
    { name: "Mongoose", color: "#880000" },
  ],
  "AI & Others": [
    { name: "Agentic AI / LLM", color: "#a855f7", highlight: true },
    { name: "MCP", color: "#8b5cf6", highlight: true },
    { name: "Claude Code / Codex", color: "#ec4899", highlight: true },
    { name: "n8n", color: "#56bf87" },
    { name: "CDC", color: "#6c757d" },
    { name: "Git", color: "#f05032" },
    { name: "Postman", color: "#ff6c37" },
    { name: "System Design", color: "#6c757d" },
    { name: "DSA", color: "#6c757d" },
    { name: "OOP", color: "#6c757d" },
  ],
};

export const competencies = [
  { name: "Backend Development", level: 92, label: "Expert" },
  { name: "Cloud & AWS", level: 88, label: "Advanced" },
  { name: "Agentic AI / LLM Systems", level: 85, label: "Advanced" },
  { name: "System Design", level: 87, label: "Advanced" },
  { name: "Frontend (React)", level: 80, label: "Proficient" },
];
