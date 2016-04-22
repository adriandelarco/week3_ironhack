var read = require('read');



var Room = function (answer, description){
    this.answer = answer;
    this.description = description;
}

function Game(){
  	this.rooms = [];
 	this.current = 0;
 	var that = this;

	this.add_room = function(room){
	        this.rooms.push(room);
	};

	this.play = function(){
  		return this.prompt();

  	}

  	this.move = function (dir) {
  		switch (dir) {
  		case "1":
  			console.log("nort2");
  			// statements_1
  			break;
  		case 2:
  			// statements_1
  			break;
  		case 3:
  			// statements_1
  			break;
  		case 4:
  			// statements_1
  			break;
  		}
  	}

  	this.prompt = function () {
  		console.log("Hi there!")
  		options = {prompt: "Which direction I should follow?\n>"}
	  	read(options, direction)
	  	function direction (err, dir){
	    	return that.move(dir);
		}
  	}


}

    
var room1 = new Room(1,"You are in the first room. Follow the Pole Star.");
var game = new Game();
game.add_room(room1);
game.play()

