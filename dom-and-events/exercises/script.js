function init () {
    const missionAbort = document.getElementById("abortMission");
    const paragraph = document.getElementById("statusReport");
    const button = document.body.querySelector('[data-target="#collapseExample"]');
    // Put your code for the exercises here.
    button.addEventListener('click', function() { 
        if(button.innerText.toLowerCase() === 'less') {
            button.innerText = 'Take off';
          }
          else {
            button.innerText = 'Houston! We have liftoff!';
          }
        });  
 missionAbort.addEventListener("mouseover", function( event ) {
event.target.style.backgroundColor = "red";
});
 missionAbort.addEventListener("mouseout", function( event ) {
event.target.style.backgroundColor = "";
});
}

window.addEventListener("load", init);
