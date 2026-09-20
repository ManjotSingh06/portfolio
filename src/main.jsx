import React, { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next"
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, Terminal,
  ShieldCheck, Server, Code2, Database, Network, Cpu, ChevronRight,
  ExternalLink, Menu, X, Activity, LockKeyhole, Layers3
} from "lucide-react";
import "./styles.css";

const navItems = [
  ["home", "Home"], ["about", "About"], ["skills", "Skills"],
  ["projects", "Projects"], ["experience", "Experience"], ["contact", "Contact"]
];

const skills = {
  "Security & Linux": [
    ["Linux", "System administration, permissions, processes & CLI"],
    ["Networking", "TCP/IP, DNS, HTTP, VLANs, troubleshooting"],
    ["Security Fundamentals", "Authentication, access control, logs & hardening"],
    ["Troubleshooting", "Root-cause analysis, incident-style investigation"],
    ["Wireshark", "Packet inspection and network troubleshooting"],
    ["Git", "Version control, branching and collaborative workflows"]
  ],
  "Development": [
    ["Python", "Automation, scripting, APIs and data workflows"],
    ["JavaScript", "Modern web interfaces and client-side logic"],
    ["React", "Component-driven frontend applications"],
    ["Node.js", "Backend APIs and real-time services"],
    ["Flask / FastAPI", "Lightweight Python API development"],
    ["Django", "Full-stack Python web applications"]
  ],
  "Data, AI & Backend": [
    ["SQL", "Queries, relational data and application backends"],
    ["Pandas / NumPy", "Data manipulation and numerical computing"],
    ["Machine Learning", "Applied ML projects and model workflows"],
    ["LangChain / LangGraph", "LLM workflows and agentic automation"],
    ["MongoDB", "Document databases and application data"],
    ["REST APIs", "API design, integration and error handling"]
  ]
};

