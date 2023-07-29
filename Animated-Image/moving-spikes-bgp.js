var e = document.body.getElementsByTagName("*");

for (var i = 0; i < e.length; i++) {
  e[i].style.color = "white";
  e[i].style.borderColor = "yellow";
  e[i].style.borderBlockColor = "green";
  // e[i].style.outlineColor = "green";
  // e[i].style.scrollbarColor = "green";
  e[i].style.linkColor = "green";
  e[i].style.background = "rgba(0, 0, 0, 0.3)";
}

window.getSelection().anchorNode.parentElement.style.backgroundColor = "white";


// document.body.style.scrollbarColor = "green";
// document.body.style.linkColor = "green";


document.body.style.backgroundImage = "url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/41810341995087.57bd505fc7b34.gif')";
// object.style.backgroundSize = "auto|length|cover|contain|intial|inherit"
document.body.style.backgroundSize = "cover"; // Adjust the background size as needed


document.body.addEventListener('mouseover', function(event) {
    event.target.style.color = "blueviolet";
});

document.body.addEventListener('mouseout', function(event) {
    event.target.style.color = "white";
});
