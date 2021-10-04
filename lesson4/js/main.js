const year = new Date().getFullYear();
const lastModified = document.lastModified;
document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").textContent = lastModified;
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}