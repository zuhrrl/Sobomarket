var express = require('express');
var router = express.Router();
var product = require('../../component/add-product')



// router rest api
router.post('/api', (req, res) => {
    var request = req.body
    res.json({
        "message": "request success",
        "data": {
            "Name": request.name
        }
    })
})

// router rest add product
router.post('/api/add', async (req, res) => {
    var request = req.body
    const {
        errors,
        isValid
    } = product.validateProduct(req.body, false);
    // if product input is not valid
    if (!isValid) {
        return res.status(400).json(errors);
    } else {
        // we need to use async await when findOne collection to avoid always return true
        var isExist = await product.isProductExist(request.name)
        if (isExist) {
            // send 403 status exist
            res.status(403).json({
                "message": "product is exist"
            })
        } else {
            // if product is not exist and we need to save to our mongo database
            // response to client is added in add-product.js addProduct() function
            product.addProduct(request, res)

        }

    }
})

// router update product
router.post('/api/update', async (req, res) => {
    var request = req.body
    const {
        errors,
        isValid
    } = product.validateProduct(req.body);

    if (!isValid) {
        // if product input is not valid
        return res.status(400).json(errors);
    } else {
        // we need to use async await when findOne collection to avoid always return true
        // checking if product exist
        var isExist = await product.isProductExist(request.product_id, true)
        if (isExist) {
            // product is exist and reay to update
            // response to client is added in add-product.js updateProduct() function with callback
            await product.updateProduct(request.product_id, request, res)

        } else {
            // sending response 403 to client when product is not in mongo database
            res.status(403).json({
                "message": "product is not exist in database can't update"
            })
        }

    }
})

// router delete product
// router update product
router.post('/api/delete', async (req, res) => {
    var request = req.body
    const {
        errors,
        isValid
    } = product.validateProduct(req.body, true);

    if (!isValid) {
        // if product input is not valid
        return res.status(400).json(errors);
    } else {
        // we need to use async await when findOne collection to avoid always return true
        // checking if product exist
        var isExist = await product.isProductExist(request.product_id, true)
        if (isExist) {
            // product is exist and reay to update
            // response to client is added in add-product.js updateProduct() function with callback
            await product.deleteProduct(request.product_id, res)

        } else {
            // sending response 403 to client when product is not in mongo database
            res.status(403).json({
                "message": "product is not exist in database can't delete"
            })
        }

    }
})

module.exports = router