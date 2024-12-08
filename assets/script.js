


// Animação de fade ao rolar a página
function animateOnScroll() {
  const elements = document.querySelectorAll("[data-animate='fade']");
  const windowHeight = window.innerHeight;

  elements.forEach((element) => {
    const position = element.getBoundingClientRect().top;

    if (position < windowHeight - 100) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    } else {
      element.style.opacity = 0;
      element.style.transform = "translateY(20px)";
    }
  });
}

document.addEventListener("scroll", animateOnScroll);
window.onload = animateOnScroll;

// Navegação suave entre seções
document.querySelectorAll("a.btn").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth",
      });
    }
  });
});

// Atualização automática do ano no rodapé
document.querySelector("footer p").innerHTML = `&copy; ${new Date().getFullYear()} Aldevan Vieira Tech. Todos os direitos reservados.`;

// Notificação ao clicar nos ícones de redes sociais
document.querySelectorAll(".social-btn").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Você será redirecionado para a rede social.");
  });
});

// Função para animar o iframe de endereço quando ele entra na visualização
function animateAddressIframeOnScroll() {
  const iframe = document.getElementById("address-iframe");
  const windowHeight = window.innerHeight;
  const iframePosition = iframe.getBoundingClientRect().top;

  // Verifica se o iframe está visível e aplica animação
  if (iframePosition < windowHeight - 100) {
    iframe.style.opacity = 1;
    iframe.style.transform = "translateY(0)";
  } else {
    iframe.style.opacity = 0;
    iframe.style.transform = "translateY(20px)";
  }
}

// Evento para detectar o scroll e aplicar animação
document.addEventListener("scroll", animateAddressIframeOnScroll);
window.onload = animateAddressIframeOnScroll;

const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  hamburgerMenu.classList.toggle('active');
});

// Animação de ícones ao abrir o menu
hamburgerMenu.addEventListener('click', () => {
  const spans = hamburgerMenu.querySelectorAll('span');
  spans[0].classList.toggle('rotate-top');
  spans[1].classList.toggle('fade-out');
  spans[2].classList.toggle('rotate-bottom');
});


document.getElementById('atendimentoForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o envio padrão do formulário

  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  })
  .then(response => {
      if (response.ok) {
          alert('Formulário enviado com sucesso!');
          form.reset(); // Limpa o formulário após o envio
      } else {
          return response.json().then(data => {
              if (Object.hasOwn(data, 'errors')) {
                  alert(data["errors"].map(error => error["message"]).join(", "));
              } else {
                  alert('Ocorreu um erro ao enviar o formulário.');
              }
          });
      }
  })
  .catch(error => {
      alert('Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.');
  });
});
