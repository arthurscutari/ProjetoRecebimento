const btnAbrirModal = document.getElementById("btn-open-modal");
const btnFecharModal = document.getElementById("btn-close-modal");

const modal = document.querySelector(".modal-overlay")

btnAbrirModal.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

btnFecharModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});
