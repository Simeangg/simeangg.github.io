// innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = 'dirubah dengan Javascript';

const sectionB = document.querySelector('section#b');
sectionB.innerHTML = '<p> Membuat paragraf dengan inner joint</p>'
sectionB.style.fontSize = '10px';

// set Attribute -> menambah attribut pada sebuah elemen kita
judul.setAttribute('name', 'bernatd');

// ClassList
const p2 = document.querySelector('.p2');
// p2.classList.add('keren');
// p2.classList.remove('keren');
// p2.classList.toggle('keren');
// p2.classList.contains(1);
