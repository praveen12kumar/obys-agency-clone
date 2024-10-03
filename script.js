var tl = gsap.timeline();


tl.from(".line h1", {
    y:150,
    opacity:0,
    stagger:0.3,
    duration:0.6,
    delay:0.5
})

tl.from(".line1-part1",{
    opacity:0,
    duration:0.4,
    onStart: function(){
        var h5Timer = document.querySelector(".line1-part1 h6")
        var count = 0;
        setInterval(function(){
            if(count < 101){
            h5Timer.innerHTML = count++;
        } 
    },33);
    }
})

tl.to(".line h2",{
    animationName:"animeh2",
})

tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:3.5
})

tl.from("#page1", {
    y:1600,
    opacity:0,
    delay:0.2,
    ease:Power4
})

tl.to("#loader",{
    display:"none",
})




