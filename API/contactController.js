Contact = require("./contactModel");


//READ all
exports.index = function(req,res) {
    Contact.find()
    .then(result => {
        if (result === null) {
            return res.status(404).send({
                message: "Page not found"
            });
        } else {
            res.send(result)
        }
    })
    .catch(err => {
        return res.status(500).send({
            message: "Something went wrong"
        });
    });
};

//CREATE
exports.new = function(req,res) {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    contact.save(function(err) {
        if(err) {
            res.json(err);
        }
        res.json({
            message: "New contact created",
            data: contact
        })
    })
}

//READ
exports.view = function(req, res) {
    Contact.findById(req.params.contact_id)
    .then(result => {
        if (result === null) {
            return res.status(404).send({
                message: "User not found"
            });
        } else {
            res.send(result)
        }
    })
    .catch(err => {
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + userId
            });
        }
        return res.status(500).send({
            message: "Something wrong getting user by id" + userId
        });
    });
};

//UPDATE
exports.update = function(req,res) {
    const name = req.body.name;
    const email = req.body.email;
    const gender = req.body.gender;
    const phone = req.body.phone;
    Contact.findByIdAndUpdate(req.params.contact_id, 
        {
            name: name, 
            email: email, 
            gender: gender, 
            phone:phone
        }, function(err,contact) {
        if(err) {
            res.json(err);
        }
        res.json({
            message: "Contact info updated",
            data: contact
        });
    });
};

//DELETE
exports.delete = function (req, res) {
    Contact.remove({
        _id: req.params.contact_id
    }, function (err, contact) {
        if (err)
            res.send(err);
    res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};