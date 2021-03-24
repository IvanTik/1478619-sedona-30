
const link = document.querySelector(".hotel-button");
const popup = document.querySelector(".form");
popup.classList.add("form-close");
const map = document.querySelector(".map-img");
map.classList.add("map-img-hide");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("form-close");
});