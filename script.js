(function(){
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if(toggle && menu){
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const toast = document.querySelector('.toast');
  function showToast(message){
    if(!toast) return;
    toast.textContent = message || 'Copied';
    toast.classList.add('show');
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 1800);
  }

  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy') || '';
      try{
        await navigator.clipboard.writeText(text);
        showToast(btn.getAttribute('data-toast') || 'Copied');
      }catch(err){
        showToast('Copy failed — please copy manually');
      }
    });
  });

  document.querySelectorAll('[data-checklist] input[type="checkbox"]').forEach((box, index) => {
    const key = 'wuk-emma-check-' + index + '-' + (box.name || box.id || box.value || 'item');
    box.checked = localStorage.getItem(key) === 'true';
    box.addEventListener('change', () => localStorage.setItem(key, String(box.checked)));
  });
})();
