// Code your solution in this file.

const drivers = ['Bobby Smith', 'Sammy Watkins', 'Sally Jenkins', 'Annette Sawyer', 'Sarah Hucklebee', 'bobby ridge'];

function lowerCaseDrivers(drivers){
  
  return drivers.map(function(s){
     return s.toLowerCase();
  })
  
}


function nameToAttributes(drivers){
  
  return drivers.map(function(s){
      let temp = s.indexOf(" ");
      let str1 = s.slice(0, temp);
      let str2 = s.slice(temp+1, s.length);
      
       return { "firstName" : str1, "lastName":str2 };
      
  });
  
}

function attributesToPhrase(drivers){
  
  
  return drivers.map(function(s){
    return s.name + " is from "+ s.hometown;
  })
  
}




