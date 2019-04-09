let express = require('express');
let router = express.Router();
let RSVPCollection = require('../models/RSVPSchema');

/*
    ENDPOINT IMPLEMENTATION OF A SIMPLE RSVP WEB SERVICE
 */
// Return the list of all the current RSVPs
router.get('/', function (req, res, next) {
    console.log(`LIST RSVPS`);
    RSVPCollection.find({}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
});

// Get a specific RSVP
router.get('/:id', function (req, res, next) {
    console.log(`LIST RSVP ${req.params.id}`);
    RSVPCollection.find({_id: req.params.id}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })

});

// Update an existing RSVP
router.put('/:id', function (req, res, next) {
    console.log(`UPDATE RSVP ${req.body.rsvp_person} ${req.body.rsvp_going}`);
    RSVPCollection.findOneAndUpdate({_id: req.params.id}, req.body, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    });
});

// Delete a specific RSVP -IMPLEMENT YOUR OWN FUNCTION
router.delete('/:id', function (req, res, next) {
    res.send(`DELETE RSVP ${req.params.id}`);
});

//Create a new RSVP -IMPLEMENT YOUR OWN FUNCTION
router.post('/add', function (req, res, next) {
    RSVPCollection.create({
        rsvp_person: req.body.rsvp_person,
        rsvp_going: req.body.rsvp_going
    },(err,results)=>{
        if(err) res.send(err);
        else res.send(`CREATE NEW RSVP ${req.body.rsvp_person} ${req.body.rsvp_going}`);
    })

});

module.exports = router;
