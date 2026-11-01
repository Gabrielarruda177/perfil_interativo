function trocarAba(cardId, abaAlvo) {
  var card = document.getElementById(cardId);
  if (!card) return;
  var botoes = card.querySelectorAll(".aba-botao");
  for (var i = 0; i < botoes.length; i++) {
    botoes[i].classList.remove("ativa");
    if (botoes[i].getAttribute("data-aba") === abaAlvo) {
      botoes[i].classList.add("ativa");
    }
  }
  var paineis = card.querySelectorAll(".painel-aba");
  for (var j = 0; j < paineis.length; j++) {
    paineis[j].hidden = paineis[j].getAttribute("data-conteudo") !== abaAlvo;
  }
}

function alternarLista(cardId, tipo) {
  var card = document.getElementById(cardId);
  if (!card) return;
  var lista = card.querySelector('[data-caixa="' + tipo + '"]');
  if (!lista) return;
  lista.hidden = !lista.hidden;
}

function carregarPerfis() {
  var container = document.getElementById("cards-perfis");
  if (!container || typeof PESSOAS === "undefined") return;

  var html = "";
  var chaves = ["kane", "mbj"];

  for (var i = 0; i < chaves.length; i++) {
    var p = PESSOAS[chaves[i]];
    var fotoSrc = (p.id === "mbj") ? "file/img/michael/michael_proporcao_img2.jpg" : "file/img/kane/harry_kane.jpg";

    html += '<div class="cartao" id="cartao-' + p.id + '">';
    html += '<div class="cartao-cabecalho">';
    html += '<img class="cartao-foto" src="' + fotoSrc + '" alt="' + p.nome + '" onerror="this.src=\'file/img/michael/michael_proporcao_img2.jpg\';">';
    html += '<div><p class="cartao-nome">' + p.nome + '</p><p class="cartao-papel">' + p.papel + '</p></div>';
    html += '</div>';

    html += '<div class="abas">';
    html += '<button type="button" class="aba-botao ativa" data-aba="sobre" onclick="trocarAba(\'cartao-' + p.id + '\', \'sobre\')">Sobre</button>';
    html += '<button type="button" class="aba-botao" data-aba="carreira" onclick="trocarAba(\'cartao-' + p.id + '\', \'carreira\')">Carreira</button>';
    html += '<button type="button" class="aba-botao" data-aba="premios" onclick="trocarAba(\'cartao-' + p.id + '\', \'premios\')">Prêmios</button>';
    html += '</div>';

    html += '<div class="painel-aba" data-conteudo="sobre"><p>' + p.sobre + '</p></div>';

    html += '<div class="painel-aba" data-conteudo="carreira" hidden><ul>';
    for (var c = 0; c < p.carreira.length; c++) {
      html += '<li>' + p.carreira[c] + '</li>';
    }
    html += '</ul></div>';

    html += '<div class="painel-aba" data-conteudo="premios" hidden><ul>';
    for (var pr = 0; pr < p.premios.length; pr++) {
      html += '<li>' + p.premios[pr] + '</li>';
    }
    html += '</ul></div>';

    html += '<div class="botoes-alternadores">';
    html += '<button type="button" class="botao-alternador" onclick="alternarLista(\'cartao-' + p.id + '\', \'curiosidades\')">Curiosidades</button>';
    html += '<button type="button" class="botao-alternador" onclick="alternarLista(\'cartao-' + p.id + '\', \'conquistas\')">Conquistas</button>';
    html += '</div>';

    html += '<div class="lista-oculta-conteudo" data-caixa="curiosidades" hidden><ul>';
    for (var cu = 0; cu < p.curiosidades.length; cu++) {
      html += '<li>' + p.curiosidades[cu] + '</li>';
    }
    html += '</ul></div>';

    html += '<div class="lista-oculta-conteudo" data-caixa="conquistas" hidden><ul>';
    for (var co = 0; co < p.conquistas.length; co++) {
      html += '<li>' + p.conquistas[co] + '</li>';
    }
    html += '</ul></div>';

    html += '</div>';
  }

  container.innerHTML = html;
}

function marcarLinkAtual() {
  var pagina = window.location.pathname.split("/").pop() || "home.html";
  var links = document.querySelectorAll("#navbar-links a");
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    if (href === pagina || (pagina === "index.html" && href === "home.html")) {
      links[i].classList.add("ativo");
    } else {
      links[i].classList.remove("ativo");
    }
  }
}

window.onload = function() {
  marcarLinkAtual();
  carregarPerfis();
  var creditos = document.getElementById("texto-creditos");
  if (creditos && typeof NOMES_DA_DUPLA !== "undefined") {
    creditos.textContent = "Atividade de dupla: " + NOMES_DA_DUPLA;
  }
};
