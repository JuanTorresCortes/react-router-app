// Import necessary modules

// Create the App.js file that defines the main component of the application.
// It should include the necessary imports, set up state for blogs,
// render a title, a navigation bar component (NavBar.js),
// and the nested routes using the Outlet component.
import React from "react";
import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

// Define the main App component
function App() {
  // Define a state for blogs and a function to update it
  const [blogs, setBlogs] = useState([]);

  return (
    <div className="App">
      {/* Prompt: Render the title */}
      <h1>App Component</h1>
      {/* Prompt: Render the navigation bar */}
      <NavBar />
      {/* Prompt: Render the nested routes */}
      <Outlet context={{ blogs, setBlogs }} />
    </div>
  );
}

export default App;
