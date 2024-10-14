import { MdDeleteOutline } from "react-icons/md";

function TaskItem({ task, isComplete, deleteTask }) {
  return (
    <>
      <li className="flex justify-center items-center px-2 py-4 bg-white rounded-md mb-2 shadow-md hover:scale-105">
        {!task.completed ? (
          <span
            onClick={() => isComplete(task.id)}
            className="flex items-center w-full h-full text-xl bg-white"
          >
            {task.name}
          </span>
        ) : (
          <span className="flex items-center w-full h-full text-xl line-through bg-white">
            {task.name}
          </span>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className=" text-red-600 hover:scale-105"
        >
          <MdDeleteOutline size={25} className="bg-white" />
        </button>
      </li>
    </>
  );
}

export default TaskItem;
