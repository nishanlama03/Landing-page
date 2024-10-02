
var navButton = document.getElementById("nav-ul");
var btns = navButton.getElementsByClassName("nav-button");

for (var i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        console.log("clicked")
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active","")
        this.className += " active";
    });
}