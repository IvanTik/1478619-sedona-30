
const link = document.querySelector(".hotel-button");
const popup = document.querySelector(".form");
popup.classList.add("form-close");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("form-close");
});

