javascript:(() => {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes glowRedWhite {
      0% { box-shadow: 0 0 8px #ff073a, 0 0 15px #fff; }
      50% { box-shadow: 0 0 20px #ff073a, 0 0 30px #fff; }
      100% { box-shadow: 0 0 8px #ff073a, 0 0 15px #fff; }
    }
    .rgb-button {
      background: linear-gradient(45deg, #000, #111);
      color: #ff073a;
      border: 2px solid #ff073a;
      padding: 12px 15px;
      margin: 10px 0;
      font-weight: bold;
      border-radius: 10px;
      cursor: pointer;
      animation: glowRedWhite 1.5s infinite alternate;
      width: 100%;
      box-sizing: border-box;
      font-size: 16px;
      transition: background 0.3s ease;
    }
    .rgb-button:hover {
      filter: brightness(1.3);
      background: linear-gradient(45deg, #220000, #330000);
    }
    .rgb-fechar-x {
      position: absolute;
      top: 8px;
      right: 12px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      text-shadow: 0 0 6px #ff073a;
    }
    .flutuante {
      position: fixed;
      bottom: 80px;
      right: 20px;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #000, #111);
      border-radius: 50%;
      box-shadow: 0 0 20px #ff073a, 0 0 35px #fff;
      z-index: 9999;
      cursor: pointer;
      animation: glowRedWhite 2s infinite alternate;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
      font-weight: bold;
      font-size: 24px;
      color: white;
      text-shadow: 0 0 10px #ff073a;
    }
    @media(max-width:600px) {
      .flutuante {
        width: 45px;
        height: 45px;
        font-size: 18px;
      }
      .rgb-button {
        font-size: 14px;
        padding: 10px;
      }
    }
    .aviso-texto {
      margin-top: 15px;
      background: #111;
      border: 2px solid #ff073a;
      border-radius: 10px;
      padding: 10px;
      font-size: 14px;
      color: white;
      font-weight: bold;
      text-align: center;
      white-space: pre-line;
      user-select: none;
      animation: glowRedWhite 3s infinite alternate;
      text-shadow: 0 0 8px #ff073a;
    }
    #bobMenu {
      max-width: 60vw;
      max-height: 80vh;
      overflow-y: auto;
      background: linear-gradient(135deg, #000000, #110000);
      color: white;
      padding: 20px 20px 25px 20px;
      border-radius: 15px;
      position: fixed;
      top: 100px;
      left: 10px;
      z-index: 9999;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      border: 2px solid #ff073a;
      animation: glowRedWhite 1s infinite alternate;
      box-shadow: 0 0 20px rgba(255, 7, 58, 0.7);
      user-select: none;
    }
    #bobMenu h3 {
      color: #fff;
      text-shadow: 0 0 15px #ff073a, 0 0 25px #fff;
      font-size: 22px;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-weight: bolder;
      font-family: 'Segoe UI Black', Tahoma, Geneva, Verdana, sans-serif;
    }
  `;
  document.head.appendChild(style);

  const criarMenu = () => {
    if (document.getElementById("bobMenu")) return;
    const e = document.createElement("div");
    e.id = "bobMenu";
    e.innerHTML = `
      <div class="rgb-fechar-x" title="Fechar menu" onclick="this.parentNode.remove()">✖</div>
      <h3>LEO V.3</h3>
    `;
    document.body.appendChild(e);

    const t = (txt, nome, func) => {
      const b = document.createElement("button");
      b.innerText = txt;
      b.className = "rgb-button";
      b.onclick = func;
      e.appendChild(b);
    };

    t(
      "✅ HACK TF BOB V.2",
      "",
      () => {
        alert(
          "🚀 ABRINDO HACK TAREFA TASKITOS 🚀\n\n" +
          "🔥 TASKITOS CRIADO POR: Leonardo F.G / Cupiditys / Flowngs 🔥\n\n" +
          "👑 Eles são os principais donos da Destroyer e dos melhores XITs para a sala do futuro.\n\n" +
          "🎯 Esse XIT HACK TAREFA é baseado no Doritus :)"
        );
        window.open("https://taskitos.cupiditys.lol/", "_blank");
      }
    );

    t(
      "📝 HACK REDAÇÃO",
      "",
      () => {
        alert("✅ SCRIPT EXECUTANDO...");
        fetch("https://corsproxy.io/?url=https://raw.githubusercontent.com/DarkModde/Dark-Scripts/refs/heads/main/RedaSP-IA.js")
          .then(t => t.text())
          .then(eval)
          .catch(() => alert("❌ Erro ao carregar o script de Redação."));
      }
    );

    t(
      "📚 KHAN HACK v.1 BOB",
      "",
      () => {
        alert("✅ SCRIPT EXECUTANDO...");
        fetch("https://corsproxy.io/?url=https://raw.githubusercontent.com/DarkModde/Dark-Scripts/refs/heads/main/KhanResolver.js")
          .then(e => e.text())
          .then(eval)
          .catch(() => alert("❌ Erro ao carregar o script do Khan Academy."));
      }
    );

    t(
      "🎓 ALURA V.1",
      "",
      () => {
        alert("✅ SCRIPT EXECUTANDO...");
        fetch("https://corsproxy.io/?url=https://raw.githubusercontent.com/DarkModde/Dark-Scripts/refs/heads/main/AluraInfinity.js")
          .then(t => t.text())
          .then(eval)
          .catch(() => alert("❌ Erro ao carregar o script da Alura."));
      }
    );

    t(
      "🌙 EXPANSÃO NOTURNA",
      "",
      () => {
        alert("✅ SCRIPT EXECUTANDO...");
        fetch("https://corsproxy.io/?url=https://raw.githubusercontent.com/DarkModde/Dark-Scripts/refs/heads/main/ExNoturnoFDS.js")
          .then(t => t.text())
          .then(eval);
      }
    );

    t(
      "🗣️ SPEAK (EM BREVE)",
      "",
      () => {
        alert(
          "🔊 SPEAK será lançado em breve...\n" +
          "🗓️ Data prevista: 25/06/2025\n\n" +
          "🚀 Fique atento! Esse novo XIT vai revolucionar a sala do futuro com automações de voz e comandos ainda mais insanos.\n\n" +
          "Criado e idealizado por Leonardo F.G, o líder por trás da inovação na educação hacker!"
        );
      }
    );

    t(
      "❌ REMOVER MOD MENU",
      "",
      () => {
        document.getElementById("bobMenu")?.remove();
        document.querySelector(".flutuante")?.remove();
        alert("✅ MOD MENU REMOVIDO COM SUCESSO!");
      }
    );

    const aviso = document.createElement("div");
    aviso.className = "aviso-texto";
    aviso.innerText =
      "1. ⚠️ Se estiver na escola, use o X-VPN para funcionar\n" +
      "2. 🏠 Em casa, use Wi-Fi normal\n\n" +
      "Use com inteligência, jovem padawan!";
    e.appendChild(aviso);

    const linha = document.createElement("hr");
    linha.style = "margin: 15px 0; border: 1px solid #444;";
    e.appendChild(linha);

    t(
      "🌐 DISCORD DO BOB MODS",
      "",
      () => {
        window.open("https://discord.gg/fsYtn3z6", "_blank");
      }
    );

    t(
      "🔗 LINK DA VPN PARA MOBILE",
      "",
      () => {
        window.open("https://play.google.com/store/apps/details?id=free.vpn.unblock.proxy.turbovpn", "_blank");
      }
    );

    t(
      "▶️ CANAL YOUTUBE",
      "",
      () => {
        window.open("https://youtube.com/@bobmodsff5508?si=wcsIGo7Oa8rKAWTX", "_blank");
      }
    );

    const criador = document.createElement("p");
    criador.innerText = "Criador: Leonardo F.G";
    criador.style = "margin-top: 15px; font-size: 12px; color: #ccc; text-align: center";
    e.appendChild(criador);
  };

  const botaoFlutuante = document.createElement("div");
  botaoFlutuante.className = "flutuante";
  botaoFlutuante.title = "Abrir LEO MODS";
  botaoFlutuante.innerText = "≡";
  botaoFlutuante.onclick = () => {
    if (!document.getElementById("bobMenu")) criarMenu();
  };
  document.body.appendChild(botaoFlutuante);

  criarMenu();
})();
