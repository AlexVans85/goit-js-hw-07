// Напиши скрипт, который для каждого элемента массива 
// ingredients создаст отдельный li, после чего вставит 
// все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

ingredients.forEach(ingredient =>{
    const liRef = document.createElement('li')
    liRef.textContent = ingredient

    const ingr = document.querySelector("#ingredients");
    ingr.append(liRef);
});



