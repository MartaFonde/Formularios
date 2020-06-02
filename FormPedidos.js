function validarForm() {
    var fallos = 0;
    var envio = true;
    if (!precio()) {
        fallos++;
        envio = false;
    }
    if (!cantidad()) {
        fallos++;
        envio = false;
    }
    if (!descuento()) {
        fallos++;
        envio = false;
    }
    if (!descuento()) {
        fallos++;
        envio = false;
    }
    if (!iva()) {
        fallos++;
        envio = false;
    }
    if (fallos == 0 && envio) {
        var precioF = parseInt(document.getElementById("precio").value);
        var ivaF = parseInt(document.getElementById("iva").value) / 100;
        var descuentoF = parseInt(document.getElementById("descuento").value);
        var cantF = parseInt(document.getElementById("cant").value);
        var envioF = parseInt(envioSelec());
        var precioTotal = ((precioF + precioF * ivaF) - descuentoF) * cantF + envioF;
        if (precioTotal < 0) {
            alert("Artículos GRATIS!!");
        } else {
            alert("Precio total: " + precioTotal);
        }
    }

    return envio;
}

function precio() {
    var precio = document.getElementById("precio").value;
    if (precio.length == 0) {
        document.getElementById("compPrecio").innerHTML = "Este campo no puede estar vacío";
        return false;
    }
    if (isNaN(precio)) {
        document.getElementById("compPrecio").innerHTML = "Tiene que ser número";
        return false;
    }
    if (precio.length > 5) {
        document.getElementById("compPrecio").innerHTML = "Máx 5 caracteres";
        return false;
    }
    return true;
}

function cantidad() {
    var cantidad = document.getElementById("cant").value;
    if (cantidad.length == 0) {
        document.getElementById("compCant").innerHTML = "Este campo no puede estar vacío";
        return false;
    }
    if (isNaN(cantidad)) {
        document.getElementById("compCant").innerHTML = "Tiene que ser número";
        return false;
    }
    if (cantidad.length > 5) {
        document.getElementById("compCant").innerHTML = "Máx 5 caracteres";
        return false;
    }
    return true;
}

function descuento() {
    var descuento = document.getElementById("descuento").value;
    if (descuento.length == 0) {
        document.getElementById("compDesc").innerHTML = "Este campo no puede estar vacío";
        return false;
    }
    if (isNaN(descuento)) {
        document.getElementById("compDesc").innerHTML = "Tiene que ser número";
        return false;
    }
    if (descuento.length > 5) {
        document.getElementById("compDesc").innerHTML = "Máx 5 caracteres";
        return false;
    }
    return true;
}

function iva() {
    var iva = document.getElementById("iva").value;
    if (iva.length == 0) {
        document.getElementById("compIva").innerHTML = "Este campo no puede estar vacío";
        return false;
    }
    if (isNaN(iva)) {
        document.getElementById("compIva").innerHTML = "IVA tiene que ser un número";
        return false;
    }
    if (iva.length > 3) {
        document.getElementById("compIva").innerHTML = "Máx 3 caract";
        return false;
    }
    return true;
}

function envioSelec() {
    var lista = document.getElementById("envio");
    var valorSeleccionado = lista.options[lista.selectedIndex].value;
    return valorSeleccionado;
}