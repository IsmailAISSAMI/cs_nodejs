const Product = require('../models/product.model');

exports.create = (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        imgUrl: req.body.imgUrl
    });

    product.save()
    .then((data) => {
        res.send({
            product: data,
            created: true
        })
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "some error occured while creating Product"
        })
    })
}

exports.findOneProduct = async (req, res) =>{
    try{
        const _id = req.params.id
        console.log(_id)
        const product = await Product.findById({_id})
        if (!product) {
            return res.status(404).send({
                error: 404,
                message: "Product not found!"
            })
        }
        return res.send(product)
    }
    catch(err){
        console.log(err.message)
        return res.status(500).send({
            error: 500,
            message: err.message || "Some error occured while searching a product."
        })
    }
}

exports.findProducts = async (req, res) =>{
    try{
        const products = await Product.find()
        if (!products) {
            return res.status(404).send({
                error: 404,
                message: "Products not found!"
            })
        }
        return res.send(products)
    }
    catch(err){
        console.log(err.message)
        return res.status(500).send({
            error: 500,
            message: err.message || "Some error occured while searching products."
        })
    }
}