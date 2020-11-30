const nav = document.querySelector('.nav');
const humMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close');

humMenu.addEventListener('click',()=>{
    nav.classList.toggle('active');
    humMenu.classList.toggle('active');
    closeMenu.classList.add('active');
})

closeMenu.addEventListener('click',()=>{
    nav.classList.toggle('active');
    humMenu.classList.remove('active');
    closeMenu.classList.toggle('active');
})