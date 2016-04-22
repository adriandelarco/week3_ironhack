function caesarCipher (message, shift) {
	if (!shift) {var shift = - 3};
	var message = message.split(''), new_message = "";

	message.forEach (function (letter) {
	  	if (letter.match(/[a-z]/i)) {
    		var pos = letter.charCodeAt(0) + shift;
			if (pos > 122){
			    pos = 96 + (pos - 122);
			}else if(pos > 90 && pos - shift < 90){
				pos = 65 + (pos - 90);
			}else if(pos < 96 && pos - shift > 96){
				pos = 122 - (96 - pos);
			}else if(pos < 65){
				pos = 89 - (65 - pos);
			};
	  		new_message += String.fromCharCode(pos);
    	} else {
    		new_message += letter;
    	}
	});
	return new_message;
}

var encrypted = caesarCipher("Et tu, brute?", 6);
console.log(encrypted);