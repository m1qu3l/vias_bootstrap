let audi = document.querySelector('.au');
let para = document.querySelector('.dis')
let barra = document.querySelector('.barar');

let ta = 0;
const proger = () => {(ta == 100)?ta = 0 : ta++;barra.style.setProperty('width',`${ta}%`);}

audi.addEventListener('click',()=>{let aumentarVarra = setInterval(()=>{proger()}, 190);
    para.addEventListener('click',()=>{clearInterval(aumentarVarra)})
});

