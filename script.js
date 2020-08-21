
let array =[];
let number = "";
let operateArray = []

let adding = function(e){
   document.querySelector(".calc").textContent += e.target.name
   number += e.target.name
   number = parseInt(number)
   console.log(number)
}
let changing = function(e){ //adding operator and number to differend arrays
   number == "" ? number = 0 : false
   document.querySelector(".calc").textContent += e.target.value  
   number !== 0 ? array.push(number) : false
   operateArray.push(e.target.name)
   number = ""
}


let final = function(e){
operateArray.length == (array.length) ? array.push(number) : false  
number = 0
let sum = array[0]
for(i = 0; i < operateArray.length; i++){
operateArray[i] == "add" ? sum += array[i+1] : false
operateArray[i] == "sub" ? sum -= array[i+1] : false
operateArray[i] == "multiply" ? sum *= array[i+1] : false
operateArray[i] == "divide"  && array[i+1] !== 0 ? sum /= array[i+1] : false
}
document.querySelector(".sum").textContent = Math.round(sum * 10) / 10
}



const button = document.querySelectorAll(".math")
const change = document.querySelectorAll(".change")
const equal= document.querySelectorAll(".equal")

button.forEach((buttons) => buttons.addEventListener("click", adding))
change.forEach((operator) => operator.addEventListener("click", changing))
equal.forEach((operator) => operator.addEventListener("click", final))