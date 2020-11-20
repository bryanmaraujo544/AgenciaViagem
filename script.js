let headeer = document.querySelector("header");
let ext = document.querySelectorAll('.lis');



function navbarCollapse() {
    const windowTop = window.pageYOffset;
    if(( windowTop) > 80 ){
        headeer.classList.add('naav');
        ext.classList.add('preto');
        
    }
    else {
        headeer.classList.remove('naav');
        ext.classList.add('preto');
        
    }
   
};

console.log(ext);


// Collapse now if page is not at top
// Collapse the navbar when page is scrolled
window.addEventListener('scroll', function() {
    
    navbarCollapse();
    
});