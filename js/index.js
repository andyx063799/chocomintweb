function switchTab(tab) {
    // Elementos de vistas
    const botView = document.getElementById('bot-view');
    const comunidadView = document.getElementById('comunidad-view');
    // Botones
    const btnBot = document.getElementById('btn-bot');
    const btnComunidad = document.getElementById('btn-comunidad');
    // Enlace del menú
    const navFeatures = document.getElementById('nav-features-link');

    if (tab === 'bot') {
        botView.classList.add('active');
        comunidadView.classList.remove('active');
        btnBot.classList.add('active');
        btnComunidad.classList.remove('active');
        navFeatures.style.visibility = 'visible'; // Muestra características
    } else {
        comunidadView.classList.add('active');
        botView.classList.remove('active');
        btnComunidad.classList.add('active');
        btnBot.classList.remove('active');
        navFeatures.style.visibility = 'hidden'; // Oculta características en comunidad
    }
    // Resetear scroll al inicio al cambiar
    window.scrollTo({ top: 0, behavior: 'smooth' });
}