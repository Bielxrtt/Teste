document.addEventListener('DOMContentLoaded', function() {
  // Mostrar/ocultar poesias
  document.querySelectorAll('.toggle-poesia').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const poesia = toggle.nextElementSibling;
      poesia.classList.toggle('show');
      
      const seta = toggle.querySelector('.seta');
      seta.textContent = poesia.classList.contains('show') ? '⬆️' : '⬇️';
    });
  });

const botoes = document.querySelectorAll('.toggle-poesia');

botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    const poesia = btn.nextElementSibling;
    poesia.classList.toggle('show');
    const seta = btn.querySelector('.seta');
    seta.textContent = poesia.classList.contains('show') ? '⬆️' : '⬇️';
  });
});

  // Criar corações flutuantes
  function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("cora");
    coracao.innerHTML = "❤️";
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = Math.random() * 5 + 3 + "s";
    coracao.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(coracao);
    setTimeout(() => coracao.remove(), 8000);
  }
  
  setInterval(criarCoracao, 300);

  // Criar confetes
  function criarConfetes() {
    const emojis = ['❤️', '💖', '🎀', '💝', '🎁'];
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.color = ['#ff6b81', '#ff4757', '#f1c40f'][Math.floor(Math.random() * 3)];
        confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
      }, i * 50);
    }
  }
});