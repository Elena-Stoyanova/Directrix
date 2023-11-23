let showSearch = false;
function showSearchForm() {
  let searchButton = document.querySelector('.search-container');
  let navBar = document.querySelector('.nav-bar');
  showSearch = !showSearch;
  if (showSearch) {
    searchButton.classList.add('expandet');
    navBar.classList.add('expandet');
  } else {
    searchButton.classList.remove('expandet');
    navBar.classList.remove('expandet');
  }
}

let showMenuItems = false;
function showMenu() {
  let menu = document.querySelector('.menu-bar');
  let searchContainer = document.querySelector('.search-container');
  let lang = document.querySelector('.lang-dropdown');
  showMenuItems = !showMenuItems;
  if (showMenuItems) {
    menu.classList.add('showMenu');
    searchContainer.classList.add('showMenu');
    lang.classList.add('showMenu');
  } else {
    menu.classList.remove('showMenu');
    searchContainer.classList.remove('showMenu');
    lang.classList.remove('showMenu');
  }
}

let showLanguages = false;
function showLanguageBar() {
  let lang = document.querySelector('.lang-dropdown');
  let line = document.querySelector('.header-line'); 
  showLanguages = !showLanguages;
  if (showLanguages) {
    lang.classList.add('showLang');
    line.classList.add('showLang');
  } else {
    lang.classList.remove('showLang');
    line.classList.remove('showLang');
  }
}
