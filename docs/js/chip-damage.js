// Funzione per aggiornare i danni percentuali per i Pokémon attivi
function updateChipDamage() {
    if (!window.PC) return;

    // Funzione per calcolare le frazioni di HP
    function calcFractions(hp) {
        return {
            sixteenth: Math.floor(hp / 16),
            eighth:     Math.floor(hp / 8),
            sixth:      Math.floor(hp / 6),
            fourth:     Math.floor(hp / 4)
        };
    }

    // Aggiorna la tabella solo per il primo Pokémon attivo del giocatore
    const playerPokemon = PC.player[0];  // Cambia [0] con l'indice del Pokémon che vuoi usare
    if (playerPokemon) {
        const fractions = calcFractions(playerPokemon.hp || 0);

        // Aggiorna la tabella del giocatore
        document.getElementById('player-sixteenth').textContent = fractions.sixteenth;
        document.getElementById('player-eighth').textContent = fractions.eighth;
        document.getElementById('player-sixth').textContent = fractions.sixth;
        document.getElementById('player-fourth').textContent = fractions.fourth;
    }

    // Aggiorna la tabella solo per il primo Pokémon attivo dell'avversario
    const opponentPokemon = PC.opponent[0];  // Cambia [0] con l'indice del Pokémon che vuoi usare
    if (opponentPokemon) {
        const fractions = calcFractions(opponentPokemon.hp || 0);

        // Aggiorna la tabella dell'avversario
        document.getElementById('opposing-sixteenth').textContent = fractions.sixteenth;
        document.getElementById('opposing-eighth').textContent = fractions.eighth;
        document.getElementById('opposing-sixth').textContent = fractions.sixth;
        document.getElementById('opposing-fourth').textContent = fractions.fourth;
    }
}

// Aggiorna ogni 500ms per sincronizzarsi con la selezione del Pokémon
setInterval(updateChipDamage, 500);
