const btnLogin = document.getElementById("button-login");
if (btnLogin) {
  btnLogin.addEventListener("click", () => {
    window.location.href = "pages/dashboard.html";
  });
}
//////////////////////////////////
const buttonLogOut = document.getElementById("button-logout");
if (buttonLogOut) {
  buttonLogOut.addEventListener("click", () => {
    window.location.href = "../index.html";
  });
}

//////////////////////////////////
