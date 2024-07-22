
function calculator(num1 , num2 , operator){
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    
        default:
            break;
    }
}



/*ADD EVENT LISTENERS */

let calc_button = document.querySelectorAll(".calc-button");

let calc_button_operator = document.querySelectorAll(".calc-button-operator");

var operator

/* Event listeners for numbers */

calc_button.forEach(button=>{
    button.addEventListener("click",function(e){
        let value = e.target.innerText;
        let display = document.querySelector(".calc-pre-display");
        display.innerHTML += value;
        });
});


/* Event listeners for Operators */
calc_button_operator.forEach(button=>{
    button.addEventListener("click",function(e){
        let value = e.target.innerText;
        let display = document.querySelector(".calc-pre-display");
        let answer = document.querySelector(".calc-result-display");
        let nums = display.innerHTML.split(/[+|\-|*|\/]/);
        if(value != "=" && value != "C"){
            if (nums.length > 1)
            {
                display.innerHTML=calculator(parseInt(nums[0]),parseInt(nums[1]),operator) + value;
            }
            else display.innerHTML += value; 

            operator = value;
        }
        if (value == "="){
            answer.innerHTML= calculator(parseInt(nums[0]),parseInt(nums[1]),operator)
        }

        if (value == "C"){
            display.innerHTML=""
            answer.innerHTML=""
        }        

        })
});