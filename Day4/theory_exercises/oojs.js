/*var Animal = function () {
	this.name = "Buk";
	this.noise = "Brrr";

	this.makeNoise = function (argument) {
		console.log(this.noise + "!!!!");
	}
}

var Animal = function (name, noise) {
	 this.name = name;
	 this.noise = noise;

	 Animal.prototype.makeNoise = function () {
		 console.log(this.noise + "!!!!!!") 
	 } 
}*/

var Car = function (model, noise) {
	this.model = model;
	this.noise = noise;
	this.wheels = 4;
}
Car.prototype.makeNoise = function(){
	console.log(this.noise);
};

var teslax = new Car("Tesla X", "(Silent)");
var hummer = new Car("Hummer", "BRRRRRRRRRR!");

//teslax.makeNoise();
//hummer.makeNoise();
//console.log(hummer.model);

/*
function callback (result) {
	console.log('Finished'); 
}

deletefromsql(42, callback);*/

/*function shout () {
	 console.log("Ahhhh!");
}

setTimeout(shout, 1000);
*/

function sleep (time, callback, times) {
	var x = time
	for (var i = 0; i < times; i++) {
		x += time
		setTimeout(callback, x*1000); 
	};
}

function shout () {
	 console.log("Ahhhh!");
}

//sleep(0.01, shout, 100)

var x = 5;
function three() {
	console.log(x);
}
function four() {
	x = 4
	console.log(x);
}
//four()
//three()

function testClosure () {
	var x = 4;
	function closeX () {
		return x; 
	}
	return closeX;
}
//var checklocalX = testClosure();
//console.log(checklocalX());

function ticketBuilder (transport) {
	 var passsengerNumber = 0;
	 return function (name) {
	 	 passsengerNumber++;
	 	 console.log("Welcole, " + name + ". Here is your ticket for: " + transport + ". You are the passenger #" + passsengerNumber) 
	 } 
}

//var getPlaneTicket = ticketBuilder("plane");
//var getTrainTicket = ticketBuilder("train");

//getPlaneTicket("John Smith");
//getPlaneTicket("Patty");

function checkinPassenger(name, customersArray) {
	 var passengerChecked;
	 for (var i = 0; i < customersArray.length; i++) {
	 	if (customersArray[i] === name) {
	 		passengerChecked = function() {
	 			console.log("Hi, " + name + "You're passenger #" + (i+1));
	 		};
	 	}
	 }
	 return passengerChecked;
}

/*
var flightToBali = ["Wayan", "Jorge", "Paolo", "S"];
var counterCheckin = checkinPassenger("Paolo", flightToBali);
counterCheckin();*/


/*
console.log(declaredLater);	
var declaredLater = "Hola";


hola();
var hola = function isItHoisted () {
	 console.log("fj") 
}*/

/*
var MyApp = {};
MyApp.cats = 15
MyApp.rabbits = 12
MyApp.dogs = 21
MyApp.adoptDog = function () {
	 -- MyApp.dogs;
}

console.log(MyApp.dogs)
MyApp.adoptDog()
console.log(MyApp.dogs)
*/

var myApp = (function(dogs) {
	var dogs = dogs

	var myanimals = {};
		myanimals.cats = 14
		myanimals.rabbits = 12

	var mydogs = {};
		mydogs.adoptDog = function (number) {
			return dogs - number; 
		}
	return [mydogs, myanimals];
});



////////////////////////////////
console.log(myApp(15)[0].adoptDog(1))
////////////////////////////////
app = new myApp(15)
console.log(app[0].adoptDog(2))
////////////////////////////////
app2 = new myApp(20)
console.log(app2[0].adoptDog(1))
////////////////////////////////
app3 = new myApp(15)
console.log(app3[1].rabbits)
////////////////////////////////
app4 = new myApp(15)
app4[1].dogs = 5
console.log(app4[1].dogs)
////////////////////////////////
