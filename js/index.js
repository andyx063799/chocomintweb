let isTransitioning = false;

function switchTab(tab) {
    if (isTransitioning) return;

    const botView = document.getElementById('bot-view');
    const comunidadView = document.getElementById('comunidad-view');
    const btnBot = document.getElementById('btn-bot');
    const btnComunidad = document.getElementById('btn-comunidad');
    const navFeatures = document.getElementById('nav-features-link');

    const activeBtnClass = "bg-[#2a2020] text-brand-mint shadow-lg cursor-pointer border-none py-1.5 px-5 rounded-full text-sm font-semibold transition-all cubic-bezier(0.2,0.8,0.2,1) duration-350";
    const inactiveBtnClass = "bg-transparent text-[#a1a1aa] hover:text-[#f5f5f5] cursor-pointer border-none py-1.5 px-5 rounded-full text-sm font-semibold transition-all cubic-bezier(0.2,0.8,0.2,1) duration-350";

    if (tab === 'bot' && botView.classList.contains('hidden')) {
        isTransitioning = true;
        
        comunidadView.classList.remove('animate-tab-enter');
        comunidadView.classList.add('animate-tab-exit');
        
        btnBot.className = activeBtnClass;
        btnComunidad.className = inactiveBtnClass;
        if(navFeatures) navFeatures.classList.remove('opacity-0', 'pointer-events-none');

        setTimeout(() => {
            comunidadView.classList.remove('block', 'animate-tab-exit');
            comunidadView.classList.add('hidden');
            
            botView.classList.remove('hidden');
            botView.classList.add('block', 'animate-tab-enter');
            isTransitioning = false;
        }, 180);

    } else if (tab === 'comunidad' && comunidadView.classList.contains('hidden')) {
        isTransitioning = true;

        botView.classList.remove('animate-tab-enter');
        botView.classList.add('animate-tab-exit');
        
        btnComunidad.className = activeBtnClass;
        btnBot.className = inactiveBtnClass;
        if(navFeatures) navFeatures.classList.add('opacity-0', 'pointer-events-none');

        setTimeout(() => {
            botView.classList.remove('block', 'animate-tab-exit');
            botView.classList.add('hidden');
            
            comunidadView.classList.remove('hidden');
            comunidadView.classList.add('block', 'animate-tab-enter');
            isTransitioning = false;
        }, 180);
    }
}