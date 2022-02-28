window.addEventListener("scroll", function(){
var nav = document.querySelector("nav");
nav.classList.toggle("sticky", window.scrollY > 0);
})

const navSlide= () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        //Animacja linkow
    navLinks.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation = '';
        }
        else{
            link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
        
      });
      //Animacja burgera
      burger.classList.toggle('toggle');
    });

}
navSlide();
AOS.init({
    offset:240,
    duration:1000
});
