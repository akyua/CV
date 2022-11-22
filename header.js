if (window.innerWidth > 550) {
  var lastScrollTop = 0, scrollPx = 0, accumulativeScroll = 0;
  menu = document.getElementById("menu");
  
  window.addEventListener("scroll", function(){
      var scrollTop = window.pageYOffset;
      if (scrollTop > lastScrollTop) {
          // desceu
          scrollPx = window.pageYOffset - lastScrollTop;
          accumulativeScroll += scrollPx;
          if (accumulativeScroll >= 80) {
              accumulativeScroll = 80;
          }
          menu.style.top="-" + accumulativeScroll + "px";
      } else {
          // subiu
          scrollPx = lastScrollTop - window.pageYOffset;
          accumulativeScroll -= scrollPx;
          if (-accumulativeScroll >= 0) {
              accumulativeScroll = 0;
          }
          menu.style.top="-" + accumulativeScroll + "px";
      }
      lastScrollTop = scrollTop;
  })

}

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
