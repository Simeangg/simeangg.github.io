// DOM Selection
// document.getElementById() -> element


// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = 'grey';
// judul.innerHTML = 'Bernatd Situmeang';


// // document.getElementsByTagName() -> HTMLCollection
// const p = document.getElementsByTagName('p');

// for(let i=0; i<p.length; i++){
//     p[i].style.backgroundColor = 'lightskyblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';

// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Saya adalah Bernatd';



// document.querySelector() -> element, hanya mengembalikan 1 elemen
// const p4 = document.querySelector('#b p');
// p4.style.color = 'red';
// p4.style.fontSize = '25px';

// const l3 = document.querySelector('section#b ul li:nth-child(3)');
// l3.style.backgroundColor = 'orange';


// document.querySelectorAll() -> nodeList, mengembalikan semua 
// elemen berbentuk array
const p = document.querySelectorAll('ul li');
for(let i=0; i<p.length; i++){
    p[i].style.color = 'red';
}                                               



