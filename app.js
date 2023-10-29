const tl = gsap.timeline({ease: "power4.inOut"})

tl.from('.main-img',{
    duration:2,
    width: '700',
    height:'1000',
})
tl.to('.box',{
    duration:.8,
    y:'-100%',
    ease: "power4.in"
},'<')
tl.to('.main-img',{
    delay:.5,
    duration:1.3,
    scale:.6,
    ease: "power4.in",
    opacity:1
})
tl.to('body',{
    duration:1,
    background: 'radial-gradient(circle, #EBF3E8, #86A789)',
    ease: "power4.in",
},'<')
tl.from('.nav-container li', {
    duration: 1,
    opacity: 0,
    stagger: 0.2,
    y: 40,
});
tl.from('aside',{
    duration:1,
    opacity: 0,
    stagger: 0.1,
    y: 40,
    delay:.7
},'<')
tl.from('.projects h1',{
    duration:1,
    opacity: 0,
    stagger: 0.1,
    y: 40,
    delay:.7
},'<')

tl.from('.hero .char',{
    duration:.5,
    opacity: 0,
    stagger: 0.3,
    y: 40,
    ease: "back.out(1.4)",
},'<')
tl.to('.hero .left',{
    duration:1,
    x:-170,
    rotate:-15,
    y:20
},'<')
tl.to('.hero .right',{
    duration:1,
    x:170,
    rotate:15,
    y:20
},'<')


