const params = new URLSearchParams(window.location.search);

const categorie = params.get("cat");
const genre = params.get("genre");

document.getElementById("titre").textContent =
"Produits " + categorie + " (" + genre + ")";

const produits = {
chaussures:["Nike","Adidas","Puma","Jordan"],
pantalons:["Jean Slim","Jean Noir","Cargo","Jogging"],
habits:["T-shirt","Chemise","Veste","Pull"]
};

const container = document.getElementById("produits");

produits[categorie].forEach(function(item){

let div = document.createElement("div");

div.className="produit";

div.innerHTML="<p>"+item+"</p>";

container.appendChild(div);

});
