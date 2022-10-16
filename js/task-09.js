function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");
const body = document.querySelector("body");

changeColor.addEventListener('click', (event) => {
  const randomColor = getRandomHexColor();
  spanColor.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});

