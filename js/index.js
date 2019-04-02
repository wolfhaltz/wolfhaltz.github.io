var myIndex = 0;
schizophrenia_carousel();

function schizophrenia_carousel() {
  var i;
  var x = document.getElementsByClassName("schizophrenia_img");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(schizophrenia_carousel, 2000); // Change image every 2 seconds
}