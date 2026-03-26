// To-Do List Application with Local Storage

// Function to load tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        addTaskToDOM(task);
    });
}

// Function to add a task to the DOM
function addTaskToDOM(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
}

// Function to handle form submission
function handleTaskSubmit(event) {
    event.preventDefault();
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value;
    if (task) {
        addTaskToDOM(task);
        saveTaskToLocalStorage(task);
        taskInput.value = '';
    }
}

// Function to save a task to local storage
function saveTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Event listener for form submission
document.getElementById('taskForm').addEventListener('submit', handleTaskSubmit);

// Load tasks on page load
window.onload = loadTasks;