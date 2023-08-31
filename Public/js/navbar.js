// ---Element Selection---
let dashboard = document.getElementById("dashboard");
let takeOrder = document.getElementById("takeorder");
let fooditem = document.getElementById("fooditem");
let addFood = document.getElementById("addfood");
let pendingRequest = document.getElementById("pending-request");
let viewFoods = document.getElementById("viewfoods");
let branchEmailDisplay = document.getElementById("branch-email-display");

let selected = dashboard;

let dashboardBody = document.getElementById("dashboard-body");
let takeOrderBody = document.getElementById("takeorder-body");
let addMenuBody = document.getElementById("addfood_body");
let pendingRequestBody = document.getElementById("prendingRequest-body");
let availableFoodBody = document.getElementById("availablefood-body");

let selectedBody = dashboardBody;

// ---select feature---
function changeSelect(newElement) {
  selected.classList.remove("active");
  newElement.classList.add("active");
  selected = newElement;
}

function changeBody(newBody) {
  selectedBody.classList.add("visibility");
  newBody.classList.remove("visibility");
  selectedBody = newBody;
}

// ---Event Listiner---

// ---dashboard---
dashboard.addEventListener("click", function () {
  changeSelect(dashboard);
  changeBody(dashboardBody);
});

// ---take-order---
takeOrder.addEventListener("click", function () {
  changeSelect(takeOrder);
  changeBody(takeOrderBody);
});

// ---customer---
addFood.addEventListener("click", function () {
  changeSelect(fooditem);
  changeBody(addMenuBody);
});

pendingRequest.addEventListener("click", function () {
  changeSelect(fooditem);
  changeBody(pendingRequestBody);
});

viewFoods.addEventListener("click", function () {
  changeSelect(fooditem);
  changeBody(availableFoodBody);
});

if (localStorage.getItem("emailValidated") != null) {
  console.log(localStorage.getItem("emailValidated"));
  document.getElementById("mainBody").classList.remove("visibility");
} else {
  if (!document.getElementById("mainBody").classList.contains("visibility"))
    document.getElementById("mainBody").classList.add("visibility");
  window.location.href = "http://127.0.0.1:5500/Public/index.html";
}

branchEmailDisplay.innerText = localStorage.getItem("emailValidated");

function logout() {
  localStorage.removeItem("emailValidated");
  document.getElementById("mainBody").classList.add("visibility");
  window.location.href = "http://127.0.0.1:5500/Public/index.html";
}
