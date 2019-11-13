var hat = document.getElementById("hat");
var moving = false;

hat.addEventListener("mousedown", initialClick, false);


function move(e){

  var newX = e.clientX - 35;
  var newY = e.clientY - 35;

  hat.style.left = newX + "px";
  hat.style.top = newY + "px";
}

function initialClick(e) {

  if(moving){
    document.removeEventListener("mousemove", move);
    moving = !moving;
    return;
  }

  moving = !moving;

  document.addEventListener("mousemove", move, false);

}

// this code was adapted from https://stackoverflow.com/questions/33948464/move-an-image-with-javascript-using-mouse-events
