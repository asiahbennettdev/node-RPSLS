const http = require('http');
const fs = require('fs');
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclick=playerThrowsScissors;
document.getElementById("lizard").onclick=playerThrowsLizard;
document.getElementById("spock").onclick=playerThrowsSpock;

http.createServer(function (req, res) {
  fs.readFile('main.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
  function playerThrowsRock(){
  	var robotChoice=getRandomWeapon();
  	checkWhoWon(robotChoice,"rock");
  }
  function playerThrowsScissors(){
  	var robotChoice=getRandomWeapon();
  	checkWhoWon(robotChoice,"scissors");
  }
  function playerThrowsPaper(){
  	var robotChoice=getRandomWeapon();
  	checkWhoWon(robotChoice,"paper");
  }
  function playerThrowsLizard(){
	var robotChoice=getRandomWeapon();
	checkWhoWon(robotChoice,"lizard");
  }
  function playerThrowsSpock(){
	var robotChoice=getRandomWeapon();
	checkWhoWon(robotChoice,"spock");
  }



}).listen(4000);
