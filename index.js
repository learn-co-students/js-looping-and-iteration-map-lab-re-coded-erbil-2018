// Code your solution in this file.
function lowerCaseDrivers(arr){
  return arr.map(function(el){
   return el.toLowerCase()
  })
}
function nameToAttributes (arr) {
  return arr.map(function (el) {
    const name1 = el.split(' ')[0];
    const name2 = el.split(' ')[1];

    return { firstName: name1, lastName: name2 };
  });
}


function attributesToPhrase(driver) {
  return driver.map(function (drivers) {
  return `${drivers.name} is from ${drivers.hometown}`;
  });
}