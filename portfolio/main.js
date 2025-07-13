document.addEventListener('DOMContentLoaded', function() {
  const contactLink = document.getElementById('contact-link');
  const contactSection = document.getElementById('contact-section');

  if (contactLink && contactSection) {
    contactLink.addEventListener('click', function(e) {
      e.preventDefault();
      contactSection.classList.toggle('hidden');
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('¡Gracias por contactarte! Pronto responderé tu mensaje.');
      this.reset();
    });
  }

  const verProyectosBtn = document.getElementById('ver-proyectos-btn');
  const inicioBtn = document.getElementById('inicio-btn');
  const heroSection = document.getElementById('hero-section');
  const projectsSection = document.getElementById('projects');

  if (verProyectosBtn && inicioBtn && heroSection && projectsSection) {
    verProyectosBtn.addEventListener('click', function() {
      heroSection.style.display = 'none';
      projectsSection.style.display = 'block';
    });

    inicioBtn.addEventListener('click', function() {
      heroSection.style.display = 'block';
      projectsSection.style.display = 'none';
    });
  }

  // Botón de contacto para abrir Gmail
  if (contactLink) {
    contactLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=aranajuansegundo04@gmail.com&su=Contacto%20desde%20el%20portfolio', '_blank');
    });
  }
});


