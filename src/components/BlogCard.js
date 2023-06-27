// Import necessary modules

// Create the BlogCard.js file that defines the blog card component.
// It should import necessary modules and render the title, content, and author of a blog post.
import React from "react";
import { useNavigate } from "react-router-dom";

// Define the BlogCard component
const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div className="blog-card">
      {/* Render the blog information */}
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <small>by: {blog.author}</small>
      <br />
      <button
        style={{ marginBottom: "1em", backgroundColor: "green" }}
        onClick={() => navigate(`/blog/${blog.id}/edit`)}
      >
        Edit
      </button>
    </div>
  );
};

export default BlogCard;
