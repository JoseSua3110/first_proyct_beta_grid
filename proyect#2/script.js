const menu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
const overley = document.getElementById("overley");

menu.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar_open");
  overley.classList.toggle("overley_active");
});

overley.addEventListener("click", () => {
  sidebar.classList.remove("sidebar_open");
  overley.classList.remove("overley_active");
});