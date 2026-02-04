import { abrirModal, atualizarDashboard, fecharModal, openCard, showCard } from "./function.js";

// Algoritmo para abrir e fechar o modal

const btnAbrirModal = document.getElementById("btn-open-modal");
const btnFecharModal = document.getElementById("btn-close-modal");
const modal = document.querySelector(".modal-overlay");





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

