var mongoose = require("mongoose");


var matchSchema = mongoose.Schema({
  TeamA:String,
  TeamB:String,
 
});


//Model
var Match = mongoose.model("Match", matchSchema);
module.exports = Match;
