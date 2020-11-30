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

gsap.registerPlugin(ScrollTrigger);
gsap.from(".corn", {duration:6, translateX:"-400%",display:"inline-block",ease:"elastic"});
gsap.from(".linei-t", {duration:3, scale:"0",display:"inline-block"});

gsap.utils.toArray(".section-title").forEach(title => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: title,
      toggleActions: "restart pause resume pause",
      start: "top bottom",
      scrub:1,
    }
  });

  tl.from(title, {
    duration: 4,
    scale:"0.4",
  });
});

gsap.from(".img-1", {
    scrollTrigger: {
      trigger:".img-1",
      start:"top bottom",
      toggleActions:"restart none none pause"
    },
    duration: 4, 
    translateX:"-100%", 
    ease:"bounce"
});