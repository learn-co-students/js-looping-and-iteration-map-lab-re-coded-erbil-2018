// Code your solution in this file.
function lowerCaseDrivers (names) {
  return names.map(function (drivers) {
    return drivers.toLowerCase();
            });
            }
            function nameToAttributes (Names) {
  return Names.map(function (drivers) {
    const driverFirst = drivers.split(' ')[0];
    const driverLast = drivers.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };  });
}
function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
          });
}