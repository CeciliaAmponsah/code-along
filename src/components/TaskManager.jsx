import React, { useState } from "react";
import TaskItem from "./TaskItem";
// import background from "../assets/img/flower.jpg";

function TaskManager() {
  const [tasks, setTasks] = useState(["Learn HTML", "Learn CSS"]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;
    setTasks([input, ...tasks]);
    setInput("");
  };

  const handleDelete = (idx) => {
    const newTask = tasks.filter((task) => task !== idx);
    setTasks(newTask);
  };

  return (
    <div className="h-screen bg-blue-600 flex justify-center items-center">
      <div className="max-w-xl w-full max-h-96 bg-white p-8 rounded-lg  px-5 py-10">
        <form
          className="space-x-6 flex w-[30rem] mb-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border-2 border-blue-400 p-2 rounded-md outline-none w-10/12"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white text-lg py-2 px-5 rounded-md"
            disabled={input === ""}
          >
            Add
          </button>
        </form>

        <div className="space-y-2 overflow-y-auto h-56">
          {tasks.map((tasks) => (
            <TaskItem task={tasks} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
