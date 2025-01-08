
document.addEventListener("DOMContentLoaded", function(e) {
   
});
function click(){
    let span = parseInt(document.getElementById("coinMined").innerHTML);
    console.log(span);
    console.log(typeof(span))
    span = span+1
    document.getElementById("coinMined").innerHTML = span;
}