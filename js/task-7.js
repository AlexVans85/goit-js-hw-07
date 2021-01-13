// Напиши скрипт, который реагирует на изменение значения 
// input#font-size-control (событие input) и 
// изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.


const inputSize = document.querySelector('#font-size-control')
const textSpan = document.querySelector('#text')

inputSize.style.width = '10%'



textSpan.style.fontSize = '50px'

inputSize.addEventListener('input', (event) => {
    
    textSpan.style.fontSize = event.target.value+'px' 
       
}
)