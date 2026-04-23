const app = require("./app");
console.log("APP FILE LOADED");
app.listen(3000, () => {
  console.log("Server running on port 3000");
});