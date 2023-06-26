// Import necessary modules

// Create the BlogCard.js file that defines the blog card component.
// It should import necessary modules and render the title, content, and author of a blog post.
import React from "react";

// Define the BlogCard component
const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      {/* Prompt: Render the blog information */}
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <small>{blog.author}</small>
    </div>
  );
};

export default BlogCard;
