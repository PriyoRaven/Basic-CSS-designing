//parallax background shapes
document.addEventListener("mousemove" , parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerHeight - e.pageX*speed)/100
        const y = (window.innerWidth - e.pageY*speed)/100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
    
//vanilla tilt.js
VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});
}
