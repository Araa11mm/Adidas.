const btn = document.getElementById("open-btn")
const cross = document.getElementById("cross-close")
const menu = document.getElementById("mobile-menu")
const body = document.body;

btn.addEventListener ("click", function () {
    menu.classList.add("open");
    disableScroll();

    cross.addEventListener ("click", function () {
        menu.classList.remove ("open")
        enableScroll();
    })
})

function disableScroll() {
    body.style.overflow = "hidden";

}

function enableScroll() {
    body.style.overflow = "auto";
}






