import React from "react";
import "./Blog.css";
import Navigation from "./Navigation";
import { SEOTags } from "./SEO";
import AdSlot from "./AdSlot";

const blogPosts = [
	{
		id: 5,
		title: "Node.js and GraphQL: Building Modern APIs",
		excerpt:
			"Discover how to build powerful and flexible APIs using Node.js and GraphQL. Learn schema definitions, types, resolvers, and mutations with practical examples.",
		content: `
      <div style="text-align: center; margin: 2rem 0;">
        <img src="/node-graphql-logo.svg" alt="Node.js and GraphQL" style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);" />
      </div>
      
      <p>GraphQL is a powerful query language that enables clients to request precisely the data they need, making it an excellent choice for building efficient and flexible APIs. When combined with Node.js, developers can create robust and scalable server-side applications that provide optimal data fetching capabilities.</p>
      
      <h3>Why Choose GraphQL with Node.js?</h3>
      <ul>
        <li><strong>Precise Data Fetching:</strong> Clients request only the data they need, reducing over-fetching</li>
        <li><strong>Single Endpoint:</strong> Unlike REST APIs, GraphQL uses a single endpoint for all operations</li>
        <li><strong>Strongly Typed:</strong> Schema-first approach ensures type safety and better development experience</li>
        <li><strong>Real-time Features:</strong> Built-in support for subscriptions and real-time data</li>
        <li><strong>Introspection:</strong> Self-documenting APIs with powerful development tools</li>
      </ul>
      
      <h3>Setting Up Your Project</h3>
      <p>Start by creating a new Node.js project and installing the necessary dependencies:</p>
      
      <pre style="background: #1e1e2e; padding: 1.5rem; border-radius: 8px; overflow-x: auto; border-left: 4px solid #00d4ff;"><code>mkdir node-graphql-server
cd node-graphql-server
npm init -y

# Install core dependencies
npm install express express-graphql graphql

# Install development dependencies
npm install --save-dev nodemon @types/graphql</code></pre>
      
      <h3>GraphQL Schema Definition</h3>
      <p>The schema is the heart of any GraphQL API. It defines the types, queries, and mutations available:</p>
      
      <pre style="background: #1e1e2e; padding: 1.5rem; border-radius: 8px; overflow-x: auto; border-left: 4px solid #00d4ff;"><code>const { buildSchema } = require('graphql');

// Define GraphQL Schema
const schema = buildSchema(\`
  # User Type Definition
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
    createdAt: String!
  }

  # Post Type Definition
  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    published: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  # Input Types for Mutations
  input CreateUserInput {
    name: String!
    email: String!
  }

  input CreatePostInput {
    title: String!
    content: String!
    authorId: ID!
    published: Boolean = false
  }

  input UpdatePostInput {
    title: String
    content: String
    published: Boolean
  }

  # Query Operations
  type Query {
    # Get all users
    users: [User!]!
    
    # Get user by ID
    user(id: ID!): User
    
    # Get all posts
    posts: [Post!]!
    
    # Get post by ID
    post(id: ID!): Post
    
    # Get posts by author
    postsByAuthor(authorId: ID!): [Post!]!
    
    # Search posts by title
    searchPosts(query: String!): [Post!]!
  }

  # Mutation Operations
  type Mutation {
    # User mutations
    createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, input: CreateUserInput!): User!
    deleteUser(id: ID!): Boolean!
    
    # Post mutations
    createPost(input: CreatePostInput!): Post!
    updatePost(id: ID!, input: UpdatePostInput!): Post!
    deletePost(id: ID!): Boolean!
    publishPost(id: ID!): Post!
  }

  # Subscription Operations (for real-time features)
  type Subscription {
    postAdded: Post!
    postUpdated: Post!
    userJoined: User!
  }
\`);</code></pre>
      
      <h3>Implementing Resolvers</h3>
      <p>Resolvers are functions that handle GraphQL operations. They fetch and manipulate data:</p>
      
      <pre style="background: #1e1e2e; padding: 1.5rem; border-radius: 8px; overflow-x: auto; border-left: 4px solid #00d4ff;"><code>// Sample data (in production, use a database)
let users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    createdAt: new Date().toISOString()
  }
];

let posts = [
  {
    id: '1',
    title: 'Introduction to GraphQL',
    content: 'GraphQL is a query language for APIs...',
    authorId: '1',
    published: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

// Resolver functions
const resolvers = {
  // Query resolvers
  users: () => users,
  
  user: ({ id }) => users.find(user => user.id === id),
  
  posts: () => posts.map(post => ({
    ...post,
    author: users.find(user => user.id === post.authorId)
  })),
  
  post: ({ id }) => {
    const post = posts.find(post => post.id === id);
    if (post) {
      return {
        ...post,
        author: users.find(user => user.id === post.authorId)
      };
    }
    return null;
  },
  
  postsByAuthor: ({ authorId }) => 
    posts
      .filter(post => post.authorId === authorId)
      .map(post => ({
        ...post,
        author: users.find(user => user.id === post.authorId)
      })),
  
  searchPosts: ({ query }) => 
    posts
      .filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase())
      )
      .map(post => ({
        ...post,
        author: users.find(user => user.id === post.authorId)
      })),

  // Mutation resolvers
  createUser: ({ input }) => {
    const newUser = {
      id: String(users.length + 1),
      ...input,
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    return newUser;
  },
  
  updateUser: ({ id, input }) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    users[userIndex] = { ...users[userIndex], ...input };
    return users[userIndex];
  },
  
  deleteUser: ({ id }) => {
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return false;
    }
    users.splice(userIndex, 1);
    // Also delete user's posts
    posts = posts.filter(post => post.authorId !== id);
    return true;
  },
  
  createPost: ({ input }) => {
    const author = users.find(user => user.id === input.authorId);
    if (!author) {
      throw new Error('Author not found');
    }
    
    const newPost = {
      id: String(posts.length + 1),
      ...input,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    posts.push(newPost);
    
    return {
      ...newPost,
      author
    };
  },
  
  updatePost: ({ id, input }) => {
    const postIndex = posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
      throw new Error('Post not found');
    }
    
    posts[postIndex] = {
      ...posts[postIndex],
      ...input,
      updatedAt: new Date().toISOString()
    };
    
    return {
      ...posts[postIndex],
      author: users.find(user => user.id === posts[postIndex].authorId)
    };
  },
  
  deletePost: ({ id }) => {
    const postIndex = posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
      return false;
    }
    posts.splice(postIndex, 1);
    return true;
  },
  
  publishPost: ({ id }) => {
    const postIndex = posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
      throw new Error('Post not found');
    }
    
    posts[postIndex].published = true;
    posts[postIndex].updatedAt = new Date().toISOString();
    
    return {
      ...posts[postIndex],
      author: users.find(user => user.id === posts[postIndex].authorId)
    };
  }
};</code></pre>
      
      <h3>Setting Up the Express Server</h3>
      <p>Create a complete GraphQL server with Express:</p>
      
      <pre style="background: #1e1e2e; padding: 1.5rem; border-radius: 8px; overflow-x: auto; border-left: 4px solid #00d4ff;"><code>const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');

// Create Express app
const app = express();

// Enable CORS for frontend integration
app.use(cors());

// Setup GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: {
    headerEditorEnabled: true,
    defaultQuery: \`
      # Welcome to GraphQL!
      # Try these example queries:
      
      # Get all users
      query GetUsers {
        users {
          id
          name
          email
          createdAt
        }
      }
      
      # Get posts with authors
      query GetPosts {
        posts {
          id
          title
          content
          published
          author {
            name
            email
          }
          createdAt
        }
      }
    \`
  },
  customFormatErrorFn: (error) => ({
    message: error.message,
    locations: error.locations,
    stack: error.stack ? error.stack.split('\\n') : [],
    path: error.path,
  })
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(\`🚀 GraphQL Server running at http://localhost:\${PORT}/graphql\`);
  console.log(\`📊 GraphiQL interface available for testing\`);
});</code></pre>
      
      <h3>Example Queries and Mutations</h3>
      <p>Here are some practical examples you can test in GraphiQL:</p>
      
      <h4>Query Examples:</h4>
      <pre style="background: #1e1e2e; padding: 1.5rem; border-radius: 8px; overflow-x: auto; border-left: 4px solid #00d4ff;"><code># Get all users with their posts
query GetUsersWithPosts {
  users {
    id
    name
    email
    posts {
      id
      title
      published
      createdAt
    }
  }
}

# Search for posts
query SearchPosts {
  searchPosts(query: "GraphQL") {
    id
    title
    content
    author {
      name
    }
  }
}

# Get specific post with author details
query GetPostDetail {
  post(id: "1") {
    id
    title
    content
    published
    author {
      id
      name
      email
    }
    createdAt
    updatedAt
  }
}</code></pre>
      
      <h4>Mutation Examples:</h4>
      <pre style="background: #1e1e2e; padding: 1.5rem; border-radius: 8px; overflow-x: auto; border-left: 4px solid #00d4ff;"><code># Create a new user
mutation CreateUser {
  createUser(input: {
    name: "Alice Johnson"
    email: "alice@example.com"
  }) {
    id
    name
    email
    createdAt
  }
}

# Create a new post
mutation CreatePost {
  createPost(input: {
    title: "Getting Started with Node.js"
    content: "Node.js is a powerful runtime for building server-side applications..."
    authorId: "1"
    published: true
  }) {
    id
    title
    content
    published
    author {
      name
    }
    createdAt
  }
}

# Update an existing post
mutation UpdatePost {
  updatePost(
    id: "1"
    input: {
      title: "Advanced GraphQL Concepts"
      published: true
    }
  ) {
    id
    title
    content
    published
    updatedAt
  }
}

# Delete a post
mutation DeletePost {
  deletePost(id: "1")
}</code></pre>
      
      <h3>Best Practices & Advanced Features</h3>
      <ul>
        <li><strong>Error Handling:</strong> Implement custom error classes and proper error responses</li>
        <li><strong>Authentication:</strong> Add JWT token validation and role-based access control</li>
        <li><strong>Database Integration:</strong> Use ORMs like Prisma or TypeORM for production applications</li>
        <li><strong>Caching:</strong> Implement DataLoader for efficient data fetching and caching</li>
        <li><strong>Rate Limiting:</strong> Protect your API from abuse with query complexity analysis</li>
        <li><strong>Subscriptions:</strong> Add real-time features using GraphQL subscriptions</li>
        <li><strong>Testing:</strong> Write comprehensive tests for your resolvers and schema</li>
      </ul>
      
      <h3>Production Deployment Script</h3>
      <pre style="background: #1e1e2e; padding: 1.5rem; border-radius: 8px; overflow-x: auto; border-left: 4px solid #00d4ff;"><code>// package.json scripts
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest",
    "build": "npm run test && npm run lint",
    "lint": "eslint src/",
    "docker:build": "docker build -t my-graphql-app .",
    "docker:run": "docker run -p 4000:4000 my-graphql-app"
  }
}

// Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 4000
CMD ["npm", "start"]</code></pre>
      
      <p>This comprehensive guide provides you with everything needed to build production-ready GraphQL APIs with Node.js. The combination offers powerful data fetching capabilities, type safety, and excellent developer experience for modern web applications.</p>
    `,
		date: "2024-08-29",
		readTime: "20 min read",
		category: "API Development",
		tags: ["Node.js", "GraphQL", "API", "Backend"],
	},
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
        <SEOTags
          title={`${selectedPost.title} | Blog | Azim Ansari`}
          description={selectedPost.excerpt}
          path={`/blog`}
          image="/azim.jpg"
        />
        <Navigation />
        <div className="blog-inner">
				<div className="blog-post-header">
					<button className="back-button" onClick={handleBackClick}>
						 Back to Blog
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
          <AdSlot slot="9876543210" />
        </div>
			</div>
		);
	}

	return (
		<div className="blog-container">
			<SEOTags
				title="Blog | Azim Ansari"
				description="Thoughts on software development, Node.js, and building scalable applications."
				path="/blog"
				image="/azim.jpg"
			/>
			<Navigation />
      <div className="blog-inner">
				<div className="blog-header">
					<h1>Blog</h1>
					<p>
						Thoughts on software development, Node.js, and building scalable
						applications
					</p>
				</div>

        <AdSlot slot="2468135790" />

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
              <button className="btn small" onClick={(e) => { e.stopPropagation(); handlePostClick(post); }}>View Details</button>
						</article>
					))}
				</div>
      </div>
		</div>
	);
}

export default Blog;
