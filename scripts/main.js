$("#ButtonSet").click(function(){
  //Fade it
  $("#Komuita").css("z-index",100);
  document.getElementById("LoadingW").src = "imgs/Results/loading_text.png";

  //Loading
  setTimeout("document.getElementById('LoadingP').src = 'imgs/Results/loading1.png'",250);
  setTimeout("document.getElementById('LoadingP').src = 'imgs/Results/loading2.png'",500);
  setTimeout("document.getElementById('LoadingP').src = 'imgs/Results/loading1.png'",750);
  setTimeout("document.getElementById('LoadingP').src = 'imgs/Results/loading2.png'",1000);
  setTimeout("document.getElementById('LoadingP').src = 'imgs/Results/loading1.png'",1250);
  setTimeout("document.getElementById('LoadingP').src = 'imgs/Results/loading2.png'",1500);

  setTimeout("showPic()",1500);
  //This function help creat eight numbers!
})

//I'm too lazy, I just want to copy codes..
$("#Retry").click(function(){

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
      document.getElementById("ResultImage").src = "imgs/Results/result2.png";
      break;
    case 2:
      document.getElementById("ResultImage").src = "imgs/Results/result3.png";
      break;
    case 3:
      document.getElementById("ResultImage").src = "imgs/Results/result4.png";
      break;
    case 4:
      document.getElementById("ResultImage").src = "imgs/Results/result5.png";
      break;
    case 5:
      document.getElementById("ResultImage").src = "imgs/Results/result6.png";
      break;
    case 6:
      document.getElementById("ResultImage").src = "imgs/Results/result7.png";
      break;
    case 7:
      document.getElementById("ResultImage").src = "imgs/Results/result8.png";
      break;
    case 8:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png";
      break;
    default:
      break;
  }
})

$("#Share").click(function(){
  $("#Komuita").css("z-index",100);
  document.getElementById("Share_indicator").src = "imgs/Results/share_indicator.png";
})


//We should clear loadingP
function showPic() {

  //clear Map
  document.getElementById("LoadingP").src = "";
  $("#Komuita").css("z-index",-1);
  document.getElementById("LoadingW").src = "";

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
      document.getElementById("ResultImage").src = "imgs/Results/result2.png";
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    case 2:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png";
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    case 3:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png";
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    case 4:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png";
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    case 5:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png";
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    case 6:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png";
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    case 7:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png";
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    case 8:
      document.getElementById("ResultImage").src = "imgs/Results/result2.png";
      $("#Result").show();
      $("#ButtonSet").hide();
      break;
    default:
      break;
  }
}
