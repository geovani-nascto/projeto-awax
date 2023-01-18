window.onload = function(){
    document.querySelector('.menu-burger').addEventListener('click', function(){
        if(document.querySelector('.menu nav').style.display == 'none'){
            document.querySelector('.menu nav').style.display = 'block'
        }else{
            document.querySelector('.menu nav').style.display = 'none'
        }
    })
}