const mario = document.getElementById("mario");
const mash = document.getElementById("mash");
document.addEventListener("keydown", function(event){
    jump();
});
function jump(){
    if
    (mario.classList !="jump"){
        mario.classList.add("jump")
    }
    setTimeout(function(){
        mario.classList.remove("jump")
    }, 300)
}
let isAlive = setInterval( function(){
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"))
    let mashLeft = parseInt(window.getComputedStyle(mash).getPropertyValue("left"))
    if (mashLeft < 20 && mashLeft > 0 && marioTop >= 200)
    alert("Sorry, u a noob((((")
}, 10)
