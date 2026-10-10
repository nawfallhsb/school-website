document.querySelector("h1").style.color = "blue";

function veranderAchtergrond() {
    console.log("Knop werkt");
    document.querySelector("p").classList.toggle("opvallend");
}

function draaiAfbeelding() {
    document.querySelector("img").classList.toggle("gedraaid");

}
function afbeeldingRechtop() {
    document.querySelector("img").classList.remove("gedraaid");
}
function berekenInhoud(lengte, breedte, hoogte){
    return lengte*breedte*hoogte;
}
document.querySelector("#uitkomst").textContent = berekenInhoud(8, 3, 2);

const koppen = document.querySelectorAll("h2");

function telKoppen() {
    const koppen = document.querySelectorAll("h2");
    let aantal= 0;
    koppen.forEach(function(kop){
        aantal= aantal + 1;
    });
    document.querySelector("#aantalKoppen").textContent = "Aantal koppen: " + aantal;

}

function wisselAccent() {
    const koppen = document.querySelectorAll("h2");

    koppen.forEach(function (kop) {
        kop.classList.toggle("accent");
    });
}

const telKnop = document.querySelector("#telKnop");
telKnop.addEventListener("click", telKoppen);

const accentKnop = document.querySelector("#accentKnop");
accentKnop.addEventListener("click", wisselAccent);