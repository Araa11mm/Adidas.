// Функция для открытия выпадающего меню
function openDropdownMenu(event) {
  const target = event.currentTarget;
  const dropdownContent = target.nextElementSibling;
  dropdownContent.classList.add("open");

}

// Функция для закрытия выпадающего меню
function closeDropdownMenu(event) {
  const target = event.currentTarget;
  const dropdownContent = target.nextElementSibling;
  dropdownContent.classList.remove("open");

}

// Находим все ссылки для меню
const menuLinks = document.querySelectorAll(".menu__bold a, .menu__regular a");

// Добавляем обработчики событий для каждой ссылки
menuLinks.forEach((link) => {
  link.addEventListener("mouseenter", function (event) {
      const dropdownContent = event.currentTarget.nextElementSibling;
      openDropdownMenu(event);
      closeOtherDropdownMenus(dropdownContent);
  });

  // Добавляем обработчик события для закрытия выпадающего меню при уходе курсора с него
  link.addEventListener("mouseleave", closeDropdownMenu);
});

// Находим все выпадающие меню
const dropdownMenus = document.querySelectorAll(".dropdown__content");

// Добавляем обработчики событий для каждого выпадающего меню
dropdownMenus.forEach((menu) => {
  // Добавляем обработчик события для предотвращения закрытия меню при наведении на него
  menu.addEventListener("mouseenter", function (event) {
      const dropdownContent = event.currentTarget;
      dropdownContent.classList.add("open");
  });

  // Добавляем обработчик события для закрытия меню при уходе курсора с него
  menu.addEventListener("mouseleave", function (event) {
      const dropdownContent = event.currentTarget;
      dropdownContent.classList.remove("open");
  });
});























































