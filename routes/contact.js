var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var Contact = sequelize.import('../models/contact')
var Definition = sequelize.import('../models/definition');
var Log = sequelize.import('../models/log');




router.post('/', function(req, res) {
	// req has some body properties that have a username and pwd

    var name = req.body.contact.name; 
    var address = req.body.contact.address; 
    var user = req.user;
	var email = req.body.contact.email;
	
	
   


    // Use our sequelize model to create log
  	Contact 
	    .create({ 
	    	name: name,
	    	address: address,
	    	owner: user.id,
	    	email: email
	    })
	    .then(
	    	function createSuccess(contact) {
	    		res.json(contact);
	    	}, 
		    function createError(err) {
		        res.send(500, err.message);
		    }
	    );
});



//This will retrieve one workout specified by the log id

router.get('/:id', function(req, res) {
	var data = req.params.id;
	// console.log(data);

	Contact
		.findOne({
			where: { id: data }
		}).then(
			function getSucces(updateData) {
				res.json(updateData);
			},

			function getError(err) {
				res.send(500, err.message);
			}
		);
});

//This will return the data from the log that was updated
router.put('/', function(req, res) {
    var name = req.body.contact.name; 
    var address = req.body.contact.address; 
    var data = req.body.contact.id;
    var email = req.body.contact.email;
    console.log(req);
    Contact
    	.update(
    	{
    		name: name,
	    	address: address,
	    	email: email,
    	},

    	{where: {id: data}}
    	).then(
    		function updateSuccess(updatedContact) {
    			res.json(updatedContact);
    		},

    		function updateError(err){
    			res.send(500, err.message);
    		}
    	)
});


router.delete('/', function(req, res) {
	var data = req.body.contact.id;
	Contact
		.destroy({
			where: { id: data }
		}).then(
			function deleteContactSuccess(data){
				res.send("You removed a contact");
			},
			function deleteContactError(err){
				res.send(500, err.message);
			}
		);
});

module.exports = router;