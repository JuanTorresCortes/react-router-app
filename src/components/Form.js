// Import necessary modules

// Create the Form.js file that defines the form component for creating a new blog post.
// It should import necessary modules, set up states for title, content, and author,
// access the setBlogs function from the outlet context, handle form submission to update the blogs state,
// and render the form inputs and a submit button.
import React from "react";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

// Define the Form component
const Form = () => {
  // Set up states for title, content, and author
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  // Access the setBlogs function from the outlet context
  const { setBlogs } = useOutletContext();

  // Handle form submission
  const handleOnSubmit = () => {
    // Update the blogs state with the new blog
    setBlogs((previousState) => {
      const newBlog = {
        title,
        content,
        author,
        id: previousState.length + 1,
      };
      return [...previousState, newBlog];
    });

    // Reset the form inputs
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        border: "3px solid blue",
      }}
    >
      {/* Prompt: This is the Blog Form */}
      <h1>Blog Form</h1>

      {/* Prompt: Input field for blog title */}
      <input
        type="text"
        value={title}
        placeholder="Blog Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />

      {/* Prompt: Text area for blog content */}
      <textarea
        type="textBox"
        value={content}
        placeholder="New Blog Content"
        onChange={(e) => setContent(e.target.value)}
      />
      <br />

      {/* Prompt: Input field for blog author */}
      <input
        type="text"
        value={author}
        placeholder="Blog Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <br />

      {/* Prompt: Button for submitting the form */}
      <button onClick={handleOnSubmit}>submit</button>
    </div>
  );
};

export default Form;
