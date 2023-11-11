// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

// API contract
// expected data format for APi
// POST localhost:3000/todos
//{
// description: string, required
// expire_at: string optional
//}

// takes string from input
//
function createToDo(str) {
  const obj = { description: str };
  const json = JSON.stringify(obj);

  return fetch("/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: json,
  });
}
// fetch('/todos')

document.querySelector(".addBtn").onclick = onBtnClick;

function getTasks() {
    fetch("/todos").then((resp) => resp.json().then(displayTasks));
}
const UnList = document.getElementById("myUl");

function resetList() {
    UnList.innerHTML = ''
}


getTasks()

function onBtnClick() {
    const input = document.getElementById("input");
    console.log(input.value);
    // this function resolves later then getTasks
    createToDo(input.value).then(() => {
        resetList()
        getTasks()
    })
  }



function displayTasks(tasks) {
  console.log(tasks);
  tasks.forEach((task) => {
    const taskLi = document.createElement("li");
    taskLi.textContent = task.description;

    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.className = 'check-btn';

    const removeButton = document.createElement('button');
    removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    removeButton.className = 'remove-btn';

    UnList.append(taskLi);
    taskLi.append(checkButton, removeButton);
  });
}
