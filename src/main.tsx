import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import { ProjectRedirect } from "@/components/project-redirect";
import { projects } from "@/data/site";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {projects.map((project) => (
          <Route
            key={project.slug}
            path={`/${project.slug}`}
            element={<ProjectRedirect url={project.url} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
