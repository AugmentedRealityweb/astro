// Exemplu de cod JavaScript pentru navigarea între zodii

const zodiacCards = document.querySelectorAll('.zodiac-card');

zodiacCards.forEach(card => {
    card.addEventListener('click', () => {
        // Afișați informații specifice despre zodia selectată
        const zodiacSign = card.querySelector('h2').textContent;
        console.log('Zodia selectată:', zodiacSign);

        // Puteți folosi JavaScript pentru a afișa o modală sau o altă secțiune a paginii cu informații despre zodia selectată.
    });
});
