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
  animatecookiesConsentBarOut: 'animate__slideOutDown',
  animatecookiesConsentBarIn: 'animate__slideInUp',
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

/* Cookies consent bar */

function getUserAllowedCookiesStatus() {
  const userAllowedCookiesStr = localStorage.getItem('user_allowed_cookies');
  if (userAllowedCookiesStr === null) {
    return null
  } else if (userAllowedCookiesStr.toLowerCase() === "false") {
    return false;
  } else if (userAllowedCookiesStr.toLowerCase() === "true") {
    return true;
  } else {
    console.error(`getUserAllowedCookiesStatus: Valor desconhecido: ${userAllowedCookiesStr}`);
    return null;
  }
}

function setUserAllowedCookiesStatus(val) {
  return localStorage.setItem('user_allowed_cookies', val);
}

function showCookiesConsentBar() {
  const cookiesConsentBar = document.querySelector('#cookies-consent-bar');
  const cookiesConsentBarBtn = document.querySelector('#cookies-consent-bar-btn-got-it');

  cookiesConsentBar.classList.remove(CLASS.hidden);

  cookiesConsentBar.classList.add(CLASS.animateAnimated);
  cookiesConsentBar.classList.add(CLASS.animateFaster);
  cookiesConsentBar.classList.add(CLASS.animatecookiesConsentBarIn);

  cookiesConsentBarBtn.addEventListener('click', () => {
    setUserAllowedCookiesStatus(true);
    cookiesConsentBar.classList.remove(CLASS.animateFaster);
    cookiesConsentBar.classList.remove(CLASS.animatecookiesConsentBarIn);
    cookiesConsentBar.classList.add(CLASS.animatecookiesConsentBarOut);
  });
}

switch (getUserAllowedCookiesStatus()) {
  case true:
    console.debug('Usuário permitiu os cookies.')
    break;
  case false:
    console.debug('Usuário não permitiu os cookies.')
    break;
  case null:
    console.debug('Usuário não respondeu consetimento com os cookies.')
    showCookiesConsentBar();
    break;
  default:
    console.error('getUserAllowedCookiesStatus: Valor desconhecido');
    showCookiesConsentBar();
    break;
}

// TODO: Melhorar javascript do dropdown
const dropdown = document.querySelector('.select');
dropdown.addEventListener('click', () => {
  dropdown.classList.toggle('select__options--open');
  console.debug('clic');
})
