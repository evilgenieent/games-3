window.onload = function () {
  fitToWindowHeight();
  renderGameCartridges();
};

var fitToWindowHeight = function () {
  document.getElementsByTagName('body')[0].style.height = window.innerHeight + 'px';
};

var renderGameCartridges = function () {
  var blurb;
  var games;
  var i; var j;
  var image;
  var name;
  var node;
  var object;
  var section;
  games = document.getElementsByTagName('cartridge');
  for (i=0 ; i<games.length ; i++) {
    object = content.games[games[i].id];
    node = games[i];
    blurb = document.createElement('BLURB');
    image = document.createElement('IMG');
    name = document.createElement('NAME');
    section = document.createElement('SECTION');
    blurb.innerText = object.blurb;
    image.src = object.image;
    name.innerText = node.id;
    node.appendChild(image);
    node.appendChild(section);
    section.appendChild(name);
    section.appendChild(blurb);
  }
  setTimeout(insertCartridge, 1200);
};

var insertCartridge = function () {
  var cartridge;
  var display = {};
  var object;
  cartridge = document.getElementsByClassName('centered')[0];
  display.name = document.getElementById('display-name');
  display.blurb = document.getElementById('display-blurb');
  display.image = document.getElementById('display-image');
  object = content.games[cartridge.id];
  cartridge.style.marginTop = '236px';
  window.setTimeout(function () {
    display.image.src = object.image;
  }, 500);
};

var removeCartridge = function () {
  var cartridge;
  cartridge = document.getElementsByClassName('centered')[0];
  cartridge.style.marginTop = '0px';
};
