import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Tasks from "./pages/tasks";
import ErrorPage from "./pages/error-page";

const baseUrl = import.meta.env.BASE_URL;

const router = createBrowserRouter([
  {
    path: `${baseUrl}`,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${baseUrl}about`,
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${baseUrl}tasks`,
    element: <Tasks />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${baseUrl}*`,
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
