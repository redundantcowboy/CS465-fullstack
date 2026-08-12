const tripsEndpoint = "http://localhost:3000/api/trips";
const options = {
    method: "Get",
    headers: {
        Accept: "application/json",
    },
};
// Get the file system to read JSON file 
// var fs = require('fs');

// Read the trips data from the JSON file
// var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */
/* Added code based on instructions to control what happens when 
someone goes to /travel */
const travel = async function (req, res, next) {
    // console.log('TRAVEL CONTROLLER BEGIN");
    await fetch(tripsEndpoint, options)
        .then((res) => res.json())
        .then((json) => {
            let message = null;
            if (!(json instanceof Array)) {
                message = "API lookup error";
                json = [];
            } else {
                if (!json.length) {
                    message = "No trips exist in our database!";
                }
            }
            res.render("travel", { title: "Travlr Getaways", trips: json, message });
        })
        .catch((err) => res.status(500).send(err.message));   
};

module.exports = {
    travel
};