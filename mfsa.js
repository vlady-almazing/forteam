/*
Этот скрипт для сайта - https://www.mfsa.info
///*///

// Для вставки в поле - Java Script
var t=document.getElementById('messagebody').textContent;
var n=t.indexOf('stoken');
t='https://store.steampowered.com/account/newaccountverification?'+t.substr(n, 137);
window.open(t);
