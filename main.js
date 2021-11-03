
let taskInput = document.getElementById("taskInput");
let button = document.getElementById("taskButton");
let taskList = document.getElementById("taskList");
let noTasks = document.getElementById("noTasks");
let tasksInfo = document.getElementById("tasksInfo");


// EVENT LISTENERS
button.addEventListener("click", createTask);
taskList.addEventListener("click", deleteCheck);

// FUNCTION ADDING TASKS

function createTask(event) {
  // Prevent default
  event.preventDefault();
 
  // To do div
  let taskDiv = document.createElement('div');
  taskDiv.setAttribute('class', 'task');
  // Create li 
  let taskItem = document.createElement('li');
  taskItem.innerText = taskInput.value;
  taskItem.classList.add('task-item');
  taskDiv.appendChild(taskItem);
  
  // Check button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('completed-btn');
  taskDiv.appendChild(completedButton);

  // Trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  trashButton.classList.add('trash-btn');
  taskDiv.appendChild(trashButton);

  // Append to list
  taskList.appendChild(taskDiv);

  // Remove noTasks

  noTasks.style.visibility = "hidden";

  // Clear Input Value
  taskInput.value = "";

  // Count
  countTasks();
}


function deleteCheck(e) {
 const item = e.target;
 // Delete
 if(item.classList[0] === 'trash-btn'){
   const todo = item.parentElement;
   // Animation
   todo.classList.add("animation");
   todo.addEventListener("transitionend", function() {
     todo.remove();
     countTasks();
   });
 }

 // Check
 if(item.classList[0] === 'completed-btn'){
  const todo = item.parentElement;
  todo.classList.toggle('completed');
  
}
countTasks();

}


// FUNCTION COUNTER

function countTasks() {
 let tasks = document.querySelectorAll('#taskList > div');
  let total = tasks.length;
  let completed = 0;
  
  for (let task of tasks) {
    if (document.querySelector('#taskList > div').classList.contains("completed")){
      completed++;
    }}
    console.log(document.querySelector('#taskList > div'));
 
  let pending = total - completed;
  tasksInfo.innerHTML = `You have ${total} tasks total. ${completed} completed and ${pending} pending.`;
}
