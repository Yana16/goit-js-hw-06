const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemEl = [];
const listEl = document.querySelector('#ingredients');

ingredients.map(ingredient => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  const itemEl = element;
  listEl.append(element);
  return element;
});