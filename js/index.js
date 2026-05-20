function switchTab(tab) {
    const botView = document.getElementById('bot-view');
    const comunidadView = document.getElementById('comunidad-view');
    const btnBot = document.getElementById('btn-bot');
    const btnComunidad = document.getElementById('btn-comunidad');
    const navFeatures = document.getElementById('nav-features-link');

    if (tab === 'bot') {
        botView.classList.add('active');
        comunidadView.classList.remove('active');
        btnBot.classList.add('active');
        btnComunidad.classList.remove('active');
        navFeatures.style.visibility = 'visible'; 
    } else {
        comunidadView.classList.add('active');
        botView.classList.remove('active');
        btnComunidad.classList.add('active');
        btnBot.classList.remove('active');
        navFeatures.style.visibility = 'hidden'; 
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}