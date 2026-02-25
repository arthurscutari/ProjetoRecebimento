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

const openForm = document.getElementById("button-new")
const containerNavigation = document.getElementById("container-navigation")
const containerForm = document.getElementById("container-form");
const closeForm = document.getElementById("button-back-form");

openForm.addEventListener("click", () =>{



  containerNavigation.classList.add("hidden")
  containerForm.classList.add("show")

})

closeForm.addEventListener("click", () =>{



  containerNavigation.classList.remove("hidden")
  containerForm.classList.remove("show")

})

////////////////////////////////

const openScale = document.getElementById("button-scale")
const containerScale = document.getElementById("container-scale")
const closeScale = document.getElementById("button-back-scale")

openScale.addEventListener("click", () => {


  containerNavigation.classList.add("hidden")
  containerScale.classList.add("show")
})

closeScale.addEventListener("click", () => {


  containerNavigation.classList.remove("hidden")
  containerScale.classList.remove("show")
})
//////////////////////////////////////

const openDocks = document.getElementById("button-docks")
const containerDocks = document.getElementById("container-docks")
const closeDocks = document.getElementById("button-back-docks")

openDocks.addEventListener("click", () => {


  containerNavigation.classList.add("hidden")
  containerDocks.classList.add("show")
})

closeDocks.addEventListener("click", () => {


  containerNavigation.classList.remove("hidden")
  containerDocks.classList.remove("show")
})
//////////////////////////////////////

const openDriver = document.getElementById("button-driver")
const containerDriver = document.getElementById("container-driver")
const closeDriver = document.getElementById("button-back-driver")

openDriver.addEventListener("click", () => {


  containerNavigation.classList.add("hidden")
  containerDriver.classList.add("show")
})

closeDriver.addEventListener("click", () => {


  containerNavigation.classList.remove("hidden")
  containerDriver.classList.remove("show")
})

//////////////////////////////////////

const openStorage = document.getElementById("button-storage")
const containerStorage = document.getElementById("container-storage")
const closeStorage = document.getElementById("button-back-storage")

openStorage.addEventListener("click", () => {


  containerNavigation.classList.add("hidden")
  containerStorage.classList.add("show")
})

closeStorage.addEventListener("click", () => {


  containerNavigation.classList.remove("hidden")
  containerStorage.classList.remove("show")
})