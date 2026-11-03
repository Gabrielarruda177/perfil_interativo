
let perguntaAtual = 0;
let pontos = 0;
let respondida = false;

let perguntas = document.querySelectorAll(".pergunta");
let botoes = document.querySelectorAll(".opcao");

let pontuacaoFinal = document.getElementById("pontuacao-final");
let botaoProxima = document.getElementById("botao-proxima");
let telaResultado = document.getElementById("tela-resultado");
let caixaquiz = document.getElementById("caixa-quiz");
let mensagemResultado = document.getElementById("mensagem-resultado");
let botaoReiniciar = document.getElementById("botao-reiniciar");

let infoQuiz = document.getElementById("info-quiz");
let barraProgresso = document.getElementById("barra-progresso-preenchida");

function atualizarProgresso() {
    let numeroPergunta = perguntaAtual + 1;
    let totalPerguntas = perguntas.length;
    let porcentagem = (numeroPergunta / totalPerguntas) * 100;

    infoQuiz.textContent = "Pergunta " + numeroPergunta + " de " + totalPerguntas + " · Pontos: " + pontos;

    barraProgresso.style.width = porcentagem + "%";
}

perguntas[perguntaAtual].classList.add("ativa");
atualizarProgresso();

botoes.forEach(function (botao) {

    botao.addEventListener("click", function () {

        let resposta = botao.dataset.correta;

        if (respondida === true) {
            return;
        }

        respondida = true;

        if (resposta === "true") {
            pontos++;
            botao.classList.add("correta");
        } else {
            botao.classList.add("errada");

            let alternativas = botao.parentElement.querySelectorAll(".opcao");

            alternativas.forEach(function (alternativa) {
                if (alternativa.dataset.correta === "true") {
                    alternativa.classList.add("correta");
                }
            });
        }

        botoes.forEach(function (alternativa) {
            alternativa.disabled = true;
        });

        atualizarProgresso();

    });

});

botaoProxima.addEventListener("click", function () {

    if (respondida === false) {
        console.log("Precisa selecionar alguma alternativa");
        return;
    }

    if (perguntaAtual < perguntas.length - 1) {

        perguntas[perguntaAtual].classList.remove("ativa");
        perguntaAtual++;
        perguntas[perguntaAtual].classList.add("ativa");

        respondida = false;

        botoes.forEach(function (botao) {
            botao.disabled = false;
            botao.classList.remove("correta", "errada");
        });

        atualizarProgresso();

    } else {

        caixaquiz.hidden = true;
        telaResultado.hidden = false;

        pontuacaoFinal.textContent = "Você acertou " + pontos + "/10 questões!";

        if (pontos <= 5) {
            mensagemResultado.textContent = "Pratique Mais!";
        } else if (pontos <= 6) {
            mensagemResultado.textContent = "Bom!";
        } else if (pontos <= 9) {
            mensagemResultado.textContent = "Muito Bem!";
        } else if (pontos === 10) {
            mensagemResultado.textContent = "Perfeito!";
        }

    }

});
botaoReiniciar.addEventListener("click", function () {

    perguntaAtual = 0;
    pontos = 0;
    respondida = false;

    telaResultado.hidden = true;
    caixaquiz.hidden = false;

    perguntas.forEach(function (pergunta) {
        pergunta.classList.remove("ativa");
    });

    perguntas[perguntaAtual].classList.add("ativa");

    botoes.forEach(function (botao) {
        botao.disabled = false;
        botao.classList.remove("correta", "errada");
    });

    atualizarProgresso();

});
