function validateEmail(email) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
const emailInput = document.getElementById("email");
const submit = document.getElementById("submit");
const errorLabel = document.querySelector(".error-label");
const container = document.querySelector(".container");
const successState = document.querySelector(".success-state");
const sucEmVal = document.getElementById("suc-em-val");
const dismiss = document.getElementById("dismiss");
function formVal() {
  let email = emailInput.value;
  let isValid = validateEmail(email);
  if (!isValid) {
    emailInput.value = "";
    emailInput.classList.add("error-email");
    errorLabel.style.display = "block";
  } else {
    sucEmVal.value = emailInput.value;
    emailInput.value = "";
    errorLabel.style.display = "none";
    emailInput.classList.remove("error-email");
    container.style.display = "none";
    successState.style.display = "block";
  }
}
dismiss.addEventListener("click", () => {
  container.style.display = "flex";
  successState.style.display = "none";
});
