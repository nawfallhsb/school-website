const url=
"https://jsonpplaceholder.typicode.com" + "/post/2";

const titel = document.querySelector("#titel");
const tekst = document.querySelector("#bericht");    
    
async function toonBericht() {
   const response = await fetch(url);
   const post = await response.json();
    titel.textContent = post.title;
    tekst.textContent = post.body;
    }
    
toonBericht();

