const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// bikin <li> lengkap dengan span + edit + delete
function createTaskElement(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";

  editBtn.addEventListener("click", function () {
    const newText = prompt("Edit tugas:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
      saveData();
    }
  });

  deleteBtn.addEventListener("click", function () {
    li.remove();
    saveData();
  });

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  return li;
}

// simpan semua tugas ke localStorage
function saveData() {
  const tasks = [];
  document.querySelectorAll("#taskList li span").forEach(function (span) {
    tasks.push(span.textContent);
  });
  localStorage.setItem("todos", JSON.stringify(tasks));
}

// load data dari localStorage saat halaman dibuka
function loadData() {
  const tasks = JSON.parse(localStorage.getItem("todos")) || [];
  tasks.forEach(function (taskText) {
    const li = createTaskElement(taskText);
    taskList.appendChild(li);
  });
}

// event tombol Tambah
addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = createTaskElement(taskText);
  taskList.appendChild(li);

  taskInput.value = "";
  saveData();
});

// load data pertama kali
window.addEventListener("load", loadData);
