
 const nav = document.getElementById('navigation')
 const backToTop = document.getElementById('backToTopButton')
 onScroll()
 window.addEventListener('scroll',onScroll)

 function onScroll(){
     showNavOnScroll()
     showBackToTopBtnOnScroll()
     activaMenuAtCurrentSection(home)
     activaMenuAtCurrentSection(services)
     activaMenuAtCurrentSection(about)
     activaMenuAtCurrentSection(home)
 }
 function activaMenuAtCurrentSection(section){
    const targetLine =scrollY + innerHeight/2;


    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    //quando a seção termina
    const sectionEndWhen = sectionTop + sectionHeight 
    const sectionEndPassedTargetLine = sectionEndWhen  <= targetLine
    //confição, ver se a seção passou da linha

    //limite da seção

    const sectionBoundaries = sectionTopReachOrPassedTargetLine  && !sectionEndPassedTargetLine

    const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)

    menuElement.classList.remove('active')

    if(sectionBoundaries){
        menuElement.classList.add('active')
    }


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

function openMenu() {
    document.body.classList.add('menu-expanded')
  }
  
  function closeMenu() {
    document.body.classList.remove('menu-expanded')
 }



 const scrollReveal = ScrollReveal({
    origin: 'top', 
    distance: '30px', 
    durantion: 00,
    reset: true
})

scrollReveal.reveal(`
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
    footer
    `)


