
function comprarProducto(nombre, precio) {
    const confirmar = confirm(
        "Producto: " + nombre +
        "\nPrecio: $" + precio.toLocaleString("es-CO") +
        "\n\n¿Quieres realizar este pedido?"
    );

    if (confirmar) {
        const mensaje =
            "Hola, quiero comprar:" +
            "\nProducto: " + nombre +
            "\nPrecio: $" + precio.toLocaleString("es-CO");

        const numeroWhatsApp = "573243213664";

        const enlace =
            "https://wa.me/" + numeroWhatsApp +
            "?text=" + encodeURIComponent(mensaje);

        window.open(enlace, "_blank");
    }
}