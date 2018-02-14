const express = require("express");
const app = express();

app.use("/node_modules", express.static("./node_modules"));
app.use("/", express.static("./app"));

app.listen(3000, function () {
  console.log("HTTP Server running on port 3000");
});
