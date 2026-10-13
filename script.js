document.body.addEventListener("pointermove", (e)=>{
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty('--posX',  x-l-w/2);
  el.style.setProperty('--posY',  y-t-h/2);
})
gsap.from("section",{
  y:100,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"section",
    start:"top 80%",
    toggleActions:"play none none reverse"
  }
})

const cards = document.querySelectorAll(".service-card");
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale:1.05, duration:0.3, ease:"back.out(1.7" });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale:1, duration:0.3});
  });
});

let tl= gsap.timeline();
 tl.from("header",{
  y:100,
  opacity:0,
  duration:0.8
 })
 .from("nav",{
  y:100,
  opacity:0,
  duration:0.6
 }, "-=0.3")

 .from("footer",{
  y:100,
  opacity:0,
  duration:0.6
 }, "-=0.3")  
