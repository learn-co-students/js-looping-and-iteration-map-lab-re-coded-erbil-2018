function lowerCaseDrivers(drivers)
{
  let lowerCasedDrivers=[];
  
  for(var driver of drivers)
  {
     lowerCasedDrivers.push(driver.toLowerCase());
  }
  return lowerCasedDrivers;
}
function nameToAttributes(arr)
{
  let mappedArray = arr.map(fullName => {
    let splited = fullName.split(" ");
    return {
      firstName:splited[0],
      lastName:splited[1]
    }
  })
  return mappedArray;
}

function attributesToPhrase(drivers)
{
    let phraseOfDrivers = [];
    
     for(var driver of drivers)
      {
        phraseOfDrivers.push(`${driver.name} is from ${driver.hometown}`);
      }
      return phraseOfDrivers;
}
