var e = document.body.getElementsByTagName('*');

for (var i = 0; i < e.length; i++) {
  e[i].style.color = "black";
  e[i].style.borderColor = "black";
  e[i].style.borderBlockColor = "black";
  e[i].style.fontWeight = "bold";
  e[i].style.background = "rgba(255, 255, 255, 0.2";
}

const myElement = document.getElementById('myElement');

function applyGlowEffect() {
    let glowSize = 3;
    let glowColor = "indigo";
    const maxGlowSize = 20; // Maximum size of the glow in pixels

    function updateGlow() {
        glowSize = (glowSize + 1) % (maxGlowSize + 1); // Increase glow size and loop back when reaching the maximum
        myElement.style.boxShadow = `0 0 ${glowSize}px ${glowColor}`; // Apply the updated box-shadow
    }

    // Add the glow effect when hovering over the element
    myElement.addEventListener('mouseover', () => {
        // Start the interval to create the pulsating effect
        myElement.glowInterval = setInterval(updateGlow, 50); // Adjust the interval as needed for smoother or faster pulsating
    });

    // Remove the glow effect when the mouse leaves the element
    myElement.addEventListener('mouseout', () => {
        clearInterval(myElement.glowInterval); // Clear the interval to stop the pulsating effect
        myElement.style.boxShadow = "none"; // Reset the box-shadow to remove the glow effect
    });
}
applyGlowEffect();
