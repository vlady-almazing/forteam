/*
Этот скрипт для сайта - https://www.mfsa.info
///*///

// Для вставки в поле - Java Script
var t=document.getElementById('messagebody').textContent;
var n=t.indexOf('stoken');
window.location.replace('https://store.steampowered.com/account/newaccountverification?'+t.substr(n, 137));

/*
var av=j=1, v=700;
w();
function w(){
// (1==j?r='&#92;':(2==j?r='|':(3==j?r='/':r='-'))); j++; if(j>=4) j=0; $('#w').html(r);
if(av){av=0; setInterval(w, v)}}
///*///
