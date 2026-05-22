tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            bgMain: '#120e0e',
                            bgSurface: '#1c1616',
                            mint: '#a3e4d7',
                            mintHover: '#82c9bb',
                            textPrimary: '#f5f5f5',
                            textSecondary: '#a1a1aa',
                        }
                    },
                    animation: {
                        'mint-pulse': 'mintGlowPulse 8s ease-in-out infinite',
                        'tab-enter': 'tabEnter 0.4s cubic-bezier(0.34, 1.3, 0.64, 1) forwards',
                        'tab-exit': 'tabExit 0.25s cubic-bezier(0.25, 1, 0.5, 1) forwards',
                    },
                    keyframes: {
                        mintGlowPulse: {
                            '0%, 100%': { opacity: '0.6', transform: 'scale(1) translate(0px, 0px)' },
                            '33%': { opacity: '0.9', transform: 'scale(1.05) translate(15px, -10px)' },
                            '66%': { opacity: '0.7', transform: 'scale(0.95) translate(-10px, 10px)' },
                        },
                        tabEnter: {
                            '0%': { opacity: '0', transform: 'translateY(12px) scale(0.99)' },
                            '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
                        },
                        tabExit: {
                            '0%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                            '100%': { opacity: '0', transform: 'translateY(-8px) scale(0.99)' }
                        }
                    }
                }
            }
        }