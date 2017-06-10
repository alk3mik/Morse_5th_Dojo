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

module.exports = function (str) {

    let result = "";
    const letters = str.split(' '),
        length = letters.length;

    for (let i = 0; i < length; i++) {
        const letter = alphabet[letters[i]];

        // ternaire
        result += !letter ? " " : letter;

        // if / else structure
        // if (!letter) {
        //     result += " ";
        // } else {
        //     result += letter;
        // }
    }

    return console.log(result);

};
