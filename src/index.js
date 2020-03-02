const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "**********": " "
};

function decode(expr) {
  var sliceArr = [];
  for (var i = 0; i < expr.length; i += 10) {
    sliceArr.push(expr.slice(i, i + 10));
  }
  var decodeArr = sliceArr.join(" ");

  var i = 0;
  var newBits = "";
  while (i <= decodeArr.length) {
    newBits = decodeArr
      .replace("00", "")
      .replace("11", "-")
      .replace("10", ".");
    decodeArr = newBits;
    i++;
  }

  var morseParts = newBits.split(" ");
  var decodedParts = [];
  var sLength = morseParts.length;

  for (var i = 0; i < sLength; i++) {
    if (morseParts[i] in MORSE_TABLE) {
        decodedParts += MORSE_TABLE[morseParts[i]];
    }
  }
  return decodedParts;
}

module.exports = {
  decode
};
