var e = document.body.getElementsByTagName('*');

for (var i = 0; i < e.length; i++) {
  e[i].style.color = "white";
  e[i].style.borderColor = "silver";
  e[i].style.borderBlockColor = "purple";
  e[i].style.background = "rgba(0, 0, 25, 0.2)";
}

document.body.addEventListener('mouseover', function(event) {
    event.target.style.color = "blueviolet";
});

document.body.addEventListener('mouseout', function(event) {
    event.target.style.color = "white";
});
