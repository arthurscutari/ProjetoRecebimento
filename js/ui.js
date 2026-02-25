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
///////////////////////

const cards = document.querySelectorAll(".dashboard-dock-card");

cards.forEach(card => {
  card.addEventListener("click", function () {

    const isExpanded = this.classList.contains("expand");

    // Fecha todos
    cards.forEach(c => c.classList.remove("expand"));

    // Se NÃO estava expandido, abre
    if (!isExpanded) {
      this.classList.add("expand");
    }

  });
});
////////////////////////////////////////////////////////
//Código para criar no banco de dados os elementos

const form = document.getElementById("dashboard-form-send");
const banco = JSON.parse(localStorage.getItem("motoristas")) || [];


form.addEventListener('click', () => { 


    const motorista = {
        doca: document.getElementById("dashboard-select-dock").value, 
        qtdPacotes: document.getElementById("dashboard-form-package").value,
        qtdAusentes: document.getElementById("dashboard-form-lost").value
    }

    const lista = JSON.parse(localStorage.getItem("motoristas")) || [] // Ele irá procurar a lista "motoristas" se não achar vira um array valido vazio
    lista.push(motorista); // Add o array motorista na tabela.
    localStorage.setItem("motoristas", JSON.stringify(lista)); // Registra o array dentro do localStorage


    atualizarDashboard();


})

///////////////////////////////////
//Código para atualiar os KPis

function atualizarDashboard() {

const banco = JSON.parse(localStorage.getItem("motoristas")) || [];

const qtdPacoteDoca1 = document.getElementById("qtd-pacote-1");
const qtdAusenteDoca1 = document.getElementById("qtd-ausente-1");

const qtdPacoteDoca2 = document.getElementById("qtd-pacote-2");
const qtdAusenteDoca2 = document.getElementById("qtd-ausente-2");


let qtdTotalPacotes1 = 0;
let qtdTotalAusentes1 = 0;

let qtdTotalPacotes2 = 0;
let qtdTotalAusentes2 = 0;



banco.forEach(docaSelecionada => {

    if(docaSelecionada.doca === "1"){
        qtdTotalPacotes1 += Number(docaSelecionada.qtdPacotes)
        qtdTotalAusentes1 += Number(docaSelecionada.qtdAusentes)
    }
    if(docaSelecionada.doca === "2"){
        qtdTotalPacotes2 += Number(docaSelecionada.qtdPacotes)
        qtdTotalAusentes2 += Number(docaSelecionada.qtdAusentes)
    }

});



qtdPacoteDoca1.textContent = qtdTotalPacotes1
qtdAusenteDoca1.textContent = qtdTotalAusentes1

qtdPacoteDoca2.textContent = qtdTotalPacotes2
qtdAusenteDoca2.textContent = qtdTotalAusentes2



//Código eficiência

const eficienca1 = document.getElementById("eficiencia-1");
const eficienca2 = document.getElementById("eficiencia-2");



let eficienciaDoca1 = 0
let eficienciaDoca2 = 0


if (qtdTotalPacotes1 > 0) {

    eficienciaDoca1 =  ((qtdTotalPacotes1 - qtdTotalAusentes1) / qtdTotalPacotes1)*100;

}
if (qtdTotalPacotes2 > 0) {

    eficienciaDoca2 =  ((qtdTotalPacotes2 - qtdTotalAusentes2) / qtdTotalPacotes2)*100;

}


eficienca1.textContent =  eficienciaDoca1.toFixed(1) + "%";
eficienca2.textContent =  eficienciaDoca2.toFixed(1) + "%";



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



}