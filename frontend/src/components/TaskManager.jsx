import React from "react";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "./ui/Button";
import Card from "./ui/Card";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  //add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask.trim(), completed: false },
      ]);
      setNewTask("");
    }
  };

  //toggle task completion status
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //filter tasks based on current
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  // Get task statistics
  const taskStats = {
    total: tasks.length,
    active: tasks.filter((task) => !task.completed).length,
    completed: tasks.filter((task) => task.completed).length,
  };

  return (
    <div className="max-w-5xl mx-auto p-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">📝 Task Manager</h2>
      </div>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 border px-2 py-1 rounded"
          placeholder="Add a new task"
        />
        <Button onClick={addTask} variant="primary">
          Add
        </Button>
      </div>

      <div className="flex gap-2 mb-4">
        {["all", "active", "completed"].map((f) => (
          <Button
            key={f}
            variant="primary"
            onClick={() => setFilter(f)}
            className={`px-3 py-1  text-sm ${
              filter === f ? " text-white" : "bg-gray-200"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </div>

      <ul className="space-y-2">
        {filteredTasks.length === 0 ? (
          <li className="text-gray-500">No tasks here.</li>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center font-semibold text-gray-800 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded"
            >
              <span
                className={`flex-1 ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
                onClick={() => toggleTask(task.id)}
              >
                {task.text}
              </span>
              <Button onClick={() => deleteTask(task.id)} variant="danger">
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>

      {/* Statistics */}

      <div className="grid grid-cols-1 mt-8 md:grid-cols-3 gap-10">
        <Card
          title="All Tasks"
          content={taskStats.total}
          footer={`${
            taskStats.total > 0
              ? Math.round((taskStats.completed / taskStats.total) * 100)
              : 0
          }% completed`}
        />
        <Card
          title="Active Tasks"
          content={taskStats.active}
          footer="Still in progress"
        />
        <Card
          title="Completed Tasks"
          content={taskStats.completed}
          footer="Great job!"
        />
      </div>
    </div>
  );
};

export default TaskManager;
