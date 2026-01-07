const todoInput = document.getElementById("to-do-input");
const addtaskbtn = document.getElementById("add-task-btn");
const todolist = document.getElementById("todo-list");
let task = [];
addtaskbtn.addEventListener("click", () => {
  const tasktext = todoInput.value.trim();
  if (tasktext === "") return;

  const newTask = {
    id: Date.now(),
    task: tasktext,
    comleted: false,
  };
  task.push(newTask);
  todoInput.value = "";
  console.log(task);
});
