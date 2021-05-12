const $BRGBUTTON = document.querySelector(".menu-button");
const $PROJECTS = document.querySelectorAll(".project-container");
const $BRGLIST = document.querySelector(".navbar-list");
const $ERROR = document.querySelector("#error");
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

const $FORM = document.querySelector("#form-contact");
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.querySelector("#status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: $FORM.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission!";
      $FORM.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
$FORM.addEventListener("submit", handleSubmit);
