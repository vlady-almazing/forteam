/*
Этот скрипт для сайта - https://store.steampowered.com/join
///*///

// Для вставки в поле - Java Script
var n=['accountname', 'email', 'reenter_email', 'password', 'reenter_password'], kol=[11, 9, 9, 11], r=[], m='',
min=[97, 48, 95, 47, 95, 47, 95], max=[122, 57, 122, 57, 122, 57, 122];
function Rnd(min, max){return Math.floor(Math.random()*(max-min+1))+min}
function Chr(i){1==i?i=0:i=Rnd(0,6);p=Rnd(min[i], max[i]);if(96==p||47==p)p=95;return String.fromCharCode(p);}
function Chz(a){p=Rnd(min[a], max[a]);return String.fromCharCode(p);}
function Cre(d){for(var p='', i=1, j=1; i<=d; i++, j=i){if(j==d)j=1;p+=Chr(j);}return p;}
for(var i=0; i<=3; i++){if(3==i){for(var b=1; b<=5; min.pop(), max.pop(), b++){}
min.push(58, 33, 44, 94, 63, 65); max.push(59, 34, 46, 96, 90, 90);}
r[i]=Cre(kol[i]);if(2==i){m=r[i];r[i-1]=r[i]+='@mailforspam.com';}}
r[4]=r[3]+=Chz(7)+Chz(4)+Chz(0)+Chz(1);r[3]+='12';
for(var i=0; i<=4; i++){document.getElementById(n[i]).value=r[i]}
document.getElementById('i_agree_check').checked=true;
window.open('https://www.mfsa.info/mail/'+m+'/1');
alert(r[0]+' : '+r[4]+' : '+r[1]);


// Для вставки в поле - CSS Styles
#createAccountButton{ position: absolute; top: 470px; left: 265px;}
