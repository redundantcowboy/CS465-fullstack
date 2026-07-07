/* GET travel view */

/* Added code based on instructions to control what happens when 
someone goes to /travel */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways'});
};

module.exports = {
    travel
};