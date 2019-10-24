$(document).ready(function() {
  var height = parseInt(prompt("What is your height in inches?"));
  if (height >= 72) {
    $("#speed").css("background-color", "yellow");
    $("#mushroom").css("background-color", "yellow");
  } else if (height >= 60) {
    $("#mushroom").css("background-color", "yellow");
  } else if (height <= 48){
    $("#grass").css("background-color", "yellow");
  } else {
    $("#nothing").show();
  }
});
