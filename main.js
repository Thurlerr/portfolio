
// navbar

const navbar = document.querySelector('.navbar-wrapper');

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    navbar.classList.add("hide");
    navbar.classList.remove("show");
  } else {
    navbar.classList.add("show");
    navbar.classList.remove("hide");
  }
  
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos

});


//   sessão tech stack
  
  const icons = document.querySelectorAll('.icon-item'); //seleciona li
  const description = document.getElementById('iconDescription'); //seleciona p
  const iconText = document.getElementById('iconText'); //seleciona o texto


  let current = 0; //indice dos icones
  let intervalId; 

  function highlightIcon(index) {
    icons.forEach((icon, i) => { //itera cada li
      icon.classList.remove('active'); //active deixa grande e com highlight
      if (i === index) { //pula pro proximo active e tira active do anterior
        icon.classList.add('active');
        description.textContent = icon.dataset.text; //manipulação da DOM minimalista
        iconText.textContent = icon.dataset.extra; //manipulação da DOM minimalista a partir do data-extra de cada li
      }
    });
    current = index; // Atualiza o índice atual
  }

  function startCarousel() { //vai ser chamado aqui mesmo no main
    intervalId = setInterval(() => { //setinterval recebe função e tempo em milissegundos
      current = (current + 1) % icons.length; //calculo SINISTRO pra resetar (4 + 1) % 5 = 0
      highlightIcon(current);
    }, 2500);
  }

  function stopCarousel() { //pra parar e ler o textão
    clearInterval(intervalId);
  }

  // Inicializa o carrossel
  startCarousel();

  // Adiciona possibilidade clique em cada ícone
  icons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
      stopCarousel();
      highlightIcon(index);
    });
  });

