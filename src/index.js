import './sass/main.scss';
import refs from './js/refs.js';
import menu from './menu.json';
import template from './templates/menu.hbs';
import { load, save } from './js/storage.js';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.body.classList.add(Theme.LIGHT);

if (load('ui-theme') === Theme.DARK) {
  refs.checkBox.checked = true;
  setDarkTheme();
}

function setDarkTheme() {
  refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
  save('ui-theme', Theme.DARK);
}

function setLightTheme() {
  refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
  save('ui-theme', Theme.LIGHT);
}

refs.checkBox.addEventListener('change', event => {
  if (event.target.checked) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
});

const items = template(menu);
refs.menuList.insertAdjacentHTML('beforeend', items);
