import { useState } from "react";

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName.trim()) return;
    addTask(taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full rounded-md">
      <input
        type="text"
        value={taskName}
        placeholder="Escribe una nueva tarea"
        required
        onChange={(e) => setTaskName(e.target.value)}
        className="w-full border-2 border-pink-700 rounded-l-lg bg-white p-2 my-4"
      />
      <button
        type="submit"
        className="bg-pink-700 text-white rounded-r-lg p-2 font-bold my-4"
      >
        Agregar
      </button>
    </form>
  );
}

export default TaskForm;
