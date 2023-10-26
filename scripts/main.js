//Функцонал скрытия блоков корзины
const toggleButton = document.querySelector(".select__button");
const selectContentBlock = document.querySelector(".backet__main-block");

toggleButton.addEventListener("click", () => {
  selectContentBlock.classList.toggle("hidden-content");
  toggleButton.classList.toggle("toggle-btn");
});

const toggleDisButton = document.querySelector(".select-dis-button");
const selectDisContentBlock = document.querySelector(
  ".missing__cart-container"
);

toggleDisButton.addEventListener("click", () => {
  selectDisContentBlock.classList.toggle("hidden-content");
  toggleDisButton.classList.toggle("toggle-btn");
});

//Функционал изменения цвета кнопки "Избранное" и удаление карточки товара из списка кнопка "Удаления"
//Добавление в избранное
const heartButtons = document.querySelectorAll(".heart-btn");
heartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("heart-active");
  });
});

//Удаление карточки товара
const deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const priceCart = button.closest(".price__cart");
    if (priceCart) {
      priceCart.remove();
    }
  });
});

const deleteDisButtons = document.querySelectorAll(".delete-btn");
deleteDisButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const priceDisCart = button.closest(".missing__cart");
    if (priceDisCart) {
      priceDisCart.remove();
    }
  });
});

//Обработка счетчика кол-ва товара
const countElement = document.querySelector(".quantity");
const decrementButton = document.querySelector(".decrement-btn");
const incrementButton = document.querySelector(".increment-btn");
const restSpan = document.querySelector(".rest__span");
const totalSumElement = document.querySelector(".price__cart-summ h4");
const totalOriginalSumElement = document.querySelector(
  ".price__cart-summ span"
);
let count = 1;

let price = 522;
let originalPrice = 1051;

incrementButton.addEventListener("click", () => {
  // Увеличиваем количество товара
  count++;

  // Обновляем отображение количества товара
  countElement.textContent = count;

  // Вычисляем новую сумму товара и оригинальную сумму
  const newPrice = price * count;
  const newOriginalPrice = originalPrice * count;

  // Обновляем отображение сумм
  totalSumElement.textContent = `${newPrice} сом`;
  totalOriginalSumElement.textContent = `${newOriginalPrice} сом`;
});

decrementButton.addEventListener("click", () => {
  // Увеличиваем количество товара
  count--;

  // Обновляем отображение количества товара
  countElement.textContent = count;

  // Вычисляем новую сумму товара и оригинальную сумму
  const newPrice = price * count;
  const newOriginalPrice = originalPrice * count;

  // Обновляем отображение сумм
  totalSumElement.textContent = `${newPrice} сом`;
  totalOriginalSumElement.textContent = `${newOriginalPrice} сом`;
});

function updateCount() {
  countElement.textContent = count;
}

updateCount();

//Работа с Checkbox
const AllCheckboxElem = document.getElementById("myCheckbox");
const checkboxElem = document.querySelectorAll(".checkbox");

AllCheckboxElem.addEventListener("change", function () {
  if (this.checked) {
    checkboxElem.forEach((checkbox) => {
      checkbox.checked = true;
    });
  }

  if (this.checked == false) {
    checkboxElem.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
});
