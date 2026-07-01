/* ============================================================
   EDIT THIS FILE TO UPDATE YOUR WEBSITE.
   Everything on the site is rendered from this one object.
   Add a paper: copy a publications entry, edit, save, push.
   ============================================================ */

const SITE = {
  name: "Tagore Rao Kosireddy",
  shortName: "Tagore Kosireddy",
  role: "PhD Student, Computer Science",
  institution: "Michigan Technological University",
  location: "Houghton, MI, USA",
  email: "trkosire@mtu.edu",

  // One-line thesis shown in the hero
  tagline: "I study what language models learn but do not say.",

  // Short bio paragraphs
  about: [
    "I am a PhD student in Computer Science at Michigan Technological University, advised by Evan Lucas and Timothy Havens. My research uses mechanistic interpretability to understand how privacy and safety interventions work inside language models, not just whether they work at the output.",
    "My recent work shows that loss masking suppresses a model's ability to emit protected content while the content stays fully encoded in its hidden states. The model still reads, encodes, and computes with the information. Only the emit pathway is blocked. I use causal tracing, linear probing, and attention analysis to make these internal effects visible.",
    "More broadly, I work on agentic AI safety, LLM memorization, fingerprinting and provenance, and anomaly detection for safety-critical systems."
  ],

  interests: [
    "Mechanistic interpretability",
    "LLM memorization and loss masking",
    "Agentic AI safety",
    "Backdoors and model fingerprinting",
    "Anomaly detection and probes",
    "Safe ML for safety-critical systems"
  ],

  links: {
    github: "https://github.com/Tagore-7",
    linkedin: "https://linkedin.com/in/tagore-mtu",
    scholar: "https://scholar.google.com/citations?user=9F_1EdsAAAAJ&hl=en",
    cv: "assets/Tagore_CV.pdf",
    resume: "assets/Tagore_Kosireddy_Resume.pdf"
  },

  // Newest first. Shown in the News section (top 6 by default).
  news: [
    { date: "Jul 2026", text: "Presenting an oral talk at PrivateNLP (ACL 2026) in San Diego: Loss Masking Under the Hood." },
    { date: "Jul 2026", text: "Lightning talk at CustomNLP4U (ACL 2026) on small language models for financial literacy." },
    { date: "2026", text: "Won first place at the NMU Programming Competition 2026." },
    { date: "Mar 2026", text: "The AWDB benchmark paper on VLMs for winter driving was published at WACV 2026 (LLVM-AD)." },
    { date: "2025", text: "Started my PhD in Computer Science at Michigan Tech." },
    { date: "Jul 2025", text: "Presented Empirical Evaluation of Loss Masking at L2M2, ACL 2025 in Vienna." }
  ],

  // Newest first. venue is shown as a tag; type: "oral" | "poster" | "paper"
  publications: [
    {
      title: "Loss Masking Under the Hood: Backdoor Concealment and Private Data Memorization in LLMs",
      authors: "Tagore Rao Kosireddy, Evan Lucas",
      venue: "PrivateNLP @ ACL 2026",
      year: 2026,
      type: "oral",
      note: "Oral presentation, San Diego, July 3, 2026",
      links: { paper: "https://openreview.net/forum?id=IiQNsFM9i6", code: "https://github.com/Tagore-7/loss-masking-analysis" },
      summary: "Mechanistic analysis showing loss masking blocks the output pathway of protected content while its identity stays fully encoded in hidden states, across three GPT-2 scales."
    },
    {
      title: "Small Language Models for the Democratization of Financial Literacy: Challenges and Opportunities",
      authors: "Tagore Rao Kosireddy, Jeffrey David Wall, Evan Lucas",
      venue: "CustomNLP4U @ ACL 2026",
      year: 2026,
      type: "poster",
      note: "Poster and lightning talk",
      links: {},
      summary: "What it takes for small, accessible language models to answer real questions about loans, budgeting, and investing."
    },
    {
      title: "Benchmarking Vision-Language Models for Traffic Scene Understanding in Inclement Winter Weather: The AWDB Benchmark",
      authors: "Ali Awad, Tagore Kosireddy, Krishna Mokkapati, Nibendra Bajracharya, Ashraf Saleem, Vinh Nguyen, Evan Lucas",
      venue: "LLVM-AD @ WACV 2026",
      year: 2026,
      type: "paper",
      note: "WACV Workshops, pages 1747–1760",
      links: { paper: "https://openaccess.thecvf.com/WACV2026_workshops/LLVM-AD" },
      summary: "A dashcam benchmark and annotation scheme for testing whether VLMs understand snow, visibility, and driving risk."
    },
    {
      title: "Empirical Evaluation of Loss Masking to Selectively Prevent Memorization",
      authors: "Tagore Rao Kosireddy, Evan Lucas",
      venue: "L2M2 @ ACL 2025",
      year: 2025,
      type: "paper",
      note: "Pages 142–149, Vienna, Austria",
      links: { paper: "https://aclanthology.org/2025.l2m2-1.11/" },
      summary: "Behavioral evidence that loss masking prevents models from reproducing sensitive tokens while preserving downstream performance."
    },
    {
      title: "Exploring the Readiness of Prominent Small Language Models for the Democratization of Financial Literacy",
      authors: "Tagore Rao Kosireddy, Jeffrey David Wall, Evan Lucas",
      venue: "CustomNLP4U @ EMNLP 2024",
      year: 2024,
      type: "paper",
      note: "Pages 124–149, Miami, FL",
      links: { paper: "https://aclanthology.org/2024.customnlp4u-1.10/" },
      summary: "Evaluation of small LMs as financial literacy assistants, with a focus on accessibility over scale."
    },
    {
      title: "Using Curriculum Masking Based on Child Language Development to Train a Large Language Model with Limited Training Data",
      authors: "Evan Lucas, Dylan Gaines, Tagore Rao Kosireddy, Kevin Li, Timothy C. Havens",
      venue: "BabyLM @ CoNLL 2024",
      year: 2024,
      type: "paper",
      note: "Pages 221–228, Miami, FL",
      links: { paper: "https://aclanthology.org/2024.conll-babylm.19/" },
      summary: "Curriculum masking inspired by child language development for training LLMs on limited data."
    }
  ],

  talks: [
    { title: "Loss Masking Under the Hood: Backdoor Concealment and Private Data Memorization in LLMs", venue: "PrivateNLP Workshop, ACL 2026, San Diego", date: "July 2026", kind: "Oral presentation" },
    { title: "Small Language Models for the Democratization of Financial Literacy", venue: "CustomNLP4U Workshop, ACL 2026", date: "July 2026", kind: "Lightning talk" },
    { title: "Autonomous Drone Landing Using Deep Reinforcement Learning: Benchmarks and Implementation", venue: "Center for AI Colloquium, Michigan Tech", date: "", kind: "Invited seminar" }
  ],

  experience: [
    {
      role: "Graduate Research Assistant",
      org: "Michigan Technological University",
      period: "Aug 2023 – Present",
      points: [
        "Mechanistic interpretability of loss masking: causal tracing, attention analysis, and linear probing across GPT-2 scales",
        "Benchmarked vision-language models for autonomous driving in adverse winter weather",
        "Built and benchmarked RL systems (PPO, DQN, A2C, SAC) in PyBullet for safe drone landing",
        "Developed financial language models integrated into AutoProphet; built LMForge for financial datasets"
      ]
    },
    {
      role: "AI & Robotics Engineer",
      org: "IHFC Tech Innovation Hub, IIT Delhi",
      period: "Jan 2023 – Aug 2023",
      points: [
        "Designed ML models improving robotic decision-making efficiency",
        "Mentored 100+ students in RL, Python, and ML; guided 3 teams to first prize in a regional robotics competition"
      ]
    },
    {
      role: "Software Engineer",
      org: "Cognizant Technology Solutions",
      period: "Jan 2022 – Dec 2022",
      points: [
        "Built Java/Spring Boot APIs for enterprise workflows and optimized PostgreSQL pipelines",
        "Built automated testing with JUnit/Mockito, reducing production bugs"
      ]
    },
    {
      role: "Artificial Intelligence Intern",
      org: "SmartInternz / IBM Skills Network",
      period: "Jan 2021 – Aug 2021",
      points: [
        "93% accuracy PPE detection for warehouse safety with a ResNet and transfer learning; deployed with Flask"
      ]
    }
  ],

  awards: [
    { title: "First Place, NMU Programming Competition", year: "2026" },
    { title: "Fourth Place, ICC Research Presentation Competition, Michigan Tech", year: "" },
    { title: "Most Innovative Project, Winter Wonder Hackathon, Michigan Tech", year: "" },
    { title: "Guided 3 teams to first prize, Regional National Robotics Competition, India", year: "2023" }
  ],

  footerNote: "Built with plain HTML, CSS, and one data file."
};
