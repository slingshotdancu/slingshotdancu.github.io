// Set the date we're counting down to
var timeAmt = 0;
var countDownDate = timeAmt * 1000;//amount of time times 1000;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = now + countDownDate;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
  // Display the result in the element with id="demo"
  document.getElementById("dispNum").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function addTime() {
    timeAmt = timeAmt + 5;
}
function subTime() {
    timeAmt = timeAmt - 5;
}
function reset() {
    
}