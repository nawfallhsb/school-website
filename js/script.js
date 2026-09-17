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