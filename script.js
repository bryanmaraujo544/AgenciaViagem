let headeer = document.querySelector(".header");



function navbarCollapse() {
    const windowTop = window.pageYOffset;
    if(( windowTop) > 80 ){
        headeer.classList.add('naav');
    
    }
    else {
        headeer.classList.remove('naav');
        
    }
   
};


const elementos = document.querySelectorAll('[data-anima]');
const animaClass = 'animacao';

function animationE(){
    const janelaTopo = window.pageYOffset + window.innerHeight * 0.75;
    elementos.forEach(function(cadaElemento){
        const topoElementos = cadaElemento.offsetTop;
        if((janelaTopo) > (topoElementos)){
            cadaElemento.classList.add('animacao');
        }
        else{
            cadaElemento.classList.remove('animacao');
        }
    });
}


window.addEventListener('scroll', function(){
    animationE();
});




// Collapse now if page is not at top
// Collapse the navbar when page is scrolled
window.addEventListener('scroll', function() {
    
    navbarCollapse();
    
});
