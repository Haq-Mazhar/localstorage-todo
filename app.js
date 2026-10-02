var username = document.getElementById("username")
var email = document.getElementById("email")
var password = document.getElementById("password")

var btn = document.getElementById("btn")
var data = document.getElementById("data")
 
if (localStorage.getItem("login") === "true") {
    window.location.href = "./todo.html"
} 

username.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        e.preventDefault()
        email.focus()
    }
})

email.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        e.preventDefault()
        password.focus()
    }
})

password.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        e.preventDefault()
        SetItem()
    }
})

function SetItem() {
    if (username.value == "" || email.value == "" || password.value == "") {
        alert("Fill all fields")
        return    
    }    
    localStorage.setItem("NAME", username.value)
    localStorage.setItem("login", true)
    localStorage.setItem("email", email.value)
    localStorage.setItem("password", password.value)

    username.value = ""
    email.value = ""
    password.value = ""

    

    getDATA()
}

function getDATA() {
    var checkLogin = localStorage.getItem("login")

    if (checkLogin == "true") {
        window.location.href = "./todo.html"
    } else {
        username.style.display = "block"
        email.style.display = "block"
        password.style.display = "block"
        data.innerHTML = ""
    }
}

getDATA()