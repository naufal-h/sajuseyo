document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault();
  var email = document.getElementById("email").value;
  if (email === "admin@gmail.com") {
    window.location.href = "/admin/dashboard.html";
  } else {
    window.location.href = "/home.html";
  }
});
