import { useState } from "react";

function useTasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text, projectId) => {
    if (!projectId) return;
    const taskId = Math.random();
    const newTask = { id: taskId, text, projectId };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return {
    tasks,
    addTask,
    deleteTask,
  };
}

export default useTasks;
