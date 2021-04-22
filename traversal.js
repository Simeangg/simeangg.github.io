// even handling
// const Close = document.querySelector('.close');
// const Card = document.querySelector('.card');

// Close.addEventListener('click', function(){
//     Card.style.display = 'none';
// });



// DOM Traversal
const Close = document.querySelectorAll('.close');


// for(let i=0; i < Close.length; i++) {
//     Close[i].addEventListener('click', function(e){
//     //   Close[i].parentElement.style.display = 'none';  
//     e.target.parentElement.style.display = 'none';
    
//     });
// }




Close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    });
});











// penggunaan method
const nama = document.querySelector('.nama');
// console.log(nama.parentElement.parentElement);

console.log(nama.nextElementSibling);



// penggunaan prevent default
