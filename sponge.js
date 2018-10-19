// Sponge.js

//Run this in the browsers console to test it out.
//sponge(""your string here")

exports.sponge = function (str) {
    
    if (typeof str !== 'string'){
      return "What you entered was not a string please pass a string";
    }

    returnStr = "";
    for (let i = 0; i < str.length; i++) {
      returnStr += (Math.random() >= 0.5) ? ((str[i].toLowerCase() == str[i]) ? str[i].toUpperCase() : str[i].toLowerCase()) : str[i];
    }
    return returnStr;
};
