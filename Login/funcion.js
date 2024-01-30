function ingresar() {
    const paginaActual = document.querySelector('.titulo');
    const paginaSiguiente = document.querySelector('.cargando');

    // Agregar clase para el efecto de brillo
    document.body.classList.add('brillo');

    // Desplazamiento hacia abajo
    setTimeout(() => {
        window.scrollBy(0, window.innerHeight);
    }, 500); // Ajusta el tiempo según sea necesario

    // Ocultar la página actual y mostrar la siguiente
    setTimeout(() => {
        paginaActual.style.display = 'none';
        paginaSiguiente.style.display = 'block';
    }, 1000); // Ajusta el tiempo según sea necesario
}
