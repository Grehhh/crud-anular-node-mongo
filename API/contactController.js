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
    const name = req.body.name;
    const gender = req.body.gender;
    const email = req.body.email;
    const phone = req.body.phone;
    Contact.create({
        name: name,
        gender: gender,
        email: email,
        phone: phone
    }).then(result => {
        res.send(result)
    }).catch(err => {
        res.status(201).send(err)
    });
}

//READ one
exports.view = function(req, res) {
    Contact.findById(req.params.contact_id)
    .then(result => {
        if (result === null) {
            return res.status(404).send({
                message: "User not found"
            });
        } else {
            res.send(result);
        }
    })
    .catch(err => {
        return res.status(500).send({
            message: "Something wrong getting user by name" + _id
        });
    });
};

//UPDATE
exports.update = function(req,res) {
    const _id = req.params.contact_id;
    const name = req.body.name;
    const email = req.body.email;
    const gender = req.body.gender;
    const phone = req.body.phone;
    Contact.findByIdAndUpdate(_id, {
        name: name,
        email: email,
        gender: gender,
        phone:phone
    }).then(result => {
        if (result === null) {
            res.status(404).send({
                message: "User not found with id " + _id
            });
        } else {
            res.send(result);
        }
    }).catch(err => {
        console.log('error', err);
        if (err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + _id
            });
        }
        return res.status(500).send({
            message: "Something wrong updating user with id " + _id
        });
    });
};

//DELETE
exports.delete = function (req, res) {
    const _id = req.params.contact_id;
    Contact.findByIdAndDelete(_id)
    .then(result => {
        if (!result) {
            return res.status(404).send({
                message: "Product not found with id " + _id
            });
        } else {
            res.send({ message: "Product deleted successfully!" });
        }
    }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Product not found with id " + _id
            });
        }
        return res.status(500).send({
            message: "Could not delete product with id " + _id
        });
    });
};