
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

const toast = document.querySelector('.toast');
function showToast(message){
  if(!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(window.__toastTimer);
  window.__toastTimer = window.setTimeout(()=>toast.classList.remove('show'), 2200);
}

document.querySelectorAll('.copy-button').forEach(btn => {
  btn.addEventListener('click', async () => {
    const text = btn.getAttribute('data-copy') || '';
    try {
      await navigator.clipboard.writeText(text);
      showToast(btn.getAttribute('data-toast') || 'Copied');
    } catch(err) {
      showToast('Copy failed. Please select the text manually.');
    }
  });
});

document.querySelectorAll('[data-checklist]').forEach(list => {
  const key = 'checklist:' + list.getAttribute('data-checklist');
  const boxes = Array.from(list.querySelectorAll('input[type="checkbox"]'));
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '[]');
    boxes.forEach((box, i) => box.checked = Boolean(saved[i]));
    boxes.forEach((box, i) => box.addEventListener('change', () => {
      localStorage.setItem(key, JSON.stringify(boxes.map(b => b.checked)));
    }));
  } catch(e) {}
});
