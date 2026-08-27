
(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('#nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      navMenu.classList.toggle('open', !open);
    });
    navMenu.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      }
    });
  }

  const toast = document.querySelector('.toast');
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message || 'Copied';
    toast.classList.add('visible');
    window.setTimeout(() => toast.classList.remove('visible'), 1800);
  }

  document.querySelectorAll('.copy-button').forEach((button) => {
    button.addEventListener('click', async () => {
      const text = button.getAttribute('data-copy') || '';
      try {
        await navigator.clipboard.writeText(text);
        showToast(button.getAttribute('data-toast') || 'Copied');
      } catch (error) {
        showToast('Copy failed — please select the text manually');
      }
    });
  });

  document.querySelectorAll('.checklist-card input[type="checkbox"]').forEach((box, index) => {
    const key = 'wuk-emma-checklist-' + index;
    box.checked = localStorage.getItem(key) === 'true';
    box.addEventListener('change', () => localStorage.setItem(key, String(box.checked)));
  });
})();
