const addEmploye = document.getElementById('to-add-employe');
// Retrieve the team details from localStorage
const teamDetailsJSON = JSON.parse(localStorage.getItem('teamDetails'));

if (teamDetailsJSON) {
  const teamDetails = teamDetailsJSON;
  // Populate the fields in index2.html with the data
  document.getElementById('business-name').textContent = `${teamDetails.businessName}`;
  document.getElementById('team-name').textContent = `${teamDetails.teamName}`;
  document.getElementById('manager').textContent = `${teamDetails.managerName}`;
  document.getElementById('mail').textContent = `${teamDetails.managerEmail}`;
} else {
  console.error('No team details found in localStorage.');
  alert('No team details found. Please go back and fill out the form.');
}

addEmploye.addEventListener('submit', (event) => {
  event.preventDefault();
  const employeContainer = document.getElementById('employe-containner');
  const employeName = document.getElementById('employe-name').value;

  if (employeName.trim() !== '') {
    const uniqueId = Date.now(); // Generate a unique ID for each employee

    employeContainer.innerHTML += `
      <div class="employe-task" data-id="${uniqueId}">
        <div class="employe-bar">
          <span class="employe-name">${employeName}</span>
          <button class="work">Assign Task</button>
          <button class="show-btn">v</button>
        </div>
        <div class="for-adding-task"></div>
        <ul class="task-show" style="display: none;"></ul>
      </div>
    `;
    document.getElementById('employe-name').value = '';
  } else {
    alert('Please enter a name');
  }
});

document.getElementById('employe-containner').addEventListener('click', (event) => {
  const target = event.target;
  const employeTask = target.closest('.employe-task');

  if (target.classList.contains('work')) {
    console.log('Assign task button clicked');

    const taskInputContainer = employeTask.querySelector('.for-adding-task');
    taskInputContainer.innerHTML = `
      <input type="text" placeholder="Enter a task" class="input-for-adding-task">
      <button class="btn-for-adding-task">Add</button>
    `;

    const addTaskButton = taskInputContainer.querySelector('.btn-for-adding-task');
    addTaskButton.addEventListener('click', () => {
      const taskInput = taskInputContainer.querySelector('.input-for-adding-task').value.trim();
      const taskList = employeTask.querySelector('.task-show');

      if (taskInput !== '') {
        taskList.innerHTML += `<li>${taskInput}</li>`;
        taskInputContainer.innerHTML = ''; // Clear the input section
      } else {
        alert('Enter a task');
      }
    });
  }

  if (target.classList.contains('show-btn')) {
    console.log('Show tasks button clicked');

    const taskList = employeTask.querySelector('.task-show');

    if (taskList.style.display === 'none' || taskList.style.display === '') {
      taskList.style.display = 'block';
      target.textContent = 'Ʌ'; // Change button text to "collapse"
    } else {
      taskList.style.display = 'none';
      target.textContent = 'v'; // Change button text to "expand"
    }
  }
});

