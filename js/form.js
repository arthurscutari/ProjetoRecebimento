
//Algortimo para abrir e fechar o modal
const btnAbrirModal = document.getElementById("btn-open-modal");
const btnFecharModal = document.getElementById("btn-close-modal");

const modal = document.querySelector(".modal-overlay")

document.addEventListener("DOMContentLoaded", () => {
  atualizarDashboard();
});


function abrirModal () {

    modal.classList.remove('hidden');

}
function fecharModal () {

    modal.classList.add('hidden');
    
}
btnAbrirModal.addEventListener('click', abrirModal)


btnFecharModal.addEventListener('click', fecharModal)

///////////////////////////////////////////

//Algoritimo para inserir os dados no LocalStorge

const form = document.getElementById("modal-form");
const banco = JSON.parse(localStorage.getItem("motoristas")) || [];


form.addEventListener('submit', (e) => { //Usar submit, pois estamos usando o FORM.

    
    
    e.preventDefault(); // Algoritmo para evitar que o navegador resete as informações.

   

    const motorista = {
        doca: document.getElementById("select-doca").value, 
        qtdPacotes: document.getElementById("qtd-pacotes").value,
        qtdAusentes: document.getElementById("qtd-ausentes").value
    }

    const lista = JSON.parse(localStorage.getItem("motoristas")) || [] // Ele irá procurar a lista "motoristas" se não achar vira um array valido vazio
    lista.push(motorista); // Add o array motorista na tabela.
    localStorage.setItem("motoristas", JSON.stringify(lista)); // Registra o array dentro do localStorage


    atualizarDashboard();
    fecharModal();
    form.reset();

})


///////////////////////////////////////////

//Algortimo para mostrar no HTML as informações do banco de Dados

