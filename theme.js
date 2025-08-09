(function(){
  const STORAGE_KEY = 'theme';
  const BTN_ID = 'theme-toggle';

  function getPreferred(){
    try{
      const saved = localStorage.getItem(STORAGE_KEY);
      if(saved === 'light' || saved === 'dark') return saved;
    }catch(_){}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.getElementById(BTN_ID);
    if(btn){
      const next = theme === 'dark' ? 'light' : 'dark';
      btn.setAttribute('data-next', next);
      btn.setAttribute('aria-label', theme === 'dark' ? 'Skift til lyst tema' : 'Skift til mørkt tema');
      btn.title = theme === 'dark' ? 'Lyst tema' : 'Mørkt tema';
      btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  const initial = getPreferred();
  applyTheme(initial);

  window.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById(BTN_ID);
    if(btn){
      btn.addEventListener('click', function(){
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        try{ localStorage.setItem(STORAGE_KEY, next); }catch(_){ }
        applyTheme(next);
      });
    }

    // Mobile nav toggle
    const menuBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if(menuBtn && navLinks){
      menuBtn.addEventListener('click', function(){
        const isOpen = navLinks.classList.contains('hidden') === false;
        if(isOpen){
          navLinks.classList.add('hidden');
          menuBtn.setAttribute('aria-expanded', 'false');
          menuBtn.setAttribute('aria-label', 'Åbn menu');
        } else {
          navLinks.classList.remove('hidden');
          menuBtn.setAttribute('aria-expanded', 'true');
          menuBtn.setAttribute('aria-label', 'Luk menu');
        }
      });
    }
  });
})();
