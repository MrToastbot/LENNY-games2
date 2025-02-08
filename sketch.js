function triggerVirus(){
    // Store all error message elements
    let errorMessages = [];

    // Add random error messages across the screen
    for (let i = 0; i < 10; i++) {
        let errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.innerText = "ERROR: SYSTEM FAILURE";
        
        // Randomize the position
        errorMessage.style.top = Math.random() * window.innerHeight + 'px';
        errorMessage.style.left = Math.random() * window.innerWidth + 'px';

        // Append the error message to the body
        document.body.appendChild(errorMessage);

        // Add it to the array for later removal
        errorMessages.push(errorMessage);
    }

    // Play audio
    var audio = new Audio('Nuke.mp3');
    audio.play();

    // Trigger the static effect on the screen
    document.body.style.animation = "static 0.1s infinite";

    // Create the broken screen effect
    var brokenScreen = document.getElementById('brokenScreen');
    brokenScreen.style.display = 'block';


    // Hide the broken screen and reset the static effect after 23 seconds
    setTimeout(function() {
        // Remove all error messages
        errorMessages.forEach(function(errorMessage) {
            errorMessage.remove();
        });

        // Hide the broken screen
        brokenScreen.style.display = 'none';

        // Reset the static effect
        document.body.style.animation = "";
    }, 23000);
}