// Get the file system to read JSON file 
var fs = require('fs');

// Read the trips data from the JSON file
var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
/* Added code based on instructions to control what happens when 
someone goes to /travel */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips});
};

module.exports = {
    travel
};