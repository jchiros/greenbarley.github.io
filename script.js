const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


$(function (){
    $(".xzoom, .xzoom-gallery").xzoom({
        zoomWidth: 400,
        tint: "#333",
        Xoffset: 15, 
    });



})