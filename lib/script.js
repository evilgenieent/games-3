window.onload = function () {
  fitToWindowHeight();
  renderGameCartridges();
};

var universalDelay = 500;
var centeredGame = 1;
var cooldown = false;

var fitToWindowHeight = function () {
  document.getElementsByTagName('body')[0].style.height = window.innerHeight + 'px';
};
