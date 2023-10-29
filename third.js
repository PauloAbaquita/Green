const third = gsap.timeline({duration:1});

gsap.from('.third-vh',{
    duration:1,
    scrollTrigger: {
        trigger:'.second-vh',
        start:'-25% top',
        end:'99% 99%',
        // markers:true,
      },
      x:-300,
      ease: "sine.inOut",
    })
gsap.to('.big-right-overlay',{
    duration:3,
    delay:.8,
    scrollTrigger: {
        trigger:'.second-vh',
        start:'-20% top',
        end:'99% 99%',
        // markers:true,
    },
    xPercent:100,
    ease: "bounce.out",
})
gsap.to('.big-right img',{
    duration:1,
    delay:1,
    scrollTrigger: {
        trigger:'.second-vh',
        start:'30% top',
        end:'99% 99%',
        // markers:true,
    },
    x:1000,
    ease: "circ.in",
})
gsap.to('.big-right h1',{
    duration:1,
    delay:1.3,
    scrollTrigger: {
        trigger:'.second-vh',
        start:'30% top',
        end:'99% 99%',
        // markers:true,
    },
    x:1600,
    ease: "circ.in",
})
gsap.to('.third-pic .third-pic-overlay',{
    duration:2.3,
    delay:.7,
    scrollTrigger: {
        trigger:'.second-vh',
        start:'-20% top',
        end:'99% 99%',
        // markers:true,
    },
    scale:0,
    x:10,
})
gsap.to('.third-pic',{
    duration:1,
    delay:2,
    scrollTrigger: {
        trigger:'.second-vh',
        start:'30% top',
        end:'99% 99%',
        // markers:true,
    },
    y:-150,
    ease: "power4.out",
})
gsap.to('.big-down-word .charD',{
    duration:2,
    delay:2,
    stagger:.1,
    scrollTrigger: {
        trigger:'.second-vh',
        start:'30% top',
        end:'99% 99%',
        // markers:true,
    },
    y:-150,
    ease: "power4.out",
})
gsap.to('.big-down-wrapper img',{
    duration:2,
    delay:2,
    scrollTrigger: {
        trigger:'.second-vh',
        start:'30% top',
        end:'99% 99%',
        // markers:true,
    },
    ease: "power4.out",
  
})
gsap.to(".rotate-img", {
    duration: 2, // Duration of the rotation animation (in seconds)
    rotation: 360, // Rotate by 360 degrees (1 full circle)
    repeat: -1, // Set to -1 for infinite looping
    ease: "linear", // Linear easing for a constant speed
  });

// Calculate the pixel value for 90vh based on the viewport height
// const windowHeight = window.innerHeight;
// const targetHeight = 0.9 * windowHeight;

// Animate the element's height to the calculated pixel value
// gsap.to('.big-down-word', {
//   duration: 2,
// //   height:targetHeight,
//     delay:2,
//         scrollTrigger: {
//             trigger:'.second-vh',
//             start:'30% top',
//             end:'99% 99%',
//             // markers:true,
//         },
//     y:-100,
//     ease: "power4.out",
// });
