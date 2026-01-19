const BtnVoltar = document.getElementById("btnVoltar");
const BtnLimpar =document.getElementById("btnLimpar");

BtnVoltar.addEventListener('click', () => { // Função anônima para mover para pagina inicial
  window.location.href = "index.html";
})
BtnLimpar.addEventListener("click", () => { 
  localStorage.removeItem("tabelaMotoristas"); // Remove o item da tabela no local
  location.reload(); // recarrega o localstorage.
});

