function splitSpecial(input) {
    let output = input.split(/(?=[.-/ /0-9])|(?<=[.-/ /0-9])/g);
    return output;
}

function SwapKeyValuePairs(mapping) {
    let swap = Object.entries(mapping).map(([key, value]) => [value, key]);
    swap = Object.fromEntries(swap);

    return swap;
}

class Salakirjoitus {
    constructor(input, crypted) {
        this.input = input;
        this.crypted = crypted;
    }

    get decrypted() {
        return this.crypted ? this.crypt(true) : this.input;
    }

    get encrypted() {
        return this.crypted ? this.input : this.crypt(false);
    }

    crypt(reverse) {
        let mapping = {
            122: 228, // z -> ä
            90: 196, // Z -> Ä
            228: 246, // ä -> ö
            196: 214, // Ä -> Ö
            246: 97, // ö -> a
            214: 65 // Ö -> A
        };

        mapping = reverse ? SwapKeyValuePairs(mapping) : mapping;
        let returnCodes = this.input.split('');

        returnCodes = returnCodes.map(v => {
            let charCode = v.charCodeAt();

            if (charCode in mapping) {
                return mapping[charCode]
            }
            if (97 <= charCode && charCode <= 122) {
                return reverse ? charCode-1 : charCode+1
            }
            return charCode
        });

        return String.fromCharCode(...returnCodes)
    }
}

function upperCaseFirstLetter(input) {
    input = input.toLowerCase();
    let sanat = input.split(" ");

    for (i = 0; i < sanat.length; i++)
    {
        sanat[i] = sanat[i].replace(sanat[i].charAt(0), sanat[i].charAt(0).toUpperCase()); 
        //Käy läpi taulukon jokaisen sanan ensimmäisen kirjaimen ja korvaa sen vastaavalla isolla kirjaimella. 
    }

    let output = sanat.join(" ");
    return output;
}
