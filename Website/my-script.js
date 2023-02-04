// JavaScript van https://www.w3schools.com/howto/howto_js_collapsible.asp
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      this.children[1].innerHTML = "expand_more";
    } else {
      content.style.display = "block";
      this.children[1].innerHTML = "expand_less";
    }
  });
}

function myFunction() {
  var x = document.getElementById("linkjes");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// JavaScript van https://www.w3schools.com/howto/howto_css_overlay.asp 
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}