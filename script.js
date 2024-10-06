var tl = gsap.timeline()
tl.from(".planet",{
    y:200,
    duration:1
})
tl.from(".glow",{
    y:200,
    
    opacity:0
})
tl.from(".i2",{
    y: -100,
    
    duration: 1,
    ease: 'elastic.out(1, 0.3)',
},"-=1")
tl.from("h1,p",{
    scale: 10,
    opacity:0,
    duration:1,
    alignItems:'end'
})
tl.from(".i1,i",{
    rotate:360,
    opacity: 0,
    duration: 1,
    
})
tl.from("h2,button",{
    
    opacity: 0,
    duration: 2,
    
},"-=1")
tl.from("h4",{
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger:0.3
},"-=1")
gsap.to(".planet",{
    duration:5,
    scale: 0.5,
    duration:4,
    scrollTrigger:{
        trigger:".main1",
        scroller:"body",
        scrub:5,
        markers:true,
        start:"top 0%"
      
    }
})
gsap.to(".glow",{
        scale:0,
        
       scrollTrigger:{
        trigger:".main1",
        scroller:"body",
        scrub:5,
        markers:true,
        start:"top 0%"
      
    }
},"-=1")
// gsap.to(".planet",{duration:5,
//     scale: 0.5,
    
//     y:-20,
//     duration:4,
//     scrollTrigger:{
//         trigger:".main2",
//         scroller:"body",
//         markers:true,
//         start:"top 80%"
      
//     }
// },"-=1")
