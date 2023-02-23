const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsArray = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.textContent = option;

  return ingredientEl
});

ingredientsArray.append(...elements)

