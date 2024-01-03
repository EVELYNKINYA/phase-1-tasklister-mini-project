
document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('taskInput');
  const submitButton = document.getElementById('submitTask');
  const taskList = document.getElementById('taskList');

  submitButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
      // To create a new list item and append it to the task list
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
      taskList.appendChild(listItem);

      // Clear the input field
      taskInput.value = '';
    }
  });
});