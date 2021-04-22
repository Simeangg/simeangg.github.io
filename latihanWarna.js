const ubahWarna = document.getElementById('ubahWarna');
ubahWarna.addEventListener('click',function(){
    // document.body.style.backgroundColor = 'lightblue';
    document.body.classList.toggle('biru-muda');
});


const tBaru = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tBaru.setAttribute('type','button');
tBaru.appendChild(teksTombol);
ubahWarna.after(tBaru);

// random Warna
tBaru.addEventListener('click',function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor='rgb('+ r +','+ g +','+ b +')';
});



// range ubah warna
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor='rgb('+ r +','+ g +','+ b +')';
});


sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor='rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor='rgb('+ r +','+ g +','+ b +')';
});







