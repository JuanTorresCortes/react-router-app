// Import necessary modules

// Create the Home.js file that defines the home page component.
// It should import necessary modules, access the blogs state from the outlet context,
// and render the title along with a loop over the blogs to display each blog's information using the BlogCard component.
import React from "react";
import BlogCard from "../components/BlogCard";
import { useOutletContext } from "react-router-dom";

// Define the Home component
const Home = () => {
  // Access the blogs state from the outlet context
  const { blogs } = useOutletContext();

  return (
    <div>
      {/* Prompt: This is the Home page */}
      <h1>Home</h1>
      {/* Prompt: Loop over blogs and render a BlogCard for each */}
      {blogs.map((blog) => (
        <BlogCard blog={blog} />
      ))}
    </div>
  );
};

export default Home;
