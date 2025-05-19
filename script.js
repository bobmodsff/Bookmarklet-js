javascript:(()=>{
  const loginCorreto = "leo";
  const senhaCorreta = "leo";

  const inputLogin = prompt("👤 Por favor, digite seu LOGIN:");
  const inputSenha = prompt("🔒 Agora digite sua SENHA:");

  if (inputLogin !== loginCorreto || inputSenha !== senhaCorreta) {
    alert("❌ Login ou senha incorretos! Tente novamente.");
    return;
  }

  alert("🚨 MOD MENU EXCLUSIVO PARA A SALA DO FUTURO\n\nDesenvolvido por Leonardo F.G\n\n⚠️ PROIBIDO copiar, vender ou repassar o script.\n\nQualquer uso indevido resultará em BANIMENTO PERMANENTE por IP.\n\nUse com responsabilidade!");
  alert("🫡 SALVE PARA OS BRABOS QUE USAM O MOD MENU:\n\nJOÃO / KAYRO / ERICK VINI / WAGNER / GUI HENRIQUE");

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
      padding: 12px 15px;
      margin: 10px 0;
      font-weight: bold;
      border-radius: 10px;
      cursor: pointer;
      animation: glow 1.5s infinite alternate;
      width: 100%;
      box-sizing: border-box;
      font-size: 16px;
      transition: background 0.3s ease;
    }
    .rgb-button:hover {
      filter: brightness(1.2);
    }
    .rgb-fechar-x {
      position: absolute;
      top: 8px;
      right: 12px;
      color: white;
      font-weight: bold;
      font-size: 18px;
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
      cursor: pointer;
      animation: glow 2s infinite alternate;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
      font-weight: bold;
      font-size: 24px;
      color: black;
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
    #bobMenu {
      max-width: 320px;
    }
  `;
  document.head.appendChild(style);

  const criarMenu = () => {
    if(document.getElementById("bobMenu")) return; // evita criar menu duplicado

    const menu = document.createElement("div");
    menu.id = "bobMenu";
    menu.style = `
      position: fixed;
      top: 100px;
      left: 100px;
      background: linear-gradient(135deg, #111, #1a1a1a);
      color: white;
      padding: 20px 20px 25px 20px;
      border-radius: 15px;
      z-index: 9999;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      max-width: 90vw;
      border: 2px solid;
      animation: glow 1s infinite alternate;
      box-shadow: 0 0 20px rgba(0,255,255,0.5);
      user-select: none;
    `;

    const fecharX = document.createElement("div");
    fecharX.className = "rgb-fechar-x";
    fecharX.innerText = "✖";
    fecharX.title = "Fechar menu";
    fecharX.onclick = () => menu.remove();
    menu.appendChild(fecharX);

    const titulo = document.createElement("h3");
    titulo.innerText = "👑 BOB MODS FF - ESCOLA";
    titulo.style = "text-align:center; margin-bottom:15px; font-size:20px;";
    menu.appendChild(titulo);

    // Botões organizados em coluna com espaçamento melhorado
    const botaoSalaDoFuturo = document.createElement("button");
    botaoSalaDoFuturo.innerText = "✅ HACK TAREFA";
    botaoSalaDoFuturo.className = "rgb-button";
    botaoSalaDoFuturo.onclick = () => {
      fetch("https://corsproxy.io/?url=https://raw.githubusercontent.com/DarkModde/Dark-Scripts/refs/heads/main/TarefaResolver.js")
        .then(t => t.text())
        .then(eval)
        .catch(() => alert("❌ Erro ao carregar o script da Tarefa."));
    };
    menu.appendChild(botaoSalaDoFuturo);

    const botaoRedacao = document.createElement("button");
    botaoRedacao.innerText = "📝 HACK REDAÇÃO";
    botaoRedacao.className = "rgb-button";
    botaoRedacao.onclick = () => {
      fetch("https://corsproxy.io/?url=https://raw.githubusercontent.com/DarkModde/Dark-Scripts/refs/heads/main/RedaSP-IA.js")
        .then(t => t.text())
        .then(eval)
        .catch(() => alert("❌ Erro ao carregar o script de Redação."));
    };
    menu.appendChild(botaoRedacao);

    const aviso = document.createElement("div");
    aviso.className = "aviso-texto";
    aviso.innerText =
      "1. ⚠️ Se estiver na escola, use o X-VPN para funcionar\n" +
      "2. 🏠 Em casa, use Wi-Fi normal\n\nUse com inteligência, jovem padawan!";
    menu.appendChild(aviso);

    const separador = document.createElement("hr");
    separador.style = "margin: 15px 0; border: 1px solid #444;";
    menu.appendChild(separador);

    const botaoDiscord = document.createElement("button");
    botaoDiscord.innerText = "🌐 DISCORD DO BOB MODS";
    botaoDiscord.className = "rgb-button";
    botaoDiscord.onclick = () => {
      window.open("https://discord.gg/fsYtn3z6", "_blank");
    };
    menu.appendChild(botaoDiscord);

    const criador = document.createElement("p");
    criador.innerText = "Criador: Leonardo F.G";
    criador.style = "margin-top: 15px; font-size: 12px; color: #ccc; text-align: center;";
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

  // Bolinha parada no canto inferior direito, sem drag
  document.body.appendChild(botaoFlutuante);

  criarMenu();
})();


