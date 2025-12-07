// require("./Modules/Module1"); //using require to import module and this executes first before executing  code in current file
//  const Addition=require("./Modules/Module3"); //using require to import module and this executes first before executing  code in current file
// console.log("helloworld");
// Addition()
// console.log(Addition());

const http = require("http");
const server=http.createServer((req, res) => {
  res.write("Hello World Welcome!");
  res.end(" ");
});
server.listen("1201",()=>{
    console.log("Server Cerated"

    )
})
