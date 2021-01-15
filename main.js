const x = document.querySelector(".form-body");
const colaps = document.querySelectorAll(".product__btn");
colaps.forEach((event) => {
  event.addEventListener("click", onclick);
});

function onclick() {
  x.classList.toggle("active");
}
document.querySelector(".close").onclick = function () {
  x.classList.remove("active");
};
