var yourScore = 0;
var dealerScore = 0;
var aww = new Audio("aww.mp3");
var swish = new Audio("swish.m4a");
var cash = new Audio("cash.mp3");
var hitBtnBlock = false;
var standBtnBlock = false;
var noOfRandoms = 0;
var winCount = 0;
var lossCount = 0;
var drawCount = 0;
function yourHit() {
  if (hitBtnBlock == false) {
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
      lossCount++;
      document.getElementById("loss").innerHTML = lossCount;
      aww.play();
    }
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
  hitBtnBlock = true;
  if (standBtnBlock == false) {
    if (yourScore <= 21) {
      // dealerScore = dealerScore + generateRandomNo();
      noOfRandoms = Math.floor(Math.random() * 3) + 2;

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
      standBtnBlock = true;
      var e = (document.getElementById(
        "dealerScoreId"
      ).innerHTML = dealerScore);

      if (yourScore > dealerScore) {
        if (yourScore > 21) {
          document.getElementById("status").innerHTML = "You Loose";
          aww.play();
        } else if (yourScore <= 21) {
          document.getElementById("status").innerHTML = "You Win";
          winCount++;
          document.getElementById("win").innerHTML = winCount;
          cash.play();
        }
      } else if (yourScore == dealerScore) {
        document.getElementById("status").innerHTML = "Match Tie";
        drawCount++;
        document.getElementById("draw").innerHTML = drawCount;
      } else if (dealerScore > yourScore) {
        if (dealerScore > 21) {
          document.getElementById("status").innerHTML = "You Win";

          winCount++;
          document.getElementById("win").innerHTML = winCount;

          cash.play();
        } else if (dealerScore <= 21) {
          document.getElementById("status").innerHTML = "You Loose";
          lossCount++;
          document.getElementById("loss").innerHTML = lossCount;
          aww.play();
        }
      }
    } else {
      document.getElementById("status").innerHTML =
        "You Loose,because you went above 21";
      lossCount++;
      document.getElementById("loss").innerHTML = lossCount;
    }
  }
}

function clearAll() {
  hitBtnBlock = false;
  standBtnBlock = false;
  console.log("clearall");

  var yourImages = document
    .querySelector("#human-cards")
    .querySelectorAll("img");
  var dealerImg = document
    .querySelector("#dealerImages")
    .querySelectorAll("img");

  for (var i = 0; i < yourImages.length; i++) {
    yourImages[i].remove();
    console.log("removed image no" + i);
  }

  for (var i = 0; i < dealerImg.length; i++) {
    dealerImg[i].remove();
    console.log("removed image no" + i);
  }
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
