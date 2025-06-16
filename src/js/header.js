document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.querySelector('.open-menu-btn');
  const closeBtn = document.querySelector('.close-menu-btn');
  const backdrop = document.querySelector('.backdrop');

  const menuItems = document.querySelectorAll(
    '.header-list-item, .backdrop-list-item'
  );
  const links = document.querySelectorAll('.header-list-link, .backdrop-link');

  const OFFSET = 120;

  function setActiveByHref(href) {
    menuItems.forEach(item => {
      const link = item.querySelector('.header-list-link, .backdrop-link');
      item.classList.toggle(
        'active',
        link && link.getAttribute('href') === href
      );
    });
  }

  function onScroll() {
    const pos = window.scrollY + OFFSET;

    let currentId = null;
    document.querySelectorAll('section[id]').forEach(sec => {
      if (sec.offsetTop <= pos && sec.offsetTop + sec.offsetHeight > pos) {
        currentId = sec.id;
      }
    });

    if (currentId) setActiveByHref(`/#${currentId}`);
  }
  window.addEventListener('scroll', onScroll);

  links.forEach(a => {
    a.addEventListener('click', () => {
      setActiveByHref(a.getAttribute('href'));

      if (backdrop.contains(a)) toggleMenu(false);
    });
  });

  (function highlightOnLoad() {
    const { pathname, hash } = location;

    if (!hash) {
      links.forEach(a => {
        const href = a.getAttribute('href');
        if (href === pathname || href === '.' + pathname) {
          a.parentElement.classList.add('active');
        }
      });
      return;
    }

    setActiveByHref('/' + hash);
  })();

  function toggleMenu(show) {
    openBtn.style.display = show ? 'none' : 'block';
    closeBtn.style.display = show ? 'block' : 'none';
    backdrop.classList.toggle('show', show);
  }
  openBtn?.addEventListener('click', () => toggleMenu(true));
  closeBtn?.addEventListener('click', () => toggleMenu(false));
  backdrop?.addEventListener('click', e => {
    if (e.target === backdrop) toggleMenu(false);
  });
});
