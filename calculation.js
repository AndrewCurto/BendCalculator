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
