// DOM Manipulation Node
// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);






// penggunaan insertBefore()
const liBaru = document.createElement('li');
const teks   = document.createTextNode('Item Baru');
liBaru.appendChild(teks);

const ul = document.querySelector('section#b ul');
const li = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru,li);



// penggunaan remove
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


//penggunaan replace
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const h2Text = document.createTextNode('Judul baru!');

h2Baru.appendChild(h2Text);
sectionB.replaceChild(h2Baru,p4);















