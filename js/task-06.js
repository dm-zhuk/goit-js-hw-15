/* Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

* Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
* Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання. */

/* const input = document.getElementById("validation-input");
console.log("validation-input");

input.addEventListener("blur", () => {
  const desiredLength = input.getAttribute("data-length");
  const enteredValue = inputValue;
}); */

const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const expectedLength = input.getAttribute("data-length");
  const currentLength = input.value.length;

  input.classList.remove("valid", "invalid");

  if (currentLength === parseInt(expectedLength)) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});
