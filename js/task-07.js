/* Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */

const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

// Встановлення початкового значення font-size
text.style.fontSize = input.value + "px";

input.addEventListener("input", (event) => {
  const fontSize = event.target.value;
  text.style.fontSize = fontSize + "px";
});
