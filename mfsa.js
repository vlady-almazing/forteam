/*
Этот скрипт для сайта - https://www.mfsa.info
///*///

// Для вставки в поле - JS
var t='', n=0, v=1, j=0, z=500, st='https://store.steampowered.com/account/newaccountverification?';
function Ie(){j++; if(j>=4) location.reload(); if(v){v=0; setInterval(Ie, z);}}e=document.getElementById('messagebody');
!e&&Ie();t=document.getElementById('messagebody').textContent;n=t.indexOf('stoken');t=st+t.substr(n, 137);
window.open(t);window.close()
