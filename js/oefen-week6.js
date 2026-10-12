const kaartlijst = document.querySelector("#kaart-lijst");
console.log(kaartlijst);

const onderdelen = [
    {
        titel: "Website voor school",
        beschrijving: "Mijn eerste website met HTML, CSS en JavaScript.",
        status: "In uitvoering",
    },
    {
        titel: "Oefening week 5",
        beschrijving: "Werken met waarden, functies, voorwaarden en events.",
        status: "Afgerond",
    },
    {
        titel: "Oefening week 6",
        beschrijving: "Elementen maken en toevoegen met de DOM.",
        status: "Bezig",            
    },  
];
  
function maakKaart(onderdeel) {
    const artikel = document.createElement("article");
    artikel.classList.add("kaart");

    const titel = document.createElement("h3");
    titel.textContent = onderdeel.titel;

    const beschrijving = document.createElement("p");
    beschrijving.textContent = onderdeel.beschrijving;

    const status = document.createElement("p");
    status.textContent = "Status: " + onderdeel.status;

    artikel.appendChild(titel);
    artikel.appendChild(beschrijving);
    artikel.appendChild(status);

    return artikel;
}

onderdelen.forEach(function (onderdeel) {
    const kaart = maakKaart(onderdeel);
    kaartlijst.appendChild(kaart);
}); 