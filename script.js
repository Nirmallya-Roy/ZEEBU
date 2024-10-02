var tl = gsap.timeline()
tl.from("img,i",{
    rotate:360,
    opacity: 0,
    duration: 1,
    delay:0.5
})
tl.from("h2,button",{
    
    opacity: 0,
    duration: 2,
    delay:0.5
},"-=1")
tl.from("h4",{
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger:0.3
},"-=1")
