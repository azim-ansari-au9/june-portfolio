import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== '/') {
      // If we're not on the home page, navigate to home first
      navigate('/');
      // Wait a bit for navigation to complete, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If we're already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="logo">Azim Ansari</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><button onClick={() => handleSectionClick('about')} className="nav-link-btn">About</button></li>
          <li><button onClick={() => handleSectionClick('skills')} className="nav-link-btn">Skills</button></li>
          <li><button onClick={() => handleSectionClick('work')} className="nav-link-btn">Work Experience</button></li>
          <li><button onClick={() => handleSectionClick('education')} className="nav-link-btn">Education</button></li>
          <li><button onClick={() => handleSectionClick('projects')} className="nav-link-btn">Projects</button></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><button onClick={() => handleSectionClick('contact')} className="nav-link-btn">Contact</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation; 