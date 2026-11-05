const eventosKane = [
  {
    ano: "1993",
    titulo: "Nasce em Londres",
    foto: "../file/img/kane/harry_kane.jpg",
    texto: "Harry Kane nasce em Walthamstow, Londres, iniciando no futebol ainda jovem."
  },
  {
    ano: "2011",
    titulo: "Estreia pelo Tottenham",
    foto: "../file/img/kane/kane_estreia.png",
    texto: "Faz sua estreia no time profissional do Tottenham Hotspur após anos na base."
  },
  {
    ano: "2018",
    titulo: "Copa do Mundo",
    foto: "../file/img/kane/kane_2.jpg",
    texto: "Capitão da Inglaterra, termina como artilheiro da Copa com 6 gols."
  },
  {
    ano: "2023",
    titulo: "Bayern de Munique",
    foto: "../file/img/kane/kane_cata.png",
    texto: "Transfere-se para o futebol alemão e mantém seu ritmo histórico de gols."
  },
  {
    ano: "2025",
    titulo: "Título alemão",
    foto: "../file/img/kane/kane3.jpg",
    texto: "Conquista seu primeiro grande título nacional de elite com o Bayern."
  }
];

const eventosJordan = [
  {
    ano: "1987",
    titulo: "Nasce na Califórnia",
    foto: "../file/img/michael/michael_proporcao_img2.jpg",
    texto: "Nasce em Santa Ana, Califórnia, e cresce na cidade de Newark, Nova Jersey."
  },
  {
    ano: "2002",
    titulo: "Papel em The Wire",
    foto: "../file/img/michael/michael_The_Wire.png",
    texto: "Interpreta Wallace na premiada série da HBO, recebendo grandes elogios."
  },
  {
    ano: "2013",
    titulo: "Fruitvale Station",
    foto: "../file/img/michael/michael_Fruitvale_Station.png",
    texto: "Protagoniza história real dirigida por Ryan Coogler e vence em Sundance."
  },
  {
    ano: "2015",
    titulo: "Estreia como Creed",
    foto: "../file/img/michael/michael_creed.jpg",
    texto: "Assume o papel principal na nova fase dos cinemas da franquia Rocky."
  },
  {
    ano: "2018",
    titulo: "Pantera Negra",
    foto: "../file/img/michael/michael_pantera.png",
    texto: "Interpreta Killmonger, um dos vilões mais aclamados do universo Marvel."
  },
  {
    ano: "2023",
    titulo: "Estreia na Direção",
    foto: "../file/img/michael/michael2.jpg",
    texto: "Dirige e protagoniza Creed III, consolidando seu talento criativo."
  }
];

const trilhoTempo = document.getElementById("trilho-tempo");
const botaoKane = document.getElementById("filtro-kane");
const botaoJordan = document.getElementById("filtro-jordan");

function renderizarEventos(lista, indicePadrao) {
  if (!trilhoTempo) return;

  trilhoTempo.innerHTML = "";

  lista.forEach(function (evento, indice) {
    const item = document.createElement("div");
    const lado = indice % 2 === 0 ? "lado-esquerdo" : "lado-direito";
    item.className = "evento-tempo " + lado;

    if (indice === indicePadrao) {
      item.classList.add("ativo");
    }

    item.innerHTML =
      '<div class="marcador-tempo"></div>' +
      '<div class="cartao-evento">' +
        '<div class="cabecalho-evento">' +
          '<p class="ano-evento">' + evento.ano + '</p>' +
          '<p class="titulo-evento">' + evento.titulo + '</p>' +
        '</div>' +
        '<div class="detalhes-evento">' +
          '<div class="caixa-foto-evento">' +
            '<img class="foto-evento" src="' + evento.foto + '" alt="' + evento.titulo + '" onerror="this.style.display=\'none\';">' +
            
          '</div>' +
          '<p class="texto-evento">' + evento.texto + '</p>' +
        '</div>' +
      '</div>';

    item.addEventListener("click", function () {
      const jaAtivo = item.classList.contains("ativo");
      const todosEventos = trilhoTempo.querySelectorAll(".evento-tempo");
      todosEventos.forEach(function (el) {
        el.classList.remove("ativo");
      });
      if (!jaAtivo) {
        item.classList.add("ativo");
      }
    });

    trilhoTempo.appendChild(item);
  });
}

if (botaoKane && botaoJordan) {
  botaoKane.addEventListener("click", function () {
    botaoKane.classList.add("ativo");
    botaoJordan.classList.remove("ativo");
    renderizarEventos(eventosKane, 2);
  });

  botaoJordan.addEventListener("click", function () {
    botaoJordan.classList.add("ativo");
    botaoKane.classList.remove("ativo");
    renderizarEventos(eventosJordan, 2);
  });
}

renderizarEventos(eventosKane, 2);
