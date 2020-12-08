let headeer = document.querySelector("header");




function navbarCollapse() {
    const windowTop = window.pageYOffset;
    if(( windowTop) > 80 ){
        headeer.classList.add('naav');
        
        
    }
    else {
        headeer.classList.remove('naav');
        
        
    }
   
};

console.log(ext);


// Collapse now if page is not at top
// Collapse the navbar when page is scrolled
window.addEventListener('scroll', function() {
    
    navbarCollapse();
    
});