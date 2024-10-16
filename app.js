let serialNumber = 1;
let data = [];  // Store all tasks

// Predefined array of names
const namesData = [
    { id: '1', name: 'Alice', age: 25 },
    { id: '2', name: 'Bob', age: 30 },
    { id: '3', name: 'Charlie', age: 35 },
    { id: '4', name: 'David', age: 40 },
    { id: '5', name: 'Eva', age: 22 },
    { id: '6', name: 'Frank', age: 28 },
    { id: '7', name: 'Grace', age: 27 },
    { id: '8', name: 'Henry', age: 32 },
    { id: '9', name: 'Ivy', age: 29 },
    { id: '10', name: 'Jack', age: 31 },
];

// Add event listener for the to-do form
document.getElementById('todoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const task = document.getElementById('task').value.trim();
    const date = document.getElementById('date').value;

    // Validating that name contains only alphabets
    const namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(name)) {
        alert('Name must contain only alphabets.');
        return;
    }

    // Add the task to the data array
    addTask(name, task, date);

    // Clear the input fields
    this.reset();
});

// Function to add task
function addTask(name, task, date) {
    const taskObj = { id: serialNumber, name: name, task: task, date: date };
    data.push(taskObj);  // Add the task to the data array
    serialNumber++;  // Increment the serial number
    renderTable();   // Re-render the table
}

// Function to edit task
function editTask(id) {
    const taskObj = data.find(task => task.id === id);
    document.getElementById('name').value = taskObj.name;
    document.getElementById('task').value = taskObj.task;
    document.getElementById('date').value = taskObj.date;

    deleteTask(id);  // Delete the task to edit
}

// Function to delete task
function deleteTask(id) {
    data = data.filter(task => task.id !== id);  // Remove from data array
    renderTable();  // Re-render the table after deletion
}

// Function to render tasks in the table
function renderTable() {
    const tbody = document.querySelector('#todoTable tbody');
    tbody.innerHTML = '';  // Clear the table
    data.forEach(task => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${task.id}</td>
            <td>${task.name}</td>
            <td>${task.task}</td>
            <td>${task.date}</td>
            <td>
                <button class="edit" onclick="editTask(${task.id})">Edit</button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

// Function to search names based on first letter
function searchNames() {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const filteredNames = namesData.filter(nameObj => nameObj.name.toLowerCase().startsWith(searchValue));
    displayFilteredNames(filteredNames);
}

// Function to display filtered names
function displayFilteredNames(filteredNames) {
    const namesList = document.getElementById('filteredNamesList');
    namesList.innerHTML = '';  // Clear current list

    filteredNames.forEach(nameObj => {
        const listItem = document.createElement('li');
        listItem.textContent = nameObj.name;  // Display the name
        namesList.appendChild(listItem);
    });
}
