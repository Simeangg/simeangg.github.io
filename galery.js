const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
    if(e.target.className = 'thumb'){
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');

        //menghilangkan class list selama 0.5s
        setTimeout(function(){
            jumbo.classList.remove('fade');
        },500);

        thumbs.forEach(function(thumb){
            thumb.className = 'thumb'
        });
        
        e.target.classList.add('active');

       

    }

});