function calculateChipDamage(pokemon) {
    const maxHP = pokemon.maxHP(); // qui pokemon deve avere il metodo maxHP()
    return {
        sixteenth: Math.floor(maxHP / 16),
        eighth:    Math.floor(maxHP / 8),
        sixth:     Math.floor(maxHP / 6),
        fourth:    Math.floor(maxHP / 4)
    };
}

// Esempio d'uso:
const playerChip = calculateChipDamage(player);
const opposingChip = calculateChipDamage(opponent);

console.log("Player chip damage:", playerChip);
console.log("Opponent chip damage:", opposingChip);
