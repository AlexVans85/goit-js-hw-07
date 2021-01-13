// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента (тега h2) 
// и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

// let i = document.querySelectorAll('.item')
// console.log(i);

// let y = i.length;
// console.log(`В списке ${y} категории.`);





// let x = document.querySelector('.item')
// console.log(x);

   
// let q = x.parentNode
// console.log(q);

// let t = q.children
// console.log(t);


//  let w = (t) => { 
//      const newT = Array.from(t);
//      const categories = newT.map(item => {
//         console.log('Категории:', item.firstElementChild.textContent);
//     console.log('Количество елементов:', item.lastElementChild.childElementCount)}
//     //  const elem = newT.map(item => item.lastElementChild)
//     // console.log('Категории:', item.firstElementChild.textContent);
//     // console.log('Количество елементов:', item.lastElementChild.childElementCount);
     
//     );
//     return
// };
// w(t)


//=======================================================================

let liRef = document.querySelectorAll('.item')
console.log(liRef);

liRef.forEach(element => {
    const h2Ref = element.querySelector('h2');
    const w = element.querySelectorAll('li')
    console.log('Категория:', h2Ref.textContent);
    console.log('Количество элементов:', w.length);
    
});
