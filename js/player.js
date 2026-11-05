let video = document.getElementById("video-principal");
let botaoPlay = document.getElementById("botao-play");
let botaoPause = document.getElementById("botao-pause");
let textoTocando = document.getElementById("texto-tocando");
let itens = document.querySelectorAll(".item-video");
let fotos = document.querySelectorAll(".foto-relacionada");

let fotosKane = [
    "../file/img/kane/harry_kane.jpg",
    "../file/img/kane/kane_2.jpg",
    "../file/img/kane/kane3.jpg",
    "../file/img/kane/kane_ballon.jpg"
];

let fotosJordan = [
    "../file/img/michael/michael2.jpg",
    "../file/img/michael/michael3.jpg",
    "../file/img/michael/michael4.jpg",
    "../file/img/michael/michael_oscar.jpg"
];

botaoPlay.addEventListener("click", function () {
    video.play();
});

botaoPause.addEventListener("click", function () {
    video.pause();
});

function trocarFotos(heroi) {
    let lista = heroi === "kane" ? fotosKane : fotosJordan;

    fotos.forEach(function (foto, indice) {
        foto.src = lista[indice];
    });
}

itens.forEach(function (item) {
    item.addEventListener("click", function () {

        itens.forEach(function (outroItem) {
            outroItem.classList.remove("ativo");
        });

        item.classList.add("ativo");

        let arquivo = item.dataset.video;
        let titulo = item.dataset.titulo;
        let heroi = item.dataset.heroi;

        video.src = arquivo;
        video.play();

        textoTocando.textContent = "Tocando: " + titulo;

        trocarFotos(heroi);

    });
});
