var Viking = function (name, strength, health) {
	this.name = name || "anon";
	this.strength = strength || 20;
	this.health = health || 100;
}
Viking.prototype.status = function(){
	console.log(this.name + " life is " + this.health + ".");
};
Viking.prototype.addstrength = function(){
	this.strength = this.strength + (Math.random()*0.5)
};
Viking.prototype.damage = function(){
	return (this.strength + Math.random())
};
Viking.prototype.attack = function(victim){
	victim.sufferattack(this)
};
Viking.prototype.sufferattack = function(attacker){
	this.health = this.health - attacker.damage()
};
//////////////////////////////////////
var Saxon = function (strenth, health) {
	this.strength = Math.random()*50;
	this.health = Math.random()*50;
};
Saxon.prototype.status = function(){
	console.log("Life is " + this.health + ".");
};
Saxon.prototype.damage = function(){
	return (this.strength + Math.random())
};
Saxon.prototype.attack = function(victim){
	victim.sufferattack(this)
};
Saxon.prototype.sufferattack = function(attacker){
	this.health = this.health - attacker.damage()
};
//////////////////////////////////////
var Arena = function () {};
Arena.prototype.pitfigth = function(viking1,viking2){
	while (viking1.health > viking2.damage() && viking2.health > viking1.damage()) {
		console.log("\n//// New round ////")
		viking1.attack(viking2);
		viking2.attack(viking1);
		viking1.status();
		viking2.status();
	}	
	viking1.addstrength();
	viking2.addstrength();
	console.log("\nFINIHSED ROUND:" + viking1.name + " strength is now " + viking1.strength);
	console.log(viking2.name + " strength is now " + viking2.strength);
};
Arena.prototype.vikings_battle = function(vikings,saxons){
	var rounds = (20 + Math.random()*3).toFixed()
	console.log ("\nNEW BATTLE BEGIN: Number of rounds: " + rounds + "\n")
	var self = this;
	for (var i = 0; i < rounds; i++) {
		sleep(1000)
		self.round(vikings, saxons, i)
	};
	if (saxons.length == 0){
		console.log("BATTLE FINISHED. Vikings win! All the saxons has died.");
	} else if (vikings.length == 0){
		console.log("BATTLE FINISHED. Saxons win! All the vikins has died.");
	} else {
		console.log("\nBATTLE FINISHED. No one win!.\n"+ saxons.length + " saxons alive."+ vikings.length + " vikings alive.")
		;
	}
};
Arena.prototype.round = function(vikings, saxons, i){
	if (saxons.length > 0 && vikings.length > 0) {
		var dead_saxons = 0
		var dead_vikings = 0
		process.stdout.write('\033c');
		console.log ("\nROUND NUMBER: " + (i+1) + "\n")
		var attacked_saxons = []
		vikings.forEach (function (viking, viking_index) {
			if (saxons.length > 0) {
				var rnd_saxon_index = (Math.floor(Math.random() * (saxons.length - 0)) + 0).toFixed()
				var rnd_saxon = saxons[rnd_saxon_index];
				while (attacked_saxons.indexOf(rnd_saxon) != -1 ) {
					var rnd_saxon_index = (Math.floor(Math.random() * (saxons.length - 0)) + 0).toFixed()
					var rnd_saxon = saxons[rnd_saxon_index];
				}
				attacked_saxons.push(rnd_saxon);
				viking.attack(rnd_saxon);
				rnd_saxon.attack(viking);
				if (rnd_saxon.health < 0 ) { 
					++dead_saxons
					saxons.splice(rnd_saxon_index, 1)
				} else if (viking.health < 0 ){
					++dead_vikings
					vikings.splice(viking_index, 1)
				} 
			}
		});
		console.log(dead_saxons + " saxons has died.")
		console.log(dead_vikings + " vikings has died.")
		console.log("Theare now " + saxons.length + " saxons.")
		console.log("Theare now " + vikings.length + " vikings.\n\n")
		this.print_fighters(vikings,"viking")
		this.print_fighters(saxons,"saxon")
	} 
}
Arena.prototype.print_fighters = function(fighters, type_of_fighters){
	var drawing_fighters = "", symbol =""
	switch (type_of_fighters) {
		case "viking":
			symbol = "༒"
			break;
		case "saxon":
			symbol = "༓"
			break;
	}
	fighters.forEach (function (figther) {
		var rnd_movement = (Math.random()*3).toFixed()
		switch (rnd_movement) {
			case "0":
				drawing_fighters += "  "+symbol+"  "
				break;
			case "1":
				drawing_fighters += " "+symbol+" "
				break;
			case "2":
				drawing_fighters += "   "+symbol+"   "
				break;
			case "3":
				drawing_fighters += "    "+symbol+"    "
				break;
		}
	})
	console.log(drawing_fighters)
}
//////////////////////////////////////

sleep = function(milliseconds) {
		    var start = new Date().getTime();
		    for (var i = 0; i < 1e7; i++) {
		        if ((new Date().getTime() - start) > milliseconds){
		            break;
		        }
		    }
		}


function newround (that, rounds, vikings, saxons) {
	 that.round (rounds, vikings, saxons);
}

viking1 = new Viking ("Orogord")
viking2 = new Viking ("Father of Orogord", 2)

var vikings = []
for (var i = 0; i < 100; i++) {
	viking = new Viking();
	vikings.push(viking)
};

var saxons = []
for (var i = 0; i < 500; i++) {
	saxon = new Saxon();
	saxons.push(saxon)
};

trainingcenter = new Arena()
//trainingcenter.pitfigth(viking1,viking2)
trainingcenter.vikings_battle(vikings,saxons)