var contraseña;
var erroCaract = true;
var erroMayus = true;
var erroNumero = true;

function validacionContraseña(evento) {
    var e = evento || window.event;

    contraseña = document.getElementById("contraseña").value;
    if (e.key.length == 1) {
        contraseña = contraseña.concat(e.key);
    }
    numCaracteres();
    mayuscula();
    numero();
    requisitos(erroCaract, erroMayus, erroNumero);
}

function requisitos(erroCaract, erroMayus, erroNumero) {
    if (erroCaract) {
        document.getElementById("caracteres").innerHTML = "La contraseña tiene que tener 8 caracteres";
    } else {
        document.getElementById("caracteres").innerHTML = "";
    }
    if (erroMayus) {
        document.getElementById("mayus").innerHTML = "Debe tener mínimo una mayúscula";
    } else {
        document.getElementById("mayus").innerHTML = "";
    }
    if (erroNumero) {
        document.getElementById("num").innerHTML = "Debe contener mínimo un número";
    } else {
        document.getElementById("num").innerHTML = "";
    }
    if (!erroCaract && !erroMayus && !erroNumero) {
        document.getElementById("valida").innerHTML = "Contraseña válida";
    } else {
        document.getElementById("valida").innerHTML = "";
    }
}

function numCaracteres() {
    if (contraseña.length == 8) {
        erroCaract = false;
    } else {
        erroCaract = true;
    }
}

function mayuscula() {
    var numMayus = 0;
    for (var i = 0; i < contraseña.length; i++) {
        if (contraseña.charAt(i) >= 'A' && contraseña.charAt(i) <= 'Z') {
            numMayus++;
        }
    }
    if (numMayus > 0) {
        erroMayus = false;
    } else {
        erroMayus = true;
    }
}

function numero() {
    var num = 0;
    for (var i = 0; i < contraseña.length; i++) {
        if (!isNaN(contraseña.charAt(i))) {
            num++;
        }
    }
    if (num > 0) {
        erroNumero = false;
    } else {
        erroNumero = true;
    }
}