const projects = [
  {
    title: "W-Safe",
    type: "SECURITY / FULL-STACK",
    description: "Safety-focused web platform with authentication, SOS reporting, live location sharing, realtime community updates and an admin workflow.",
    stack: ["React", "Node.js", "MongoDB", "Socket.io", "Leaflet"],
    github: "https://github.com/ManjotSingh06/W-Safe"
  },
  {
    title: "SkillConnect",
    type: "WEB PLATFORM",
    description: "Skill-matching platform with profiles, connection requests, JWT authentication and one-to-one realtime chat.",
    stack: ["React", "Node.js", "MongoDB", "JWT", "Socket.io"],
    github: "https://github.com/ManjotSingh06"
  },
  {
    title: "Movie Recommender",
    type: "ML / API",
    description: "Recommendation application evolved from Streamlit into a Flask API with a Vite React frontend and external movie metadata.",
    stack: ["Python", "Flask", "React", "ML", "OMDb"],
    github: "https://github.com/ManjotSingh06/movie_recommender"
  },
  {
    title: "Semiconductor Data Analysis",
    type: "DATA / ANALYTICS",
    description: "Data analysis project focused on cleaning, exploring and visualizing semiconductor-related datasets.",
    stack: ["Python", "Pandas", "NumPy", "Visualization"],
    github: "https://github.com/ManjotSingh06"
  }
];

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <div className="site-shell">
      <div className="scanlines" />
      <div className="grid-bg" />

      <header className="navbar">
        <button className="brand" onClick={() => go("home")} aria-label="Go home">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>MANJOT<span className="dim">.DEV</span></span>
        </button>

        <nav className={menu ? "nav-links open" : "nav-links"}>
          {navItems.map(([id, label]) => (
            <button
              key={id}
              className={active === id ? "nav-link active" : "nav-link"}
              onClick={() => go(id)}
            >
              <span className="nav-index">0{navItems.findIndex(x => x[0] === id) + 1}</span>
              {label}
            </button>
          ))}
          <a className="nav-resume" href="/resume.pdf" download>
            Resume <Download size={14} />
          </a>
        </nav>

        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="status-pill"><span className="pulse" /> SYSTEM ONLINE · OPEN TO OPPORTUNITIES</div>
            <p className="eyebrow"><span>$</span> whoami</p>
            <h1>Manjot <span>Singh</span></h1>
            <h2>Technical Support<i>×</i> Linux <i>×</i> Security <i>×</i> Development</h2>
            <p className="hero-text">
              I build, troubleshoot and automate systems — combining IT support,
              Linux fundamentals, cybersecurity learning and full-stack development.
            </p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => go("projects")}>Explore Projects <ArrowUpRight size={17}/></button>
              <button className="btn ghost" onClick={() => go("contact")}>Initialize Contact <Terminal size={16}/></button>
            </div>
            <div className="quick-stats">
              <div><strong>IT</strong><span>Support</span></div>
              <div><strong>Linux</strong><span>Systems</span></div>
              <div><strong>Python</strong><span>Automation</span></div>
              <div><strong>React</strong><span>Development</span></div>
            </div>
          </div>

          <div className="terminal-card">
            <div className="terminal-head">
              <div className="dots"><b/><b/><b/></div>
              <span>manjot@kali:~</span>
              <Activity size={14}/>
            </div>
            <div className="terminal-body">
              <p><span className="green">manjot@kali</span>:<span className="blue">~</span>$ neofetch</p>
              <div className="neo">
                <pre>{`      .--.
     |o_o |
     |:_/ |
    //   \\ \\
   (|     | )
  /'\\_   _/\\\`
  \\___)=(___/`}</pre>
                <div className="neo-info">
                  <strong>MANJOT@SYSTEM</strong>
                  <span>-------------------</span>
                  <p><b>OS</b> Linux / Windows</p>
                  <p><b>ROLE</b> IT Support Executive</p>
                  <p><b>FOCUS</b> Cybersecurity</p>
                  <p><b>STACK</b> Python · React</p>
                  <p><b>UPTIME</b> Learning ∞</p>
                </div>
              </div>
              <p><span className="green">manjot@kali</span>:<span className="blue">~</span>$ cat /etc/focus</p>
              <div className="terminal-output">
                <span>[+] troubleshoot</span>
                <span>[+] secure</span>
                <span>[+] automate</span>
                <span>[+] build</span>
              </div>
              <p className="cursor-line"><span className="green">manjot@kali</span>:<span className="blue">~</span>$ <span className="cursor">█</span></p>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <SectionTitle number="01" command="cat about.md" title="About / System Profile" />
          <div className="about-grid">
            <div className="about-main panel">
              <p className="label">// PROFILE_SUMMARY</p>
              <h3>Support mindset. <span>Builder mentality.</span></h3>
              <p>
                I'm a B.Tech CSIT graduate working as a Technical Support Executive,
                with a strong software-development background and an increasing focus on
                cybersecurity, Linux systems and infrastructure.
              </p>
              <p>
                My development work spans React, Node.js, Python, APIs, databases and
                machine-learning projects. I enjoy taking a problem from “something is
                broken” to “here is the root cause, the fix and the automation.”
              </p>
              <div className="terminal-tags">
                <span>root_cause_analysis</span><span>automation</span><span>secure_by_design</span><span>continuous_learning</span>
              </div>
            </div>
            <div className="about-side">
              <InfoCard icon={<ShieldCheck/>} title="Security" text="Building practical foundations in defensive security, networking, Linux and troubleshooting." />
              <InfoCard icon={<Server/>} title="Systems" text="Interested in Linux administration, infrastructure, logs, processes and reliable services." />
              <InfoCard icon={<Code2/>} title="Development" text="Full-stack JavaScript and Python development with APIs, databases and modern UI." />
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <SectionTitle number="02" command="./skills --list" title="Technical Arsenal" />
          <div className="skill-groups">
            {Object.entries(skills).map(([group, items], idx) => (
              <div className="skill-panel panel" key={group}>
                <div className="skill-head">
                  {idx === 0 ? <ShieldCheck/> : idx === 1 ? <Code2/> : <Layers3/>}
                  <div><p className="label">MODULE_0{idx + 1}</p><h3>{group}</h3></div>
                </div>
                {items.map(([name, desc]) => (
                  <div className="skill-row" key={name}>
                    <div><strong>{name}</strong><span>{desc}</span></div>
                    <ChevronRight size={15}/>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionTitle number="03" command="ls -la ./projects" title="Selected Projects" />
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className="project-card panel" key={p.title}>
                <div className="project-top">
                  <span className="project-id">PROJECT_0{i + 1}</span>
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} GitHub`}><Github size={18}/></a>
                </div>
                <p className="project-type">{p.type}</p>
                <h3>{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
                <a className="inspect" href={p.github} target="_blank" rel="noreferrer">inspect_module <ExternalLink size={14}/></a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionTitle number="04" command="tail -f career.log" title="Experience / Direction" />
          <div className="timeline panel">
            <div className="timeline-item">
              <div className="timeline-marker">01</div>
              <div><span className="time">CURRENT</span><h3>Technical Support Executive</h3><p className="company">D3mynds</p>
              <p>Supporting users and systems while strengthening practical troubleshooting, networking, operating-system and infrastructure skills.</p></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">02</div>
              <div><span className="time">FOUNDATION</span><h3>B.Tech Computer Science / Software Projects</h3><p className="company">Academic + Personal Work</p>
              <p>Built full-stack applications, machine-learning projects, APIs, automation workflows and realtime features using modern development stacks.</p></div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">03</div>
              <div><span className="time">NEXT_TARGET</span><h3>Cybersecurity / SOC / Security Engineering</h3><p className="company">Learning Path</p>
              <p>Expanding into Linux, networking, SIEM concepts, incident response, security monitoring and hands-on security labs.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <SectionTitle number="05" command="./connect.sh" title="Initialize Connection" />
          <div className="contact-grid">
            <div>
              <h3>Have a system to debug<br/><span>or a project to build?</span></h3>
              <p>I'm interested in  cybersecurity, Linux, automation and software-development opportunities.</p>
              <div className="contact-links">
                <a href="mailto:mssmart6@gmail.com"><Mail size={17}/> mssmart6@gmail.com</a>
                <a href="https://github.com/ManjotSingh06" target="_blank" rel="noreferrer"><Github size={17}/> github.com/ManjotSingh06</a>
                <a href="https://www.linkedin.com/in/manjotsingh06/" target="_blank" rel="noreferrer"><Linkedin size={17}/> linkedin.com/in/manjotsingh06</a>
              </div>
            </div>
            <div className="contact-terminal panel">
              <p><span className="green">manjot@kali</span>:~$ ./connect.sh</p>
              <p className="muted">Initializing secure channel...</p>
              <p className="ok">[OK] Identity verified</p>
              <p className="ok">[OK] Communication channel ready</p>
              <p className="muted">Choose an endpoint:</p>
              <a href="mailto:mssmart6@gmail.com"><span>01</span> email --open</a>
              <a href="https://github.com/ManjotSingh06" target="_blank" rel="noreferrer"><span>02</span> github --open</a>
              <a href="https://www.linkedin.com/in/manjotsingh06/" target="_blank" rel="noreferrer"><span>03</span> linkedin --open</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} MANJOT SINGH</span>
        <span>SECURITY × SYSTEMS × DEVELOPMENT</span>
        <span>BUILT WITH REACT + VITE</span>
      </footer>
    </div>
  );
}

function SectionTitle({ number, command, title }) {
  return (
    <div className="section-title">
      <div><span className="section-number">{number}</span><span className="command">{command}</span></div>
      <h2>{title}</h2>
      <div className="title-line"/>
    </div>
  );
}

function InfoCard({icon, title, text}) {
  return <div className="info-card panel"><div className="info-icon">{icon}</div><div><h4>{title}</h4><p>{text}</p></div></div>;
}

createRoot(document.getElementById("root")).render(<App />);
