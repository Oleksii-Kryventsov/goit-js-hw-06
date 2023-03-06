function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = document.querySelector('.change-color');
const colorText = document.querySelector('.color')

changeColor.addEventListener('click', (event) => {
  const colorRandom = getRandomHexColor();
  document.body.style.backgroundColor = colorRandom;
  colorText.textContent = colorRandom;
});