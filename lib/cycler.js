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
