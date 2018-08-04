// Code your solution in this file.
function lowerCaseDrivers (array)
{
  return array.map(function(items){
    return items.toLowerCase();
  });
}

function nameToAttributes (array)
{
  return array.map(function(items){
    const first = items.split(' ')[0];
    const second = items.split(' ')[1];
    
    return {firstName: first, lastName: second };
  });
}

function attributesToPhrase(array)
{
  return array.map(function(item){
    return `${item.name} is from ${item.hometown}`;
  });
}

