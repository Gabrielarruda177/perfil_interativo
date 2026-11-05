 const momentosKane = [
      {
        titulo: "Estreia pela Inglaterra",
        meta: "2015 · Seleção inglesa",
        imagem: "file/img/kane/harry_kane.jpg",
        texto: "Harry Kane marcou em sua estreia pela seleção da Inglaterra, iniciando uma trajetória que o levaria à capitania e ao topo da artilharia do país."
      },
      {
        titulo: "Chuteira de Ouro",
        meta: "Copa do Mundo · 2018",
        imagem: "file/img/kane/kane_2.jpg",
        texto: "Com seis gols na Copa do Mundo da Rússia, Kane terminou o torneio como artilheiro e conquistou a Chuteira de Ouro."
      },
      {
        titulo: "Recorde pela Inglaterra",
        meta: "2023 · Seleção inglesa",
        imagem: "file/img/kane/kane3.jpg",
        texto: "Ao marcar contra a Itália, Kane superou Wayne Rooney e tornou-se o maior artilheiro da história da seleção inglesa."
      },
      {
        titulo: "Um novo capítulo",
        meta: "2023 · Bayern de Munique",
        imagem: "file/img/kane/kane_ballon.jpg",
        texto: "Em 2023, Kane chegou ao Bayern de Munique e iniciou uma nova etapa da carreira no futebol alemão."
      },
      {
        titulo: "Campeão alemão",
        meta: "2024/25 · Bundesliga",
        imagem: "file/img/kane/harry_kane.jpg",
        texto: "Kane conquistou a Bundesliga com o Bayern de Munique na temporada 2024/25, seu primeiro título de liga nacional."
      }
    ];

    const producoesJordan = [
      {
        titulo: "The Wire",
        meta: "Série · 2002",
        imagem: "file/img/michael/michael3.jpg",
        texto: "Michael B. Jordan interpreta Wallace, um jovem de Baltimore, no aclamado drama policial criado por David Simon."
      },
      {
        titulo: "Fruitvale Station",
        meta: "Filme · 2013",
        imagem: "file/img/michael/michael2.jpg",
        texto: "No filme dirigido por Ryan Coogler, Jordan interpreta Oscar Grant. A produção foi premiada no Festival de Sundance."
      },
      {
        titulo: "Creed",
        meta: "Filme · 2015",
        imagem: "file/img/michael/michael_proporcao_img2.jpg",
        texto: "Jordan vive Adonis Creed, filho de Apollo Creed, no drama esportivo que expande o universo de Rocky."
      },
      {
        titulo: "Pantera Negra",
        meta: "Filme · 2018",
        imagem: "file/img/michael/michael_oscar.jpg",
        texto: "Como Erik Killmonger, Jordan interpreta um antagonista complexo que se tornou um dos personagens mais lembrados do filme."
      },
      {
        titulo: "Sinners",
        meta: "Filme · 2025",
        imagem: "file/img/michael/michael4.jpg",
        texto: "No terror de época dirigido por Ryan Coogler, Jordan interpreta os irmãos gêmeos Smoke e Stack."
      }
    ];

const modal = document.getElementById("modal-catalogo");
    const modalPainel= modal.querySelector(".catalogo-modal-painel");

    const modalFoto = document.getElementById("modal-foto");
    let elementoAnteriorModal = null;




    function abrirModal(item, botaoOrigem) {
      elementoAnteriorModal = botaoOrigem;
      modalFoto.src = item.imagem;
      modalFoto.alt = item.titulo;
      document.getElementById("modal-titulo").textContent = item.titulo;
      document.getElementById("modal-meta").textContent = item.meta;
      document.getElementById("modal-texto").textContent = item.texto;
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      modal.querySelector(".catalogo-modal-fechar").focus();
    }

    function fecharModal() {
      modal.hidden = true;
      document.body.style.overflow = "";

      if (elementoAnteriorModal) {
        elementoAnteriorModal.focus();
      }
    }

    function montarFileira(idTrilho, itens) {
      const trilho = document.getElementById(idTrilho);

      itens.forEach((item) => {
        const botao = document.createElement("button");
        botao.className = "catalogo-card";
        botao.type = "button";
        botao.setAttribute("aria-label", `${item.titulo}, ${item.meta}. Abrir detalhes`);

        const imagem = document.createElement("img");
        imagem.className = "catalogo-card-foto";
        imagem.src = item.imagem;
        imagem.alt = "";
        imagem.loading = "lazy";

        const rotulo = document.createElement("div");
        rotulo.className = "catalogo-card-rotulo";

        const titulo = document.createElement("strong");
        titulo.className = "catalogo-card-titulo";
        titulo.textContent = item.titulo;

        const meta = document.createElement("p");
        meta.className = "catalogo-card-meta";
        meta.textContent = item.meta;

        rotulo.append(titulo, meta);
        botao.append(imagem, rotulo);
        botao.addEventListener("click", () => abrirModal(item, botao));
        trilho.appendChild(botao);
      });
    }

    montarFileira("trilho-kane", momentosKane);
    montarFileira("trilho-mbj", producoesJordan);
    modal.querySelector(".catalogo-modal-fechar").addEventListener("click", fecharModal);
    document.getElementById("modal-botao-fechar").addEventListener("click", fecharModal);

    modal.addEventListener("click", (evento) => {
      if (evento.target === modal) {
        fecharModal();
      }
    });

    document.addEventListener("keydown", (evento) => {
      if (modal.hidden) {
        return;
      }

      if (evento.key === "Escape") {
        fecharModal();
        return;
      }

      if (evento.key === "Tab") {
        const botoes = modalPainel.querySelectorAll("button");
        const primeiroBotao = botoes[0];
        const ultimoBotao = botoes[botoes.length - 1];

        if (evento.shiftKey && document.activeElement === primeiroBotao) {
          evento.preventDefault();
          ultimoBotao.focus();
        } else if (!evento.shiftKey && document.activeElement === ultimoBotao) {
          evento.preventDefault();
          primeiroBotao.focus();
        }
      }
    });

const slides = document.querySelectorAll(".carrossel-item");
let slideAtual = 0;

    if(slides.length > 1) {~
       setInterval(() => { 
        slides[slideAtual].classList.remove("ativo");

        slideAtual = (slideAtual + 1) % slides.length;

        slides[slideAtual].classList.add("ativo");
    }, 4000);
    
}