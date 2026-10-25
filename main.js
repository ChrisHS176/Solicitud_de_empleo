function obtenerdatos() {
    var nombre = document.getElementById('nombre').value.trim();

    if (nombre === "") {
        alert("El nombre es obligatorio");
        document.getElementById('nombre').focus();
        return;
    }

    var radio1 = document.getElementById('radio1');
    var radio2 = document.getElementById('radio2');
    var radio3 = document.getElementById('radio3');

    if (!radio1.checked && !radio2.checked && !radio3.checked) {
        alert("Selecciona un estado civil");
        return;
    }

    document.registro.nombreobtenido.value = nombre;

    if (radio1.checked) {
        document.registro.estadocivil.value = "Soltero(a)";
    }
    if (radio2.checked) {
        document.registro.estadocivil.value = "Casado(a)";
    }
    if (radio3.checked) {
        document.registro.estadocivil.value = "Otro";
    }

    var sub1 = document.getElementById('check1');
    var sub2 = document.getElementById('check2');
    var sub3 = document.getElementById('check3');
    var sub4 = document.getElementById('check4');
    var habilidades = [];

    if (sub1.checked) habilidades.push(sub1.value);
    if (sub2.checked) habilidades.push(sub2.value);
    if (sub3.checked) habilidades.push(sub3.value);
    if (sub4.checked) habilidades.push(sub4.value);

    document.registro.tushabilidades.value = habilidades.join(", ");

    var sub1 = document.getElementById('check1');
    var sub2 = document.getElementById('check2');
    var sub3 = document.getElementById('check3');
    var sub4 = document.getElementById('check4');

    if (!sub1.checked && !sub2.checked && !sub3.checked && !sub4.checked) {
        alert("Selecciona al menos una habilidad");
        return;
    }

    var dato = document.getElementById("tienda");
    var suc = dato.options[dato.selectedIndex].value;
    document.registro.tusucursal.value = suc;
}