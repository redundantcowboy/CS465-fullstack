const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

router
    .route('/trips')
    // GET method routes tripList
    .get(tripsController.tripsList)

     // POST method adds a trip
    .post(tripsController.tripsAddTrip);

// GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;