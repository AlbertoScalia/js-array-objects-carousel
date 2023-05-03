const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


//Inserisco le costanti e le variabili
const attivaImmagine = document.getElementById('active-img');
const contenitoreThumbnail = document.getElementById('thumbnails');
let index = 0;

//Setto la prima immagine dell'array come prima immagne del carousel:
attivaImmagine.src = images[index].image;

//Insrisco il titolo e la descrizione
let contenitoreDescrizione = document.getElementById('descrizione');

let contenitoreTitolo = document.createElement('div');
let contenitoreTesto = document.createElement('div');

contenitoreTitolo.innerHTML = images[index].title;
contenitoreTesto.innerHTML = images[index].text;

contenitoreTitolo.classList.add('title');

contenitoreDescrizione.append(contenitoreTitolo);
contenitoreDescrizione.append(contenitoreTesto);

//Ciclo for per generare i thumbnails con l'ddEventListener clicl
for (let i = 0; i < images.length; i++) {
    let nuovoThumbnail = document.createElement('img');
    nuovoThumbnail.src = images[i].image;
    nuovoThumbnail.style.height = "calc(100% / " + images.length + ")";
    nuovoThumbnail.classList.add("thumbnail");
    contenitoreThumbnail.append(nuovoThumbnail);

    nuovoThumbnail.addEventListener('click', function () {
        thumbnailEl[index].classList.remove("active");
        index = i;
        attivaImmagine.src = images[i].image;
        thumbnailEl[i].classList.add("active");
    });

}


