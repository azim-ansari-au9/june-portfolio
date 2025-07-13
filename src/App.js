import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { FaNodeJs, FaDatabase, FaServer, FaGitAlt, FaReact, FaJenkins, FaJs, FaHtml5, FaCss3Alt, FaPlug, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Navigation from './Navigation';

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

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Node.js Applications",
    excerpt: "Learn the best practices for building scalable Node.js applications with proper architecture, error handling, and performance optimization techniques.",
    content: `
      <p>Building scalable Node.js applications requires careful consideration of architecture, performance, and maintainability. In this post, I'll share my experience and best practices for creating robust backend systems.</p>
      
      <h3>Key Principles</h3>
      <ul>
        <li><strong>Modular Architecture:</strong> Break down your application into smaller, manageable modules</li>
        <li><strong>Error Handling:</strong> Implement comprehensive error handling and logging</li>
        <li><strong>Database Optimization:</strong> Use proper indexing and query optimization</li>
        <li><strong>Caching Strategy:</strong> Implement Redis for session and data caching</li>
        <li><strong>API Design:</strong> Follow RESTful principles and proper status codes</li>
      </ul>
      
      <h3>Performance Tips</h3>
      <p>Node.js excels at handling concurrent requests, but you need to:</p>
      <ul>
        <li>Use async/await properly to avoid blocking operations</li>
        <li>Implement connection pooling for database connections</li>
        <li>Use PM2 for process management and load balancing</li>
        <li>Monitor memory usage and implement garbage collection optimization</li>
      </ul>
    `,
    date: "2025-07-12",
    readTime: "5 min read",
    category: "Backend Development",
    tags: ["Node.js", "Performance", "Architecture"]
  },
  {
    id: 2,
    title: "Microservices with Node.js and Docker",
    excerpt: "Explore how to build and deploy microservices using Node.js, Docker, and container orchestration for better scalability and maintainability.",
    content: `
      <p>Microservices architecture has become increasingly popular for building large-scale applications. Let's explore how to implement this pattern using Node.js and Docker.</p>
      
      <h3>Benefits of Microservices</h3>
      <ul>
        <li><strong>Scalability:</strong> Scale individual services independently</li>
        <li><strong>Maintainability:</strong> Easier to maintain and update specific services</li>
        <li><strong>Technology Diversity:</strong> Use different technologies for different services</li>
        <li><strong>Fault Isolation:</strong> Failures in one service don't affect others</li>
      </ul>
      
      <h3>Implementation Strategy</h3>
      <p>When implementing microservices:</p>
      <ul>
        <li>Design clear service boundaries</li>
        <li>Implement proper service discovery</li>
        <li>Use message queues for inter-service communication</li>
        <li>Implement centralized logging and monitoring</li>
        <li>Use Docker for consistent deployment environments</li>
      </ul>
    `,
    date: "2024-06-10",
    readTime: "7 min read",
    category: "Microservices",
    tags: ["Docker", "Microservices", "Node.js"]
  },
  {
    id: 3,
    title: "Real-time Applications with Socket.IO",
    excerpt: "Discover how to build real-time features like chat applications, live dashboards, and collaborative tools using Socket.IO and Node.js.",
    content: `
      <p>Real-time applications are becoming increasingly important in modern web development. Socket.IO provides a powerful way to implement real-time features in Node.js applications.</p>
      
      <h3>Common Use Cases</h3>
      <ul>
        <li><strong>Chat Applications:</strong> Instant messaging and group chats</li>
        <li><strong>Live Dashboards:</strong> Real-time data visualization</li>
        <li><strong>Collaborative Tools:</strong> Multi-user editing and collaboration</li>
        <li><strong>Gaming:</strong> Real-time multiplayer games</li>
        <li><strong>Notifications:</strong> Push notifications and alerts</li>
      </ul>
      
      <h3>Best Practices</h3>
      <p>When building real-time applications:</p>
      <ul>
        <li>Implement proper room management for scalability</li>
        <li>Use Redis adapter for horizontal scaling</li>
        <li>Handle connection errors and reconnection logic</li>
        <li>Implement rate limiting to prevent abuse</li>
        <li>Use compression for large data transfers</li>
      </ul>
    `,
    date: "2024-05-05",
    readTime: "6 min read",
    category: "Real-time Development",
    tags: ["Socket.IO", "Real-time", "WebSockets"]
  },
  {
    id: 4,
    title: "API Security Best Practices",
    excerpt: "Learn essential security practices for protecting your Node.js APIs, including authentication, authorization, input validation, and threat prevention.",
    content: `
      <p>Security is crucial when building APIs that handle sensitive data. Here are the essential practices every Node.js developer should implement.</p>
      
      <h3>Authentication & Authorization</h3>
      <ul>
        <li><strong>JWT Tokens:</strong> Implement secure token-based authentication</li>
        <li><strong>OAuth 2.0:</strong> Use industry-standard authorization protocols</li>
        <li><strong>Role-based Access:</strong> Implement proper role and permission systems</li>
        <li><strong>Session Management:</strong> Secure session handling and storage</li>
      </ul>
      
      <h3>Data Protection</h3>
      <ul>
        <li>Use HTTPS for all communications</li>
        <li>Implement input validation and sanitization</li>
        <li>Use parameterized queries to prevent SQL injection</li>
        <li>Implement rate limiting and DDoS protection</li>
        <li>Regular security audits and penetration testing</li>
      </ul>
    `,
    date: "2023-04-28",
    readTime: "8 min read",
    category: "Security",
    tags: ["Security", "Authentication", "API"]
  }
];

function PortfolioContent() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

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

  if (selectedPost) {
    return (
      <div className="portfolio-root">
        <Navigation />
        <div className="blog-post-detail">
          <div className="blog-post-header">
            <button className="back-button" onClick={handleBackClick}>
              ← Back to Blog
            </button>
            <div className="post-meta">
              <span className="post-category">{selectedPost.category}</span>
              <span className="post-date">{formatDate(selectedPost.date)}</span>
              <span className="post-read-time">{selectedPost.readTime}</span>
            </div>
            <h1 className="post-title">{selectedPost.title}</h1>
            <div className="post-tags">
              {selectedPost.tags.map((tag, index) => (
                <span key={index} className="post-tag">{tag}</span>
              ))}
            </div>
          </div>
          <div 
            className="post-content"
            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio-root">
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
          {workExperience.map((exp, idx) => (
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
      <section id="blog" className="blog">
        <h2>Blogs</h2>
        <div className="blog-header">
          <p>Thoughts on software development, Node.js, and building scalable applications</p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card" onClick={() => handlePostClick(post)}>
              <div className="blog-card-header">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{formatDate(post.date)}</span>
              </div>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-card-footer">
                <span className="blog-read-time">{post.readTime}</span>
                <div className="blog-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="blog-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
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
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioContent />} />
      </Routes>
    </Router>
  );
}

export default App;
