function encriptar(){
    var texto = String(document.getElementById("texto-entrada").value);
    var texto_encriptado = "";
    var letra = "";
    for (var i = 0; i < texto.length;  i++){
        letra = texto.charAt(i);
        if (letra == "a") {
            texto_encriptado += "ai";
        } else if (letra == "e") {
            texto_encriptado += "enter";
        } else if (letra == "i") {
            texto_encriptado += "imes";
        } else if (letra == "o") {  
            texto_encriptado += "ober";
        } else if (letra == "u") {
            texto_encriptado += "ufat";
        } else {
            texto_encriptado += letra;
        }
    }
    document.getElementById("texto-salida").value = texto_encriptado;
}

function desencriptar(){
    var texto = String(document.getElementById("texto-entrada").value);
    var texto_desencriptado = "";
    var letra = "";
    var i = 0;
    while (i < texto.length){
        letra = texto.charAt(i);
        if (letra == "a" && texto.substring(i,i+2) == "ai") {
            texto_desencriptado += "a";
            i += 2;
        } else if (letra == "e" && texto.substring(i,i+5) == "enter") {
            texto_desencriptado += "e";
            i += 5;
        } else if (letra == "i" && texto.substring(i,i+4) == "imes") {
            texto_desencriptado += "i";
            i += 4;
        } else if (letra == "o" && texto.substring(i,i+4) == "ober") {  
            texto_desencriptado += "o";
            i += 4;
        } else if (letra == "u" && texto.substring(i,i+5) == "ufat") {
            texto_desencriptado += "u";
            i += 5;
        } else {
            texto_desencriptado += letra;
            i += 1;
        }
    }
    document.getElementById("texto-salida").value = texto_desencriptado;
}

function copiar() {
    let textarea = document.getElementById("texto-salida");
    textarea.select();
    document.execCommand("copy");
}