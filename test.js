lizBoyfriend = document.getElementById('chad');
lizBoyfriend.innerHTML = "brad";
console.log(lizBoyfriend);

adoptee = {
    "name": null,
    "birthday": null,
    "location": null,
    "race": null,
}

function createAdoptee(name, birthdate, location, race)
{
    ret = {};
    ret["name"] = name;
    ret["birthday"] = birthdate;
    ret["location"] = location;
    ret["race"] = race;
    return ret;
}

var chianna = createAdoptee("Chianna Cohen", "01/04/2000", "Yi Yang", "Asian")
var adopteeArray = Object.keys(adoptee)
function toString(adoptee)
{
ret = "<div> <b>" + adoptee["name"] + "</b> </div>";
for(var i = 1; i < adopteeArray.length; i++)
{
  ret += "<div>" + Object.keys(adoptee)[i] +": "
  ret += adoptee[Object.keys(adoptee)[i]] + "</div>";
}
return ret;
}

document.getElementById('Chianna').innerHTML = toString(chianna);
