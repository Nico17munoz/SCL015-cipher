
const pageOne= document.getElementById("pageOne");
const pageTwo= document.getElementById("pageTwo");
//declaradas paginas a mostrar y ocultar

const start = document.getElementById("open");
//console.log (start);
start.addEventListener("click",function(){
    pageOne.classList.add("ocultar");
    pageTwo.classList.remove("ocultar");
    //hide//
});

