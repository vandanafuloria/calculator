const numbersEl = document.querySelectorAll('.num');
const operatorEl = document.querySelectorAll('.operator')
const clearEl = document.querySelector('.clear');
const cancelEl = document.querySelector('.clear-all');
const onOffEl = document.querySelector('.on-off')


const calculateEl = document.querySelector('.calculate');
const equalEl = document.querySelector('.equal');
const resultEl = document.querySelector('h1')



let previousValue = "";
let currentValue = "";


function startBlinking() {
   onOffEl.classList.add("blinking");
}

function stopBlinking() {
   onOffEl.classList.remove("blinking");
}



function evaluateValue(event){
      startBlinking();
      
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

    function clearRecentValue(){
        currentValue = currentValue.slice(0, -1);
        // console.log(currentValue) ; 
            calculateEl.textContent = currentValue;
    }


  function clearAll(){
        onOffEl.classList.remove('blinking');
        currentValue = "";
        res = 0;
        resultEl.textContent = res;
        calculateEl.textContent = "";
  }

equalEl.onclick = () => {
    
    try{
    const res = eval(currentValue);
    
    resultEl.textContent = res;
    }
    catch{
        calculateEl.textContent = "Math Error";
    }
}


cancelEl.addEventListener('click', clearAll);
clearEl.addEventListener('click' , clearRecentValue)
  
