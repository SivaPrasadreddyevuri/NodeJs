console.log("im module3");

//this is will not execute unless we call this function from other module
//  and without exporting this function
function Add() {
  console.log("this fnc from module3");
  return 4+6;
}   

module.exports=Add