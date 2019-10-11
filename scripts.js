window.addEventListener("load", function() {
});
let ready = null;
let spaceShuttleHeight = 0;
let xpos = 0;
let ypos = 0;
document.getElementById("rocket").style.position = "absolute";
function takeOff(){
    if (confirm("Are you ready?")){
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight."
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        spaceShuttleHeight += 10000
        document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight;
        ready = true;
    } else {
        ready = false;
    };
}
function landing(){
    alert("The Shuttle is landing. Landing gear engaged.")
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor = "green";
    spaceShuttleHeight = 0;
    xpos = 0 
    ypos = 0
    document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight;
}
function missionAbort(){
    if (confirm("Confirm that you want to abort the mission.")){
        document.getElementById("flightStatus").innerHTML = "Mission aborted";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        spaceShuttleHeight = 0;
        xpos = 0;
        ypos = 0;
        document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight;
    }
}
function up(){
    if(ready){
    spaceShuttleHeight += 10000;
    ypos += -10
    document.getElementById("rocket").style.top = ypos + "px"
    document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight
    }
}
function down(){
    if(ready){
    spaceShuttleHeight -= 10000;
    ypos += 10
    document.getElementById("rocket").style.top = ypos + "px"
    document.getElementById("spaceShuttleHeight").innerHTML = spaceShuttleHeight
    }
}
function left(){
    if(ready){
        xpos += -10
        document.getElementById("rocket").style.left = xpos +"px"
    }
}
function right(){
    if(ready){
        xpos += 10
        document.getElementById("rocket").style.left = xpos + "px"
    }
}