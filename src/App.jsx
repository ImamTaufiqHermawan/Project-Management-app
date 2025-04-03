import useProjects from "./hooks/useProjects";
import useTasks from "./hooks/useTasks";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const {
    projects,
    selectedProjectId,
    addProject,
    deleteProject,
    selectProject,
    setSelectedProjectId,
  } = useProjects();

  const { tasks, addTask, deleteTask } = useTasks();

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  let content;
  if (selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={addProject}
        onCancel={() => setSelectedProjectId(undefined)}
      />
    );
  } else if (selectedProjectId === undefined) {
    content = (
      <NoProjectSelected onStartAddProject={() => setSelectedProjectId(null)} />
    );
  } else if (selectedProject) {
    content = (
      <SelectedProject
        project={selectedProject}
        onDelete={deleteProject}
        onAddTask={(text) => addTask(text, selectedProjectId)}
        onDeleteTask={deleteTask}
        tasks={tasks}
      />
    );
  } else {
    content = <p className="text-stone-500 mt-16">Project not found.</p>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={() => setSelectedProjectId(null)}
        projects={projects}
        onSelectProject={selectProject}
      />
      {content}
    </main>
  );
}

export default App;
