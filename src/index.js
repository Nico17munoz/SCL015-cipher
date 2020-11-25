//import cipher from './cipher.js';

const pageOne= document.getElementById("pageOne");
const pageTwo= document.getElementById("pageTwo");
//declaradas paginas a mostrar y ocultar

const start = document.getElementById("open");
start.addEventListener("click",function(){
    pageOne.classList.add("ocultar");
    pageTwo.classList.remove("ocultar");
})



//console.log(cipher);
