import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { FaNodeJs, FaDatabase, FaServer, FaGitAlt, FaReact, FaJenkins, FaJs, FaHtml5, FaCss3Alt, FaPlug, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Navigation from './Navigation';
import Blog from './Blog';
import { HelmetProvider } from 'react-helmet-async';
import { SEOTags } from './SEO';
import AdSlot from './AdSlot';
import { Link } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';
import FAQ from './FAQ';

// const skills = [
//   { icon: <FaNodeJs />, name: 'Node.js' },
//   { icon: <FaDatabase />, name: 'MongoDB' },
//   { icon: <FaServer />, name: 'Express' },
//   { icon: <FaGitAlt />, name: 'Git' },
//   { icon: <FaReact />, name: 'React JS' },
//   { icon: <FaMemory />, name: 'Redis' },
//   { icon: <FaJenkins />, name: 'Jenkins' },
//   { icon: <FaJs />, name: 'JavaScript' },
//   { icon: <FaJs />, name: 'TypeScript' },
//   { icon: <FaHtml5 />, name: 'HTML5' },
//   { icon: <FaCss3Alt />, name: 'CSS3' },
//   { icon: <FaPlug />, name: 'Socket.IO' },
// ];

const projects = [
  {
    image: '/mcp.png',
    title: 'VUENOW - MY CLOUD PARTICLES',
    desc: 'MyCloudParticles and VueNow provide comprehensive marketing services, designing, building, and managing state-of-the-art cloud art centers. Leveraged technologies include Node.js, MongoDB, and Express, along with the integration of third-party APIs for payments, such as Razorpay.',
    demo: 'https://mycloudparticles.com/',
    // code: 'https://github.com/azimansari/upsc-platform',
    tech: 'NodeJs, MongoDB, Socket, Redis, Razorpay, Signzy, TypeScript, Microservices Architecture'
  },
  {
    image: '/upsc.png',
    title: 'UPSC-SITES-RENEW',
    desc: 'Renewed and maintained UPSC websites, in addition to developing solutions for gate pass entry and exam hall ticket systems, handling large user data. Leveraged technologies such as Node.js, MongoDB, Express, and Bitbucket for efficient management and implementation.',
    demo: 'https://upsc.gov.in/',
    // code: 'https://github.com/azimansari/network-marketing',
    tech: 'NodeJs, JavaScript, TypeScript, MongoDB etc.'
  },
  {
    image: '/dlcc.png',
    title: 'DLCC',
    desc: 'Developed a crypto trading web application with buy/sell functionality using Node.js, MongoDB, Express, Web3, socket.io, integrating third-party crypto price APIs and Anchorage APIs for crypto transfers in the backend.',
    demo: 'https://digitalprimetechnologies.com/',
    // code: 'https://github.com/azimansari/ecommerce-platform',
    tech: 'NodeJs, MongoDB, Express, Web3, socket.io, integrating third-party crypto price APIs and Anchorage APIs, HTML/CSS, JavaScript'
  },
  {
    image: '/nfty.png',
    title: 'NFTY-token',
    desc: 'Powered by NFTY Token, the first De-Fi Reputation Protocol was developed using Node.js, MongoDB, Express, Web3, with third-party crypto price APIs integrated into the backend.NFTY is a platform that allows users to stake their $NFTY tokens to build reputation, earn a 13.579% APR, and unlock exclusive NFTs for long-term stakers. Stakers can also become Advocates by using their tokens to upvote promising NFTs. When those NFTs are sold, Advocates earn USDT rewards based on the amount of $NFTY they contributed to the pool. The platform combines social engagement with financial incentives to promote high-quality digital art.',
    demo: 'https://nftytoken.io/',
    // code: 'https://github.com/azimansari/chat-app',
    tech: 'Node, MongoDB, Express, Web3, Socket, HTML/CSS, JavaScript'
  },
  {
    image: '/max.png',
    title: 'MAX-HEALTH-CARE',
    desc: 'Max Healthcare Internal System is a secure, cloud-based solution built on Microsoft Azure for managing and storing comprehensive staff data across all departments. It streamlines internal operations, ensuring reliable access control and efficient data management for HR and administration.',
    demo: 'https://www.maxhealthcare.in/',
    // code: 'https://github.com/azimansari/chat-app',
    tech: 'Nodejs, JavaScript, TypeScript, MongoDB, Express, Azure, Sharepoints.'
  },
  {
    image: '/slm.png',
    title: 'SLM(SUNNY-LENDING-MORTAGE)',
    desc: 'Sunny Lending LLC, a licensed mortgage lender in Maryland and broker in multiple states, generates mortgage loan leads, with technology built on Node.js, MongoDB, Express, Web3, and third-party APIs, and handles commercial loans across the continental U.S.',
    demo: 'https://www.sunnylendingllc.com/',
    // code: 'https://github.com/azimansari/chat-app',
    tech: 'NodeJs, MongoDB, Express, Third party APIs, HTML/CSS, JavaScript'
  },
];

const workExperience = [
  {
    company: 'NativeByte Software LLP',
    title: 'Software Development Engineer 1',
    period: 'September 2023 - Currently',
    location: 'Noida, India',
    type: 'Hybrid',
    details: 'Worked as SDE-I, contributing to the architecture for UPSC and network marketing concepts. Gained expertise in Node.js, MongoDB, Express, MySQL, and Socket.io, while acquiring strong knowledge of core software engineering and system design principles.'
  },
  {
    company: 'EDevlop',
    title: 'Node Js Developer',
    period: 'June 2023 - August 2023',
    location: 'Bhuvneshwar, India',
    type: 'Client site - New Delhi',
    details: 'Worked as a Backend Developer specializing in Node.js, with hands-on experience in technologies including Node.js, MongoDB, Express, Web3, MySQL, and Socket.io.'
  },
  {
    company: 'SoluLab Pvt. Ltd.',
    title: 'Node Js Developer',
    period: 'May 2021 - May 2023',
    location: 'Ahmadabad, India',
    type: 'Remote',
    details: 'Worked as a Backend Developer (Node.js) with experience in Node.js, MongoDB, Express, Web3, MySQL, and Socket.io. Acquired a strong foundation in core software engineering concepts and system design.'
  },
  {
    company: 'AttainU',
    title: 'MERN STACK MENTOR',
    period: 'January 2021 - April 2021',
    location: 'Bengaluru',
    type: 'Remote',
    details: 'Led a batch in building scalable web applications using the MERN stack, Python, and DSA, aligned with industry standards for Full Stack Web Development. Acquired expertise in core software engineering concepts, system design, and data structures and algorithms using Python. Also led a project team in developing scalable web applications with the MERN stack.'
  },
  {
    company: 'AttainU',
    title: 'Software Trainee',
    period: 'January 2020 - January 2021',
    location: 'Bengaluru',
    type: 'Remote',
    details: 'Built scalable web applications using the MERN stack, Python, and DSA, aligned with industry standards for Full Stack Web Development. Acquired expertise in core software engineering concepts, system design, and data structures and algorithms using Python. Also led a project team in developing scalable web applications with the MERN stack.'
  }
];

function PortfolioContent() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  // Compute tenure (months) for each role for progress bars
  const monthIndex = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
  };
  const parsePeriodToMonths = (period) => {
    if (!period) return 1;
    // Expect formats like: "September 2023 - Currently" or "June 2023 - August 2023"
    const parts = period.split('-').map(p => p.trim());
    if (parts.length !== 2) return 1;
    const [startStr, endStrRaw] = parts;
    const startMatch = startStr.match(/([A-Za-z]+)\s+(\d{4})/);
    if (!startMatch) return 1;
    const startMonthName = startMatch[1].toLowerCase();
    const startYear = parseInt(startMatch[2], 10);
    const startMonth = monthIndex[startMonthName] ?? 0;

    const endClean = endStrRaw.toLowerCase();
    let endYear, endMonth;
    if (/(current|present|currently)/.test(endClean)) {
      const now = new Date();
      endYear = now.getFullYear();
      endMonth = now.getMonth();
    } else {
      const endMatch = endStrRaw.match(/([A-Za-z]+)\s+(\d{4})/);
      if (!endMatch) return 1;
      endMonth = monthIndex[endMatch[1].toLowerCase()] ?? 0;
      endYear = parseInt(endMatch[2], 10);
    }

    const months = (endYear - startYear) * 12 + (endMonth - startMonth + 1);
    return Math.max(1, months);
  };

  const rolesWithMonths = workExperience.map(exp => ({
    ...exp,
    months: parsePeriodToMonths(exp.period)
  }));
  const maxMonths = Math.max(...rolesWithMonths.map(r => r.months));

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setError(null);
    emailjs.sendForm(
      'service_n6wt87c', // Service ID
      'template_8fc0ptc', // Provided EmailJS template ID
      formRef.current,
      // "azimpanjwar@gmail.com"
      'qdRl2GcH5tRZsrWK3' // Provided EmailJS user ID (public key)
    )
    .then((result) => {
      setSending(false);
      setSent(true);
      formRef.current.reset();
    }, (error) => {
      setSending(false);
      setError('Failed to send. Please try again.');
    });
  };

  return (
    <div className="portfolio-root">
      <SEOTags
        title="Azim Ansari | Software Development Engineer (Node.js, JavaScript)"
        description="Portfolio and blog by Azim Ansari – Node.js developer specializing in backend development, scalable systems, Express, MongoDB, AWS, and React."
        path="/"
        image="/azim.jpg"
      />
      <Navigation />
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Azim Ansari</span></h1>
          <p className="subtitle">Software Development Engineer.</p>
          <p className="subtitle">Node.js Developer | Specialized in JavaScript, Node.js, Express.js, MongoDB, AWS, React | Building High-Performance Applications.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn primary">Contact Me</a>
            <a href="#skills" className="btn secondary">Skills</a>
            <a href="#projects" className="btn secondary">View My Work</a>
            <a href="/Azim%20Ansari%20Resume.pdf" className="btn primary" download>Download Resume</a>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Node.js Developer with approximately 5 years of experience at NativeByte Software LLP, specializing in backend development with Node.js, MongoDB, Express, MySQL, and Socket.io. Developed and architected systems for UPSC and network marketing concepts, demonstrating proficiency in core software engineering concepts and system design. Seeking the Node.js Developer (Backend) position to contribute to both product-based and service-based IT industries.</p>
          </div>
        </div>
      </section>
      <section id="skills" className="skills">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <div className="skill-card"><span className="skill-icon"><FaNodeJs title="Node.js" /></span>Node.js</div>
          <div className="skill-card"><span className="skill-icon"><FaServer title="Express" /></span>Express</div>
          <div className="skill-card"><span className="skill-icon"><FaJs title="JavaScript" /></span>JavaScript (ES5, ES6)</div>
          <div className="skill-card"><span className="skill-icon"><FaJs title="TypeScript" /></span>TypeScript</div>
          <div className="skill-card"><span className="skill-icon"><FaPlug title="Socket.IO" /></span>Socket.IO</div>
          <div className="skill-card"><span className="skill-icon"><FaReact title="React" /></span>React</div>
          <div className="skill-card"><span className="skill-icon"><FaDatabase title="MongoDB" /></span>MongoDB</div>
          <div className="skill-card"><span className="skill-icon"><FaDatabase title="MySQL" /></span>MySQL</div>
          <div className="skill-card"><span className="skill-icon"></span>Python</div>
          <div className="skill-card"><span className="skill-icon"></span>Asynchronous Programming</div>
          <div className="skill-card"><span className="skill-icon"></span>RESTful API Development</div>
          <div className="skill-card"><span className="skill-icon"></span>Event-driven Architecture</div>
          <div className="skill-card"><span className="skill-icon"></span>File System (fs module)</div>
          <div className="skill-card"><span className="skill-icon"></span>Streams and Buffers</div>
          <div className="skill-card"><span className="skill-icon"></span>Data Validation & Sanitization</div>
          <div className="skill-card"><span className="skill-icon"></span>Schema Design & Normalization</div>
          <div className="skill-card"><span className="skill-icon"></span>Error Handling & Logging</div>
          <div className="skill-card"><span className="skill-icon"></span>ORM/ODM (Sequelize, Mongoose)</div>
          <div className="skill-card"><span className="skill-icon"></span>Third-party APIs Integration</div>
          <div className="skill-card"><span className="skill-icon"></span>Payment Gateway APIs</div>
          <div className="skill-card"><span className="skill-icon"><FaHtml5 title="HTML5" /></span>HTML5</div>
          <div className="skill-card"><span className="skill-icon"><FaCss3Alt title="CSS3" /></span>CSS3</div>
          <div className="skill-card"><span className="skill-icon"><FaGitAlt title="Git" /></span>Git</div>
          <div className="skill-card"><span className="skill-icon"></span>AWS (S3, EC2, SNS, SES)</div>
          <div className="skill-card"><span className="skill-icon"></span>Docker</div>
          <div className="skill-card"><span className="skill-icon"><FaJenkins title="Jenkins" /></span>Jenkins</div>
          <div className="skill-card"><span className="skill-icon"></span>Swagger</div>
          <div className="skill-card"><span className="skill-icon"></span>PM2</div>
          <div className="skill-card"><span className="skill-icon"></span>NGROK</div>
        </div>
      </section>
      <section id="work" className="work">
        <div className="modern-work-timeline">
          <h2>Work Experience</h2>
          {rolesWithMonths.map((exp, idx) => (
            <div className="modern-work-card" key={idx}>
              <div className="modern-work-header">
                <div className="modern-work-logo">{/* Logo Placeholder */}</div>
                <div>
                  <h3>{exp.company}</h3>
                  <div className="modern-work-meta">
                    <span className="modern-work-period">{exp.period}</span>
                    <span className="modern-work-type">{exp.type}</span>
                    <span className="modern-work-location">{exp.location}</span>
                  </div>
                </div>
              </div>
              <div className="modern-work-title">{exp.title}</div>
              <div className="modern-work-details">{exp.details}</div>

              <div className="tenure-progress" aria-label={`Tenure progress for ${exp.company}`}>
                <div
                  className="tenure-progress-fill"
                  style={{ width: `${Math.round((exp.months / maxMonths) * 100)}%` }}
                />
              </div>
              <div className="tenure-progress-meta">
                <span>{exp.period}</span>
                <span>{exp.months} months</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="education" className="education">
        <h2>Education</h2>
        <div className="education-content">
          <div className="education-item">
            <h3>Bachelor of technology (B. Tech)</h3>
            <p>MIT Muzaffarpur, Aryabhatta knowledge University Patna Bihar • Muzaffarpur,BIhar •2015-2019</p>
          </div>
          <div className="education-item">
            <h3>Intermediate (I.Sc)</h3>
            <p>Rajendra college chapra, Saran, Chapra, Bihar, •2012 - 2014</p>
          </div>
          <div className="education-item">
            <h3>10th</h3>
            <p>RKisan Mazdoor High School, Tari bazaar, Siwan, Bihar, •2010 - 2012</p>
          </div>
        </div>
      </section>
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-image" style={{ backgroundImage: `url('${project.image}')` }}></div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tech">
                <strong>Tech Stack:</strong> {project.tech}
              </div>
              <div className="project-links">
                <a href={project.demo} className="btn small" target="_blank" rel="noopener noreferrer">View Demo</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <AdSlot slot="1234567890" />
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn primary" disabled={sending}>{sending ? 'Sending...' : 'Send Message'}</button>
            {sent && <div className="success-msg">Message sent successfully!</div>}
            {error && <div className="error-msg">{error}</div>}
          </form>
          <div className="social-links">
            <a href="https://github.com/azim-ansari-au9" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/azim-ansari-37aa421a6/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://twitter.com/azimpanjwar" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; {new Date().getFullYear()} Azim Ansari. All rights reserved.</p>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link>
          {' '}·{' '}
          <Link to="/faq">FAQ</Link>
        </p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PortfolioContent />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
