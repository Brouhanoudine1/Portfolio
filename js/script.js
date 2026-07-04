// Initialisation EmailJS
emailjs.init({
  publicKey: 'pL4mLSf6mZFjqcOrn',
});

// Gestion du Formulaire de Contact
const form = document.querySelector('form');
const MsgValidate = document.getElementById("form-message");

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0tqy1d2', 'template_dgd67ud', form)
      .then(() => {
        MsgValidate.innerText = 'Message envoyé avec succès !';
        MsgValidate.style.visibility = "visible";
        form.reset();
      })
      .catch((err) => {
        alert('Erreur : ' + err.text);
      });
  });
}

// Gestion du Préchargeur (Preloader)
window.addEventListener('load', () => {
  hidePreloader();
});

// Sécurité au cas où l'événement 'load' mettrait trop de temps à se déclencher
setTimeout(() => {
  hidePreloader();
}, 3000);

function hidePreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader && !preloader.classList.contains('fade-out')) {
    preloader.classList.add('fade-out');
    document.body.classList.remove('loading');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 600);
  }
}

// Animations au défilement (Scroll Reveal - se déclenchent une seule fois)
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Cesse d'observer l'élément pour que l'animation ne se joue qu'une fois
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1, // Déclenche dès que 10% de l'élément est visible
      rootMargin: '0px 0px -40px 0px' // Petite marge en bas pour anticiper l'apparition
    });

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });
  } else {
    // Mode de secours si le navigateur ne supporte pas IntersectionObserver
    revealElements.forEach((el) => {
      el.classList.add('reveal-visible');
    });
  }
});