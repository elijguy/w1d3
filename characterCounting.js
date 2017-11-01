
var countLetters = function(string)
{
  var spaceless = string.split(" ").join("");
  var countobj = {};
  var spacemax = (spaceless.length - 1);


  for (var i = 0 ; i <= spacemax ; i++)
  {
    var key = spaceless[i];

    if (countobj[key] === undefined)

    {

     countobj[key] = 1;

    }


    else if (countobj[key] !== undefined)
    {
      countobj[key]++;

    }

  }

return countobj;
};

console.log(countLetters("lighthouse in the house"));

