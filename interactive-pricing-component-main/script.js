var pageviews = [10, 50, 100, 500, 1];
var month = [8.00, 12.00, 16.00, 24.00, 36.00];
var years = [6, 9, 12, 18, 27];
var input = document.getElementById("input"),
  outputpageviews = document.getElementById("outputpageviews"),
  outputmounth = document.getElementById("outputmounth"),
  check = document.getElementById("switchcheck");
  month1 = "/month";



input.oninput = function () {
  if (check.checked == true) {
    if (this.value == 4) {
      outputpageviews.innerHTML = pageviews[this.value] + "M PAGEVIEWS";
      outputmounth.innerHTML = "$" + years[this.value] + ".00"
    } else {
      outputpageviews.innerHTML = pageviews[this.value] + "K PAGEVIEWS";
      outputmounth.innerHTML = "$" + years[this.value] + ".00"
    }
  } else {
    if (this.value == 4) {
      outputpageviews.innerHTML = pageviews[this.value] + "M PAGEVIEWS";
      outputmounth.innerHTML = "$" + month[this.value] + ".00";
    } else {
      outputpageviews.innerHTML = pageviews[this.value] + "K PAGEVIEWS";
      outputmounth.innerHTML =  "$" + month[this.value]+ ".00";
    }
  }
};

input.oninput();

$('input[type=range]').on('input', function(e){
  var min = e.target.min,
      max = e.target.max,
      val = e.target.value;
  
  $(e.target).css({
    'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
  });
}).trigger('input');
