var e = document.body.getElementsByTagName("*");

for (var i = 0; i < e.length; i++) {
  e[i].style.color = "indianred";
  e[i].style.borderColor = "blueviolet";
  // e[i].style.borderBlockColor = "lightblue";
  e[i].style.borderBlockColor = "mediumspringgreen";
  // e[i].style.outlineColor = "green";
  // e[i].style.scrollbarColor = "green";
  e[i].style.linkColor = "green";
  e[i].style.background = "rgba(0, 0, 0, 0.1)";
}

// document.body.style.scrollbarColor = "green";
// document.body.style.linkColor = "green";


document.body.style.backgroundImage = "url('https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/363319939_2298553893668719_8184542833059679631_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=uQOqqKTXNh8AX90eQsF&_nc_ht=scontent-lga3-2.xx&oh=00_AfC_FoTScqgVg-mCmlBZmh7-ExYPIw6v8uUpls4GgK6JPA&oe=64CE1BC9')";
// object.style.backgroundSize = "auto|length|cover|contain|intial|inherit"
document.body.style.backgroundSize = "cover"; // Adjust the background size as needed


document.body.addEventListener('mouseover', function(event) {
    event.target.style.color = "darkturquoise";
    event.target.style.fontWeight = "bold";
});

document.body.addEventListener('mouseout', function(event) {
    event.target.style.color = "indianred";
});
