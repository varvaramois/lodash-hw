// Завдання 1 //
// ну тут просто шукаю потрібні мені елементи за класом
const input = document.querySelector(".slider__input");
const img = document.querySelector(".slider__image");

// це функція для оновлення розміру зображення при передвиганні повзунка, тобто
function updateImageSize() {
  const value = input.value; // змінна value приймає кожного разу нове значення (початково це 50)
  img.style.width = `${value}%`; // в залежності від value змінюється розмір зображення (нп для value=50 розмір
  // зображення буде становити 50% розміру оригіналу)
}

// використовую бібліотеку lodash і функцію описану вище
const debounceUpdate = _.debounce(updateImageSize, 300, {
  leading: true,
  trailing: true,
});

// додаю обробник на повзуночок
input.addEventListener("input", debounceUpdate);

// Завдання 2 //
const box = document.getElementById("box");

function moveBox(event) {
  const x = event.clientX - box.offsetWidth / 2; // ширину та висоту боксу ділю на пополам щоб центрувати курсор
  const y = event.clientY - box.offsetHeight / 2;

  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}

const debounceMoveBox = _.debounce(moveBox, 100, {
  leading: true,
  trailing: true,
});

document.addEventListener("mousemove", debounceMoveBox);
