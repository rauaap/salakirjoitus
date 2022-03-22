function splitSpecial(input) {
    let output = input.split(/(?=[.-/ /1-9])|(?<=[.-/ /1-9])/g);
    return output;
}

const mapping = { 1: 2, 2: 4, 5: 8 };

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