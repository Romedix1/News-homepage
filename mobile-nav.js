let navOpened = document.querySelector(".nav-svg-cross");
let navClosed = document.querySelector(".nav-svg-hamburger");
let navList = document.querySelector('.nav-list')
let navOpacity = document.querySelector('.nav-list-opacity')

navClosed.addEventListener('click', ()=>{
    navList.classList.add('active-nav-list')
    navOpacity.style.display = "block"
})

navOpened.addEventListener('click', ()=>{
    if(navList.classList.contains("active-nav-list"))
    {
    navList.classList.remove('active-nav-list')
    navOpacity.style.display = "none"
    }
})