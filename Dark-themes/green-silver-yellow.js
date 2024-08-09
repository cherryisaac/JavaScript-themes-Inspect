var e = document.body.getElementsByTagName('*');

for (var i = 0; i < e.length; i++) {
  e[i].style.color = "white";
  e[i].style.borderColor = "yellow";
  e[i].style.borderBlockColor = "silver";
  e[i].style.background = "rgba(0, 15, 0, 0.2";
}


document.body.addEventListener('mouseover', function(event) {
    event.target.style.color = "orange";
});

document.body.addEventListener('mouseout', function(event) {
    event.target.style.color = "white";
});
