import React from 'react';
import Navigation from './Navigation';
import { SEOTags } from './SEO';

const faqs = [
  {
    q: 'What technologies do you specialize in?',
    a: 'Node.js, Express, MongoDB, MySQL, JavaScript/TypeScript, AWS, and React.'
  },
  {
    q: 'How can I contact you?',
    a: 'Use the contact form on the homepage or connect via LinkedIn.'
  },
  {
    q: 'Do you take freelance or consulting work?',
    a: 'Yes, depending on scope and availability. Please send details via the contact form.'
  },
  {
    q: 'Do you have production experience with real-time systems?',
    a: 'Yes, including Socket.IO, Redis, and scalable microservice architectures.'
  }
];

function FAQ() {
  return (
    <div className="page-container">
      <SEOTags
        title="FAQ | Azim Ansari"
        description="Frequently asked questions about skills, services, and how to contact Azim."
        path="/faq"
        image="/azim.jpg"
      />
      <Navigation />
      <div className="page-inner">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((item, idx) => (
            <div key={idx} className="faq-item">
              <h3 className="faq-q">{item.q}</h3>
              <p className="faq-a">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ; 