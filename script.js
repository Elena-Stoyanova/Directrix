let showSearch = false;
function showSearchForm() {
  let searchButton = document.querySelector('.search-container');
  
  showSearch = !showSearch;
  if (showSearch) {
    searchButton.classList.add('expandet');
    
  } else {
    searchButton.classList.remove('expandet');
    
  }
}

let showMenuItems = false;
function showMenu() {
  let menu = document.querySelector('.menu-bar');
  showMenuItems = !showMenuItems;
  if (showMenuItems) {
    menu.classList.add('showMenu');
    
  } else {
    menu.classList.remove('showMenu');
   
  }
}


let showLanguages = false;
function showLanguageBar() {
  let lang = document.querySelector('.lang-dropdown');
  showLanguages = !showLanguages;
  if (showLanguages) {
    lang.classList.add('showLang');
    
  } else {
    lang.classList.remove('showLang');
   
  }
}