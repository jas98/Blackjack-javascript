var yourScore = 0;
var dealerScore = 0;
var aww = new Audio("aww.mp3");
var swish = new Audio("swish.m4a");
var cash = new Audio("cash.mp3");

function yourHit() {
  var random = generateRandomNo();

  var img = document.createElement("img");
  var div = document.getElementById("images");
  img.src = imagesdata(random);
  img.height = 150;
  img.width = 100;
  div.appendChild(img);
  swish.play();
  yourScore = yourScore + random;

  var e = (document.getElementById("urScoreId").innerHTML = yourScore);
  if (yourScore > 21) {
    document.getElementById("status").innerHTML = "Busted";
    aww.play();
  }
}

function imagesdata(random) {
  var imgDatabase = {
    2: "2.png",
    3: "3.png",
    4: "4.png",
    5: "5.png",
    6: "6.png",
    7: "7.png",
    8: "8.png",
    9: "9.png",
    10: "10.png",
    11: "A.png"
  };
  return imgDatabase[random];
}

function dealerHit() {
  // dealerScore = dealerScore + generateRandomNo();
  var noOfRandoms = Math.floor(Math.random() * 3) + 2;

  console.log("total cards" + noOfRandoms);
  for (var i = 0; i < noOfRandoms; i++) {
    var randomNo = generateRandomNo();
    console.log("Number generated" + randomNo);
    var img = document.createElement("img");
    var div = document.getElementById("dealerImages");
    img.src = imagesdata(randomNo);
    dealerScore = dealerScore + randomNo;
    img.height = 150;
    img.width = 100;
    div.appendChild(img);
    swish.play();
  }

  var e = (document.getElementById("dealerScoreId").innerHTML = dealerScore);

  if (yourScore > dealerScore) {
    if (yourScore > 21) {
      document.getElementById("status").innerHTML = "You Loose";
      aww.play();
    } else if (yourScore <= 21) {
      document.getElementById("status").innerHTML = "You Win";
      cash.play();
    }
  } else if (yourScore == dealerScore) {
    document.getElementById("status").innerHTML = "Match Tie";
  } else if (dealerScore > yourScore) {
    if (dealerScore > 21) {
      document.getElementById("status").innerHTML = "You Win ";
      cash.play();
    } else if (dealerScore <= 21) {
      document.getElementById("status").innerHTML = "You Loose";
      aww.play();
    }
  }
}

function clearAll() {
  console.log("clearall");
  document.getElementById("images").remove();
  document.getElementById("dealerImages").remove();
  document.getElementById("urScoreId").innerHTML = "";
  document.getElementById("dealerScoreId").innerHTML = "";
  document.getElementById("status").innerHTML = "Lets Play";
  yourScore = 0;
  dealerScore = 0;
}

function generateRandomNo() {
  var randomNumber = Math.floor(Math.random() * 10) + 2;
  //console.log(randomNumber);
  return randomNumber;
}
