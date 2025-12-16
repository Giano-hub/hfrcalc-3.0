// Funzione per aggiornare i danni percentuali per tutti i Pokémon attivi
function updateChipDamageMulti() {
    if (!window.PC) return;

    // Funzione interna per calcolare le frazioni di HP
    function calcFractions(hp) {
        return {
            sixteenth: Math.floor(hp / 16),
            eighth:     Math.floor(hp / 8),
            sixth:      Math.floor(hp / 6),
            fourth:     Math.floor(hp / 4)
        };
    }

    // Aggiorna la tabella per i Pokémon del giocatore
    PC.player.forEach((poke, index) => {
        if (!poke) return;
        const fractions = calcFractions(poke.hp || 0);
        const suffix = index > 0 ? `-${index+1}` : '';

        const mapping = {
            'player-sixteenth': fractions.sixteenth,
            'player-eighth': fractions.eighth,
            'player-sixth': fractions.sixth,
            'player-fourth': fractions.fourth
        };

        for (const id in mapping) {
            const elem = document.getElementById(id + suffix);
            if (elem) elem.textContent = mapping[id];
        }
    });

    // Aggiorna la tabella per i Pokémon dell'avversario
    PC.opponent.forEach((poke, index) => {
        if (!poke) return;
        const fractions = calcFractions(poke.hp || 0);
        const suffix = index > 0 ? `-${index+1}` : '';

        const mapping = {
            'opposing-sixteenth': fractions.sixteenth,
            'opposing-eighth': fractions.eighth,
            'opposing-sixth': fractions.sixth,
            'opposing-fourth': fractions.fourth
        };

        for (const id in mapping) {
            const elem = document.getElementById(id + suffix);
            if (elem) elem.textContent = mapping[id];
        }
    });
}

// Aggiorna ogni 500ms per sincronizzarsi con le selezioni
setInterval(updateChipDamageMulti, 500);


