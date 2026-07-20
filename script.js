// ---- footer year ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
navToggle.addEventListener('click', () => {
  const isOpen = navMobile.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---- contact form (Formspree) ----
const form = document.getElementById('contactForm');
if (form) {
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.className = 'form-status';
    const data = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = "Thanks — your message has been sent. We'll get back to you soon.";
        status.className = 'form-status show ok';
        form.reset();
      } else {
        status.textContent = "Something went wrong sending your message. Please email us directly instead.";
        status.className = 'form-status show err';
      }
    } catch (err) {
      status.textContent = "Something went wrong sending your message. Please email us directly instead.";
      status.className = 'form-status show err';
    } finally {
      submitBtn.disabled = false;
    }
  });
}
