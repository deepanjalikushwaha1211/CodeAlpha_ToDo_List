function addTask() {
  var input = document.getElementById("taskInput");
  var taskText = input.value;

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  var li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = function() {
    li.classList.toggle("done");
  };

  var list = document.getElementById("taskList");
  list.appendChild(li);

  input.value = "";
}
