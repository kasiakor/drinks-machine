// initial values

var initialText = "PRESS THE BUTTON OF SELECTED DRINK";
var startText = "Boiling some water";
var endText = "Drink is ready to collect";

var chocolateText = [
  startText,
  "Adding drinking chocolate powder to the water",
  "Pouring chocolate in the cup",
  endText];
var coffeeText =[
  startText,
  "Brewing the coffee grounds",
  "Pouring coffee in the cup",
  "Adding sugar and milk",
  endText];
var teaText =[
  startText,
  "Steeping the water in the tea",
  "Pouring tea in the cup",
  "Adding lemon",
  endText];

var messages = {
  drinkChocolate: chocolateText,
  drinkCoffee: coffeeText,
  drinkTea: teaText
};


// function to display recipies

$(document).ready(function() {
  $("#readout-box").text(initialText);
  var drinkInProgress = false;
  $(".drink-button").click(function() {
    if (drinkInProgress) { return }
    drinkInProgress = true
    var currentMessage = messages[$(this).attr("id")];
    var textLength = messages[$(this).attr("id")].length;
    var i = 1;
    $("#readout-box").text(currentMessage[0]);
    messageInterval = setInterval(function(){ 
      $("#readout-box").text(currentMessage[i]); 
      i++
      if (i == textLength) {
        $(this).removeClass("button-clicked");
        $(".drink-button").removeClass("button-clicked");
        setTimeout(function(){ 
          $("#readout-box").text(initialText);
        }, 2000);

        drinkInProgress = false;
        clearInterval(messageInterval);
      }
    }, 2000);

    $(this).addClass("button-clicked");
  });
});


