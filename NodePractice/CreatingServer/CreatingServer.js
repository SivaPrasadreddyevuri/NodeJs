const http = require("http");

const server = http.createServer((req, res) => {
  res.write("helloworld");
  res.end(" "); 
});

const r=server.listen("1234",()=>{console.log("Created Srever")})

 