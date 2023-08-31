function validate() {
  let flag = true;
  // ---select form element---
  let email = document.getElementById("form").email;
  let pass = document.getElementById("form").pass;

  // ---select error message---
  let emailError = document.getElementById("error-email");
  let passError = document.getElementById("error-pass");

  // --- email validation---
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
  if (pass.value.length == 0) {
    passError.innerHTML = "Enter password";
    flag = false;
  } else {
    passError.innerHTML = "";
  }

  if (flag) {
    const formData = { bemail: email.value, bpassword: pass.value };
    fetch("http://localhost:8080/branch/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (data == true) {
          localStorage.setItem("emailValidated", email.value);
          window.location.href = "http://127.0.0.1:5500/Public/navbar.html";
        }
      })
      .catch((error) => console.log(error));
  } else {
    console.log("Something is wrong");
  }
}
