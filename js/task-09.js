/* скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
Для генерування випадкового кольору використовуй функцію:
function getRandomHexColor() {} */

const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
