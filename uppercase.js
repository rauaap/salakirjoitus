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