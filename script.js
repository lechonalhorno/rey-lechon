document.addEventListener("DOMContentLoaded", () => {
    const especificar = document.getElementById("especificar");
    const completo = document.getElementById("completo");
    const detalles = document.getElementById("detalles");

    especificar.addEventListener("change", () => {
        detalles.style.display = "block";
    });
    completo.addEventListener("change", () => {
        detalles.style.display = "none";
    });

    document.getElementById("formReserva").addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const fecha = document.getElementById("fecha").value;
        const hora = document.getElementById("hora").value;
        const comida = document.getElementById("comida").value;
        const platos = document.getElementById("platos").value;
        const tipo = document.querySelector("input[name='tipo']:checked").value;
        const extra = detalles.value.trim();

            let mensaje = `*📌 Nueva Reserva*`;
    mensaje += `👤 Nombre:${nombre}`;
    mensaje += `📅 Fecha:${fecha}`;
    mensaje += `⏰ Hora:${hora}`;
    mensaje += `🍽 Comida:${comida}`;
    mensaje += `🍲 Número de platos: ${platos}`;
    mensaje += `🥗 Tipo de plato: ${tipo}`;

    if (tipo === "Especificar" && extra !== "") {
        mensaje += `📝 detalle ${extra}%0A`;
    }
        const telefono ="59176705083"

    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,"_blank");

   
    });
});