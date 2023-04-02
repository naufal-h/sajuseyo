document.getElementById("regist").addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  var repassword = document.getElementById("repassword").value;

  if (
    name == "" ||
    email == "" ||
    phone == "" ||
    password == "" ||
    repassword == ""
  ) {
    alert("Please fill out all required fields!");
    return;
  }

  if (!cekEmail(email)) {
    alert("Please enter a valid email address!");
    return;
  }

  if (password != repassword) {
    alert("Your password and confirmation password do not match.");
    return;
  }

  window.location.href = "../home.html";
});

function cekEmail(email) {
  var cek = /\S+@\S+\.\S+/;
  return cek.test(email);
}
