var e = document.body.getElementsByTagName("*");

for (var i = 0; i < e.length; i++) {
  e[i].style.color = "gold";
  e[i].style.borderColor = "orange";
  e[i].style.borderBlockColor = "green";
  e[i].style.background = "rgba(0, 0, 0, 0.8)";
}

document.body.addEventListener('mouseover', function(event) {
    event.target.style.color = "orange";
});

document.body.addEventListener('mouseout', function(event) {
    event.target.style.color = "gold";
});
