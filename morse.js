// Écrire une fonction qui prend en entrée du code Morse et
// le convertit en caractères lisibles par l’homme.
// Le morse est composé de succession de points et de tirets.
// Chaque lettre est séparée par un espace, chaque mot par 2 espaces

'use strict';

const alphabet = {
    "-.-.--": "!",
    "....-": "4",
    "..--..": "?",
    "--..--": ",",
    ".-.-.-": ".",
    "..---": "2",
    "...--": "3",
    "--...": "7",
    "-....": "6",
    ".....": "5",
    "---..": "8",
    "-...": "B",
    "----.": "9",
    ".--.": "P",
    "-----": "0",
    "--..": "Z",
    "-.--": "Y",
    "-..-": "X",
    "-.-.": "C",
    "...-": "V",
    ".----": "1",
    "..-.": "F",
    "....": "H",
    ".---": "J",
    "--.-": "Q",
    "-..-.": "/",
    ".-..": "L",
    "...": "S",
    "---": "O",
    "-.-": "K",
    ".-.": "R",
    "..-": "U",
    "-..": "D",
    ".--": "W",
    "--.": "G",
    "-.": "N",
    "--": "M",
    "..": "I",
    ".-": "A",
    "-": "T",
    ".": "E"
};

function morse2human(str) {
	// your code here

	// Let's caclulate the number of words, which is equal to thr number of blank
	// spaces + 1. Reminder: 1 blank space = "  "
    let nWords = str.match(/  /g).length + 1;

    let wEnd = 0;
    let subStr = str.substring(wEnd);
    let word = "";
    let lEnd = 0;
    let subWord = "";
    let letter = "";

    let sentence = "";

    let i = 0;
    while (i < nWords) {
    	wEnd = subStr.indexOf("  ");

    	if (wEnd === -1) {
    		word = subStr;
            wEnd = word.length;
    	} else {
	    	word = subStr.substring(0, wEnd);
      //   	wEnd = wEnd + 2;
    		// subStr = subStr.substring(wEnd);
    	}
    	
    	let j = 0;
    	while (j < wEnd) {
    		lEnd = word.indexOf(" ");

    		if (lEnd === -1) {
    			letter = word;
                sentence += alphabet[letter];
                j = wEnd - 1;
    		} else {
	    		letter = word.substring(0, lEnd);
    			sentence += alphabet[letter];
        	    lEnd = lEnd + 1;
    			word = word.substring(lEnd);
    		}

    		j++;
    	}

    	sentence += " ";

        wEnd = wEnd + 2;
        subStr = subStr.substring(wEnd);

    	i++;

    }

    return console.log(sentence);

};

module.exports = morse2human;
