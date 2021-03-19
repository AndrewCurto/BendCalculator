var resetButton = document.getElementById("reset");
var girlMeasuring = document.getElementById("girl");
var guyWithCaliper = document.getElementById("caliperGuy");
var resultButton = document.getElementById("button");
var drakeGif = document.getElementById("drake");
var whatHappened = document.getElementById("spiderman");
var dissaPointing = document.getElementById("disappointGuy");
const pressResetMsg = document.getElementById("pressResetMsg");
var calcResult = document.getElementById("result");
var thkInput = document.getElementById("thickness");
var thkLabel = document.getElementById("thkLabel")



thkInput.addEventListener("input", function(){
  if (thkInput.value > 1) {
    thkLabel.innerHTML = "Gauge: ";
  } else {
    thkLabel.innerHTML = "Thickness: ";
  }
  
});



resultButton.addEventListener("click", function() {


  if (Number(thkInput.value) > 1) {
    let thkIn = [7, 10, 11, 12, 13, 14, 16, 18, 19, 20, 22, 24, 26, 28];
console.log(thkIn);
    let thkOut = [.1793, .1345, .1196, .1046, .0897, .0747, .0598, .0478, .0418, .0359, .0299, .0239, .0179, .0149];
console.log(thkOut);    
    let inPosition = thkIn.indexOf(Number(thkInput.value));
console.log(inPosition);
     thkInput.value = (thkOut[inPosition]);
console.log(thkInput.value);
      }

  var sumBends = Number(document.getElementById("bend1").value) +
    Number(document.getElementById("bend2").value) +
    Number(document.getElementById("bend3").value) +
    Number(document.getElementById("bend4").value) +
    Number(document.getElementById("bend5").value) +
    Number(document.getElementById("bend6").value) +
    Number(document.getElementById("bend7").value) +
    Number(document.getElementById("bend8").value);
  var totalBends = Number(document.getElementById("totalbends").value);

  var bendDeduction = (Number(thkInput.value) * 1.55) * totalBends;
  var totalResult = (sumBends - bendDeduction).toFixed(3);
  calcResult.innerHTML = totalResult;

  if (totalResult === "0.000") {
    whatHappened.style.display = "inline-block";
    guyWithCaliper.style.display = "none";
    dissaPointing.style.display = "inline-block";
    pressResetMsg.style.display = "inline-block";
    resultButton.innerHTML = "<s>RESULT</s>";
    resultButton.style.opacity = ".1";
    calcResult.innerHTML = "";

  } else {
    girlMeasuring.style.display = "inline-block";
    guyWithCaliper.style.display = "none";

  }

});
