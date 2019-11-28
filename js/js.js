let menuOptions;
let contentTabs;

function clearMenuSelection() {
  for(let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].classList.remove('selected');
  }
  for(let i = 0; i < contentTabs.length; i++) {
    contentTabs[i].style.opacity = '0';
    contentTabs[i].style.height = '0';
  }
}

function selectThisTab() {
  clearMenuSelection();

  this.classList.add('selected');
  const tabTag = this.getAttribute('data-menu-tag');
  const tabDiv = document.getElementById('content-' + tabTag);

  setTimeout(function() {
    tabDiv.style.height = tabDiv.scrollHeight + 'px';
  }, 600);

  setTimeout(function() {
    tabDiv.style.opacity = '1';
  }, 900);
}

window.onload = function() {
  menuOptions = document.getElementsByClassName('menu-option');
  contentTabs = document.getElementsByClassName('content-tab');

  for(let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].onclick = selectThisTab;
  }
  menuOptions[0].click();

  document.getElementById('home-loader').style.opacity = '0';
  setTimeout(function() {
    document.getElementById('home-loader').style.display = 'none';
  }, 100);

}
