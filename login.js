const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    var usuario = document.getElementById('username').value;
    if(usuario.length == 0) {
    alert('No has escrito nada en el usuario');
    return;
    }

    var clave = document.getElementById('password').value;
    if (clave.length < 3) {
    alert('La clave no es válida');
    return;
    }

    if (usuario === "admin" && clave === "12345") {
    const ir = confirm("Inicio de sesión correcto.\n\n¿Deseas ir al panel principal?");
    if (ir) {
        window.location.href = "index.html";
    } else {
        window.location.href = "login.html";
    }
    } else {
    const ir = confirm("Inicio de sesión incorrecto.\n\n¿Deseas intentarlo de nuevo?");
    if (ir) {
        window.location.href = "login.html";
    } else {
        window.location.href = "index.html";
    }
    }
});