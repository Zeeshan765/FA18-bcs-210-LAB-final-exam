var mongoose = require("mongoose");


var pslteamSchema = mongoose.Schema({
  City: String,
  Date: String,
  TeamA:String,
  TeamB:String,
});


//Model
var Team = mongoose.model("PSL", pslSchema);
module.exports = Team;
