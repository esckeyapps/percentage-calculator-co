
let calc1 = () => {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    if (n1 && n2) 
    {
      let result1 = document.getElementById("result1").value = Math.round((n1 / 100) * n2);
    }
}

let calc2 = () => {
  let n3 = document.getElementById("n3").value;
  let n4 = document.getElementById("n4").value;
  if (n3 && n4)
  {
  let result2 = document.getElementById("result2").value = Math.round((n3 / n4) * 100) + '%';
  }
}

let calc3 = () => {
  let n5 = document.getElementById("n5").value;
  let n6 = document.getElementById("n6").value;
  if (n5 && n6)
  {
  let result3 = document.getElementById("result3").value = Math.round(((n6 - n5) / n5) * 100) + '%';
  }
}

document.getElementById("button1").addEventListener("click", calc1);
document.getElementById("button2").addEventListener("click", calc2);
document.getElementById("button3").addEventListener("click", calc3);

// Statistical Significance Calculator


function normDist(x, mean, std) {
  var x = (x - mean) / std
  var t = 1 / (1 + 0.2315419 * Math.abs(x))
  var d = 0.3989423 * Math.exp( -x * x / 2)
  var prob = d * t * (0.3193815 + t * ( -0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))))
  if( x > 0 ) prob = 1 - prob
  return prob
}
 
let controlVisitors = 3796
let controlConversions = 2313
let controlCVR = controlConversions / controlVisitors
 
let variationVisitors = 4978
let variationConversions = 3114
let variationCVR = variationConversions / variationVisitors
 
let controlStandardError = Math.sqrt((controlCVR * (1 - controlCVR) / controlVisitors))
let variationStandardError = Math.sqrt((variationCVR * (1 - controlCVR) / variationVisitors))
 
let zScore = (controlCVR - variationCVR) / Math.sqrt(Math.pow(controlStandardError, 2) + Math.pow(variationStandardError, 2))
 
let pValue = normDist(zScore,0,1)
 
let confidence = ((1 - pValue) * 100).toFixed(0) + "%"
 
console.log(confidence)






/*   <div class="wave">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
<path fill="#00cba9" fill-opacity="1"
    d="M0,64L120,69.3C240,75,480,85,720,80C960,75,1200,53,1320,42.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z">
</path>
</svg>
</div>
*/