// Import necessary modules

// Create the main file index.js that sets up the application,
// including the necessary imports, routing configuration,
// and rendering of the app within a router provider.
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Form from "./components/Form";
import EditBlog from "./components/EditBlog";

// Import routing related modules
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Create a browser router instance
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // Set the Home component as the default route
        index: true,
        element: <Home />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "blog/:id/edit",
        element: <EditBlog/>,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

// Create a root element for rendering the app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app inside a router provider, with strict mode enabled
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
