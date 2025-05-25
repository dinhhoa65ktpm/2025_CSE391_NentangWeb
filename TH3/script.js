let tasks = [];

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((taskText, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);

    // Tạo div nhóm nút
    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group btn-group-sm";

    // Nút Sửa
    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning";
    editBtn.textContent = "Sửa";
    editBtn.addEventListener("click", () => editTask(index));
    btnGroup.appendChild(editBtn);

    // Nút Xóa
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger";
    deleteBtn.textContent = "Xóa";
    deleteBtn.addEventListener("click", () => deleteTask(index));
    btnGroup.appendChild(deleteBtn);

    li.appendChild(btnGroup);
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Bạn chưa nhập nội dung công việc!");
    return;
  }

  tasks.push(taskText);
  input.value = "";
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newTask = prompt("Sửa nội dung công việc:", tasks[index]);
  if (newTask !== null) {
    const trimmed = newTask.trim();
    if (trimmed === "") {
      alert("Nội dung không được để trống!");
      return;
    }
    tasks[index] = trimmed;
    renderTasks();
  }
}

document.getElementById("addTaskBtn").addEventListener("click", addTask);
