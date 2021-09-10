const menu = document.querySelector("#manu-bars");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
