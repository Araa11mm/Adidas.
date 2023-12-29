const butt = document.getElementById("open-modal");
const headerModal = document.getElementById ("header-modal")
const crossModal = document.getElementById ("cross-header-modal")
const box = document.querySelector(".modal__box");



butt.addEventListener ("click", function () {
  headerModal.classList.add("open")
})

document.querySelector("#header-modal .modal__box").addEventListener("click", event => {
    event._isClickWithInModal = true;
});

document.getElementById("header-modal").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
});

headerModal.addEventListener('click', event => {
    if (event.target !== event.currentTarget) return; // Проверить, что клик произошел именно на самом модальном окне
    document.body.style.overflow = "auto"; // Разрешить прокрутку страницы
  });

butt.addEventListener("click", function () {
    headerModal.classList.add("open");
    document.body.style.overflow = "hidden"; 
});

  crossModal.addEventListener("click", function () {
    headerModal.classList.remove("open");
    document.body.style.overflow = "auto"; // Восстановить прокрутку страницы при закрытии модального окна
  });



