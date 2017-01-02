var lemon = document.getElementById('lemonImg')
lemon.addEventListener("click", clickLemon);
var showNumbers = document.getElementById('output');
var total = 0;

function clickLemon() {
  total ++;
  showNumbers.innerHTML = total;
}


var reset = document.getElementById('btn-reset')
reset.addEventListener("click", resetScore);
function resetScore() {
  total = 0;
  showNumbers.innerHTML = total;
  for(i=0; i<100; i++) {
    window.clearInterval(i); 
  }
}

/*
power up 1 function
*/
var power1 = document.getElementById('powerUp1');
power1.addEventListener("click", powerUp1);

function powerUp1() {
  if (total >= 20) {
    total = total - 20;
    power1.onclick = setInterval('clickPower("power")', 5000);
  }
}
/*
power up 2 function
*/
var power2 = document.getElementById('powerUp2');
power2.addEventListener("click", powerUp2);

function powerUp2() {
  if (total >= 150) {
    total = total - 150;
    power2.onclick = setInterval('clickPower("power2")', 2000);
  }
}
/*
power up 3 function
*/
var power3 = document.getElementById('powerUp3');
power3.addEventListener("click", powerUp3);

function powerUp3() {
  if (total >= 350) {
    total = total - 350;
    power3.onclick = setInterval('clickPower("power3")', 1000);
  }
}
/*
power up 4 function
*/
var power4 = document.getElementById('powerUp4');
power4.addEventListener("click", powerUp4);

function powerUp4() {
  if (total >= 700) {
    total = total - 700;
    power4.onclick = setInterval('clickPower("power4")', 1000);
  }
}
/*
power up 5 function
*/
var power5 = document.getElementById('powerUp5');
power5.addEventListener("click", powerUp5);

function powerUp5() {
  if (total >= 1000) {
    total = total - 1000;
    power5.onclick = setInterval('clickPower("power5")', 1000);
  }
}
/*
power up 6 function
*/
var power6 = document.getElementById('powerUp6');
power6.addEventListener("click", powerUp6);

function powerUp6() {
  if (total >= 1500) {
    total = total - 1500;
    power6.onclick = setInterval('clickPower("power6")', 1000);
  }
}
/*
power up 7 function
*/
var power7 = document.getElementById('powerUp7');
power7.addEventListener("click", powerUp7);

function powerUp7() {
  if (total >= 20000) {
    total = total - 20000;
    power7.onclick = setInterval('clickPower("power7")', 1000);
  }
}
/*
power up 8 function
*/
var power8 = document.getElementById('powerUp8');
power8.addEventListener("click", powerUp8);

function powerUp8() {
  if (total >= 100000) {
    total = total - 100000;
    power8.onclick = setInterval('clickPower("power8")', 1000);
  }
}


function clickPower(power) {
  switch (power) {
    case "power":
      total = total + .5;
      showNumbers.innerHTML = total;
      break;
    case "power2":
      total = total + 1;
      showNumbers.innerHTML = total;
      break;
    case "power3":
      total = total + 2;
      showNumbers.innerHTML = total;
      break;
    case "power4":
      total = total + 10;
      showNumbers.innerHTML = total;
      break;
    case "power5":
      total = total + 20;
      showNumbers.innerHTML = total;
      break;
    case "power6":
      total = total + 50;
      showNumbers.innerHTML = total;
      break;
    case "power7":
      total = total + 100;
      showNumbers.innerHTML = total;
      break;
    case "power8":
      total = total + 50000;
      showNumbers.innerHTML = total;
      break;
    default:
      return;
  }
}



