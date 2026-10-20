
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

  btnMain = document.getElementById('btnMainMenu');

  menuMain.addEventListener("click", function() { closeMenus() });
  headerOverlay.addEventListener("click", function() { closeMenus() });
  btnMain.addEventListener("click", function() { toggleMenu(btnMain, menuMain) });
});

/* Hide header title */
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 600) {
    document.getElementById("headerTitleCont").classList.remove("hidden");
  } else {
    document.getElementById("headerTitleCont").classList.add("hidden");
  }
} 
