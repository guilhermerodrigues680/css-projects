const headerIconMenuOpen = document.querySelector('#header-icon-menu-open');
const headerIconMenuClose = document.querySelector('#header-icon-menu-close');
const navigationDrawer = document.querySelector('#navigation-drawer');
const CLASS = {
  hidden: 'hidden',
  overflowHidden: 'overflow-hidden',
};

let menuIsShowing = false;

function toggleMenu() {
  if (menuIsShowing) {
    navigationDrawer.classList.add(CLASS.hidden);
    document.body.classList.remove(CLASS.overflowHidden);
    headerIconMenuClose.classList.add(CLASS.hidden);
    headerIconMenuOpen.classList.remove(CLASS.hidden);
    menuIsShowing = false;
  } else {
    navigationDrawer.classList.remove(CLASS.hidden);
    document.body.classList.add(CLASS.overflowHidden);
    headerIconMenuOpen.classList.add(CLASS.hidden);
    headerIconMenuClose.classList.remove(CLASS.hidden);
    menuIsShowing = true;
  }
}

headerIconMenuOpen.addEventListener('click', toggleMenu);
headerIconMenuClose.addEventListener('click', toggleMenu);
