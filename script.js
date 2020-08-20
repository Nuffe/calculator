
const add = function(a,b) {
   sum = a + b}
const subtract = function(a,b) {
   sum = a - b }
const multiply = function(a,b) {
   sum = a * b}
const divide = function(a,b) {
   sum = a / b}

const operate = function(a, b) {  
return chosen(test,test2)
}

let firstAdd= [];
let screen = 0;
let number = ""
let sum = 0
let operator = "none"

let adding = function(e) {
document.querySelector(".calc").textContent += [e.target.name]
number += e.target.name
number = parseInt(number)
}

 
const button = document.querySelectorAll(".math")
let buttons = button.forEach((buttons) => buttons.addEventListener("click", adding))


const change = document.querySelectorAll(".change")
let changing = function(e){


if(e.target.name == "add"){  
   firstAdd.push(number)
   document.querySelector(".calc").textContent += ["+"]   
   number = 0;
   operator = "add"
   }
else if (e.target.name == "sub"){  
   firstAdd.push(number)
   document.querySelector(".calc").textContent += ["-"]   
   number = 0;
   operator = "sub"
}

else if (e.target.name == "divide"){  
   firstAdd.push(number)
   document.querySelector(".calc").textContent += ["/"]   
   number = 0;
   operator = "divide"
      }
else if (e.target.name == "multiply"){  
   firstAdd.push(number)
   document.querySelector(".calc").textContent += ["x"]   
   number = 0;
   operator = "multiply"
   }

else if(e.target.name == "equal"){
   firstAdd.push(number)
   let a = firstAdd[0] 
   let b = firstAdd[1]
 
   if(operator == "add"){
      add(a,b)
   }
   else if(operator == "sub"){
      subtract(a,b)
   }
   else if(operator == "multiply"){
      multiply(a,b)
   }
   else if(operator == "divide"){
      divide(a,b)
   }
   else if(operator == "none"){
      sum = firstAdd[0]
   }
document.querySelector(".sum").textContent = sum
   }
}
let changer = change.forEach((operator) => operator.addEventListener("click", changing))