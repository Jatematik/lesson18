'use strict';

let date = new Date();
let newYearDate = new Date('2021');
let result = Math.floor((newYearDate.getTime() - date.getTime())/1000/60/60/24);
let hours = date.getHours();
let day;
let dayWeek;

const elem = document.createElement('h2');
document.body.append(elem);

elem.style.cssText = `position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-family: sans-serif;
`;

if (0 <= hours && hours < 5) {
    day = 'Доброй ночи';
} else if (5 <= hours && hours < 12) {
    day = 'Доброе утро';
} else if (12 <= hours && hours < 17) {
    day = 'Добрый день';
} else if (17 <= hours) {
    day = 'Добрый вечер';
}

if (date.getDay() === 1) {
    dayWeek = 'Понедельник';
} else if (date.getDay() === 2) {
    dayWeek = 'Вторник';
} else if (date.getDay() === 3) {
    dayWeek = 'Среда';
} else if (date.getDay() === 4) {
    dayWeek = 'Четверг';
} else if (date.getDay() === 5) {
    dayWeek = 'Пятница';
} else if (date.getDay() === 6) {
    dayWeek = 'Суббота';
} else if (date.getDay() === 0) {
    dayWeek = 'Воскресенье';
}


function getTimeRemaining(){
    let dateNow = new Date();
    let dateEng = dateNow.toLocaleString('en').slice(-10);
    return{dateEng};
}


function updateClock(){
    let timer = getTimeRemaining();
    elem.textContent = `${day}. Сегодня: ${dayWeek} Текущее время: ${timer.dateEng} До нового года осталось ${result} дней`;
}
let timer = setInterval(updateClock, 1000);

updateClock();


