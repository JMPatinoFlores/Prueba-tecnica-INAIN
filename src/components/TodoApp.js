import { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
  }, [tasks]);

  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const isComplete = (taskId) => {
    const changedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(changedTasks);
  };

  const deleteTask = (taskId) => {
    const changedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(changedTasks);
  };

  const filteredTask = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="container mx-auto w-2/3 rounded-lg">
      <h1 className="text-2xl font-bold text-center">Mi lista de tareas</h1>
      <TaskForm addTask={addTask} />
      <div className="flex justify-center items-center space-x-8">
        <button
          onClick={() => setFilter("all")}
          className="font-semibold py-4 px-2 my-2 bg-white rounded-md w-full hover:bg-violet-300 focus:bg-violet-400 focus:text-white"
        >
          Todas
        </button>
        <button
          onClick={() => setFilter("completed")}
          className="font-semibold py-4 px-2 my-2 bg-white rounded-md w-full hover:bg-violet-300 focus:bg-violet-400 focus:text-white"
        >
          Completadas
        </button>
        <button
          onClick={() => setFilter("pending")}
          className="font-semibold py-4 px-2 my-2 bg-white rounded-md w-full hover:bg-violet-300 focus:bg-violet-400 focus:text-white"
        >
          Pendientes
        </button>
      </div>
      <TaskList
        tasks={filteredTask}
        isComplete={isComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default TodoApp;
