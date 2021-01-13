// Напиши скрипт который, 
// при наборе текста в инпуте input#name-input 
// (событие input), подставляет его текущее значение 
// в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 
// 'незнакомец'.

const inputData = document.querySelector('#name-input');
const valueInput = document.querySelector('#name-output');

inputData.addEventListener('input' , event => {
    if (event.target.value.length === 0) {
        valueInput.textContent = 'незнакомец'
    } else {
        valueInput.textContent = event.target.value
    }
})