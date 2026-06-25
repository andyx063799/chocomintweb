/* ============================================
   FIFA World Cup 2026 — Efectos
   =========================================== */

(function () {
    'use strict';

    /* ── Confetti ──────────────── */

    const WC_COLORS = [
        '#FFD700', 
        '#D4AF37', 
        '#CE1126', 
        '#006847', 
        '#0A3161', 
        '#FFFFFF', 
        '#FF006E', 
        '#00B4D8', 
        '#FF8C00', 
        '#F4E18F', 
    ];

    const CONFETTI_COUNT = 45;
    const FALL_VARIANTS = 3;

    // - Creamos el contenedor del confetti
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'wc-confetti-container';
    confettiContainer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(confettiContainer);

    // - Generamos con un ciclo for el efecto
    for (let i = 0; i < CONFETTI_COUNT; i++) {
        const piece = document.createElement('div');
        piece.className = 'wc-confetti-piece';

        const size = Math.random() * 7 + 3;          // 3–10px
        const color = WC_COLORS[Math.floor(Math.random() * WC_COLORS.length)];
        const left = Math.random() * 100;             // 0–100%
        const duration = Math.random() * 6 + 5;       // 5–11s
        const delay = Math.random() * 12;              // staggered start 0–12s
        const fallVariant = Math.ceil(Math.random() * FALL_VARIANTS);
        const shapeRoll = Math.random();

        let width = size;
        let height = size;
        let borderRadius = '2px';

        if (shapeRoll > 0.7) {
            borderRadius = '50%';               
        } else if (shapeRoll > 0.4) {
            height = size * 0.4;                 
            borderRadius = '1px';
        }

        piece.style.cssText =
            'left:' + left + '%;' +
            'width:' + width + 'px;' +
            'height:' + height + 'px;' +
            'background:' + color + ';' +
            'border-radius:' + borderRadius + ';' +
            'animation:wc-fall-' + fallVariant + ' ' + duration + 's linear ' + delay + 's infinite;' +
            'opacity:0;';

        confettiContainer.appendChild(piece);
    }

    var BALL_SVG =
        '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">' +
            '<circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" stroke-width="3"/>' +
            '<polygon points="100,18 125,48 115,82 85,82 75,48" opacity="0.6"/>' +
            '<polygon points="162,68 178,102 160,132 130,118 138,82" opacity="0.6"/>' +
            '<polygon points="38,68 62,82 70,118 40,132 22,102" opacity="0.6"/>' +
            '<polygon points="58,152 82,132 118,132 142,152 128,185 72,185" opacity="0.6"/>' +
            '<polygon points="155,158 140,140 148,118 172,115 185,138" opacity="0.4"/>' +
            '<polygon points="45,158 15,138 28,115 52,118 60,140" opacity="0.4"/>' +
        '</svg>';

    var ballPositions = [
        { className: 'wc-ball wc-ball--1' },
        { className: 'wc-ball wc-ball--2' },
        { className: 'wc-ball wc-ball--3' },
    ];

    ballPositions.forEach(function (pos) {
        var ballEl = document.createElement('div');
        ballEl.className = pos.className;
        ballEl.setAttribute('aria-hidden', 'true');
        ballEl.innerHTML = BALL_SVG;
        document.body.appendChild(ballEl);
    });

})();
