let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let massive = require('massive');
let connectionString = "postgres://postgres:Masteryoda166@localhost/sandbox";
let massiveInstance = massive.connectSync({connectionString: connectionString});
let app = module.exports = express();

let controller = require('./controller');



app.set('db', massiveInstance);
let db = app.get('db');
app.use(bodyParser.json());
app.use(cors());


// db.new_plane(function(err, planes){
//     console.log(err, "plane added")
// });


// db.get_planes(function(err, planes){
//     console.log(err, planes)
// });

controller.getPlanes();



app.listen('3000', function(){
  console.log("Successfully listening on : 3000")	
});

