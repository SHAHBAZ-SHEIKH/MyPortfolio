let menuIcons = document.querySelector("#menu-icons");
let navbar = document.querySelector(".navbar")

menuIcons.onclick=()=>{
    menuIcons.classList.toggle("fa-x")
    navbar.classList.toggle("active")

}

let sections = document.querySelectorAll("section")
let navLink = document.querySelectorAll('header nav a')

window.scroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offSet = sec.offsetTop - 150
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id")

        if(top >=offSet && top < offSet + height){
            navLink.forEach.apply(links =>{
                links.classList.remove("active")
                document.querySelectorAll(`header nav a[href+='  ${id} ']`).classList("active")
            })
        }
    })
}


// Sticky Navbar

let header = document.querySelector("header")
header.classList.toggle("sticky",window.scrollY >100);


// Remove Toggle Icon & Navbar

menuIcons.classList.remove("fa-x")
navbar.classList.remove("active")



// Scroll Reveal


ScrollReveal({
    distance:'800px',
    duration:2000,
    delay:200
})
    
    
ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-img,.service-container,.portfolio-box,.contact form,.row', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });

var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Web Designer'],
    typeSpeed: 70,
    backSpeed:70,
    backDelay:1000,
    loop:true
});