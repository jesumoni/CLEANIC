// tel
const select_box = document.querySelector(".options"),
  search_box = document.querySelector(".search-box"),
  input_box = document.querySelector('input [type="tel"]'),
  selected_option = document.querySelector(".selected-option div");

selected_option.addEventListener("click", () => {
  select_box.classList.toggle("active");
  selected_option.classList.toggle("active");
});


// menu
const menuBtn = document.querySelector("#menuIcon");
const navBar = document.querySelector("#navBar");
const closeBtn = document.querySelector("#closeIcon");

menuBtn.addEventListener("click", menuBtnFunc);
closeBtn.addEventListener("click", closeIconFunc);

function menuBtnFunc() {
  navBar.style.transition = " all .8s ease-in-out";
  navBar.style.left = 0;
}

function closeIconFunc() {
  navBar.style.left = "-500px";
}


// AOS
AOS.init({
  once: false,
  mirror: true,
});
