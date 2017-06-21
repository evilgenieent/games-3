window.onload = function () {
  fitToWindowHeight();
  renderGameCartridges();
};

var universalDelay = 500;
var centeredGame = 2;
var cooldown = false;

var fitToWindowHeight = function () {
  document.getElementsByTagName('body')[0].style.height = window.innerHeight + 'px';
};
