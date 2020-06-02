var seleccionado;
var valido = false;

function resultado() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;

    valido = op1(n1);
    valido = op2(n2);
    if (valido) {
        var elementos = document.getElementsByName("operacion");
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].checked) {
                seleccionado = elementos[i].value;
            }
        }
        operaciones(seleccionado, n1, n2);
        return true;
    } else {
        return false;
    }
}

function op1(n1) {
    if (n1.length == 0) {
        document.getElementById("erroN1").innerHTML = "Este campo no puede estar vacío";
        return false;
    } else {
        return true;
    }
}

function op2(n2) {
    if (n2.length == 0) {
        document.getElementById("erroN2").innerHTML = "Este campo no puede estar vacío";
        return false;
    } else {
        return true;
    }
}

function operaciones(seleccionado, n1, n2) {
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    switch (seleccionado) {
        case "suma":
            document.getElementById("resultado").innerHTML = "Resultado = " + (n1 + n2);
            break;
        case "resta":
            document.getElementById("resultado").innerHTML = "Resultado = " + (n1 - n2);
            break;
        case "multiplicacion":
            document.getElementById("resultado").innerHTML = "Resultado = " + (n1 * n2);
            break;
        case "division":
            if (n2 == 0) {
                alert("No es posible realizar división entre cero");
                break;
            } else {
                document.getElementById("resultado").innerHTML = "Resultado = " + (n1 / n2);
                break;
            }
    }
}