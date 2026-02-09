/*import { abrirModal, atualizarDashboard, fecharModal, openCard, showCard } from "./function.js";

// Algoritmo para abrir e fechar o modal

const btnAbrirModal = document.getElementById("btn-open-modal");
const btnFecharModal = document.getElementById("btn-close-modal");
const modal = document.querySelector(".modal-overlay");
const btnLogin = document.getElementById("login-button")




document.addEventListener("DOMContentLoaded", () => {
  atualizarDashboard();

  btnAbrirModal.addEventListener('click', () => {

    abrirModal(modal);
})


btnFecharModal.addEventListener('click', () => {
    fecharModal(modal);
})

});

const cards = document.querySelectorAll(".dashboard-card");

cards.forEach((card) => {
  const btn = card.querySelector(".dashboard-card-button-expand");
  const show = card.querySelector(".dashboard-card-container-expand");

  btn.addEventListener("click", () => {
    openCard(card);
    showCard(show);
  });
});
*/

const btnLogin = document.getElementById("button-login");
if (btnLogin) {
  btnLogin.addEventListener("click", () => {
    window.location.href = "pages/dashboard.html";
  });
}

const buttonLogOut = document.getElementById("button-logout");
if (buttonLogOut) {
  buttonLogOut.addEventListener("click", () => {
    window.location.href = "../../index.html";
  });
}
