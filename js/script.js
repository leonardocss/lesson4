//Создаем переменные LI - ПЯТЫЙ ПУНКТ с классом menu-item
let li = document.createElement('li');
//Создаем переменные LI - ТРЕТИЙ ПУНКТ с классом menu-item
let li2 = document.createElement('li');
// вешаем классы
li.classList.add('menu-item');
li2.classList.add('menu-item');
//добавляем туда HTML код (текст внутри LI)
li.innerHTML = 'Пятый пункт';
li2.innerHTML = 'Третий пункт';

// пробиваемся до body > header > nav > ul > и добавляем в конец ПЯТЫЙ ПУНКТ
document.body.children[2].children[0].children[0].appendChild(li);
// УДАЛЯЕМ ЛИШНИЙ ЭЛЕМЕНТ
document.body.children[2].children[0].children[0].removeChild(document.body.children[2].children[0].children[0].children[1])
// ДОБАВЛЯЕМ ТРЕТИЙ ПЕРЕД ЧЕТВЕРТЫМ
document.body.children[2].children[0].children[0].insertBefore(li2, document.body.children[2].children[0].children[0].children[2]);
//МЕНЯЕМ СТИЛЬ У БАДИ - ЗАМЕНА ФОНА ДРУГОЙ КАРТИНКОЙ
document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';
//Поменять заголовок, добавить слово "подлинную"
title.innerHTML = 'Мы продаем только подлинную технику Apple';
// удаляем блок рекламы
document.querySelector('.adv').remove();
//получам блок с идентификатором prompt и записываем туда HTML CODE (text) через вопрос у пользователя 
let feedback = document.getElementById('prompt');
feedback.innerHTML = prompt('Ваше отношение к APPLE???', '');