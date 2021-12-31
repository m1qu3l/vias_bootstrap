let video = document.querySelector('.vi');
let ba = document.querySelector('.vi__ba');
let paPa = document.querySelector('.p__p');
let toBa = document.querySelector('.vi__pro')
let can = document.querySelector('.casa');
let ma = document.querySelector('.ma')
let me = document.querySelector('.me')

let claro = document.querySelector('.claro')

let max = 100;

ma.addEventListener('click',()=>{video.currentTime += 10;por = parseInt(video.currentTime*max/video.duration);ba.style.width = por + '%'})
me.addEventListener('click',()=>{video.currentTime -= 10;por = parseInt(video.currentTime*max/video.duration);ba.style.width = por + '%'})

i = 0
let bu = ()=> {ja = setInterval(() => {let por = parseInt(video.currentTime*max/video.duration);ba.style.width = por + '%'}, 1);}

const pla = ()=>{video.play(); can.innerHTML = 'pausar'; bu();}
const pase = ()=>{video.pause(); can.innerHTML = 'play'; window.clearInterval(ja);}

video.addEventListener('ended',()=>{ba.style.width = '0px'; pase();})
paPa.addEventListener('click',()=>{(video.paused) ? pla() : pase()})

