// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его 
// содержимое на правильное количество символов.



const inputData = document.querySelector('#validation-input')

inputData.addEventListener('change' , event => {
    if (event.target.value.length !== Number(inputData.dataset.length))   {
        event.target.classList = 'invalid';
    } else {
        event.target.classList = 'valid';
    }
}
)