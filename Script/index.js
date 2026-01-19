const BtnEnviar = document.getElementById("btnEnviar");
const nomeMotorista = document.getElementById("nomeMotorista");
const form = document.getElementById("form");


const btnDashboard = document.getElementById("btnDashboard");


form.addEventListener("submit", (e) => {
  e.preventDefault();
}); // Script para fazer com que os dados não resetem na pagina.

btnDashboard.addEventListener('click', () => {
  window.location.href = "dashboard.html";
}); // Script para mudar de pagina html.
BtnEnviar.addEventListener('click', () =>{

   const tabela = JSON.parse(localStorage.getItem("tabelaMotoristas")) || []; // Criando ou inserindo na tabela "tabelaMotoristas"

   const registro = { // Criando uma chave com valores

    id: Date.now(), // Date.now é uma função que cria um numero aleatório de id unicamente a cada momento.
    nome: document.getElementById("nomeMotorista").value, //Obtendo os valores do input nome,
    volume: document.getElementById("volumetria").value, // Obtendo os valores do input volumetria,
    doca:document.getElementById("doca").value // Obetendo o valor da doca no select,

    }

    tabela.push(registro) // Inserindo a chave registro da tabela criada.

    localStorage.setItem("tabelaMotoristas", JSON.stringify(tabela)) // Inserindo a tabela no localstorage no navegador


})

function SomarPacote(){



}

