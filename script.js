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
