// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

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
    const obj = { description: str }
    const json = JSON.stringify(obj)

    fetch('/todos', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
}
// fetch('/todos')
function onBtnClick() {
    const input = document.getElementById('input');
    console.log(input.value);
    createToDo(input.value)
}
document.querySelector('.addBtn').onclick = onBtnClick;

