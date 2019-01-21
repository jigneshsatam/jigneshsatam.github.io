var colour;
function toggleColour(){
  if (colour === undefined || colour === true){
    colourOff();
    colour = false
  } else {
    colourOn();
    colour = true
  }
}
function colourOn(){
  document.querySelectorAll('.colour-off').forEach(function(elem){
    removeClass(elem, 'colour-off');
    addClass(elem, 'colour-on');
  });
}
function colourOff(){
  document.querySelectorAll('.colour-on').forEach(function(elem){
    removeClass(elem, 'colour-on');
    addClass(elem, 'colour-off');
  });
}
function addClass(elem, klass){
  elem.classList.add(klass);
}
function removeClass(elem, klass){
  elem.classList.remove(klass);
}
