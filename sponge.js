// Sponge.js

exports.sponge = function (str) {
    if (typeof str !== 'string'){
      return null;
    }

    returnStr = "";
    for (let i = 0; i < str.length; i++) {
      returnStr += (Math.random() >= 0.5) ? ((str[i].toLowerCase() == str[i]) ? str[i].toUpperCase() : str[i].toLowerCase()) : str[i];
    }
    return returnStr;
};
