import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    let a = document.querySelectorAll(".hot");
    a.forEach(element => {
        element.innerHTML += "🔥";
    })
});