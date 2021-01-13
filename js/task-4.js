
    // Счетчик состоит из спана и кнопок, которые должны увеличивать 
    // и уменьшать значение счетчика на 1.
    // Создай переменную counterValue в которой будет хранится 
    // текущее значение счетчика.
    // Создай функции increment и decrement для увеличения и 
    // уменьшения значения счетчика
    // Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


let counterValue = 0;

const valueCounter = document.querySelector('#value');
const btnIncrement = document.querySelector('button[data-action="increment"]')
const btnDecrement = document.querySelector('button[data-action="decrement"]')

btnIncrement.addEventListener('click', () => {
        
    counterValue += 1
        valueCounter.textContent = counterValue        
    })

btnDecrement.addEventListener('click', () => {
    if (counterValue > 0) {
    counterValue -= 1
    valueCounter.textContent = counterValue }
})

