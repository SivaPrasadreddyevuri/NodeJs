const Console=function(){}
const str="reddy"
Console.prototype.log=function(a){

process.stdout.write(a)}
const myConsole=new Console()
  for(let char of str){
myConsole.log(char +'\n')}