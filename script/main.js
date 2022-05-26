
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



