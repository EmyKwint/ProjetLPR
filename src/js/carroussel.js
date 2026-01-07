let imgStock = [
  { titre: "Akira", affiche: "akira.jpg" },
  { titre: "Avatar", affiche: "avatar.jpg" },
];

let position = 0;

let img      = document.querySelector("#image");
let titre    = document.querySelector("#titre");

console.log(titre);
console.log(img);



function slide(sens) {
    
    position = position + sens;
    console.log(position);

    if (position == films.length - 1) {
        position = 0;
        console.log(position);
    }
    if (position < 0) {
        position = films.length - 1;
        console.log(position);
    }

    img.setAttribute("src","assets/imagesVideos/" + films[position].affiche);
    titre.innerHTML = films[position].titre;
}

function info(element) {
    let contenu = "l'ID de l'élément cliqué est : " + element.id + "<br>";
    contenu += "contenu : " + element.src + "<br>";
    
    document.querySelector("#info").innerHTML = contenu;
}