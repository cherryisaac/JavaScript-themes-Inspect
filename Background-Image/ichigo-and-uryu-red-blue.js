var e = document.body.getElementsByTagName("*");

for (var i = 0; i < e.length; i++) {
  e[i].style.color = "white";
  e[i].style.borderColor = "blue";
  e[i].style.borderBlockColor = "red";
  e[i].style.background = "rgba(0, 0, 0, 0.3)";
}

document.body.style.backgroundImage = "url('https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/05/29/bleach-tybw-part-2-key-visual.jpeg')";
document.body.style.backgroundSize = "cover"; // Adjust the background size as needed


document.body.addEventListener('mouseover', function(event) {
    event.target.style.color = "blueviolet";
});

document.body.addEventListener('mouseout', function(event) {
    event.target.style.color = "white";
});
