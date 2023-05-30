function encryptText() {
    var inputTextArea = document.getElementById("inputTextArea");
    var outputTextArea = document.getElementById("outputTextArea");
    var message = inputTextArea.value;
    if (message === "") {
        alert("Debes ingresar un texto")
        outputTextArea.value ="Nober enterncoberntraimobers naidai pairai enterncrimesptair"
    } else{
    // Apply encryption rules
    message = message.replace(/e/g, "enter");
    message = message.replace(/i/g, "imes");
    message = message.replace(/a/g, "ai");
    message = message.replace(/o/g, "ober");
    message = message.replace(/u/g, "ufat");

    outputTextArea.value = message;
    inputTextArea.value = "";
    outputTextArea.style.backgroundImage = "none";
    }
}

function decryptText() {
    var inputTextArea = document.getElementById("inputTextArea");
    var outputTextArea = document.getElementById("outputTextArea");
    var message = inputTextArea.value;
    if (message === "") {
        alert("Debes ingresar un texto")
        outputTextArea.value ="No encontramos nada para desencriptar"
    } else{

    // Apply decryption rules
    message = message.replace(/enter/g, "e");
    message = message.replace(/imes/g, "i");
    message = message.replace(/ai/g, "a");
    message = message.replace(/ober/g, "o");
    message = message.replace(/ufat/g, "u");

    outputTextArea.value = message;
    inputTextArea.value = "";
    outputTextArea.style.backgroundImage = "none";
    }
}

function copyText() {
    var outputTextArea = document.getElementById("outputTextArea");
    outputTextArea.select();
    outputTextArea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}