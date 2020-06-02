function validarForm() {
    var envio = true;
    var fallos = 0;
    var valorSeleccionado;

    if (!validarNombre()) {
        envio = false;
        fallos++;
    }

    if (!validarTelefono()) {
        envio = false;
        fallos++;
    }

    if (!validarSelect()) {
        envio = false;
        fallos++;
    }

    if (envio && fallos == 0) {
        alert("Bien hecho");
    } else {
        alert("Carapan");
    }

    return envio;
}

function validarNombre() {
    var nombre = document.getElementById("nombre").value;
    if (nombre == "") {
        document.getElementById("falloNombre").innerHTML = "Este campo no puede estar vacío";
        return false;
    }
    return true;
}

function validarTelefono() {
    var telefono = document.getElementById("telefono").value;
    if (telefono == "") {
        document.getElementById("falloTelefono").innerHTML = "Este campo no puede estar vacío";
        return false;
    }
    return true;
}

function validarSelect() {
    var seleccion = document.getElementById("opciones");
    valorSeleccionado = seleccion.options[seleccion.selectedIndex].value;
    if (valorSeleccionado == "") {
        document.getElementById("falloSelect").innerHTML = "Este campo no puede estar vacío";
        return false;
    } else {
        document.getElementById("area").value = valorSeleccionado;
    }
    return true;
}