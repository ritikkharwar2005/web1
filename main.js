function page1Animation(){
  var tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -40,
    duration: 0.7,
    delay: 1,
    opacity: 0,
    stagger: 0.12,
  });
  tl.from(".section-part1 .left h1", {
    x: -400,
    opacity: 0,
    duration: 0.6,
  });
  tl.from(".section-part1 .left p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".section-part1 .left button", {
    opacity: 0,
  });
  tl.from(
    ".section-part1 .right img",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=1"
  );
  tl.from(
    ".section-part1-bottom  img",
    {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.12,
    },
    "-=0.5"
  );
}
function page2Animation(){
  
var tl2 = gsap.timeline( {
  scrollTrigger:{
    trigger:".section2",
    scroller:"body",
    // markers:true,
    start:"top 50%",
    end:"top 0",
    scrub:2,
  }
})

tl2.from(".services",{
y:-100,
opacity:0,
duration:0.5
})
tl2.from(".elem.line1.left",{
x:-300,
opacity:0,
duration:1
},"rr")
tl2.from(".elem.line1.right",{
x:300,
opacity:0,
duration:1
},"rr")
tl2.from(".elem.line2.left",{
x:-300,
opacity:0,
duration:1,
delay:.5
},"ss")
tl2.from(".elem.line2.right",{
x:300,
opacity:0,
duration:1,
delay:.7
},"ss")

}
function page3Animation(){
  
var tl2 = gsap.timeline( {
  scrollTrigger:{
    trigger:".section3",
    scroller:"body",
    // markers:true,
    start:"top 50%",
    end:"top 0",
    scrub:2,
  }
})

tl2.from(".section3-part1 ",{
y:-100,
opacity:0,
duration:0.5,
stagger:2
})
tl2.from(".case-study h1",{
  x: -100,
  opacity:0,
  duration:0.5,
  stagger:2
  },"rr2")
  tl2.from(".case-study p",{
    x: 100,
    opacity:0,
    duration:0.5,
    stagger:2
    },"rr2")

    tl2.from(".section3-part2 .sec ",{
      y:100,
      opacity:0,
      duration: 0.5,
      stagger:1
      })
}

page1Animation()
page2Animation()
page3Animation()
