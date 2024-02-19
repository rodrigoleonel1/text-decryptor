// una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:

// Debe funcionar solo con letras minúsculas
// No deben ser utilizados letras con acentos ni caracteres especiales
// Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

// La página debe tener campos para
// inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
// El resultado debe ser mostrado en la pantalla.
// Extras:

// Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.

const result = document.getElementById("result");
const noResult = document.getElementById("no-result");
const outputText = document.getElementById("outputText");

function encrypt() {
  const inputText = document.getElementById("inputText").value;
  const mapping = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  noResult.style.display = "none";
  result.style.display = "flex";
  outputText.innerHTML = inputText.replace(
    /[eioua]/g,
    (match) => mapping[match]
  );
}

function decrypt() {
  const inputText = document.getElementById("inputText").value;
  const reverseMapping = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  noResult.style.display = "none";
  result.style.display = "flex";

  outputText.innerHTML = inputText.replace(
    /(enter|imes|ai|ober|ufat)/g,
    (match) => reverseMapping[match]
  );
}

function copyToClipboard() {
  const outputText = document.getElementById("outputText");
  navigator.clipboard.writeText(outputText.innerHTML);
  alert("Texto copiado al portapapeles.");
}
