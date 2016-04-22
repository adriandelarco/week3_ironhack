var words, message, sentence;
words = [
	"dead",
	"bygone",
	"landing",
	"cheaply",
	"assumed",
	"incorrectly",
	"attention",
	"agent"
];
sentence="Attack her nose under here with an itch"

//function decoder(a){var m = "",p=-1;a.forEach(function(s){p++;if(p==5){p=0};m+=s[p]});return m;};
function decoder(array) {
	var decoded_message = "", position = -1; 
	array.forEach(function (string) {
		position ++; if (position === 5) {position = 0};
		decoded_message += string[position]
	})
	return decoded_message;
}

function super_decoder(sentence, type) {
	var array_type = type.split("_"), array_sentence = sentence.split(" "), array_to_decode = [];
	if (array_type[1]==="backwards") {array_sentence = array_sentence.reverse()}
	if (array_type[0]==="even") {
		array_sentence.forEach(function (word, i) {
			if (isEven(i)) {array_to_decode.push(word);}
		})
	}else if (array_type[0]==="odd") {
		array_sentence.forEach(function (word, i) {
			if (!isEven(i)) {array_to_decode.push(word);}
		})
	} else { array_to_decode = array_sentence}
	return decoder(array_to_decode);
}

function isEven(n) {
   return n % 2 == 0;
}