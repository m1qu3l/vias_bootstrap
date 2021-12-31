let subti = document.querySelectorAll('.temas');
let elconte = document.querySelector('.contenido__');
let losConte = document.querySelectorAll('.los__conte');
let cerrar = document.querySelector('.cerrar');
let titulo = document.querySelector('.ti');
let n = 0;

const num = ()=> {return parseInt(Math.random()*100);}
const ope = (su)=>{
    let x = num();let y = num();
    su.style.setProperty('left',`${x}%`);
    su.style.setProperty('top',`${y}%`);
    su.style.setProperty('transform',`translate(-${x}%,-${y}%)`);
}
subti.forEach(subti => {ope(subti);subti.addEventListener('click',()=>{ope(subti)});});

const agre = (n)=>{elconte.classList.add('contenido__activo');losConte[n].classList.add('los__conte__activo');}

for (let i = 0; i < subti.length; i++) {subti[i].addEventListener('click',()=>{n = i;agre(n)})}

cerrar.addEventListener('click',()=>{elconte.classList.remove('contenido__activo');
    losConte.forEach(losConte =>{losConte.classList.remove('los__conte__activo')})
})

