// Select HTML elements using DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

// Add Task button event listener
addTaskBtn.addEventListener("click", function () {

    // Get the task entered by the user
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");
    li.className = "task-item";

    // Create span for task text
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    // Create Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";

    // Create Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    // Complete button event listener
    completeBtn.addEventListener("click", function () {
        span.classList.toggle("completed");

        if (span.classList.contains("completed")) {
            completeBtn.textContent = "Completed";
        } else {
            completeBtn.textContent = "Complete";
        }
    });

    // Delete button event listener
    deleteBtn.addEventListener("click", function () {
        li.remove();

        // Show empty message if no tasks remain
        if (taskList.children.length === 0) {
            emptyMessage.style.display = "block";
        }
    });

    // Add elements to list item
    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Add list item to task list
    taskList.appendChild(li);

    // Hide empty message
    emptyMessage.style.display = "none";

    // Clear input box
    taskInput.value = "";
});