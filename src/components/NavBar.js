// Import necessary modules

// Create the NavBar.js file that defines the navigation bar component.
// It should import necessary modules, render links to the home page and the form page using the Link component from react-router-dom.
import React from "react";
import { Link } from "react-router-dom";

// Define the NavBar component
const NavBar = () => {
  return (
    <div>
      <nav>
        {/* Prompt: Navigation links */}
        <Link to={"/"}>Home</Link> <Link to={"/form"}>Form</Link>
      </nav>
    </div>
  );
};

export default NavBar;
