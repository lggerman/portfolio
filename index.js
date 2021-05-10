const $BRGBUTTON = document.querySelector(".menu-button");
const $PROJECTS = document.querySelectorAll(".project-container");
const $BRGLIST = document.querySelector(".navbar-list");

$BRGBUTTON.addEventListener("click", () => {
  $BRGBUTTON.classList.toggle("open");
  $BRGLIST.classList.toggle("desplegate");
});

$PROJECTS.forEach((item, i) => {
  item.addEventListener("click", () => {
    item.classList.toggle("project-active");
    $PROJECTS[i]
      .querySelector(".project-description")
      .classList.toggle("project-visible");
  });
});
