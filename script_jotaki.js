function splitSpecial(input) {
    let output = input.split(/(?=[.-/ /0-9])|(?<=[.-/ /0-9])/g);
    return output;
}

const mapping = {
    // 97-121 -> +1
    // 65-89 -> +1
    122: 228, // z -> ä
    90: 196, // Z -> Ä
    228: 246, // ä -> ö
    196: 214, // Ä -> Ö
    246: 97, // ö -> a
    214: 65 // Ö -> A
}

function SwapKeyValuePairs() {
    let swap = Object.entries(mapping).map(([key, value]) => [value, key]);
    swap = Object.fromEntries(swap);

    return swap;
}

// class Salakirjoitus {
//     constructor(input, crypted) {
//         this.input = input;
//         this.crypted = crypted;
//     }

//     get decrypted() {
//         return this.crypted ? crypt(reverse = true) : this.input;
//     }

//     get encrypted() {
//         return this.crypted ? this.input : crypt(reverse = false);
//     }
// }
