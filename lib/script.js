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

var renderGameCartridges = function () {
  var blurb;
  var controls;
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
  setTimeout(insertCartridge, 200);
};

var insertCartridge = function () {
  var cartridge;
  var controls;
  var display = {};
  var gap;
  var object;
  var system;
  cartridge = document.getElementsByClassName('centered')[0];
  system = document.getElementsByClassName('main-display')[0];
  display.name = document.getElementById('display-name');
  display.blurb = document.getElementById('display-blurb');
  display.image = document.getElementById('display-image');
  display.start = document.getElementsByClassName('start-game')[0];
  object = content.games[cartridge.id];
  gap = 200;
  cartridge.style.transform = 'translateX(-50%) translateY(' + gap + 'px)';
  window.setTimeout(function () {
    display.image.src = object.image;
    display.name.innerText = cartridge.id;
    display.blurb.innerText = object.blurb;
    display.start.innerText = "START";
    display.start.onclick = function () {
      window.open(object.url, '_blank');
    };
  }, universalDelay);
};

var removeCartridge = function () {
  var cartridge;
  var display = {};
  display.name = document.getElementById('display-name');
  display.blurb = document.getElementById('display-blurb');
  display.image = document.getElementById('display-image');
  display.start = document.getElementsByClassName('start-game')[0];
  cartridge = document.getElementsByClassName('centered')[0];

  display.image.src = 'assets/empty.png';
  display.name.innerText = "";
  display.blurb.innerText = "";
  display.start.innerText = "";
  display.start.onclick = null;

  cartridge.style.transform = 'translateX(-50%) translateY(0px)';
};

var cycleLeft = function () {
  var games;
  var i;
  games = document.getElementsByTagName('cartridge');
  if (cooldown) { return false; }
  cooldown = true;
  setTimeout(function () { cooldown = false; }, 1500);
  removeCartridge();
  setTimeout(function () {
    centeredGame -= 1;
    if (centeredGame < 0) { centeredGame = 0; }
    for (i=0 ; i<games.length ; i++) {
      if (i < centeredGame - 1) {
        games[i].className = 'offleft';
      } else if (i < centeredGame) {
        games[i].className = 'left';
      } else if (i === centeredGame) {
        games[i].className = 'centered';
      } else if (i === centeredGame + 1) {
        games[i].className = 'right';
      } else {
        games[i].className = 'offright';
      }
      setTimeout(function () {
        insertCartridge();
      }, universalDelay);
    }
  }, universalDelay);
};

var cycleRight = function () {
  var games;
  var i;
  games = document.getElementsByTagName('cartridge');
  if (cooldown) { return false; }
  cooldown = true;
  setTimeout(function () { cooldown = false; }, 1500);
  removeCartridge();
  setTimeout(function () {
    centeredGame += 1;
    if (centeredGame >= games.length - 1) { centeredGame = games.length - 1; }
    for (i=0 ; i<games.length ; i++) {
      if (i < centeredGame - 1) {
        games[i].className = 'offleft';
      } else if (i < centeredGame) {
        games[i].className = 'left';
      } else if (i === centeredGame) {
        games[i].className = 'centered';
      } else if (i === centeredGame + 1) {
        games[i].className = 'right';
      } else {
        games[i].className = 'offright';
      }
      setTimeout(function () {
        insertCartridge();
      }, universalDelay);
    }
  }, universalDelay);
};
