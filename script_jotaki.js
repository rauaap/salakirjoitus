function splitSpecial(input) {
    let output = input.split(/(?=[.-/ /0-9])|(?<=[.-/ /0-9])/g);
    return output;
}

const mapping = {
    122: 228,
    90: 196,
    228: 246,
    196: 214,
    246: 97,
    214: 65
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
