
 const nav = document.getElementById('navigation')
 const backToTop = document.getElementById('backToTopButton')
 onScroll()
 window.addEventListener('scroll',onScroll)

 function onScroll(){
     showNavOnScroll()
     showBackToTopBtnOnScroll()
 }
 function showNavOnScroll(){
     if(scrollY>0){
         nav.classList.add('scroll')
     }else{
         nav.classList.remove('scroll')
     }
 }
 function showBackToTopBtnOnScroll(){
    if(scrollY>500){
        backToTop.classList.add('show')
    }else{
        backToTop.classList.remove('show')
    }
}

function toggle(){
    document.body.classList.toggle('menu-expanded')
}





ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 700,
  }).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card
    #about, 
    #about header, 
    #about .content,  
    #contact,
    #contact header,
    #contact .content, 
    footer,
    `)


