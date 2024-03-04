const toggleIcon = document.getElementById('toggleIcon');
    const annuallyPrices = document.querySelectorAll('.price-container.annually h3');
    const monthlyPrices = document.querySelectorAll('.price-container.monthly h3');

    // Ajout des écouteurs d'événements
    toggleIcon.addEventListener('click', () => {
      toggleIcon.classList.toggle('active');
      annuallyPrices.forEach(price => price.parentElement.classList.toggle('active'));
      monthlyPrices.forEach(price => price.parentElement.classList.toggle('active'));
    });