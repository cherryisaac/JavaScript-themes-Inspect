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


document.body.addEventListener('mouseover', function(event) {
    event.target.style.color = "orange";
});

document.body.addEventListener('mouseout', function(event) {
    event.target.style.color = "white";

});
