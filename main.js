"use strict";

let str = ".-..  .- .-.. .--. .... .- -... . -  -- --- .-. ... .  --- ..-  -.-. --- -.. .  -- --- .-. ... . --..--  . ... -  ..- -.  -.-. --- -.. .  .--. . .-. -- . - - .- -. -  -.. .  - .-. .- -. ... -- . - - .-. .  ..- -.  - . -..- - .  .-  .-.. .- .. -.. .  -.. .  ... . .-. .. . ...  -..  .. -- .--. ..- .-.. ... .. --- -. ...  -.-. --- ..- .-. - . ...  . -  .-.. --- -. --. ..- . ... --..--  --.- ..- . .-.. .-.. . ...  ... --- .. . -. -  .--. .-. --- -.. ..- .. - . ...  .--. .- .-.  -.. . ...  ... .. --. -. . ... --..--  ..- -. .  .-.. ..- -- .. . .-. . --..--  ..- -.  ... --- -.  --- ..-  ..- -.  --. . ... - . .-.-.-";

let Morse = require('./morse');
// let Morse = require('./morse.corrected');

Morse(str);