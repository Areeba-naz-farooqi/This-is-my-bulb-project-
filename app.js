var img = document.getElementById("img");
var off = document.getElementById("off");
var on = document.getElementById("on");



function onbulb(){
    img.src = "images/bulbon.jpg";
    off.disabled = false;
    on.disabled = true;

}
function offbulb(){
    img.src = "images/bulboff.jpg";
    off.disabled = true;
    on.disabled = false;
}