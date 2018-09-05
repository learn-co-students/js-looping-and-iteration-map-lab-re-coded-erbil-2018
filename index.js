// Code your solution in this file.
function lowerCaseDrivers(aray){
return  aray.map(function(drivers){
 return drivers.toLowerCase();
})
}
function nameToAttributes (aray) {
  return aray.map(function (drivers) {
    const driverFirst = drivers.split(' ')[0];
    const driverLast = drivers.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
}
function attributesToPhrase(aray) {
  return aray.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}