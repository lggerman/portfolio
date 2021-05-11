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

/* verifyName("nan1o");
function verifyName(name) {
  if (/^[a-zA-Z]+$/.test(name)) {
    console.log("anduvo papá");
    name.classList.delete("form-error");
    $ERROR.innerText = "";
  } else {
    name.classList.add("form-error");
    $ERROR.innerText =
      "El nombre u apellido no debe contener numeros ni caracteres especiales";
  }
}
function verifyEmptyString(string) {
  const stringNoSpaces = string.value.replace(/\s/g, "");
  if (!stringNoSpaces == "") {
    console.log("no ta vacio");
    string.classList.remove("form-error");
    $ERROR.innerText = "";
  } else {
    string.classList.add("form-error");
    $ERROR.innerText = "El nombre u email no debe estar vacio";
  }
}

function verifyForm() {
  const name = document.querySelector("#name");
  const last_name = document.querySelector("#last-name");
  const email = document.querySelector("#email");

  verifyEmptyString(name);
  verifyEmptyString(email);
  verifyName(name);
  console.log(name.value, last_name.value, email.value);
} */
const $FORM = document.querySelector("#form-contact");
console.log($FORM);
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
