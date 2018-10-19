// Sponge.js

/***************************************************
*                                                  *
* Run this in the browsers console to test it out. *
*                                                  *
* Example Code:                                    *
*   sponge(""your string here")                    *
*                                                  *
*                                                  *
*                                                  *
*    Spongebob Squarepants                         *
*          .--..--..--..--..--..--.                *
*        .' \  (`._   (_)     _   \                *
*      .'    |  '._)         (_)  |                *
*      \ _.')\      .----..---.   /                *
*      |(_.'  |    /    .-\-.  \  |                *
*      \     0|    |   ( O| O) | o|                *
*       |  _  |  .--.____.'._.-.  |                *
*       \ (_) | o         -` .-`  |                *
*        |    \   |`-._ _ _ _ _\ /                 *
*        \    |   |  `. |_||_|   |                 *
*        | o  |    \_      \     |     -.   .-.    *
*        |.-.  \     `--..-'   O |     `.`-' .'    *
*      _.'  .' |     `-.-'      /-.__   ' .-'      *
*    .' `-.` '.|='=.='=.='=.='=|._/_ `-'.'         *
*    `-._  `.  |________/\_____|    `-.'           *
*       .'   ).| '=' '='\/ '=' |                   *
*       `._.`  '---------------'                   *
*               //___\   //___\                    *
*                 ||       ||                      *
*        LGB      ||_.-.   ||_.-.                  *
*                (_.--__) (_.--__)                 *
***************************************************/

exports.sponge = function (str) {
    // Check if the argument is a string.
    if (typeof str !== 'string') {
      // Alert the user if it is not a string.
      alert("What you entered was not a string please pass a string");
      // Return null.
      return null;
    }
    
    // Allocate a new variable of type string to store the return string.
    returnStr = "";
    // Iterate over the entire input string.
    for (let i = 0; i < str.length; i++) {
      // Given a 50% chance, append the original or inverted case character.
      returnStr += (Math.random() >= 0.5) ? ((str[i].toLowerCase() == str[i]) ? str[i].toUpperCase() : str[i].toLowerCase()) : str[i];
    }
    
    // Return the new string.
    return returnStr;
};
