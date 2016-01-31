$("#ButtonSet").click(function(){
  //This function help creat eight numbers!
  var a = 10 * Math.random();
  while(a > 8) {
    var a = 10 * Math.random();
  }
  var a = Math.floor(a);
  console.log(a);
  //we use it creat which result you have
  //Enum..It's not a good method, if we use jquery make "result" + a + "png" will be more simply, but I don't want to changge it.
  switch (a) {
    case 0:
      document.getElementById("ResultImage").src = "imgs/Results/result1.png";
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    case 1:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png"
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    case 2:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png"
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    case 3:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png"
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    case 4:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png"
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    case 5:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png"
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    case 6:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png"
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    case 7:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png"
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    case 8:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png"
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    default:
      break;
  }

})

//I'm too lazy, I just want to copy codes..
$("#retry").click(function(){
  var a = 10 * Math.random();
  while(a > 8) {
    var a = 10 * Math.random();
  }
  var a = Math.floor(a);
  console.log(a);
  switch (a) {
    case 0:
      document.getElementById("ResultImage").src = "imgs/Results/result1.png";
      break;
    case 1:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png"
      break;
    case 2:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png"
      break;
    case 3:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png"
      break;
    case 4:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png"
      break;
    case 5:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png"
      break;
    case 6:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png"
      break;
    case 7:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png"
      break;
    case 8:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png"
      break;
    default:
      break;
  }

})
