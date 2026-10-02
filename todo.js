var input = document.getElementById("input")
var display = document.getElementById("display")

var todos = JSON.parse(localStorage.getItem("todos")) || []

input.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        todo()
    }
}) 

input.addEventListener("input", function () {
    if (input.value != "") {
        input.style.border = "2px solid #4299e1cb"
    } else {
        input.style.border = "2px solid red"
    }
})

function todo() {
    if (input.value == "") {
        input.style.border = "2px solid red"
    } else {
        todos.push(input.value)    
        saveTodos()                 
        renderTodos()               

        input.value = ""
        input.style.border = "2px solid #e2e8f0"
    }
}

function renderTodos() {
    display.innerHTML = ""    

    todos.forEach(function (item, index) {
        display.innerHTML += `
        <li class="todo-item">
            <span class="todo-text"><b>${item}</b></span>
            <div class="actions">
                <button class="btn-action btn-edit" onclick="edit(${index})">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    Edit
                </button> 
                <button class="btn-action btn-delete" onclick="Deletebtn(${index})">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    Delete
                </button> 
            </div>
        </li>`
    })
}

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos))
}

function Deletebtn(index) {
    todos.splice(index, 1)   
    saveTodos()
    renderTodos()
}

function edit(index) {
    var updateText = prompt("Update your Todo:", todos[index])

    if (updateText !== null && updateText.trim() !== "") {
        todos[index] = updateText
        saveTodos()
        renderTodos()
    }
}

renderTodos()



var checkLogin = localStorage.getItem("login")
if (checkLogin !== "true") {
    window.location.href = "./index.html"
}

function logout() {
    localStorage.clear()
    window.location.href = "./index.html"
}

