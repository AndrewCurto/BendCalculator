function totalLength() {
  var thkInput = Number(document.getElementById("thickness").value);
  if (thkInput > 1) {
 let thkIn = [7,10,11,12,13,14,16,18,19,20,22,24,26,28];
let thkOut = [.1793,.1345,.1196,.1046,.0897,.0747,.0598,.0478,.0418,.0359,.0299,.0239,.0179,.0149];
let inPosition = thkIn.indexOf(thkInput); 
thkInput = (thkOut[inPosition]);  
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
   var bendDeduction = (thkInput * 1.55) * totalBends;
    var totalResult = sumBends - bendDeduction;
  document.getElementById("result").innerHTML = totalResult.toFixed(3);
  document.getElementById("gif").style.visibility = "visibile";
  
   
}

var resetButton = document.getElementById("reset");
resetButton.addEventListener("mouseover", function() {
  document.getElementById("drake").style.visibility = "visible";
});
