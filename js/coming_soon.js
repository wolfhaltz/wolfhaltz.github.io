var i = 0;
var speed = 80;
var title = 'Coming soon.';
var description = 'Sorry, I\'m still doing this. Come back later.';

function typeWriter() {
  if (i < title.length || i < description.length) {
    document.getElementById("title").innerHTML += title.charAt(i);
    document.getElementById("description").innerHTML += description.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}