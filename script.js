document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("to-do-input");
  const addtaskbtn = document.getElementById("add-task-btn");
  const todolist = document.getElementById("todo-list");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => renderTask(task));
  addtaskbtn.addEventListener("click", () => {
    const tasktext = todoInput.value.trim();
    if (tasktext === "") return;

    const newTask = {
      id: Date.now(),
      text: tasktext,
      completed: false,
    };

    tasks.push(newTask);
    saveTask();
    renderTask(newTask);
    todoInput.value = "";
    console.log(task);
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
      <span>${task.text}</span>
      <button>Delete</button>
    `;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTask();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTask();
    });

    todolist.appendChild(li);
  }
  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
