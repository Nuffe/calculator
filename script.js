
// gör functions för: + - * / 


const add = function(a,b) {
return a + b
}

const subtract = function(a,b) {
return a - b
}

const multiply = function(a,b) {
return a * b
}

const divide = function(a,b) {
return a / b
}

const operate = function(a, b) {  //behöver göra så att knapptryck lägger till vilken typ som ska användas
return chosen(test,test2)
}


const button = document.querySelectorAll("button")
console.log(button)

someFunction = function(e) {
   console.log(e.target.name)
let test =   document.querySelector(".calc").textContent += e.target.name
console.log(test)
}

let buttons = button.forEach((buttons) => buttons.addEventListener("click", someFunction))