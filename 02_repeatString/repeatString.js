const repeatString = function(string, num) {
    newString = ""
    if (num < 0)
    {
        return 'ERROR';
    }
    for (i = 0; i < num; i++)
    {
        newString = string + newString;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
