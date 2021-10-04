const year = new Date().getFullYear();
const lastModified = document.lastModified;
document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").textContent = lastModified;

// Pressing the menu button switches the style to display
// list items or hide them in the nav
const navbutton = document.querySelector('.menubutton');
const navigation = document.querySelector('.navigation');
navbutton.addEventListener('click', ()=>{
    navigation.classList.toggle("responsive")}, false);