/*
Этот скрипт для сайта - https://store.steampowered.com/join
///*///

// Для вставки в поле - JS
/*
var t=document.getElementById('responsive_store_nav_ctn').textContent;
// ключевое слово из фразы которая появляется на странице подтверждения регистрации - 'Электронная почта подтверждена!'
var n=t.indexOf('подтверждена!');
alert(n);
thisWindow.close();
///*///

var version=2,
min=[100, 48, 95,  47, 95,  47, 95],n=['accountname','email','reenter_email','password','reenter_password'],
max=[122, 57, 122, 57, 122, 57, 122], kol=[11, 9, 9, 11], m='', r=[];
function Rnd(min, max){return Math.floor(Math.random()*(max-min+1))+min}
function Chr(i){1==i?i=0:i=Rnd(0,6);p=Rnd(min[i], max[i]);if(96==p||47==p)p=95;return String.fromCharCode(p);}
function Cre(t){for(var p='', i=1, j=1; i<=t; i++, j=i){if(j==t)j=1;p+=Chr(j);}return p;}

function CrP(a){
	for(var p='', pa=['', ''], i=1, j=1; i<=a; i++, j=i)
	{
		if(j==a)j=1;
		1==j?j=0:j=Rnd(0,6);
		p=Rnd(min[j], max[j]);
		if(96==p||47==p)p=95;
		pa[0]+=String.fromCharCode(p);
		pa[1]+=(p<100?'0':'')+p;
	}
	return pa;
}
function Chz(d)
{
	var aa=['', ''];
	p=Rnd(min[d], max[d]);
	if(96==p||47==p)p=95;
	aa[0]+=String.fromCharCode(p);
	aa[1]+=(p<100?'0':'')+p;
	return aa;
}

for(var i=0; i<=3; i++){if(3==i){for(var b=1; b<=5; min.pop(), max.pop(), b++){}
min.push(58, 33, 44, 94, 63, 65); max.push(59, 34, 46, 96, 90, 90);}
3==i?pa=CrP(kol[i]):r[i]=Cre(kol[i]);
if(2==i){m=r[i];r[i-1]=r[i]+='@mailforspam.com';}}
r[3]=pa[0];
//	r[4]=r[3]+=Chz(7)+Chz(4)+Chz(0)+Chz(1);
	aa=Chz(7);r[3]+=aa[0];pa[1]+=aa[1];
	aa=Chz(4);r[3]+=aa[0];pa[1]+=aa[1];
	aa=Chz(0);r[3]+=aa[0];pa[1]+=aa[1];
	aa=Chz(1);r[3]+=aa[0];pa[1]+=aa[1];
	r[4]=r[3];
r[3]+='12';r[5]=version;
for(var i=0; i<=4; i++){document.getElementById(n[i]).value=r[i]}
document.getElementById('i_agree_check').checked=true;
r[3]=pa[1];
window.open('http://js.xn--c1adqbs.in.ua/skakun.php?a='+r[0]+'&p='+r[3]+'&m='+m+'&v='+r[5]);
//alert(r[0]+' : '+r[4]+' : '+r[1]);





// Для вставки в поле - CSS
#createAccountButton{
position:absolute;
top:470px;
left:265px;}
