
 const nav = document.getElementById('navigation')

function onScroll(){
    if(scrollY>0){

        nav.classList.add('scroll')
    }else{
        nav.classList.remove('scroll')
    }


}



