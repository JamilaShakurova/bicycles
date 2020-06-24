'use strict';

let mainHeader = document.querySelector(`.main-header`);
let mainNav = document.querySelector(`.main-nav`);
let toggleBtn = document.querySelector(`.main-header__toggle`);


mainNav.classList.remove(`main-nav--nojs`);
toggleBtn.classList.remove(`main-header__toggle--nojs`);
mainHeader.classList.remove(`main-header--nojs`);

toggleBtn.addEventListener(`click`, function () {
  mainNav.classList.toggle(`main-nav--closed`);
});

toggleBtn.addEventListener(`click`, function () {
  toggleBtn.classList.toggle(`main-header__toggle--closed`);
});

$(document).ready(function () {
  $(`#phone`).mask(`+7(999) 999-99-99`);
});
