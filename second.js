gsap.registerPlugin(ScrollTrigger);
const secondp = new SplitType('.left p');
const up = new SplitType('.right .up');

gsap.to('.transition-wrapper span',{
    duration: 2,
    scrollTrigger: {
      trigger:'.first-vh',
      start:'10% top',
      end:'99% 99%',
      // markers:true,
    },
    y: -1700,
    stagger: 0.1,
    ease: "circ.out",
})
gsap.from('.second-vh',{
  duration:3.5,
  scrollTrigger: {
    trigger:'.first-vh',
    start:'10% top',
    end:'99% 99%',
    // markers:true,
  },
  y:400,
  ease: "circ.out",
})
gsap.from('.word',{
  duration:.6,
  scrollTrigger: {
    trigger:'.first-vh',
    start:'10% top',
    end:'99% 99%',
    // markers:true,
  },
  y:30,
  ease: "circ.out",
  stagger:.1,
})
gsap.from('.letter',{
  duration:5,
  scrollTrigger: {
    trigger:'.first-vh',
    start:'10% top',
    end:'99% 99%',
    // markers:true,
  },
  ease: "elastic.out(1,0.3)",
  y:240,
  stagger:.2
})
gsap.from('.right .arrow-up-wrapper',{
  duration:2,
  delay:1,
  scrollTrigger: {
    trigger:'.first-vh',
    start:'10% top',
    end:'99% 99%',
    // markers:true,
  },
  ease: "power4.out",
  y:240,
})
gsap.to('.two-pics-overlay',{
  duration:2,
  delay:1.2,
  scrollTrigger: {
    trigger:'.first-vh',
    start:'10% top',
    end:'99% 99%',
    // markers:true,
  },
  ease: "bounce.out",
  xPercent:100,
})
gsap.from('.big-down-wrapper .letterD',{
  duration:1.7,
  delay:.9,
  scrollTrigger: {
    trigger:'.first-vh',
    start:'80% top',
    end:'99% 99%',
    // markers:true,
  },
  ease: "expo.out",
  y:-200,
  stagger:.1
})
gsap.from('.down-arrow',{
  duration:1.7,
  delay:1.7,
  scrollTrigger: {
    trigger:'.first-vh',
    start:'80% top',
    end:'99% 99%',
    // markers:true,
  },
  ease: "expo.out",
  y:-200,
})
// Disable the scrollbar
document.body.style.overflowY = 'hidden';

// Enable the scrollbar after 4 seconds
setTimeout(() => {
  document.body.style.overflowY = 'auto';
}, 5000); // 4000 milliseconds (4 seconds)
