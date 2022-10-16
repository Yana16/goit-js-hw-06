const incrementBtn = document.querySelectorAll("button")[0];
const decrementBtn = document.querySelectorAll("button")[1];
let counterValue = 0;

incrementBtn.addEventListener(`click`, (event) => { 
    counterValue -= 1;
    const valueSpan = document.querySelector(`span`);
    valueSpan.textContent = counterValue;
})

decrementBtn.addEventListener(`click`, (element) => { 
    counterValue += 1;
    const valueSpan = document.querySelector(`span`);
    valueSpan.textContent = counterValue;
})