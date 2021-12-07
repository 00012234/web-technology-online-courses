//decraring variables
let nav = document.querySelector("nav")
let header = document.querySelector("header")
let navItems = document.querySelector(".navigation-section")
let menuIcon = document.querySelector(".menuIcon")
let dark = document.querySelector(".dark-modal")
let learnMore = document.querySelector(".learnMore")
let leftSide = document.querySelector(".leftSide1")
let rightSide = document.querySelector(".rightSide2")
let rightSideDiv = document.querySelectorAll(".happy-section")
let hiddenDiv = document.querySelector(".hiddenDiv")
let form = document.querySelector(".form-info")
let textName = document.querySelector(".textName")
let textEmail = document.querySelector(".textEmail")
let textField = document.querySelector(".textField")
let checkInput = document.querySelector(".checkInput")




let textLeft = ["FUNNY AND HAPPY","FULFILL WITH LOVE","SPECIAL EDUCATION"]
let textRight = ["TRANSPORTATION","FULLY EQUIPED","PROFESSIONAL TEACHING"]

let paragraph = "We are group of teachers who really love childrens and enjoy every moment"

textLeft.forEach((div,i)=>{
    let innerDiv = document.createElement("div")
    let h5 = document.createElement("h5")
    let p = document.createElement("p")

    h5.innerHTML = textLeft[i]
    p.innerHTML = paragraph

    innerDiv.appendChild(h5)
    innerDiv.appendChild(p)
    innerDiv.className = "funny-section"
    leftSide.appendChild(innerDiv)
})

textRight.forEach((div,i)=>{
    let innerDiv = document.createElement("div")
    let h5 = document.createElement("h5")
    let p = document.createElement("p")

    h5.innerHTML = textRight[i]
    p.innerHTML = paragraph

    innerDiv.appendChild(h5)
    innerDiv.appendChild(p)
    innerDiv.className = "funny-section happy-section"
    rightSide.appendChild(innerDiv)
})



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






hiddenDiv.addEventListener("click", function(){
    hiddenDiv.classList.remove("hideDiv")
})

learnMore.addEventListener("click", function(){
    hiddenDiv.classList.add("hideDiv")
})


form.addEventListener("submit", function(e){
    e.preventDefault()
    if(textField.value !==""){
        textField.style.border = "1px solid white"
    }else{
        textField.style.border = "1px solid red"
    }

    if(textName.value !==""){
        textName.style.border = "1px solid white"
    }else{
        textName.style.border = "1px solid red"
    }

    if(textEmail.value !==""){
        textEmail.style.border = "1px solid white"
    }else{
        textEmail.style.border = "1px solid red"
    }
    
    if(textField.value !=="" && textName.value !==""&&textEmail.value !==""){
        alert("thank you, we will contact you soon")
        textField.value = ""
        textName.value = ""
        textEmail.value = ""
    }

    
})

