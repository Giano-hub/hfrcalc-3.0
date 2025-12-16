// Funzione per aggiornare automaticamente le frazioni di HP
function updateChipDamage() {
    // ID dei Pokémon selezionati (modifica se necessario)
    const playerSelect = document.querySelector("#player-mon-select");
    const opponentSelect = document.querySelector("#opponent-mon-select");

    if (!playerSelect || !opponentSelect) return;

    const playerName = playerSelect.value;
    const opponentName = opponentSelect.value;

    // Prendi gli HP base dal file species.js
    const playerHP = SPECIES[playerName].hp;
    const opponentHP = SPECIES[opponentName].hp;

    // Aggiorna i valori nel DOM
    document.getElementById("player-sixteenth").textContent = Math.floor(playerHP / 16);
    document.getElementById("player-eighth").textContent = Math.floor(playerHP / 8);
    document.getElementById("player-sixth").textContent = Math.floor(playerHP / 6);
    document.getElementById("player-fourth").textContent = Math.floor(playerHP / 4);

    document.getElementById("opposing-sixteenth").textContent = Math.floor(opponentHP / 16);
    document.getElementById("opposing-eighth").textContent = Math.floor(opponentHP / 8);
    document.getElementById("opposing-sixth").textContent = Math.floor(opponentHP / 6);
    document.getElementById("opposing-fourth").textContent = Math.floor(opponentHP / 4);
}

// Aggiornamento automatico quando cambi Pokémon
document.querySelector("#player-mon-select").addEventListener("change", updateChipDamage);
document.querySelector("#opponent-mon-select").addEventListener("change", updateChipDamage);

// Aggiornamento immediato all'apertura del calcolatore
updateChipDamage();
