
 const nav = document.getElementById('navigation')

function onScroll(){
    if(scrollY>0){

        nav.classList.add('scroll')
    }else{
        nav.classList.remove('scroll')
    }


}
function toggle(){
    document.body.classList.toggle('menu-expanded')
}





ScrollReveal({
    origin: 'top',
    distance: '50px',
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
    #about .content`)


