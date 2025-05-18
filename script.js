javascript:(()=> {
  const loginCorreto = "leo";
  const senhaCorreta = "leo";

  const inputLogin = prompt("Login:");
  const inputSenha = prompt("Senha:");

  if (inputLogin !== loginCorreto || inputSenha !== senhaCorreta) {
    alert("Login ou senha incorretos!");
    return;
  }

  alert("ESSE MOD MENU DE TAREFAS FOI DESENVOLVIDO POR LEONARDO F.G E PARA OS ALUNOS PREGUIÇOSO QUE NAO GOSTAM DE FAZER TAREFAS!");

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes glow {
      0% { border-color: red; box-shadow: 0 0 10px red; }
      25% { border-color: yellow; box-shadow: 0 0 10px yellow; }
      50% { border-color: lime; box-shadow: 0 0 10px lime; }
      75% { border-color: cyan; box-shadow: 0 0 10px cyan; }
      100% { border-color: magenta; box-shadow: 0 0 10px magenta; }
    }
    .rgb-button {
      background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
      color: black;
      border: none;
      padding: 10px;
      margin: 5px 0;
      font-weight: bold;
      border-radius: 10px;
      cursor: pointer;
      animation: glow 1.5s infinite alternate;
    }
    .rgb-fechar-x {
      position: absolute;
      top: 5px;
      right: 10px;
      color: white;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
    }
    .flutuante {
      position: fixed;
      bottom: 100px;
      right: 20px;
      width: 50px;
      height: 50px;
      background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet);
      border-radius: 50%;
      box-shadow: 0 0 15px rgba(255,255,255,0.5);
      z-index: 9999;
      cursor: grab;
      animation: glow 2s infinite alternate;
      touch-action: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .aviso-texto {
      margin-top: 15px;
      background: #111;
      border: 2px solid;
      border-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet) 1;
      border-radius: 10px;
      padding: 10px;
      font-size: 14px;
      color: white;
      font-weight: bold;
      text-align: center;
      white-space: pre-line;
      user-select: none;
      animation: glow 3s infinite alternate;
    }
  `;
  document.head.appendChild(style);

  const criarMenu = () => {
    const menu = document.createElement("div");
    menu.id = "bobMenu";
    menu.style = `
      position:fixed;
      top:100px;
      left:100px;
      background:linear-gradient(135deg, #111, #1a1a1a);
      color:white;
      padding:15px;
      border-radius:15px;
      z-index:9999;
      font-family:sans-serif;
      max-width:90vw;
      border: 2px solid;
      animation: glow 1s infinite alternate;
      box-shadow: 0 0 20px rgba(0,255,255,0.5);
    `;

    const fecharX = document.createElement("div");
    fecharX.className = "rgb-fechar-x";
    fecharX.innerText = "✖";
    fecharX.onclick = () => menu.remove();
    menu.appendChild(fecharX);

    const titulo = document.createElement("h3");
    titulo.innerText = "BOB MODS FF";
    titulo.style = "text-align:center;margin-bottom:10px;font-size:18px;";
    menu.appendChild(titulo);

    const botaoSalaDoFuturo = document.createElement("button");
    botaoSalaDoFuturo.innerText = "SCRIPT TAREFA👑";
    botaoSalaDoFuturo.className = "rgb-button";
    botaoSalaDoFuturo.onclick = () => {
      fetch("https://corsproxy.io/?url=https://raw.githubusercontent.com/DarkModde/Dark-Scripts/refs/heads/main/TarefaResolver.js")
        .then(t => t.text())
        .then(eval)
        .catch(e => alert("Erro ao carregar o script Sala do Futuro."));
    };
    menu.appendChild(botaoSalaDoFuturo);

    const aviso = document.createElement("div");
    aviso.className = "aviso-texto";
    aviso.innerText =
      "1. SE TIVER NA ESCOLA USE X VPN PARA O SCRIPT FUNCIONAR\n" +
      "2. SE TIVER EM CASA USE O WIFI NORMAL PARA FUNCIONAR";
    menu.appendChild(aviso);

    const separador = document.createElement("hr");
    separador.style = "margin:10px 0;border:1px solid #444;";
    menu.appendChild(separador);

    const botaoDiscord = document.createElement("button");
    botaoDiscord.innerText = "DISCORD DO PROJETO";
    botaoDiscord.className = "rgb-button";
    botaoDiscord.onclick = () => {
      window.open("https://discord.gg/fsYtn3z6", "_blank");
    };
    menu.appendChild(botaoDiscord);

    const criador = document.createElement("p");
    criador.innerText = "Criador: Leonardo";
    criador.style = "margin-top:10px;font-size:12px;color:#ccc;text-align:center;";
    menu.appendChild(criador);

    document.body.appendChild(menu);
  };

  const botaoFlutuante = document.createElement("div");
  botaoFlutuante.className = "flutuante";
  botaoFlutuante.title = "Abrir BOB MODS FF";
  botaoFlutuante.innerText = "≡";
  botaoFlutuante.onclick = () => {
    if (!document.getElementById("bobMenu")) criarMenu();
  };

  // Botão flutuante arrastável
  let offsetX = 0, offsetY = 0;
  let isDragging = false;

  botaoFlutuante.addEventListener("touchstart", function(e) {
    isDragging = true;
    const touch = e.touches[0];
    offsetX = touch.clientX - botaoFlutuante.getBoundingClientRect().left;
    offsetY = touch.clientY - botaoFlutuante.getBoundingClientRect().top;
    e.preventDefault();
  });

  document.addEventListener("touchmove", function(e) {
    if (!isDragging) return;
    const touch = e.touches[0];
    const left = touch.clientX - offsetX;
    const top = touch.clientY - offsetY;
    botaoFlutuante.style.left = left + "px";
    botaoFlutuante.style.top = top + "px";
    botaoFlutuante.style.bottom = "auto";
    botaoFlutuante.style.right = "auto";
  });

  document.addEventListener("touchend", function() {
    isDragging = false;
  });

  document.body.appendChild(botaoFlutuante);
  criarMenu();
})();
