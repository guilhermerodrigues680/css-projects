const headerIconMenuOpen = document.querySelector('#header-icon-menu-open');
const headerIconMenuClose = document.querySelector('#header-icon-menu-close');
const navigationDrawer = document.querySelector('#navigation-drawer');
const CLASS = {
  hidden: 'hidden',
  overflowHidden: 'overflow-hidden',
  animateAnimated: 'animate__animated',
  animateFaster: 'animate__faster',
  animateMenuOut: 'animate__slideOutRight',
  animateMenuIn: 'animate__slideInRight',
};

let menuIsShowing = false;

function toggleMenu() {
  // Remove o estado inicial do navigationDrawer
  navigationDrawer.classList.remove(CLASS.hidden);

  if (menuIsShowing) {
    document.body.classList.remove(CLASS.overflowHidden);
    navigationDrawer.classList.remove(CLASS.animateMenuIn);
    navigationDrawer.classList.add(CLASS.animateMenuOut);
    headerIconMenuClose.classList.add(CLASS.hidden);
    headerIconMenuOpen.classList.remove(CLASS.hidden);
    menuIsShowing = false;
  } else {
    document.body.classList.add(CLASS.overflowHidden);
    navigationDrawer.classList.remove(CLASS.animateMenuOut);
    navigationDrawer.classList.add(CLASS.animateMenuIn);
    headerIconMenuOpen.classList.add(CLASS.hidden);
    headerIconMenuClose.classList.remove(CLASS.hidden);
    menuIsShowing = true;
  }
}

// Estado inicial do navigationDrawer
navigationDrawer.classList.add(CLASS.hidden);
navigationDrawer.classList.add(CLASS.animateAnimated);
navigationDrawer.classList.add(CLASS.animateFaster);

// Eventos de click no botão do menu
headerIconMenuOpen.addEventListener('click', toggleMenu);
headerIconMenuClose.addEventListener('click', toggleMenu);
