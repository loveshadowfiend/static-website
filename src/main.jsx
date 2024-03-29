import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/styles.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Team } from "./pages/Team";
import { NotFound } from "./pages/NotFound";

const routes = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/team",
        element: <Team />,
    },
    {
        path: "/*",
        element: <NotFound />,
    },
];

const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
