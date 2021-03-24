const link = document.querySelector(".hotel-button");
const popup = document.querySelector(".form");
const map = document.querySelector(".map-img");
map.classList.add("map-img-hide");

link.addEventListener("click", function (evt) {
evt.preventDefault();
if (popup.className == 'form') {
popup.classList.remove('form');
popup.style.display = 'block';
popup.classList.add('form-show');
} else {
popup.classList.remove('form-show');
popup.classList.add('form');
setTimeout(() => {
popup.style.display = 'none';
}, 350);

}

});