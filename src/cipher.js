const cipher= {
  encode: (offset, text) => {
    let outcome ="";
    for (let index=0;index<text.length;index++){
      let messageAscii= text.charCodeAt(index);
      let newPosition= (messageAscii-65+offset)%26+65;
      if(messageAscii===32){newPosition=32;}
      let newText = String.fromCharCode(newPosition);
      outcome+= newText;
    }
    document.getElementById("messageTwo").innerHTML=outcome;
    return outcome;
  },
  decode: (offset, text) => {
    console.log ("donde estoy")
    let outcome ="";
    for (let index=0;index<text.length;index++){
      let messageAscii= text.charCodeAt(index);
      let newPosition= (messageAscii+65-offset)%26+65;
      if(messageAscii===32){newPosition=32;}
      let newText = String.fromCharCode(newPosition);
      outcome+= newText;
    }
    document.getElementById("messageTwo").innerHTML=outcome;
    return outcome;
  }
}
  //Pseudo codigo
  /**
   * declararemos una variable global que en el futuro guardará el mensaje cifrado
   Ciclo for(condiciones){
   * Las letras de la frase que escribe el usuario se convertiran en ascii(usamos string + charCodeAt())
   * agregamos desplazamiento a las letras en ascii(usamos offset + formula de michelle)
   * Si la letra en ascii es espacio(32) entonces  no se aplica desplazamiento y se retorna el mismo numero 32 (usamos condicionales)
   * los nuevos numeros(letras con desplazamiento) las convertiremos en letras humanas.(String.fromCarCode)
   * una vez cifrada la letra la vamos a ir guardando dentro de la variable vacía que declaramos al inicio
   * }
   * mostramos el resultado(van estar guardados en una variable) alos usuarios (innneHTML)

   */


  export default cipher;