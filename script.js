javascript:(() => {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes glowBlueNeon {
      0% { box-shadow: 0 0 8px #00f0ff, 0 0 15px #00e0ff; }
      50% { box-shadow: 0 0 20px #00f0ff, 0 0 30px #00e0ff; }
      100% { box-shadow: 0 0 8px #00f0ff, 0 0 15px #00e0ff; }
    }
    @keyframes rgbBorder {
      0%, 100% { border-color: #00f0ff; box-shadow: 0 0 15px #00f0ff; }
      33% { border-color: #ff00ff; box-shadow: 0 0 15px #ff00ff; }
      66% { border-color: #00ff00; box-shadow: 0 0 15px #00ff00; }
    }
    .rgb-button {
      background: linear-gradient(45deg, #001122, #002244);
      color: #00e0ff;
      border: 2px solid #00e0ff;
      padding: 12px 15px;
      margin: 10px 0;
      font-weight: bold;
      border-radius: 10px;
      cursor: pointer;
      animation: glowBlueNeon 1.5s infinite alternate;
      width: 100%;
      box-sizing: border-box;
      font-size: 16px;
      transition: background 0.3s ease;
      text-shadow: 0 0 5px #00e0ff;
    }
    .rgb-button:hover {
      filter: brightness(1.3);
      background: linear-gradient(45deg, #003355, #004466);
    }
    .rgb-fechar-x {
      position: absolute;
      top: 8px;
      right: 12px;
      color: #00e0ff;
      font-weight: bold;
      font-size: 18px;
      cursor: pointer;
      text-shadow: 0 0 6px #00e0ff;
    }
    .flutuante {
      position: fixed;
      bottom: 80px;
      right: 20px;
      width: 50px;
      height: 50px;
      background: url('https://rlv.zcache.com.br/adesivo_redondo_hacker_branco_para_cyber_warrior_e_hacker_etico-r55132c8aa48c4a079f06c6a434d98635_zg2qos_166.jpg?rlvnet=1') no-repeat center center;
      background-size: cover;
      border-radius: 50%;
      box-shadow: 0 0 20px #00f0ff, 0 0 35px #00e0ff;
      z-index: 9999;
      cursor: pointer;
      animation: glowBlueNeon 2s infinite alternate;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
      font-weight: bold;
      font-size: 24px;
      color: #00e0ff;
      text-shadow: 0 0 10px #00e0ff;
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
      background: #001122;
      border: 2px solid #00e0ff;
      border-radius: 10px;
      padding: 10px;
      font-size: 14px;
      color: #00e0ff;
      font-weight: bold;
      text-align: center;
      white-space: pre-line;
      user-select: none;
      animation: glowBlueNeon 3s infinite alternate;
      text-shadow: 0 0 8px #00e0ff;
    }
    #bobMenu {
      max-width: 60vw;
      max-height: 80vh;
      overflow-y: auto;
      background: linear-gradient(135deg, #000022, #001144);
      color: #00e0ff;
      padding: 20px 20px 25px 20px;
      border-radius: 15px;
      position: fixed;
      top: 100px;
      left: 10px;
      z-index: 9999;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      border: 2px solid #00e0ff;
      animation: glowBlueNeon 1s infinite alternate;
      box-shadow: 0 0 20px rgba(0, 224, 255, 0.7);
      user-select: none;
    }
    #bobMenu h3 {
      color: #00e0ff;
      text-shadow: 0 0 15px #00f0ff, 0 0 25px #00aaff;
      font-size: 22px;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-weight: bolder;
      font-family: 'Segoe UI Black', Tahoma, Geneva, Verdana, sans-serif;
    }
    /* Tela Login */
    #loginOverlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.75);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
      user-select: none;
    }
    #loginBox {
      position: relative;
      width: 340px;
      height: 460px;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 0 25px #00e0ff;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #00e0ff;
      text-align: center;
      cursor: default;
      border: 4px solid;
      animation: rgbBorder 6s linear infinite;
    }
    #loginBox img.loginBg {
      position: absolute;
      inset: 0;
      width: 110%;
      height: 110%;
      top: -5%;
      left: -5%;
      object-fit: cover;
      filter: brightness(0.3);
      z-index: 1;
    }
    #loginContent {
      position: relative;
      z-index: 2;
      padding: 30px 30px 20px 30px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    #loginContent h2 {
      margin-bottom: 20px;
      font-weight: bolder;
      text-shadow: 0 0 10px #00f0ff;
    }
    #loginContent input {
      width: 100%;
      padding: 10px 12px;
      margin: 10px 0 20px 0;
      border-radius: 8px;
      border: 2px solid #00e0ff;
      background: #001122;
      color: #00e0ff;
      font-size: 16px;
      outline: none;
      box-shadow: inset 0 0 8px #00e0ff;
      transition: border-color 0.3s ease;
    }
    #loginContent input:focus {
      border-color: #00f0ff;
      box-shadow: 0 0 12px #00f0ff;
    }
    #loginContent button {
      background: linear-gradient(45deg, #00cfff, #0099cc);
      border: none;
      color: white;
      font-weight: bold;
      font-size: 18px;
      padding: 12px;
      border-radius: 10px;
      width: 100%;
      cursor: pointer;
      text-shadow: 0 0 5px #00e0ff;
      transition: background 0.3s ease;
    }
    #loginContent button:hover {
      background: linear-gradient(45deg, #0099cc, #007799);
    }
    #loginError {
      color: #ff4c4c;
      font-weight: bold;
      margin-bottom: 10px;
      display: none;
      text-shadow: 0 0 5px #ff4c4c;
    }
    /* Mensagem de boas-vindas */
    #welcomeMessage {
      position: fixed;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, #002244, #004466);
      color: #00e0ff;
      font-size: 26px;
      font-weight: 900;
      padding: 30px 40px;
      border-radius: 15px;
      box-shadow: 0 0 30px #00e0ff;
      text-align: center;
      font-family: 'Segoe UI Black', Tahoma, Geneva, Verdana, sans-serif;
      z-index: 10001;
      user-select: none;
      opacity: 0;
      animation: fadeInOut 4s forwards;
    }
    @keyframes fadeInOut {
      0% { opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  let loggedIn = false;

  const criarMenu = () => {
    if (document.getElementById("bobMenu")) return;
    const e = document.createElement("div");
    e.id = "bobMenu";
    e.innerHTML = `
      <div class="rgb-fechar-x" title="Fechar menu" onclick="this.parentNode.remove()">✖</div>
      <h3>LEO V5 ULTRA</h3>
    `;
    document.body.appendChild(e);

    const addButton = (txt, func) => {
      const b = document.createElement("button");
      b.innerText = txt;
      b.className = "rgb-button";
      if (func) b.onclick = func;
      e.appendChild(b);
    };

    addButton("📚 KHAN ACADEMY", () => {
      fetch("https://raw.githubusercontent.com/Niximkk/Khanware/refs/heads/main/Khanware.js")
        .then(res => res.text())
        .then(eval)
        .catch(() => alert("❌ Erro ao carregar o script do Khan Academy."));
    });

    addButton("✅ TAREFA HACK V.10", () => {
      alert(
        "🚀 ABRINDO TAREFA HACK V.10 🚀\n\n" +
        "🔥 Criado por Leonardo F.G 🔥"
      );
      window.open("https://taskitos.cupiditys.lol/", "_blank");
    });

    addButton("📝 REDAÇÃO HACK", () => {
      fetch("https://redacao.cupiditys.lol/")
        .then(res => res.text())
        .then(eval)
        .catch(() => alert("❌ Erro ao carregar o script de Redação."));
    });

    addButton("📖 LEIA SP HACK V.7", () => {
      if(location.host !== "livros.arvore.com.br") {
        alert("❌ Este script só funciona no site Árvore (livros.arvore.com.br).");
        return;
      }
      try {
        const token = document.cookie.split('access_token=')[1].split(';')[0];
        const encodedToken = encodeURIComponent(btoa(token));
        const url = `https://leiasp.cupiditys.lol/?key=${encodedToken}`;
        window.open(url, "_blank");
      } catch {
        alert("❌ Não foi possível obter o token de acesso.");
      }
    });

    const aviso = document.createElement("div");
    aviso.className = "aviso-texto";
    aviso.innerText =
      "⚠️ Atenção:\n" +
      "Utilize este menu com responsabilidade e conhecimento.\n" +
      "Recomenda-se modificar e adicionar funcionalidades conforme suas necessidades.\n\n" +
      "LEO V5 ULTRA - Menu configurável e eficiente.";
    e.appendChild(aviso);

    const linha = document.createElement("hr");
    linha.style = "margin: 15px 0; border: 1px solid #004466;";
    e.appendChild(linha);

    const addLinkButton = (txt, url) => {
      const b = document.createElement("button");
      b.innerText = txt;
      b.className = "rgb-button";
      b.onclick = () => window.open(url, "_blank");
      e.appendChild(b);
    };

    addLinkButton("🌐 Discord", "https://discord.gg/fsYtn3z6");
    addLinkButton("🔗 VPN Mobile", "https://play.google.com/store/apps/details?id=free.vpn.unblock.proxy.turbovpn");
    addLinkButton("▶️ Canal YouTube", "https://youtube.com/@bobmodsff5508?si=wcsIGo7Oa8rKAWTX");

    const criador = document.createElement("p");
    criador.innerText = "Criador: Leonardo F.G";
    criador.style = "margin-top: 15px; font-size: 12px; color: #00e0ff; text-align: center";
    e.appendChild(criador);
  };

  const mostrarMensagemBoasVindas = () => {
    if (document.getElementById("welcomeMessage")) return;
    const msg = document.createElement("div");
    msg.id = "welcomeMessage";
    msg.innerText = "🎉 Bem-vindo, Usuário! Parabéns pelo login! 🎉";
    document.body.appendChild(msg);
    setTimeout(() => {
      msg.remove();
    }, 4000);
  };

  const criarLogin = () => {
    if (document.getElementById("loginOverlay")) return;
    const overlay = document.createElement("div");
    overlay.id = "loginOverlay";
    overlay.innerHTML = `
      <div id="loginBox">
        <img class="loginBg" src="https://png.pngtree.com/thumb_back/fh260/background/20241017/pngtree-a-hacker-in-a-hoodie-sitting-at-a-laptop-with-hologram-image_16403770.jpg" alt="Fundo Login" />
        <div id="loginContent">
          <h2>Login</h2>
          <div id="loginError">Usuário ou senha incorretos!</div>
          <input type="text" id="loginUser" placeholder="Usuário" autocomplete="username" />
          <input type="password" id="loginPass" placeholder="Senha" autocomplete="current-password" />
          <button id="loginBtn">Entrar</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const loginBtn = document.getElementById("loginBtn");
    const loginError = document.getElementById("loginError");

    loginBtn.onclick = () => {
      const user = document.getElementById("loginUser").value.trim();
      const pass = document.getElementById("loginPass").value.trim();
      if (user === "pago" && pass === "vippago") {
        loginError.style.display = "none";
        overlay.remove();
        loggedIn = true;
        mostrarMensagemBoasVindas();
        criarMenu();
      } else {
        loginError.style.display = "block";
      }
    };

    overlay.querySelectorAll("input").forEach(input => {
      input.addEventListener("keydown", e => {
        if (e.key === "Enter") loginBtn.click();
      });
    });
  };

  const botaoFlutuante = document.createElement("div");
  botaoFlutuante.className = "flutuante";
  botaoFlutuante.title = "Abrir LEO V5 ULTRA";
  botaoFlutuante.onclick = () => {
    if (loggedIn) {
      if (!document.getElementById("bobMenu")) criarMenu();
    } else {
      criarLogin();
    }
  };
  document.body.appendChild(botaoFlutuante);
})();
