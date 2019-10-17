// init project
const express = require("express");
const app = express();


app.use(express.static("public"));


app.get("/api/whoami/", function(request, response) {
  
  response.json({'ipaddress': request.header('x-forwarded-for'),
                 'language': request.header('accept-language'),
                 'software': request.header('User-Agent')
                });
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
