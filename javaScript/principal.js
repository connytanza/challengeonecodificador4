const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const copiar = document.getElementById("copiar");
const pegar = document.getElementById("pegar");
const limpiar = document.getElementById("limpiar");
const textonoEncriptado = document.querySelector(".texto-desencriptar");
const textoEncriptado = document.querySelector(".texto-resultado");
const textoValidacion = document.querySelector(".resultado");
const alerta = document.querySelector(".alerta");
const alertaError = document.querySelector(".alerta-error");
var textoCopia ="";

encriptar.addEventListener("click",() => {
  let contenido = document.getElementById("texto-desencriptar").value;
  const mapa = {a:"ai",e:"enter",i:"imes",o:"ober",u:"ufat"};
  const valida = /[A-ZáéíóúÁÉÍÓÚñ!"·$%&/()=?¿^\d*¨;:`+´,./*-_]/gm.test(contenido); 
  if (!valida&&contenido.length>0) { 
    contenido = contenido.replace(/a|e|i|o|u/gm,(matched)=> {return mapa[matched];}); 
    resultado(contenido); 
  } else {
    mostrarAlerta(); 
  }
});

desencriptar.addEventListener("click", () => {
  let texto = document.getElementById("texto-desencriptar").value; 
  const mapa = {ai:"a",enter:"e",imes:"i",ober:"o",ufat:"u"}; 
  const valida = /[A-ZáéíóúÁÉÍÓÚñ\d!"·$%&/()=?¿^*¨;:`+´,./*-_]/gm.test(texto); 
  if (!valida&&texto.length>0) { 
    texto = texto.replace(/enter|imes|ai|ober|ufat/gm,(matched) => {return mapa[matched];}); 
    resultado(texto); 
  } else {
    mostrarAlerta(); 
  } 
});

limpiar.addEventListener("click", () =>{
  textonoEncriptado.value = "";
  textoEncriptado.value = "";
  limpiar.textContent = "texto borrado"; 
  window.setTimeout(() => {limpiar.textContent = "borrar";},500); 
  alerta.style.display = "block"
  textoValidacion.style.display = "block";
  alertaError.style.display = "none";
  textoEncriptado.style.display = "none";
  copiar.style.display = "none";
  pegar.style.display = "none";
});

copiar.addEventListener("click", () => {
  textoCopia = textoEncriptado.value;
  navigator.clipboard.writeText(textoCopia).then(() => { 
    copiar.textContent = "texto copiado";
    window.setTimeout(() => {copiar.textContent = "copiar";},500); return textoCopia;
  });
});

pegar.addEventListener("click", () =>{
  textonoEncriptado.value = textoCopia; 
  console.log(textoCopia);
  pegar.textContent = "texto pegado"; 
  window.setTimeout(() => {pegar.textContent = "pegar";},500); 
});

const resultado = (entrada) => {
  textoEncriptado.value = entrada;
  textoEncriptado.style.display = "block";
  copiar.style.display = "block";
  pegar.style.display = "block";
  limpiar.style.display = "block";
  textoValidacion.style.display = "none";
  alertaError.style.display = "none";
};

const mostrarAlerta = () => {
  alertaError.style.display = "block";
  alerta.style.display = "none";
  copiar.style.display = "none";
  pegar.style.display = "none";
  textoEncriptado.style.display = "none";
  textoValidacion.style.display = "block";
};
