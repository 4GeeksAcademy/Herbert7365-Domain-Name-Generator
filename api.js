let pronouns = ['the', 'our'];
let adjectives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];


// Función para generar los nombres de dominio
function generateDomainNames() {
    let domainNames = [];

    for (let i = 0; i < pronouns.length; i++) {
        for (let j = 0; j < adjectives.length; j++) {
            for (k = 0; k < nouns.length; k++) {
                let domainName = pronouns[i] + adjectives[j] +nouns[k] + '.com';
                domainNames.push(domainName);
            }
        }
    }

    return domainNames;
}

// Llamamos a la función y mostramos los nombres de dominio generados

const allDomainNames = generateDomainNames();
for (let i = 0; i < allDomainNames.length; i++) {
    console.log(`${allDomainNames[i]}`);
}

