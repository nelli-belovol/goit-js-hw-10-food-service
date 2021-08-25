import './sass/main.scss';
import refs from './js/refs.js';
import menu from './menu.json';
import template from './templates/menu.hbs';
console.log(menu);
//
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//---------------------------------------//                       try...catch

refs.body.classList.add(Theme.LIGHT);

// При изменении темы, необходимо добавлять на
// элемент body класс light - theme или dark - theme.
function changeTheme() {
  if (refs.body.classList.contains(Theme.LIGHT)) {
    localStorage.setItem('ui-theme', JSON.stringify(Theme.DARK));
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    refs.checkBox.checked = true;
  } else {
    localStorage.setItem('ui-theme', JSON.stringify(Theme.LIGHT));
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    refs.checkBox.checked = false;
  }
}

refs.checkBox.addEventListener('change', () => {
  changeTheme();
});

// По умолчанию тема светлая.
window.onload = () => {
  const currentTheme = JSON.parse(localStorage.getItem('ui-theme')); // почему пришлось парсить, если это строка???

  refs.body.classList.add(currentTheme);
  if (currentTheme === Theme.DARK) {
    refs.checkBox.checked = true;
  } else {
    refs.checkBox.checked = false; // после обновления остается правильное положение чекбокса, но заново срабатывает со второго раза
  }
};

// Выбранная тема должна сохраняться между перезагрузками страницы.
// Для хранения темы используй localStorage.

// Если при загрузке страницы тема тёмная, не забудь поставить
// свойство checked у чекбокса #theme -switch-toggle в true,
// чтобы ползунок сдвинулся в правильное положение.
const items = template(menu);
refs.menuList.insertAdjacentHTML('beforeend', items);
console.log(refs.menuList);
