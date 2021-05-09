const $brgButton = document.querySelector(".menu-button");
const $projects = document.querySelectorAll(".project-container");
$brgButton.addEventListener("click", () => {
  $brgButton.classList.toggle("open");
});

$projects.forEach((item, i) => {
  item.addEventListener("click", () => {
    item.classList.toggle("project-active");
    $projects[i]
      .querySelector(".project-description")
      .classList.toggle("project-visible");
  });
});
