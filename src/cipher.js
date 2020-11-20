/*const encodeFunction = (offset, string) => {
  console.log('encode', offset, string);

  if (!string)
  return "";
  const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  offset= (offset%26+26)%26;
  return 
  /**
   * tenemos 26 letras, calcular rotacion que sea menor a 26,
   * independiente del numero calcular las letras cifradas utilizando replace sobre una funcion
   */
  
   /** 
   * para cada letra de `string`
   * aplicamos encode de letra
   * concatenamos la letra resultante al string de salida
   * 
   * encode de letra simple
   * buscar el cod ascii de la letra
   * al codigo de le sumamos offset
   * no quedamos con el resto de la division por 26 (cant de letras)
   * convertimos el nuevo codigo en letra
   */
/*return ;
};
const decodeFunction = (offset, string) => {
  console.log('decode', offset, string);
  return 'a';
};

const cipher = {
  "encode": encodeFunction,
  "decode": decodeFunction,
};*/


export default cipher;

document.getElementById("cifrar").addEventListener("click",function(){
  let text = document.getElementById("message").value;
  console.log(text)
});
/*,true)
  let displacement = document.getElementById("displacement").value;
 document.getElementById("messageTwo").value=
 cifrar(text,displacement);

function cifrar(text,displacement){
  let resultado="";
  const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  dislacement=(displacement%26+26)%26;
    for(let i=0;i<text.lenght;i++){
    if(letters.indexOf(text[i])!=-1){
      let position= (letters.indexOf(text[i])+displacement)%26;
      resualtado+=letters[position];
    }
    else {
    resualtado+= text[i];
    }
   return resualtado;
}}})
console.log (resualtado); */