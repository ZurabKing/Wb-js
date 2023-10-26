//Вспылытие label при наведении
const inputContainers = document.querySelectorAll(
  ".delivery__validate_input-container"
);

inputContainers.forEach((container) => {
  const input = container.querySelector("input");
  const label = container.querySelector("label");

  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      label.style.top = "-20px";
      label.style.fontSize = "13px";
    } else {
      label.style.top = "0px";
      label.style.fontSize = "16px";
    }
  });
});

//Валидация инпутов формы
function validationForm(form) {
  let result = true;

  function removeError(input) {
    const parent = input.parentNode;
    if (parent.classList.contains("error")) {
      parent.querySelector(".error-span").remove();
      parent.classList.remove("error");
    }
  }

  function createError(input, text) {
    const parent = input.parentNode;
    const errorSpan = document.createElement("p");
    errorSpan.classList.add("error-span");

    errorSpan.textContent = text;
    parent.classList.add("error");

    parent.append(errorSpan);
  }

  const inputElems = document.querySelectorAll(".delivery__validate_input");

  inputElems.forEach((input) => {
    removeError(input);

    if (input.dataset.required == "true") {
      if (input.value == "") {
        console.log("ошибка поля");
        createError(input, "Ваше поле не заполнено");
        result = false;
      }
    }
  });

  return result;
}

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validationForm(this) == true) {
    alert("форма отправилась");
  }
});
