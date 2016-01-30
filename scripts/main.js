

$("#ButtonSet").click(function(){
  //This function help creat eight numbers!
  var a = 10 * Math.random();
  while(a > 8) {
    var a = 10 * Math.random();
  }
  var a = Math.floor(a);
  console.log(a);
  //we use it creat which result you have
  switch (a) {
    case 0:
      document.getElementById("ResultImage").src = "imgs/Results/IMG_0230.PNG"
      document.getElementById("Result").style = "display: none";
      break;
    case 1:

      break;
    case 2:

      break;
    case 3:

      break;
    case 4:

      break;
    case 5:

      break;
    case 6:

      break;
    case 7:

      break;
    case 8:
      break;
    default:
      break;
  }

})
