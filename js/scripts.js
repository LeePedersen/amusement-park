$(document).ready(function() {

    var height = parseInt(prompt("What is your height in inches?"));
    if (height === "turtles") {
      $("#turtle").show();
    } else if (animal === "snakes") {
      $("#snake").show();
    } else {
      $("#beetle").show();
    }

});
