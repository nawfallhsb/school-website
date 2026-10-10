const prijsPerDag = 45;
const aantalDagen = 3;

function berekenTotaal(prijs, aantal) {
    return prijs * aantal;
}

console.log(berekenTotaal(prijsPerDag, aantalDagen));
console.log(berekenTotaal(60, 5));
console.log(berekenTotaal(12.50, 2));

const totaal = berekenTotaal(prijsPerDag, aantalDagen);
document.querySelector("#totaalUitkomst").textContent =
    aantalDagen + " dagen x " + prijsPerDag + " euro = " + totaal + " euro";

    function bepaalKorting() {
    const invoer = document.querySelector("#dagenInvoer").value;
    const dagen = Number(invoer);
    const melding = document.querySelector("#melding");

    if (invoer === "" || isNaN(dagen)) {
        melding.textContent = "Vul een geldig aantal dagen in.";
    } else if (dagen >= 10) {
        melding.textContent = dagen + " dagen: je krijgt 20% korting.";
    } else if (dagen >= 5) {
        melding.textContent = dagen + " dagen: je krijgt 10% korting.";
    } else {
        melding.textContent = dagen + " dagen: geen korting.";
    }
}
const berekenKnop = document.querySelector("#berekenKnop");
berekenKnop.addEventListener("click", bepaalKorting);