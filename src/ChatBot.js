import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Azim's AI assistant. I can help you learn about his skills, projects, and experience. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Predefined responses based on keywords
  const getResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Skills related
    if (message.includes('skill') || message.includes('technology') || message.includes('tech stack')) {
      return "Azim specializes in Node.js, JavaScript, TypeScript, MongoDB, Express, React, AWS, Docker, Socket.IO, and Web3 technologies. He has extensive experience in backend development, microservices architecture, and scalable system design.";
    }
    
    // Projects related
    if (message.includes('project') || message.includes('work') || message.includes('portfolio')) {
      return "Azim has worked on several impressive projects:\n\n• VUENOW/MyCloudParticles - Marketing services platform with Node.js, MongoDB, Razorpay\n• UPSC Sites - Government website renewal handling large user data\n• DLCC - Crypto trading platform with Web3 integration\n• NFTY Token - DeFi reputation protocol with staking features\n• Max Healthcare - Internal system on Microsoft Azure\n\nWould you like details about any specific project?";
    }
    
    // Experience related
    if (message.includes('experience') || message.includes('job') || message.includes('career')) {
      return "Azim is currently a Software Development Engineer 1 at NativeByte Software LLP since September 2023. He previously worked as a freelance Backend Developer and was a MERN Stack Mentor at AttainU. He has strong expertise in Node.js, MongoDB, Express, and system design.";
    }
    
    // Education related
    if (message.includes('education') || message.includes('degree') || message.includes('study')) {
      return "Azim holds a Bachelor of Technology (B.Tech) from MIT Muzaffarpur, Aryabhatta Knowledge University Patna Bihar (2015-2019). He also completed his Intermediate from Rajendra College Chapra (2012-2014).";
    }
    
    // Contact related
    if (message.includes('contact') || message.includes('reach') || message.includes('connect')) {
      return "You can connect with Azim through:\n\n• Email: Use the contact form on this page\n• WhatsApp: Click the WhatsApp button for instant messaging\n• Mobile: You can call him on number 7739945298\n• LinkedIn: linkedin.com/in/azim-ansari-37aa421a6/\n• GitHub: github.com/azim-ansari-au9\n• Twitter: @azimpanjwar";
    }
    
    // Location related
    if (message.includes('location') || message.includes('where') || message.includes('based')) {
      return "Azim is based in Noida, India, and works in a hybrid environment at NativeByte Software LLP.";
    }
    
    // Specific technologies
    if (message.includes('node') || message.includes('nodejs')) {
      return "Yes! Node.js is Azim's primary expertise. He has extensive experience building scalable backend systems, APIs, microservices, and real-time applications using Node.js with Express, MongoDB, and various other technologies.";
    }
    
    if (message.includes('react')) {
      return "Azim has experience with React for frontend development. This portfolio website itself is built using React! He can work on full-stack applications combining React frontend with Node.js backend.";
    }
    
    if (message.includes('mongodb') || message.includes('database')) {
      return "Azim has extensive experience with MongoDB and database design. He's worked on projects involving large-scale data handling, proper indexing, query optimization, and database architecture for scalable applications.";
    }
    
    // Hiring/availability
    if (message.includes('hire') || message.includes('available') || message.includes('freelance')) {
      return "Azim is currently employed full-time but may be open to interesting opportunities or freelance projects. Feel free to reach out through the contact form or WhatsApp to discuss potential collaborations!";
    }
    
    // Blog related
    if (message.includes('blog') || message.includes('article') || message.includes('write')) {
      return "Yes! Azim writes technical articles about Node.js, microservices, Socket.IO, API security, and backend development best practices. You can check out his blog section on this website for in-depth technical content.";
    }
    
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Nice to meet you! I'm here to help you learn more about Azim Ansari's background, skills, and projects. What would you like to know?";
    }
    
    // Thanks
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! Is there anything else you'd like to know about Azim's background, skills, or projects?";
    }
    
    // Default response
    return "I'd be happy to help! I can tell you about Azim's:\n\n• Technical skills and expertise\n• Professional projects and experience\n• Education and background\n• Contact information\n• Blog and technical articles\n\nWhat specific information are you looking for?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className={`chatbot-toggle ${isOpen ? 'active' : ''}`} onClick={toggleChat}>
        {isOpen ? <FaTimes /> : <FaRobot />}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <FaRobot className="chatbot-icon" />
              <div>
                <h4>AI Assistant</h4>
                <span>Ask me about Azim</span>
              </div>
            </div>
            <button className="chatbot-close" onClick={toggleChat}>
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-avatar">
                  {message.sender === 'bot' ? <FaRobot /> : <FaUser />}
                </div>
                <div className="message-content">
                  <div className="message-text">
                    {message.text.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < message.text.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="message-time">
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot">
                <div className="message-avatar">
                  <FaRobot />
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about Azim..."
              disabled={isTyping}
            />
            <button 
              onClick={handleSendMessage} 
              disabled={!inputValue.trim() || isTyping}
              className="send-button"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
