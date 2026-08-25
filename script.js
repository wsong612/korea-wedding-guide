const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const toast = document.querySelector('.toast');

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2200);
}

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

document.querySelectorAll('.copy-button').forEach((button) => {
  button.addEventListener('click', async () => {
    const text = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      showToast(button.dataset.toast || 'Copied');
    } catch (error) {
      showToast('Copy failed — please select the text manually');
    }
  });
});

document.querySelectorAll('[data-checklist]').forEach((checklist, listIndex) => {
  const storageKey = checklist.dataset.storage || `koreaWeddingChecklistV2-${location.pathname}-${listIndex}`;
  const boxes = Array.from(checklist.querySelectorAll('input[type="checkbox"]'));
  const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
  boxes.forEach((box, index) => {
    box.checked = Boolean(saved[index]);
    box.addEventListener('change', () => {
      localStorage.setItem(storageKey, JSON.stringify(boxes.map((item) => item.checked)));
    });
  });
});
