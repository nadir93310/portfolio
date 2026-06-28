const title = document.querySelector('.explode');

// 1. On transforme le texte en lettres individuelles enveloppées dans des <span>
const content = title.textContent;
title.innerHTML = content
  .split("")
  .map(lettre => lettre === " " ? "&nbsp;" : `<span>${lettre}</span>`)
  .join("");

const spans = title.querySelectorAll('span');

// 2. On écoute quand la souris entre
title.addEventListener('mouseenter', () => {
  spans.forEach(span => {
    // On génère des mouvements aléatoires
    const x = (Math.random() - 0.5) * 80; // Entre -40px et 40px
    const y = (Math.random() - 0.5) * 80; // Entre -40px et 40px
    const rotation = (Math.random() - 0.5) * 40; // Rotation entre -20deg et 20deg
    
    span.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
  });
});

// 3. On remet tout en place quand la souris sort
title.addEventListener('mouseleave', () => {
  spans.forEach(span => {
    span.style.transform = `translate(0, 0) rotate(0deg)`;
  });
});