const reverseString = function(string) {
    var reverse = ""
    for (i = 0; i < string.length; i++)
    {
        var char = string.charAt(i)
        reverse = char + reverse;
    }
    return reverse;
};
// Do not edit below this line
module.exports = reverseString;
