// Code your solution in this file.



function lowerCaseDrivers(drivers){
let z =
  drivers.map(function(x){
    return x.toLowerCase()
  })
return z

}
/*
function nameToAttributes(drivers){
  let n = [{firstName: }, {lastName : }]
  let z = drivers.map(function(x){
    x.split(" ")
    x.[0][0]
  })
  return n
}
*/

function nameToAttributes(drivers){
  let y = drivers.map(function(v) {
     names = v.split(" ")
     let o = {}
     o.firstName = names[0]
     o.lastName = names[1]
   return o
   })
 return y
 }





/*function lowerCaseDrivers(x){

  let a = x.toString()
  let b = a.toLowerCase()
  let c = b.split(" ");
  return c
}
*/


function attributesToPhrase(drivers){
  let z = drivers.map(function(x){
    return x.name +" is from "+ x.hometown
  })
  return z
}
 
