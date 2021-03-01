const User = require('../models/user.model');

exports.create = (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    user.save()
    .then((data) => {
        res.send({
            user: data,
            created: true
        })
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "some error occured while creating user"
        })
    })
}

exports.findOneUser = async (req, res) =>{
    try{
        const _id = req.params.id
        console.log(_id)
        const user = await User.findById({_id})
        if (!user) {
            return res.status(404).send({
                error: 404,
                message: "User not found!"
            })
        }
        return res.send(user)
    }
    catch(err){
        console.log(err.message)
        return res.status(500).send({
            error: 500,
            message: err.message || "Some error occured while searching a user"
        })
    }
}