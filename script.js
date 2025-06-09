javascript:(() => {

// Função para mostrar modal de login estilizado no centro da tela

function mostrarLoginModal() {

return new Promise((resolve) => {

  const fundo = document.createElement('div');

  fundo.style.position = 'fixed';

  fundo.style.top = '0';

  fundo.style.left = '0';

  fundo.style.width = '100vw';

  fundo.style.height = '100vh';

  fundo.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';

  fundo.style.display = 'flex';

  fundo.style.justifyContent = 'center';

  fundo.style.alignItems = 'center';

  fundo.style.zIndex = '10000';



  const modal = document.createElement('div');

  modal.style.backgroundColor = '#111';

  modal.style.padding = '25px 30px';

  modal.style.borderRadius = '15px';

  modal.style.boxShadow = '0 0 20px #ff0000';

  modal.style.width = '320px';

  modal.style.color = 'white';

  modal.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";

  modal.style.textAlign = 'center';



  modal.innerHTML = `

    <h2 style="margin-bottom: 15px; color: #fff; text-shadow: 0 0 10px #ff0000;">🔐 LOGIN MOD MENU</h2>

    <input id="modalLogin" type="text" placeholder="Digite seu login" style="width: 100%; padding: 10px; margin-bottom: 15px; border-radius: 8px; border: none; font-size: 16px;">

    <input id="modalSenha" type="password" placeholder="Digite sua senha" style="width: 100%; padding: 10px; margin-bottom: 20px; border-radius: 8px; border: none; font-size: 16px;">

    <button id="modalBtn" style="width: 100%; padding: 12px; background-color: #ff0000; border: none; border-radius: 10px; font-weight: bold; font-size: 16px; color: white; cursor: pointer; box-shadow: 0 0 10px #ff0000;">ENTRAR</button>

    <p id="modalErro" style="color: #ff4444; margin-top: 10px; height: 20px; font-weight: bold;"></p>

  `;



  fundo.appendChild(modal);

  document.body.appendChild(fundo);



  const inputLogin = modal.querySelector('#modalLogin');

  const inputSenha = modal.querySelector('#modalSenha');

  const btnEntrar = modal.querySelector('#modalBtn');

  const erroMsg = modal.querySelector('#modalErro');



  function tentarLogin() {

    const login = inputLogin.value.trim();

    const senha = inputSenha.value.trim();

    if (!login || !senha) {

      erroMsg.textContent = 'Por favor, preencha todos os campos.';

      return;

    }

    resolve({ login, senha });

    document.body.removeChild(fundo);

  }



  btnEntrar.addEventListener('click', tentarLogin);



  modal.addEventListener('keydown', e => {

    if (e.key === 'Enter') tentarLogin();

  });



  inputLogin.focus();

});

}

// Variáveis de login/senha corretos

const loginCorreto = "modvip";

const senhaCorreta = "11";

// Chama o modal e aguarda login

mostrarLoginModal().then(({ login, senha }) => {

if (login !== loginCorreto || senha !== senhaCorreta) {

  alert("❌ LOGIN OU SENHA INCORRETOS! TENTE NOVAMENTE.");

  return;

}



alert(

  "🚨 MOD MENU EXCLUSIVO PARA A SALA DO FUTURO\n\n" +

  "DESENVOLVIDO POR LEONARDO F.G\n\n" +

  "⚠️ PROIBIDO COPIAR, VENDER OU REPASSAR O SCRIPT.\n\n" +

  "QUALQUER USO INDEVIDO RESULTARÁ EM BANIMENTO PERMANENTE POR IP.\n\n" +

  "USE COM RESPONSABILIDADE!"

);



alert(

  "🚨🔥 MOD MENU VIP EDUCATIVO 🔥🚨\n\n" +

  "────────── FUNÇÕES DISPONÍVEIS ──────────\n\n" +

  "1️⃣  HACK TAREFA ✅\n" +

  "2️⃣  HACK REDAÇÃO ✍️\n" +

  "3️⃣  KHAN HACK v.1 BOB 📚\n" +

  "4️⃣  ALURA V.1 🎓\n" +

  "5️⃣  EXPANSÃO NOTURNA 🌙\n" +

  "6️⃣  REMOVER MOD MENU ❌\n\n" +

  "────────── USE COM RESPONSABILIDADE ──────────"

);



const style = document.createElement("style");

style.innerHTML = `

  @keyframes glowBlue {

    0% { box-shadow: 0 0 8px #00f; }

    50% { box-shadow: 0 0 16px #00f; }

    100% { box-shadow: 0 0 8px #00f; }

  }

  .rgb-button {

    background: #111;

    color: #ff073a;

    border: 2px solid #ff073a;

    padding: 12px 15px;

    margin: 10px 0;

    font-weight: bold;

    border-radius: 10px;

    cursor: pointer;

    animation: glowBlue 1.5s infinite alternate;

    width: 100%;

    box-sizing: border-box;

    font-size: 16px;

    transition: background 0.3s ease;

  }

  .rgb-button:hover {

    filter: brightness(1.3);

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

    bottom: 80px;

    right: 20px;

    width: 50px;

    height: 50px;

    background: #111;

    border-radius: 50%;

    box-shadow: 0 0 15px #ff073a;

    z-index: 9999;

    cursor: pointer;

    animation: glowBlue 2s infinite alternate;

    display: flex;

    align-items: center;

    justify-content: center;

    user-select: none;

    font-weight: bold;

    font-size: 24px;

    color: white;

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

    animation: glowBlue 3s infinite alternate;

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

    animation: glowBlue 1s infinite alternate;

    box-shadow: 0 0 20px rgba(255, 7, 58, 0.7);

    user-select: none;

  }

  #bobMenu h3 {

    color: #fff;

    text-shadow: 0 0 10px #ff073a;

    font-size: 20px;

    margin-bottom: 15px;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 8px;

  }

`;

document.head.appendChild(style);



const criarMenu = () => {

  if (document.getElementById("bobMenu")) return;



  const e = document.createElement("div");

  e.id = "bobMenu";

  e.innerHTML = `

    <div class="rgb-fechar-x" title="Fechar menu" onclick="this.parentNode.remove()">✖</div>

    <h3>👑 BOB V.2</h3>

  `;

  document.body.appendChild(e);



  const titulo = e.querySelector('h3');

  // Adiciona a coroa ao lado do título

  titulo.innerHTML = '👑 BOB V.2';



  const t = (txt, nome, func) => {

    const b = document.createElement("button");

    b.innerText = txt;

    b.className = "rgb-button";

    b.onclick = func;

    e.appendChild(b);

  };



  t(

    "✅ HACK TAREFA",

    "",

    () => {

      alert("✅ SCRIPT EXECUTANDO...");

      fetch("https://corsproxy.io/?url=https://raw.githubusercontent.com/DarkModde/Dark-Scripts/refs/heads/main/TarefaResolver.js")

        .then((e) => e.text())

        .then(eval)

        .catch(() => alert("❌ Erro ao carregar o script da Tarefa."));

    }

  );



  t(

    "📝 HACK REDAÇÃO",

    "",

    () => {

      alert("✅ SCRIPT EXECUTANDO...");

      fetch("https://corsproxy.io/?url=https://raw.githubusercontent.com/DarkModde/Dark-Scripts/refs/heads/main/RedaSP-IA.js")

        .then((t) => t.text())

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

        .then((e) => e.text())

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

        .then((t) => t.text())

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

        .then((t) => t.text())

        .then(eval);

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

botaoFlutuante.title = "Abrir BOB MODS FF";

botaoFlutuante.innerText = "≡";

botaoFlutuante.onclick = () => {

  if (!document.getElementById("bobMenu")) criarMenu();

};

document.body.appendChild(botaoFlutuante);



criarMenu();

});

})();

