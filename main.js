//function myFunction() {
    //document.getElementById("demo").innerHTML = "Paragraph changed."; //A test to see how JS works. This is in Layout in item4
 // }

  function datum() {
  document.getElementById("dabu").addEventListener("click", myTimer);
  }

//function displayDate() {
//document.getElementById("showdate").innerHTML = Date();
//}


function myTimer() {
    setInterval(myTimer, 1000);  // so after 1000 the time will change
const d = new Date();            // so that it shows the exact time
  document.getElementById("showdate").innerHTML = d.toLocaleTimeString();
}
  
alert( 'Hello, world!')

  // This is how you write comments in javascript
//