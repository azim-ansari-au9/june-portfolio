import React from 'react';
import Navigation from './Navigation';
import { SEOTags } from './SEO';

function PrivacyPolicy() {
  return (
    <div className="page-container">
      <SEOTags
        title="Privacy Policy | Azim Ansari"
        description="Privacy policy describing how this website handles analytics, contact form submissions, and cookies."
        path="/privacy-policy"
        image="/azim.jpg"
      />
      <Navigation />
      <div className="page-inner">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>Overview</h2>
        <p>
          This website showcases my portfolio and blog. I respect your privacy and am committed
          to protecting it through this policy.
        </p>

        <h2>Information I Collect</h2>
        <ul>
          <li>Analytics data (via Google Analytics) to understand site usage.</li>
          <li>Contact form submissions (name, email, message) via EmailJS.</li>
          <li>Advertising identifiers (if AdSense is enabled) for ad delivery.</li>
        </ul>

        <h2>How I Use Information</h2>
        <ul>
          <li>Improve site performance and content.</li>
          <li>Respond to your inquiries sent through the contact form.</li>
          <li>Serve and measure ads if you consent to advertising cookies.</li>
        </ul>

        <h2>Third-Party Services</h2>
        <ul>
          <li>Google Analytics</li>
          <li>Google AdSense</li>
          <li>EmailJS</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          Cookies may be used for analytics and advertising. You can control cookies via your
          browser settings.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy-related questions, contact me via the form on the Contact section of this website.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 