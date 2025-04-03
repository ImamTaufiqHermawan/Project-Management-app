import { useState } from "react";

function useProjects() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(undefined);

  const addProject = (projectData) => {
    const projectId = Math.random();
    const newProject = { ...projectData, id: projectId };
    setProjects((prevProject) => [...prevProject, newProject]);
    setSelectedProjectId(undefined);
  };

  const deleteProject = () => {
    setProjects((prevProjects) => {
      prevProjects.filter((project) => project.id !== selectedProjectId);
    });
    setSelectedProjectId(undefined);
  };

  const selectProject = (id) => {
    setSelectedProjectId(id);
  };

  return {
    projects,
    selectedProjectId,
    addProject,
    deleteProject,
    selectProject,
    setSelectedProjectId,
  };
}

export default useProjects;