function atualizarDashboard() {

const banco = JSON.parse(localStorage.getItem("motoristas")) || [];

const qtdPacoteDoca1 = document.getElementById("qtd-pacote-1");
const qtdAusenteDoca1 = document.getElementById("qtd-ausente-1");

const qtdPacoteDoca2 = document.getElementById("qtd-pacote-2");
const qtdAusenteDoca2 = document.getElementById("qtd-ausente-2");

const qtdPacoteDoca3 = document.getElementById("qtd-pacote-3");
const qtdAusenteDoca3 = document.getElementById("qtd-ausente-3");

const qtdPacoteDoca4 = document.getElementById("qtd-pacote-4");
const qtdAusenteDoca4 = document.getElementById("qtd-ausente-4");

const qtdPacoteDoca5 = document.getElementById("qtd-pacote-5");
const qtdAusenteDoca5 = document.getElementById("qtd-ausente-5");

const qtdPacoteDoca6 = document.getElementById("qtd-pacote-6");
const qtdAusenteDoca6 = document.getElementById("qtd-ausente-6");

const qtdPacoteDoca7 = document.getElementById("qtd-pacote-7");
const qtdAusenteDoca7 = document.getElementById("qtd-ausente-7");

const qtdPacoteDoca8 = document.getElementById("qtd-pacote-8");
const qtdAusenteDoca8 = document.getElementById("qtd-ausente-8");

const qtdPacoteDoca9 = document.getElementById("qtd-pacote-9");
const qtdAusenteDoca9 = document.getElementById("qtd-ausente-9");

const qtdPacoteDoca10 = document.getElementById("qtd-pacote-10");
const qtdAusenteDoca10 = document.getElementById("qtd-ausente-10");

let qtdTotalPacotes1 = 0;
let qtdTotalAusentes1 = 0;

let qtdTotalPacotes2 = 0;
let qtdTotalAusentes2 = 0;

let qtdTotalPacotes3 = 0;
let qtdTotalAusentes3 = 0;

let qtdTotalPacotes4 = 0;
let qtdTotalAusentes4 = 0;

let qtdTotalPacotes5 = 0;
let qtdTotalAusentes5 = 0;

let qtdTotalPacotes6 = 0;
let qtdTotalAusentes6 = 0;

let qtdTotalPacotes7 = 0;
let qtdTotalAusentes7 = 0;

let qtdTotalPacotes8 = 0;
let qtdTotalAusentes8 = 0;

let qtdTotalPacotes9 = 0;
let qtdTotalAusentes9 = 0;

let qtdTotalPacotes10 = 0;
let qtdTotalAusentes10 = 0;


banco.forEach(docaSelecionada => {

    if(docaSelecionada.doca === "1"){
        qtdTotalPacotes1 += Number(docaSelecionada.qtdPacotes)
        qtdTotalAusentes1 += Number(docaSelecionada.qtdAusentes)
    }
    if(docaSelecionada.doca === "2"){
        qtdTotalPacotes2 += Number(docaSelecionada.qtdPacotes)
        qtdTotalAusentes2 += Number(docaSelecionada.qtdAusentes)
    }
    if(docaSelecionada.doca === "3"){
        qtdTotalPacotes3 += Number(docaSelecionada.qtdPacotes)
        qtdTotalAusentes3 += Number(docaSelecionada.qtdAusentes)
    }
       if(docaSelecionada.doca === "4"){
        qtdTotalPacotes4 += Number(docaSelecionada.qtdPacotes)
        qtdTotalAusentes4 += Number(docaSelecionada.qtdAusentes)
    }
       if(docaSelecionada.doca === "5"){
        qtdTotalPacotes5 += Number(docaSelecionada.qtdPacotes)
        qtdTotalAusentes5 += Number(docaSelecionada.qtdAusentes)
    }
       if(docaSelecionada.doca === "6"){
        qtdTotalPacotes6 += Number(docaSelecionada.qtdPacotes)
        qtdTotalAusentes6 += Number(docaSelecionada.qtdAusentes)
    }
       if(docaSelecionada.doca === "7"){
        qtdTotalPacotes7 += Number(docaSelecionada.qtdPacotes)
        qtdTotalAusentes7 += Number(docaSelecionada.qtdAusentes)
    }
       if(docaSelecionada.doca === "8"){
        qtdTotalPacotes8 += Number(docaSelecionada.qtdPacotes)
        qtdTotalAusentes8 += Number(docaSelecionada.qtdAusentes)
    }
       if(docaSelecionada.doca === "9"){
        qtdTotalPacotes9 += Number(docaSelecionada.qtdPacotes)
        qtdTotalAusentes9 += Number(docaSelecionada.qtdAusentes)
    }
       if(docaSelecionada.doca === "10"){
        qtdTotalPacotes10 += Number(docaSelecionada.qtdPacotes)
        qtdTotalAusentes10 += Number(docaSelecionada.qtdAusentes)
    }
});



qtdPacoteDoca1.textContent = qtdTotalPacotes1
qtdAusenteDoca1.textContent = qtdTotalAusentes1

qtdPacoteDoca2.textContent = qtdTotalPacotes2
qtdAusenteDoca2.textContent = qtdTotalAusentes2

qtdPacoteDoca3.textContent = qtdTotalPacotes3
qtdAusenteDoca3.textContent = qtdTotalAusentes3

qtdPacoteDoca4.textContent = qtdTotalPacotes4
qtdAusenteDoca4.textContent = qtdTotalAusentes4

qtdPacoteDoca5.textContent = qtdTotalPacotes5
qtdAusenteDoca5.textContent = qtdTotalAusentes5

qtdPacoteDoca6.textContent = qtdTotalPacotes6
qtdAusenteDoca6.textContent = qtdTotalAusentes6

qtdPacoteDoca7.textContent = qtdTotalPacotes7
qtdAusenteDoca7.textContent = qtdTotalAusentes7

qtdPacoteDoca8.textContent = qtdTotalPacotes8
qtdAusenteDoca8.textContent = qtdTotalAusentes8

qtdPacoteDoca9.textContent = qtdTotalPacotes9
qtdAusenteDoca9.textContent = qtdTotalAusentes9

qtdPacoteDoca10.textContent = qtdTotalPacotes10
qtdAusenteDoca10.textContent = qtdTotalAusentes10

//Código eficiência

const eficienca1 = document.getElementById("eficiencia-1");
const eficienca2 = document.getElementById("eficiencia-2");
const eficienca3 = document.getElementById("eficiencia-3");
const eficienca4 = document.getElementById("eficiencia-4");
const eficienca5 = document.getElementById("eficiencia-5");
const eficienca6 = document.getElementById("eficiencia-6");
const eficienca7 = document.getElementById("eficiencia-7");
const eficienca8 = document.getElementById("eficiencia-8");
const eficienca9 = document.getElementById("eficiencia-9");
const eficienca10 = document.getElementById("eficiencia-10");


let eficienciaDoca1 = 0
let eficienciaDoca2 = 0
let eficienciaDoca3 = 0
let eficienciaDoca4 = 0
let eficienciaDoca5 = 0
let eficienciaDoca6 = 0
let eficienciaDoca7 = 0
let eficienciaDoca8 = 0
let eficienciaDoca9 = 0
let eficienciaDoca10 = 0

if (qtdTotalPacotes1 > 0) {

    eficienciaDoca1 =  ((qtdTotalPacotes1 - qtdTotalAusentes1) / qtdTotalPacotes1)*100;

}
if (qtdTotalPacotes2 > 0) {

    eficienciaDoca2 =  ((qtdTotalPacotes2 - qtdTotalAusentes2) / qtdTotalPacotes2)*100;

}
if (qtdTotalPacotes3 > 0) {

    eficienciaDoca3 =  ((qtdTotalPacotes3 - qtdTotalAusentes3) / qtdTotalPacotes3)*100;

}
if (qtdTotalPacotes4 > 0) {

    eficienciaDoca4 =  ((qtdTotalPacotes4 - qtdTotalAusentes4) / qtdTotalPacotes4)*100;

}
if (qtdTotalPacotes5 > 0) {

    eficienciaDoca5 =  ((qtdTotalPacotes5 - qtdTotalAusentes5) / qtdTotalPacotes5)*100;

}
if (qtdTotalPacotes6 > 0) {

    eficienciaDoca6 =  ((qtdTotalPacotes6 - qtdTotalAusentes6) / qtdTotalPacotes6)*100;

}
if (qtdTotalPacotes7 > 0) {

    eficienciaDoca7 =  ((qtdTotalPacotes7 - qtdTotalAusentes7) / qtdTotalPacotes7)*100;

}
if (qtdTotalPacotes8 > 0) {

    eficienciaDoca8 =  ((qtdTotalPacotes8 - qtdTotalAusentes8) / qtdTotalPacotes8)*100;

}
if (qtdTotalPacotes9 > 0) {

    eficienciaDoca9 =  ((qtdTotalPacotes9 - qtdTotalAusentes9) / qtdTotalPacotes9)*100;

}
if (qtdTotalPacotes10 > 0) {

    eficienciaDoca10 =  ((qtdTotalPacotes10 - qtdTotalAusentes10) / qtdTotalPacotes10)*100;

}

eficienca1.textContent =  eficienciaDoca1.toFixed(1) + "%";
eficienca2.textContent =  eficienciaDoca2.toFixed(1) + "%";
eficienca3.textContent =  eficienciaDoca3.toFixed(1) + "%";
eficienca4.textContent =  eficienciaDoca4.toFixed(1) + "%";
eficienca5.textContent =  eficienciaDoca5.toFixed(1) + "%";
eficienca6.textContent =  eficienciaDoca6.toFixed(1) + "%";
eficienca7.textContent =  eficienciaDoca7.toFixed(1) + "%";
eficienca8.textContent =  eficienciaDoca8.toFixed(1) + "%";
eficienca9.textContent =  eficienciaDoca9.toFixed(1) + "%";
eficienca10.textContent =  eficienciaDoca10.toFixed(1) + "%";

const totalPacotesRecebidos = document.getElementById("total-pacotes");
const totalAusentesRecebidos = document.getElementById("total-ausentes");

let pacotesTotaisRecebidos = 0
let pacotesTotaisAusentes = 0

banco.forEach(item => {
  pacotesTotaisRecebidos += Number(item.qtdPacotes);
});
banco.forEach(item => {
  pacotesTotaisAusentes += Number(item.qtdAusentes);
});

totalPacotesRecebidos.textContent = pacotesTotaisRecebidos 
totalAusentesRecebidos.textContent = pacotesTotaisAusentes 

console.log(pacotesTotaisRecebidos)
console.log(pacotesTotaisAusentes)

}

// Código para pegar todos os valores de pacotes e ausentes e mostrar na tela

const inputsNumericos = document.querySelectorAll(".input-geral");

inputsNumericos.forEach(input => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "");
  });
});

// Código para resetar o banco de dados

const btnResetar = document.getElementById("btn-resetar-baco");

btnResetar.addEventListener('click', () =>{

    resetarBancoMotoristas();
})

function resetarBancoMotoristas() {
  localStorage.removeItem("motoristas");
}