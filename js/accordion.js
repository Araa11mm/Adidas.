const accordion = document.getElementsByClassName("contentBx");

  function closeAllAccordions() {
    for (let i = 0; i < accordion.length; i++) {
      accordion[i].classList.remove("active");
    }
  }

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      // Закрыть все аккордеоны, кроме текущего
      for (let j = 0; j < accordion.length; j++) {
        if (j !== i) {
          accordion[j].classList.remove("active");
        }
      }

      this.classList.toggle("active");
    });

    const contentElement = accordion[i].querySelector(".content");
    contentElement.addEventListener("click", function (event) {
      event.stopPropagation(); // Остановить всплывание события до .contentBx
    });
  }

  // Добавляем обработчик события клика на документ, чтобы закрывать аккордеоны при клике за их пределами
  document.addEventListener("click", function (event) {
    const targetElement = event.target;
    if (!targetElement.closest(".contentBx")) {
      closeAllAccordions();
    }
  });