function validarForm() {
    var envio = true;
    var fallos = 0;
    if (!nombre()) {
        envio = false;
        fallos++;
    }
    if (!email()) {
        envio = false;
        fallos++;
    }
    if (!telefono()) {
        envio = false;
        fallos++;
    }
    if (!mensaje()) {
        envio = false;
        fallos++;
    }
    if (envio) {
        alert("El mensaje " + document.getElementById("textarea").value + " fue enviado por " +
            document.getElementById("nombre").value + ", " + document.getElementById("tlf").value + " Su email es: " +
            document.getElementById("email").value + ". Enviado el 31/12/1984");
    }
    return envio;
}

function nombre() {
    var nombre = document.getElementById("nombre").value;
    if (nombre.length == 0) {
        document.getElementById("nom").innerHTML = "Este campo no puede estar vacío";
        return false;
    }
    return true;
}

function email() {
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        document.getElementById("correo").innerHTML = "Este campo no puede estar vacío";
        return false;
    }
    if (email.includes('@') && email.includes('.')) {
        return true;
    } else {
        document.getElementById("correo").innerHTML = "Email no válido";
        return false;
    }
}

function telefono() {
    var tlf = document.getElementById("tlf").value;
    if (tlf.length == 0) {
        document.getElementById("telef").innerHTML = "Este campo no puede estar vacío";
        return false;
    }
    if (isNaN(tlf)) {
        document.getElementById("telef").innerHTML = "Teléfono no válido";
        return false;
    }
    return true;
}

function mensaje() {
    var mensaje = document.getElementById("textarea").value;
    if (mensaje.length == 0) {
        document.getElementById("texto").innerHTML = "Este campo no puede estar vacío";
        return false;
    }
    return true;
}