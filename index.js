// Code your solution in this file.
function lowerCaseDrivers(drivers){
 return drivers.map(function(name){
  	return name.toLowerCase();
  })
}
function nameToAttributes(drivers){
    return drivers.map(function(drivers){
    	let arr = drivers.split(' ');
        let firstName = arr[0]
        let lastName = arr[1]
           return Object.assign({}, {firstName: firstName, lastName: lastName});
    })
}
function attributesToPhrase(drivers){
  return drivers.map(function(driver){
   	 // console.log(driver)
   	 // let name = driver.name;
   	 // let hometown = driver.hometown
   	 return `${driver.name} is from ${driver.hometown}`
   });
}