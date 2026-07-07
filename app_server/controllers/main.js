/* GET Homepage */

/* added code accordinng to the Full Stack PDF */

const index = (req, res) => {
    res.render('index', { title: "Travlr Getaways"});
};

module.exports = {
    index
};