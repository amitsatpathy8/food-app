// ---Element Selection---
let dashboard = document.getElementById("dashboard");
let customer = document.getElementById("customer");
let fooditem = document.getElementById("fooditem");
let addFood = document.getElementById("addfood");
let viewfoods = document.getElementById("viewfoods");
let addBranch = document.getElementById("addbranch");
let branchRequest = document.getElementById("branch-request");
let branch = document.getElementById("branch");
let viewbranches = document.getElementById("viewbranches");
let selected = dashboard;

let dashboardBody = document.getElementById("dashboard-body");
let customerBody = document.getElementById("customer-body");
let addFoodBody = document.getElementById("addfood-body");
let addBranchBody = document.getElementById("addbranch-body");
let branchRequestBody = document.getElementById("branchrequest-body");
let viewBranchesBody = document.getElementById("viewbranches-body");
let viewfoodsbody = document.getElementById("viewallfood-body");
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

// ---customer---
customer.addEventListener("click", function () {
  changeSelect(customer);
  changeBody(customerBody);
});

// ---fooditem---
// fooditem.addEventListener("click", function () {
//   changeSelect(fooditem);
// });
addFood.addEventListener("click", function () {
  changeSelect(fooditem);
  changeBody(addFoodBody);
});

viewfoods.addEventListener("click", function () {
  changeSelect(fooditem);
  changeBody(viewfoodsbody);
});

// ---branch---
// branch.addEventListener("click", function () {
//   changeSelect(branch);
// });

addBranch.addEventListener("click", function () {
  changeSelect(branch);
  changeBody(addBranchBody);
});

branchRequest.addEventListener("click", function () {
  changeSelect(branch);
  changeBody(branchRequestBody);
});

viewbranches.addEventListener("click", function () {
  changeSelect(branch);
  changeBody(viewBranchesBody);
});

if (localStorage.getItem("emailValidated") != null) {
  console.log(localStorage.getItem("emailValidated"));
  document.getElementById("mainBody").classList.remove("visibility");
} else {
  if (!document.getElementById("mainBody").classList.contains("visibility"))
    document.getElementById("mainBody").classList.add("visibility");
  window.location.href = "http://127.0.0.1:5500/admin/index.html";
}
// localStorage.removeItem("emailValidated");
// console.log(localStorage.getItem("emailValidated"));

function logout() {
  localStorage.removeItem("emailValidated");
  document.getElementById("mainBody").classList.add("visibility");
  window.location.href = "http://127.0.0.1:5500/admin/index.html";
}
