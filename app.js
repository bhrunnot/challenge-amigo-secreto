//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('#amigo').value;
    
    if (nome == '') {
        alert('Por favor, insira um nome.')
    }else{
        amigos.push(nome);
        nome = document.querySelector('#amigo')
        nome.value = '';
        listaDeAmigos();
        console.log(amigos);
        
    }
}

function listaDeAmigos(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');                // cria um <li>
        li.textContent =  `${i + 1} ${amigos[i]}`;              // coloca o nome dentro
        lista.appendChild(li);                                  // anexa ao <ul>
    }
}

function sortearAmigo() {
    // let indiceEscolhido = amigos.length;
    if (amigos == '') {
        alert('Por favor, insira amigos para sortear');
    }else{
        let numeroEscolhido = Math.floor((Math.random() * amigos.length));
        console.log(`O sorteado Foi ${amigos[numeroEscolhido]}`);
        
        lista = document.querySelector('#listaAmigos');
        lista.innerHTML = ''; 

        let resultadoFinal = document.querySelector('#resultado');
        resultadoFinal.innerHTML = `O sorteado Foi ${amigos[numeroEscolhido]}`;

    }

}