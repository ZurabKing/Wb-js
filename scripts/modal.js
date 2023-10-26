const buttonPayElem = document.querySelectorAll(".buttonPay-modal");
const modalPay = document.querySelector(".fixed-overlay");
const closeModalBtn = document.getElementById("closeModal");
const closeIntBtn = document.querySelector(".modal__button");

buttonPayElem.forEach((button) => {
  button.addEventListener("click", () => {
    modalPay.classList.add("active");
  });
});

closeModalBtn.addEventListener("click", () => {
  modalPay.classList.remove("active");
});

closeIntBtn.addEventListener("click", () => {
  modalPay.classList.remove("active");
});
