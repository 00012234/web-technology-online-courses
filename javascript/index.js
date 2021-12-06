//decraring variables
let nav = document.querySelector("nav")
let header = document.querySelector("header")
let navItems = document.querySelector(".navigation-section")
let menuIcon = document.querySelector(".menuIcon")
let dark = document.querySelector(".dark-modal")
let learnMore = document.querySelector(".learnMore")





window.addEventListener("scroll",()=>{
     if(window.scrollY>60){
         nav.classList.add("scroll-nav")
         header.classList.add("scroll-header")

     }

     if(window.scrollY<60){
        nav.classList.remove("scroll-nav")
        header.classList.remove("scroll-header")

     }
})


menuIcon.addEventListener("click", function(){
    navItems.classList.toggle("menu-ul")
    dark.classList.toggle("hideDark")
})

dark.addEventListener("click", function(){
    dark.classList.remove("hideDark")
    navItems.classList.remove("menu-ul")
})

learnMore.addEventListener("click", function(){
    
})