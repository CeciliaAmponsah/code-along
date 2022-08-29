import React, { useState, useEffect } from "react";
import { useTaskContext } from "../context/tasksContext";
import {v4 as uuid} from "uuid";
import TaskItem from "../components/TaskItem";
// import background from "../assets/img/flower.jpg";

function TaskManager() {
  const {tasks, setValue}  = useTaskContext();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;

    const newTask ={
      id: uuid(),
      text: input,
      completed: true,
    }
    setValue([newTask, ...tasks]);
    setInput("");
  };

  const handleDelete = (id) => {
    const newTask = tasks.filter((task) => task.id !== id);
    setValue(newTask);
  };
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  },[tasks])

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
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
