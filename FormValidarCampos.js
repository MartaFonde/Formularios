function validar() {
    var envio = true;
    var fallos = 0;
    if (!validarNombre()) {
        envio = false;
        fallos++;
    }
    if (!validarApellidos()) {
        envio = false;
        fallos++;
    }
    if (!validarEmail()) {
        envio = false;
        fallos++;
    }
    if (!validarPass()) {
        envio = false;
        fallos++;
    }
    if (!validarSexo()) {
        envio = false;
        fallos++;
    }
    if (!validarIntereses()) {
        envio = false;
        fallos++;
    }
    if (fallos == 6) {
        alert("¡No has introducido nada!");
    }
    if (envio && fallos == 0) {
        alert(validarIntereses());
    }
    return envio;
}

function validarNombre() {
    var nombre = document.getElementById("nombre");
    if (nombre.value == "") {
        document.getElementById("nom").innerHTML = "Este campo no puede estar vacío";
        return false;
    }
    return true;
}

function validarApellidos() {
    var apellidos = document.getElementById("apellidos");
    if (apellidos.value == "") {
        document.getElementById("apel").innerHTML = "Este campo no puede estar vacío";
        return false;
    }
    return true;
}

function validarEmail() {
    var correoE = document.getElementById("email").value;
    var formato = false;
    if (correoE == "") {
        document.getElementById("correo").innerHTML = "Este campo no puede estar vacío";
        return false;
    }
    if (correoE.includes('@') && correoE.includes('.')) {
        formato = true;
        return true;
    }
    if (!formato) {
        document.getElementById("correo").innerHTML = "El email no es válido";
        return false;
    }
}

function validarPass() {
    var pass = document.getElementById("pass").value;
    var numero = false;
    if (pass == "") {
        document.getElementById("cont").innerHTML = "Este campo no puede estar vacío";
        return false;
    }

    if (!NaN(pass)) {
        numero = true;
    }

    if (!numero) {
        document.getElementById("cont").innerHTML = "No has introducido número. Contraseña no válida."
        return false;
    }
    return true;
}

function validarSexo() {
    var elementos = document.getElementsByName("sexo");
    var seleccionado = false;
    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].checked) {
            seleccionado = true;
        }
    }
    if (!seleccionado) {
        document.getElementById("sexo").innerHTML = "Este campo no puede estar vacío";
        return false;
    }
    return true;
}

function validarIntereses() {
    var elementos = document.getElementsByClassName("hobby");
    var seleccion = [];
    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].checked) {
            seleccion.push(elementos[i].value);
        }
    }
    if (seleccion.length == 0) {
        document.getElementById("intereses").innerHTML = "Este campo no puede estar vacío";
        return false;
    } else {
        return seleccion.toString();
    }
}