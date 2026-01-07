document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("to-do-input");
  const addtaskbtn = document.getElementById("add-task-btn");
  const todolist = document.getElementById("todo-list");
  let task = JSON.parse(localStorage.getItem("tasks")) || [];
  task.forEach((task) => renderTask(task));
  addtaskbtn.addEventListener("click", () => {
    const tasktext = todoInput.value.trim();
    if (tasktext === "") return;

    const newTask = {
      id: Date.now(),
      task: tasktext,
      comleted: false,
    };
    task.push(newTask);
    saveTask();
    todoInput.value = "";
    console.log(task);
  });

  function renderTask(task) {
    console.log(task);
  }
  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(task));
  }
});
