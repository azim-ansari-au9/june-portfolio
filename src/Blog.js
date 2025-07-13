import React from "react";
import "./Blog.css";
import Navigation from "./Navigation";

const blogPosts = [
	{
		id: 1,
		title: "Building Scalable Node.js Applications",
		excerpt:
			"Learn the best practices for building scalable Node.js applications with proper architecture, error handling, and performance optimization techniques.",
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
		date: "2024-01-15",
		readTime: "5 min read",
		category: "Backend Development",
		tags: ["Node.js", "Performance", "Architecture"],
	},
	{
		id: 2,
		title: "Microservices with Node.js and Docker",
		excerpt:
			"Explore how to build and deploy microservices using Node.js, Docker, and container orchestration for better scalability and maintainability.",
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
		date: "2024-01-10",
		readTime: "7 min read",
		category: "Microservices",
		tags: ["Docker", "Microservices", "Node.js"],
	},
	{
		id: 3,
		title: "Real-time Applications with Socket.IO",
		excerpt:
			"Discover how to build real-time features like chat applications, live dashboards, and collaborative tools using Socket.IO and Node.js.",
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
		date: "2024-01-05",
		readTime: "6 min read",
		category: "Real-time Development",
		tags: ["Socket.IO", "Real-time", "WebSockets"],
	},
	{
		id: 4,
		title: "API Security Best Practices",
		excerpt:
			"Learn essential security practices for protecting your Node.js APIs, including authentication, authorization, input validation, and threat prevention.",
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
		date: "2023-12-28",
		readTime: "8 min read",
		category: "Security",
		tags: ["Security", "Authentication", "API"],
	},
];

function Blog() {
	const [selectedPost, setSelectedPost] = React.useState(null);

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	const handlePostClick = (post) => {
		setSelectedPost(post);
	};

	const handleBackClick = () => {
		setSelectedPost(null);
	};

	if (selectedPost) {
		return (
			<div className="blog-post-detail">
        <div className="portfolio-root">
				<Navigation />
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
							<span key={index} className="post-tag">
								{tag}
							</span>
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
		<div className="blog-container">
			<div className="portfolio-root">
				<Navigation />
				{/* <Navigation /> */}
				<div className="blog-header">
					<h1>Blog</h1>
					<p>
						Thoughts on software development, Node.js, and building scalable
						applications
					</p>
				</div>

				<div className="blog-grid">
					{blogPosts.map((post) => (
						<article
							key={post.id}
							className="blog-card"
							onClick={() => handlePostClick(post)}>
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
										<span key={index} className="blog-tag">
											{tag}
										</span>
									))}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}

export default Blog;
