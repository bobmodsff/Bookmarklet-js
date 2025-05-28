javascript:(()=>{
  const loginCorreto="modvip",senhaCorreta="11",inputLogin=prompt("👤 Por favor, digite seu LOGIN:"),inputSenha=prompt("🔒 Agora digite sua SENHA:");
  if(inputLogin!==loginCorreto||inputSenha!==senhaCorreta)return void alert("❌ Login ou senha incorretos! Tente novamente.");

  alert("🚨 MOD MENU EXCLUSIVO PARA A SALA DO FUTURO\n\nDesenvolvido por Leonardo F.G\n\n⚠️ PROIBIDO copiar, vender ou repassar o script.\n\nQualquer uso indevido resultará em BANIMENTO PERMANENTE por IP.\n\nUse com responsabilidade!");
  alert("🫡 SALVE PARA OS BRABOS MOD VIP ONLINE 🟢:\n\nWAYLON VIP / MI ❤️");

  const style=document.createElement("style");
  style.innerHTML=`@keyframes glowBlue{0%{box-shadow:0 0 8px #00f}50%{box-shadow:0 0 16px #00f}100%{box-shadow:0 0 8px #00f}}.rgb-button{background:#001f3f;color:#00d0ff;border:2px solid #00d0ff;padding:12px 15px;margin:10px 0;font-weight:bold;border-radius:10px;cursor:pointer;animation:glowBlue 1.5s infinite alternate;width:100%;box-sizing:border-box;font-size:16px;transition:background .3s ease}.rgb-button:hover{filter:brightness(1.3)}.rgb-fechar-x{position:absolute;top:8px;right:12px;color:white;font-weight:bold;font-size:18px;cursor:pointer}.flutuante{position:fixed;bottom:80px;right:20px;width:50px;height:50px;background:#001f3f;border-radius:50%;box-shadow:0 0 15px #00f;z-index:9999;cursor:pointer;animation:glowBlue 2s infinite alternate;display:flex;align-items:center;justify-content:center;user-select:none;font-weight:bold;font-size:24px;color:#00d0ff}@media(max-width:600px){.flutuante{width:45px;height:45px;font-size:18px}.rgb-button{font-size:14px;padding:10px}}.aviso-texto{margin-top:15px;background:#111;border:2px solid #00d0ff;border-radius:10px;padding:10px;font-size:14px;color:white;font-weight:bold;text-align:center;white-space:pre-line;user-select:none;animation:glowBlue 3s infinite alternate}#bobMenu{max-width:90vw}`;
  document.head.appendChild(style);

  const criarMenu=()=>{
    if(document.getElementById("bobMenu"))return;
    const e=document.createElement("div");
    e.id="bobMenu",e.style="position:fixed;top:100px;left:10px;background:linear-gradient(135deg,#111,#1a1a1a);color:white;padding:20px 20px 25px 20px;border-radius:15px;z-index:9999;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;max-width:90vw;border:2px solid #00d0ff;animation:glowBlue 1s infinite alternate;box-shadow:0 0 20px rgba(0,255,255,0.5);user-select:none;";
    e.innerHTML=`<div class="rgb-fechar-x" title="Fechar menu" onclick="this.parentNode.remove()">✖</div><h3 style="text-align:center;margin-bottom:15px;font-size:20px">👑 BOB MODS FF - ESCOLA</h3>`,document.body.appendChild(e);

    const t=(txt,nome,func)=>{const b=document.createElement("button");b.innerText=txt,b.className="rgb-button",b.onclick=func,e.appendChild(b)};
    t("✅ HACK TAREFA","",()=>{alert("✅ SCRIPT EXECUTANDO..."),fetch("https://corsproxy.io/?url=https://raw.githubusercontent.com/DarkModde/Dark-Scripts/refs/heads/main/TarefaResolver.js").then(e=>e.text()).then(eval).catch(()=>alert("❌ Erro ao carregar o script da Tarefa."))});
    t("📝 HACK REDAÇÃO","",()=>{alert("✅ SCRIPT EXECUTANDO..."),fetch("https://corsproxy.io/?url=https://raw.githubusercontent.com/DarkModde/Dark-Scripts/refs/heads/main/RedaSP-IA.js").then(t=>t.text()).then(eval).catch(()=>alert("❌ Erro ao carregar o script de Redação."))});
    t("📚 KHAN HACK v.1 BOB","",()=>{alert("✅ SCRIPT EXECUTANDO..."),fetch("https://corsproxy.io/?url=https://raw.githubusercontent.com/DarkModde/Dark-Scripts/refs/heads/main/KhanResolver.js").then(e=>e.text()).then(eval).catch(()=>alert("❌ Erro ao carregar o script do Khan Academy."))});
    t("❌ REMOVER MOD MENU","",()=>{document.getElementById("bobMenu")?.remove();document.querySelector(".flutuante")?.remove();alert("✅ MOD MENU REMOVIDO COM SUCESSO!")});

    const aviso=document.createElement("div");
    aviso.className="aviso-texto",aviso.innerText="1. ⚠️ Se estiver na escola, use o X-VPN para funcionar\n2. 🏠 Em casa, use Wi-Fi normal\n\nUse com inteligência, jovem padawan!";
    e.appendChild(aviso);

    const linha=document.createElement("hr");
    linha.style="margin:15px 0;border:1px solid #444;",e.appendChild(linha);

    t("🌐 DISCORD DO BOB MODS","",()=>{window.open("https://discord.gg/fsYtn3z6","_blank")});
    t("▶️ CANAL YOUTUBE","",()=>{window.open("https://youtube.com/@bobmodsff5508?si=wcsIGo7Oa8rKAWTX","_blank")});

    const criador=document.createElement("p");
    criador.innerText="Criador: Leonardo F.G",criador.style="margin-top:15px;font-size:12px;color:#ccc;text-align:center",e.appendChild(criador)
  };

  const botaoFlutuante=document.createElement("div");
  botaoFlutuante.className="flutuante",botaoFlutuante.title="Abrir BOB MODS FF",botaoFlutuante.innerText="≡";
  botaoFlutuante.onclick=()=>{document.getElementById("bobMenu")||criarMenu()};
  document.body.appendChild(botaoFlutuante);
  criarMenu();
})();
