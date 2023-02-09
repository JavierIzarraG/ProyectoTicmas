const button = document.querySelector("#boton");
button.addEventListener("click", function() {
        window.open("Certificados.pdf");
});

document.getElementById("contacto").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = 'mailto:harvey.knight@example.com';
});