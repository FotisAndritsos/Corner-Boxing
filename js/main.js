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

var tl = gsap.timeline();

tl.from(".linei-t", {duration:2, scale:"0",display:"inline-block"})
tl.from(".not", {duration:3, y:-300 , ease:"bounce",display:"inline-block"})
tl.from(".corn", {duration:4, x:-200,ease:"elastic",display:"inline-block"})



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
gsap.from(".price-item.middle", {
    scrollTrigger: {
      trigger:".price-item.middle",
      start:"top center",
      toggleActions:"restart pause reverse pause",
      scrub:1,
      markers:true
    },
    duration: 1, 
    y:60, 
    ease:"power2"
});
gsap.from(".price-item.akri", {
    scrollTrigger: {
      trigger:".price-item.akri",
      start:"top center",
      toggleActions:"restart pause reverse pause",
      scrub:1,
      markers:true
    },
    duration: 1, 
    y:-60, 
    ease:"power2"
});