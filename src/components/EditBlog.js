// useEffect to grab the selected blog from blogs
// create a new state that handles input for update
// hints: useEffect, useState, useOutletContext, input
import React, { useEffect, useState } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";

const EditBlog = () => {
  // Define state variables to store the updated title and content
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const navigate = useNavigate(); // invokes useNavigate

  // Retrieve the blog.Id parameter from the URL using the useParams hook
  const { id } = useParams();

  // Access the blogs array and setBlog state from the context using the useOutletContext hook from App.js
  const { blogs, setBlogs } = useOutletContext();

  useEffect(() => {
    // This useEffect hook is triggered when

    // Find the selected blog based on the Id
    const foundBlog = blogs.find((blog) => blog.id.toString() === id);
    // Set the initial values of the editTitle and editContent states
    setEditTitle(foundBlog.title);
    setEditContent(foundBlog.content);

    // This effect depends on the id and blogs variables
  }, [id, blogs]);

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the blog in the blogs array using map
    const updatedBlogs = blogs.map((blog) => {
      if (blog.id.toString() === id) {
        // Create a new blog object with the updated title and content
        return {
          ...blog,
          title: editTitle,
          content: editContent,
        };
      }
      return blog;
    });

    // update blogs array with new blog object using setBlogs() setter function form useOutletContext()
    setBlogs(updatedBlogs);

    // Reset the editTitle and editContent states
    setEditTitle("");
    setEditContent("");

    // Redirect
    navigate("/");
  };

  const handleDelete = () => {  // id already accessible in EditBlog() through useParams hook
      // this method creates a new array and returns an array that has specific condition
      
      const remainingBlogs = blogs.filter((blog) => {
        return blog.id.toString() !== id;
      });
      setBlogs(remainingBlogs);
      navigate("/")
  }

  return (
    <div className="edit-form">
      <form onSubmit={handleSubmit}>
        <h1>Edit Blog:</h1>
        <br />
        <input
          type="text"
          placeholder="Title:"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <br />
        <textarea
          type="text"
          placeholder="Content:"
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
        />
        <br />
        <button type="submit" style={{ backgroundColor: "green"}}>Submit</button> <button onClick={ handleDelete } style={{ backgroundColor: "red"}}>Delete</button>
      </form>
    </div>
  );
};

export default EditBlog;
