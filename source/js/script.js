
let headerOverlay, menuMain, menuAccount, menuHelp, btnMain, btnAccount, btnHelp;

function closeMenus() {
  headerOverlay.classList.remove('visible');
  menuMain.classList.remove('visible');

  btnMain.classList.remove('active');

  btnMain.setAttribute('aria-expanded', false);
}

function toggleMenu(btn, menu) {
  if(menu.classList.contains('visible')) {
    closeMenus();
  } else {
    closeMenus();
    headerOverlay.classList.add('visible');
    menu.classList.add('visible');
    btn.classList.add('active');
    btn.setAttribute('aria-expanded', true);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  headerOverlay = document.getElementById('headerOverlay');
  menuMain = document.getElementById('mainMenu');

  btnMain = document.getElementById('mainMenuToggleBtn');

  menuMain.addEventListener("click", function() { closeMenus() });
  headerOverlay.addEventListener("click", function() { closeMenus() });
  btnMain.addEventListener("click", function() { toggleMenu(btnMain, menuMain) });
});

// Hide header title on scroll
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 600) {
    document.getElementById("headerTitleCont").classList.remove("hidden");
  } else {
    document.getElementById("headerTitleCont").classList.add("hidden");
  }
} 


// Blur start image on scroll
document.addEventListener('DOMContentLoaded', () => {
  const feature = document.querySelector('.feature');
  if (!feature) return;

  const zoom = parseFloat(getComputedStyle(feature).backgroundSize) / 100;
  const size = zoom * feature.getBoundingClientRect().width;

  window.addEventListener('scroll', () => {
    const fromTop = window.scrollY;
    const newSize = size - fromTop / 3;
    const featureWidth = feature.getBoundingClientRect().width;

    if (newSize > featureWidth) {
      feature.style.backgroundSize = `${newSize}px`;
      feature.style.filter = `blur(${fromTop / 100}px)`;
      feature.style.opacity =
        1 - (fromTop / document.documentElement.scrollHeight) * 1.3;
    }
  });
});
