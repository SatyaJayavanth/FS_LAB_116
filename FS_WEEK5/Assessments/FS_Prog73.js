// 1. Select DOM Elements
const themeToggle = document.getElementById('themeToggle');
const fetchDataBtn = document.getElementById('fetchDataBtn');
const addItemBtn = document.getElementById('addItemBtn');
const itemInput = document.getElementById('itemInput');
const dynamicList = document.getElementById('dynamicList');

// 2. Dynamic Content: Add and Remove List Items
addItemBtn.addEventListener('click', () => {
    const textValue = itemInput.value.trim();
    if (textValue === '') return alert('Please enter text.');

    // Create a new list element
    const li = document.createElement('li');
    li.textContent = textValue;

    // Create a delete button for the element
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    deleteBtn.className = 'delete-btn';
    
    // Delete logic
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // Append button to list item, then list item to the list
    li.appendChild(deleteBtn);
    dynamicList.appendChild(li);

    // Clear input field
    itemInput.value = '';
});

// 3. Dynamic Styling: Theme Toggle
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
});

// 4. Dynamic Data Loading: Fetch API data
fetchDataBtn.addEventListener('click', async () => {
    try {
        fetchDataBtn.textContent = 'Loading...';
        
        // Fetching sample user data from a public API
        const response = await fetch('https://typicode.com');
        const users = await response.json();
        
        // Clear existing list elements before appending new API data
        dynamicList.innerHTML = '';

        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `User: ${user.name} (${user.email})`;
            dynamicList.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to load data.');
    } finally {
        fetchDataBtn.textContent = 'Load API Data';
    }
});
