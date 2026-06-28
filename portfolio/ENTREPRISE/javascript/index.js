// fonction pour le defilement du header

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Attendre le chargement complet du DOM
document.addEventListener('DOMContentLoaded', function() {

    const btnAvec = document.getElementById('btn-avec');
    const btnSans = document.getElementById('btn-sans');

    // Récupérer tous les éléments de prix
    const basicPrice = document.querySelector('.basic-plan .plan-price');
    const comfortPrice = document.querySelector('.comfort-plan .plan-price');
    const ultimatePrice = document.querySelector('.ultimate-plan .plan-price');

    if (!btnAvec || !btnSans || !basicPrice || !comfortPrice || !ultimatePrice) {
        console.error('Éléments requis non trouvés');
        return;
    }

    const prices = {
        avec: {
            basic: '19,99€/mois',
            comfort: '29,99€/mois',
            ultimate: '39,99€/mois'
        },
        sans: {
            basic: '24,99€/mois',
            comfort: '34,99€/mois',
            ultimate: '44,99€/mois'
        }
    };

    // Fonction pour mettre à jour les prix
    function updatePrices(type) {
        basicPrice.textContent = prices[type].basic;
        comfortPrice.textContent = prices[type].comfort;
        ultimatePrice.textContent = prices[type].ultimate;
    }

    // Fonction pour basculer le button
    function toggleActiveButton(activeBtn, inactiveBtn) {
        activeBtn.classList.add('active');
        inactiveBtn.classList.remove('active');
    }

    btnAvec.addEventListener('click', function() {
        updatePrices('avec');
        toggleActiveButton(btnAvec, btnSans);
    });

    btnSans.addEventListener('click', function() {
        updatePrices('sans');
        toggleActiveButton(btnSans, btnAvec);
    });

    // Avec engagement est l'option par defaut
    btnAvec.classList.add('active');
});