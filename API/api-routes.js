const router = require("express").Router();

router.get('/', (req,res) => {
    res.json({
        status: 'API is working',
        message:'Welcome to RESTHub crafted with mixed feelings!'
    })

})

const contactController = require('./contactController');

//routes
router.route('/contacts')
    .get(contactController.index)       //view all
    .post(contactController.new);       //create

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);


module.exports = router;