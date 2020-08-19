
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
let firstAdd= []
let screen = 0
const button = document.querySelectorAll(".math")
let adding = function(e) {

screen = document.querySelector(".calc").textContent += [e.target.name]
} //screen får med sig täknena +-* på grund av att de visas på skärmen.
  // måste skilja dessa två på något sätt

let buttons = button.forEach((buttons) => buttons.addEventListener("click", adding))


const change = document.querySelectorAll(".change")
let changing = function(e){
   if(e.target.name == "add"){
   console.log(screen)   
   firstAdd.push(screen)
   screen = 0
   document.querySelector(".calc").textContent += ["+"]
   console.log(screen)
   
   }
console.log(firstAdd)
if(e.target.name == "equal"){
   console.log(firstAdd[1])
}



}
let changer = change.forEach((buttons) => buttons.addEventListener("click", changing))