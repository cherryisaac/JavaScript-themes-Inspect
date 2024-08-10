var e = document.body.getElementsByTagName("*");

for (var i = 0; i < e.length; i++) {
  e[i].style.color = "white";
  e[i].style.borderColor = "gold";
  e[i].style.borderBlockColor = "silver";
  e[i].style.background = "rgba(0, 0, 0, 0.1)";
}

// Optionally, adjust the background size and other properties
// document.documentElement.style.backgroundImage = "url('')";
document.documentElement.style.backgroundImage = "url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic2.minitokyo.net%2Fview%2F07%2F23%2F618657.jpg&f=1&nofb=1&ipt=28857f9609e6fd8aa38e99817c2fda8bb6771c7903366335d1011e5190eaac42&ipo=images')";
// object.style.backgroundSize = "auto|length|cover|contain|intial|inherit"
document.documentElement.style.backgroundSize = "cover";
// document.documentElement.style.backgroundAttachment = "fixed"; // Ensures the background image does not scroll
document.documentElement.style.backgroundPosition = "center"; 


// Video bar container
var p = document.body.getElementsByClassName("ytp-progress-bar-container");
for (var i = 0; i < p.length; i++) {
      p[i].style.background = "silver"; 
}

// Current progress video trail
var g = document.body.getElementsByClassName("ytp-play-progress");
for (var i = 0; i < g.length; i++) {
    g[i].style.background = "yellow";
}

// Progress indicator point 
var d = document.body.getElementsByClassName("ytp-scrubber-button ytp-swatch-background-color");
for (var i = 0; i < d.length; i++) {
    d[i].style.background = "red";
}

// OPTIONAL: Hover play progress bar forward
var c = document.body.getElementsByClassName("ytp-hover-progress ytp-hover-progress-light");
for (var i = 0; i < c.length; i++) {
    c[i].style.background = "green";
}



document.body.addEventListener('mouseover', function(event) {
    event.target.style.color = "orange";
});

document.body.addEventListener('mouseout', function(event) {
    event.target.style.color = "white";

});
