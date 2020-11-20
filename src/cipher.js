const encodeFunction = (offset, string) => {
  console.log(3, offset, string);}
  /*declaro la función*/

/*export default cipher;*/

document.getElementById("cifrar").addEventListener("click",function(){
  let text = document.getElementById("message").value;
  console.log(1,text)
  let offset = document.getElementById("number").value;
  console.log(2,offset)

  encodeFunction(offset,text)
/*invocamos a la función*/
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