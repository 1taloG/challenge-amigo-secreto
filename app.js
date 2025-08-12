let inputAmigo = document.getElementById("amigo");
let listaExibicao = document.getElementById("listaAmigos");
let resultadoExibicao = document.getElementById("resultado");
let botaoAdicionar = document.getElementById("botaoAdicionar");
let botaoSortear = document.getElementById("botaoSortear");
let botaoLimparResultado = document.getElementById("botaoLimparResultado");

let listaAmigos = [];

botaoAdicionar.addEventListener("click", AdicionarAmigo);

botaoSortear.addEventListener("click", sortearAmigo);

botaoLimparResultado.addEventListener("click", limparResultado);

function adicionarAmigo() {
    let nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("digite um nome antes de adicionar");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    inputAmigo.value = "";
    inputAmigo.focus();
}

function atualizarLista() {
    listaExibicao.innerHTML = "";

    for (let amigo of listaAmigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaExibicao.appendChild(li);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome para realizar o sorteio");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    resultadoExibicao.textContent = `O amigo sorteado eh: ${amigoSorteado}`;

}

function limparResultado() {
    resultadoExibicao.textContent = "";
}