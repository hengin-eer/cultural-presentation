const days1 = document.getElementById('days1');
const hours1 = document.getElementById('hours1');
const minutes1 = document.getElementById('minutes1');
const seconds1 = document.getElementById('seconds1');

const days2 = document.getElementById('days2');
const hours2 = document.getElementById('hours2');
const minutes2 = document.getElementById('minutes2');
const seconds2 = document.getElementById('seconds2');

const days3 = document.getElementById('days3');
const hours3 = document.getElementById('hours3');
const minutes3 = document.getElementById('minutes3');
const seconds3 = document.getElementById('seconds3');


function firstUpdateCountdown() {
    const target = new Date('2022/6/25 9:40:00');
    const currentTime = new Date();
    const diff = target - currentTime;
  
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
  
    days1.innerText = d < 0 ? '0' : d;
    hours1.innerText = h < 0 ? '00' : h < 10 ? '0' + h : h;
    minutes1.innerText = m < 0 ? '00' : m < 10 ? '0' + m : m;
    seconds1.innerText = s < 0 ? '00' : s < 10 ? '0' + s : s;
}

firstUpdateCountdown();
setInterval(firstUpdateCountdown, 1000);

function secondUpdateCountdown() {
    const target = new Date('2022/6/25 10:20:00');
    const currentTime = new Date();
    const diff = target - currentTime;
  
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
  
    days2.innerText = d < 0 ? '0' : d;
    hours2.innerText = h < 0 ? '00' : h < 10 ? '0' + h : h;
    minutes2.innerText = m < 0 ? '00' : m < 10 ? '0' + m : m;
    seconds2.innerText = s < 0 ? '00' : s < 10 ? '0' + s : s;
}

secondUpdateCountdown();
setInterval(secondUpdateCountdown, 1000);

function thirdUpdateCountdown() {
    const target = new Date('2022/6/25 9:30:00');
    const currentTime = new Date();
    const diff = target - currentTime;
  
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
  
    days3.innerText = d < 0 ? '0' : d;
    hours3.innerText = h < 0 ? '00' : h < 10 ? '0' + h : h;
    minutes3.innerText = m < 0 ? '00' : m < 10 ? '0' + m : m;
    seconds3.innerText = s < 0 ? '00' : s < 10 ? '0' + s : s;
}

thirdUpdateCountdown();
setInterval(thirdUpdateCountdown, 1000);