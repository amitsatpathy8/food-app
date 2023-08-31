const isAlphabatesonly = (str) => /^[A-Z a-z]+$/i.test(str);

function validate() {
  console.log("try hard");
  let flag = true;
  // ---error element selection---
  let nameError = document.getElementById("error-name");
  let genderError = document.getElementById("error-gender");
  let contactError = document.getElementById("error-mob");
  let emailError = document.getElementById("error-email");
  let passError = document.getElementById("error-pass");
  let argError = document.getElementById("error-term");
  // ----form element selection---
  let name = document.getElementById("form").name;
  let gender = document.getElementById("form").gender;
  let contact = document.getElementById("form").mob;
  let email = document.getElementById("form").email;
  let password = document.getElementById("form").password;
  let term = document.getElementById("form").term;

  // ---name validation---
  if (name.value == "") {
    nameError.innerHTML = "Please provide the full name";
    flag = false;
  } else if (!isAlphabatesonly(name.value)) {
    nameError.innerHTML = "Spacial charecters are not allowed";
    flag = false;
  } else if (name.value.trim().length == 0) {
    nameError.innerHTML = "Name can't be empty";
    flag = false;
  } else {
    nameError.innerHTML = "";
  }

  // ---gender validation---
  if (gender.value == "--select--") {
    genderError.innerHTML = "Please select the gender";
    flag = false;
  } else {
    genderError.innerHTML = "";
  }

  // ---Contact validation---
  if (contact.value.length != 10) {
    contactError.innerHTML = "Number must be of 10 digits";
    flag = false;
  } else if (
    !(
      contact.value.charAt(0) == "9" ||
      contact.value.charAt(0) == "8" ||
      contact.value.charAt(0) == "7" ||
      contact.value.charAt(0) == "6"
    )
  ) {
    contactError.innerHTML = "Enter a valid number";
    flag = false;
  } else {
    contactError.innerHTML = "";
  }

  // ---email validation---
  let validEmailWithRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.length == 0) {
    emailError.innerHTML = "Enter a email";
    flag = false;
  } else if (!email.value.match(validEmailWithRegex)) {
    emailError.innerHTML = "Enter a valid email";
    flag = false;
  } else {
    emailError.innerHTML = "";
  }

  // ---password validation---
  if (password.value.length == 0) {
    passError.innerHTML = "Enter password";
    flag = false;
  } else if (!(password.value.length > 5)) {
    passError.innerHTML = "Password is not upto the standard";
    flag = false;
  } else {
    passError.innerHTML = "";
  }

  // ---arg validation---
  console.log(term.checked);
  if (!term.checked) {
    argError.style.removeProperty("visibility");
    flag = false;
  } else {
    argError.style.visibility = "hidden";
  }
}
