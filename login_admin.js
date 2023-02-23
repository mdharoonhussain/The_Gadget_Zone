let mailEl = document.getElementById("mail");
let passwordEl = document.getElementById("pass");

let formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("inside event listener");
  console.log(mailEl.value, passwordEl.value);
  if (mailEl.value == "admin" && passwordEl.value == "admin") {
    window.location.href = "login_admin_dashboard.html";
  } else {
    alert("Wrong Credentials");
  }
});
