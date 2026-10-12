const laadKnop = document.querySelector("#laadKnop");
const statusMelding = document.querySelector("#status");
const resultaten = document.querySelector("#resultaten");

async function laadGegevens() {
    statusMelding.textContent = "Gegevens laden...";
    laadKnop.disabled = true;

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

        if (!response.ok) {
            throw new Error("Request mislukt: " + response.status);
        }

        const gegevens = await response.json();
        resultaten.textContent = "";

        if (gegevens.length === 0) {
            statusMelding.textContent = "Er zijn geen berichten gevonden.";
        } else {
            gegevens.forEach(function (bericht) {
                resultaten.appendChild(maakBericht(bericht));
            });
            statusMelding.textContent = "Er zijn " + gegevens.length + " berichten geladen.";
        }

    } catch (fout) {
        resultaten.textContent = "";
        statusMelding.textContent = "Er ging iets mis bij het laden. Probeer het opnieuw.";
        console.error(fout);

    } finally {
        laadKnop.disabled = false;
    }
}

function maakBericht(bericht) {
    const artikel = document.createElement("article");
    artikel.classList.add("kaart");

    const titel = document.createElement("h3");
    titel.textContent = bericht.title;

    const tekst = document.createElement("p");
    tekst.textContent = bericht.body;

    artikel.appendChild(titel);
    artikel.appendChild(tekst);

    return artikel;
}
laadKnop.addEventListener("click", laadGegevens);