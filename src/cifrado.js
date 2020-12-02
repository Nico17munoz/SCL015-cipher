import cipher from './cipher.js';

const btnCipher = document.getElementById("cipher");
/*const btnCipher = document.getElementById("cipher");
console.log(btnCipher);*/
btnCipher.addEventListener("click",function(){
  console.log("Hola");
  /* la frase ingresada por usuario la convertiremos en mayúscula(toUpperCase());*/
    let text = document.getElementById("message").value.toUpperCase();
    console.log(1,text)
    /*convertir offset en número(parseInt)*/
    let offset = parseInt(document.getElementById("number").value);
    console.log(2,offset)
  //tomamos los valores
  
    cipher.encode(offset,text)
  /*invocamos a la función offset y text serian argumentos porque estan los valores*/
   
  });

const btnDecipher = document.getElementById("decipher");
btnDecipher.addEventListener("click",function(){
    console.log ("chao");
  /* la frase ingresada por usuario la convertiremos en mayúscula(toUpperCase());*/
    let textTwo = document.getElementById("message").value.toUpperCase();
    /*convertir offset en número(parseInt)*/
    let offsetTwo = parseInt(document.getElementById("number").value);
  //tomamos los valores
  
    cipher.decode(offsetTwo,textTwo)
  /*invocamos a la función offset y text serian argumentos porque estan los valores*/
   
  });