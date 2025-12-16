function updateChipDamage() {
    // Recupera i Pokémon selezionati dal calcolatore
    const player = window.selectedPlayerPokemon;   // sostituisci con la variabile giusta
    const enemy  = window.selectedEnemyPokemon;    // sostituisci con la variabile giusta

    if (!player || !enemy) return; // se non sono selezionati, esci

    // Aggiorna valori per il giocatore
    document.querySelector("#player-sixteenth").innerText = Math.floor(player.hp / 16);
    document.querySelector("#player-eighth").innerText     = Math.floor(player.hp / 8);
    document.querySelector("#player-sixth").innerText      = Math.floor(player.hp / 6);
    document.querySelector("#player-fourth").innerText      = Math.floor(player.hp / 4);

    // Aggiorna valori per l'avversario
    document.querySelector("#opposing-sixteenth").innerText = Math.floor(enemy.hp / 16);
    document.querySelector("#opposing-eighth").innerText     = Math.floor(enemy.hp / 8);
    document.querySelector("#opposing-sixth").innerText      = Math.floor(enemy.hp / 6);
    document.querySelector("#opposing-fourth").innerText     = Math.floor(enemy.hp / 4);
}

// Aggancia la funzione all'evento di cambio Pokémon (se c'è un dropdown)
const playerSelect = document.querySelector("#player-select"); // ID del dropdown del giocatore
const enemySelect  = document.querySelector("#enemy-select");  // ID del dropdown dell'avversario

if (playerSelect) playerSelect.addEventListener("change", updateChipDamage);
if (enemySelect)  enemySelect.addEventListener("change", updateChipDamage);

// Chiama subito una volta all'avvio per i Pokémon già selezionati
updateChipDamage();

