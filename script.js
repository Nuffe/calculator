
let array =[];
let number = "";
let operateArray = []

let adding = function(e){
   document.querySelector(".calc").textContent += e.target.name
   number += e.target.name
   number = parseInt(number)
   console.log(number)
   console.log(e.target.name)
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

if(operateArray[i] == "divide"){
  if (array[i+1] == 0 ){
   document.querySelector(".sum").textContent = 0
   document.querySelector(".calc").textContent = "You wot m8"
  }
   else {sum /= array[i+1];
      }
   }
}
document.querySelector(".sum").textContent = Math.round(sum * 10) / 10
}
let dunno = ""
let removing = function(e){ //C button clears everything
if (e.target.name == "clear" ) {
   document.querySelector(".calc").textContent = "" ;
   document.querySelector(".sum").textContent = " "
   operateArray = [];
   array = [];
   number = ""; 
}
else if (e.target.name == "back") { // some way go backwards one step with number and operators
 if(number == ""){
   operateArray.pop()
   document.querySelector(".calc").textContent = ""
   for(i = 0; i < array.length; i++){
        if(Number.isInteger(array[i]) == true){
           console.log("removing operator")
         document.querySelector(".calc").textContent += array[i]
         dunno = document.querySelector(`[name=${operateArray[i]}]`)
         document.querySelector(".calc").textContent += dunno.value 
        } //seems to be an error when operateArray[i] is undefined. still works tho, 
        //need to look in to it
        else {
           console.log("Not number")
        }
   }
 }
 else if(number > 0){
   document.querySelector(".calc").textContent = ""
   for(i = 0; i < array.length; i++){
        if(Number.isInteger(array[i]) == true){
           console.log("removing number")
         number = 0;
         document.querySelector(".calc").textContent += array[i]
         dunno = document.querySelector(`[name=${operateArray[i]}]`)
         document.querySelector(".calc").textContent += dunno.value 
        } 
        else {
           console.log("Not number")
        }
   }
 }
} //this above need to be cleaned up some, to messy
}


const button = document.querySelectorAll(".math")
const change = document.querySelectorAll(".change")
const equal = document.querySelectorAll(".equal")
const remove = document.querySelectorAll(".remove")

button.forEach((buttons) => buttons.addEventListener("click", adding))
change.forEach((operator) => operator.addEventListener("click", changing))
equal.forEach((operator) => operator.addEventListener("click", final))
remove.forEach((operator) => operator.addEventListener("click", removing))



