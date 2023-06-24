document.querySelector("#toggle").addEventListener("click", function() {
    const cuerpo = document.body;
    if (cuerpo.classList.contains("modo-oscuro")) {
        cuerpo.classList.remove("modo-oscuro");
        this.innerHTML = "Cambiar a modo oscuro";
    } else {
        cuerpo.classList.add("modo-oscuro");
        this.innerHTML = "Cambiar a modo claro";
    }
});


