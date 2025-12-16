const chipTable = {
    player: {
        sixteenth: document.getElementById("player-sixteenth"),
        eighth: document.getElementById("player-eighth"),
        sixth: document.getElementById("player-sixth"),
        fourth: document.getElementById("player-fourth")
    },
    opposing: {
        sixteenth: document.getElementById("opposing-sixteenth"),
        eighth: document.getElementById("opposing-eighth"),
        sixth: document.getElementById("opposing-sixth"),
        fourth: document.getElementById("opposing-fourth")
    }
};

function updateChipDamage(playerHP, opponentHP) {
    chipTable.player.sixteenth.textContent  = Math.floor(playerHP / 16);
    chipTable.player.eighth.textContent     = Math.floor(playerHP / 8);
    chipTable.player.sixth.textContent      = Math.floor(playerHP / 6);
    chipTable.player.fourth.textContent     = Math.floor(playerHP / 4);

    chipTable.opposing.sixteenth.textContent = Math.floor(opponentHP / 16);
    chipTable.opposing.eighth.textContent    = Math.floor(opponentHP / 8);
    chipTable.opposing.sixth.textContent     = Math.floor(opponentHP / 6);
    chipTable.opposing.fourth.textContent    = Math.floor(opponentHP / 4);
}

function getSelectedPokemon() {
    const player = window.PC?.playerPokemon?.[0] || { hp: 100 };
    const opponent = window.PC?.opponentPokemon?.[0] || { hp: 100 };
    updateChipDamage(player.hp, opponent.hp);
}

document.addEventListener("DOMContentLoaded", getSelectedPokemon);
document.addEventListener("change", getSelectedPokemon);

