const form = document.getElementById("modal-form");


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

})