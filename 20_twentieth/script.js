//start selectors
const increaseButton = document.querySelector('.btn2');
const decreaseButton = document.querySelector('.btn1');
const counterValue =document.querySelector('.counter-value');
const resetButton =document.querySelector('.counter-reset-button');
//End selectors
     
// -------------------------------

// start function
// function about increment
function increment(){
    const currentValue = counterValue.textContent;
    const counterValueAsNumber = +currentValue;
    const newValue =counterValueAsNumber +1;
    if (newValue > 10){
        newValue = 10;
    }
    counterValue.textContent = newValue
};

// function about decrease
function decrease (){
    const currentValue = counterValue.textContent;
    const counterValueAsNumber = +currentValue;
    const newValue =counterValueAsNumber -1;
    if (newValue < 0){
        newValue = 0;
    }
    counterValue.textContent = newValue
};
// End function

// --------------------------

// start event
// increase Button 
increaseButton.addEventListener("click" ,increment);

// press all key in keyborad to increase
document.addEventListener('keydown',increment);

// decrease Button
decreaseButton.addEventListener("click" ,decrease);

// reset Button
resetButton.addEventListener('click',function(){
    counterValue.textContent = 0;
});
// End event

