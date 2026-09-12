const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent = document.lastModified;
const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("show");
    if (nav.classList.contains("show")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});
