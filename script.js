const numbersEl = document.querySelectorAll('.num');
const operatorEl = document.querySelectorAll('.operator')
const clearEl = document.querySelector('.clear');
const cancelEl = document.querySelector('.clear-all');

const decimalEl = document.querySelector('.decimal');
const calculateEl = document.querySelector('.calculate');
const equalEl = document.querySelector('.equal');
const resultEl = document.querySelector('h1')



let previousValue = "";
let currentValue = "";
let operatorValue = "";
let prev ;


function operatorHandling(e){
    let operator = e.target.textContent;
    let n1 = previousValue;
    let n2 = currentValue;
    
    switch(operatorEl){
        case "+":
          let res = n1 + n2;
          break;

    }

}
function numbersHandling(e){
    let val = e.target.textContent;
    if(previousValue == ""){
        previousValue = val;
    }
    else{
        previousValue+= val;
    }
    

}

function clearButtonHandling(){

}

function evaluateValue(event){
        let val= event.target.textContent;
        // calculateEl.textContent  = val;
        currentValue = currentValue + val;
        calculateEl.textContent = currentValue;
           
        
       
    
       
}


    numbersEl.forEach(num=>{
        // console.log(num);
       num. addEventListener('click', evaluateValue);
       
    });


operatorEl.forEach(num=>{
        // console.log(num);
       num. addEventListener('click', evaluateValue);
       
    });


  

equalEl.onclick = () => {
    const res = eval(currentValue);
    
    resultEl.textContent = res;
}


  
