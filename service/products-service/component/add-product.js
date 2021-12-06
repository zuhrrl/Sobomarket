// model product required
require('../models/products')
const isEmpty = require("./is-empty");


// validate product
function validateProduct(data, isDelete) {
    let errors = {};

    // if test is not delete api

    if (!isDelete) {
        data.name = !isEmpty(data.name) ? data.name : "";
        data.price = !isEmpty(data.price) ? data.price : "";
        data.brand = !isEmpty(data.brand) ? data.brand : "";

        // detect if request has an empty request
        if (isEmpty(data.name)) {
            errors = {
                "message": "product name is required"
            }
        }

        if (isEmpty(data.price)) {
            errors = {
                "message": "roduct price is required"
            }
        }

        if (isEmpty(data.brand)) {
            errors = {
                "message": "product brand is required"
            }
        }
        // if product price is not a number
        if (!isEmpty(data.price) && typeof (data.price) != "number") {
            errors = {
                "message": "Product price required integer value"
            }
        }

    }


    return {
        errors,
        isValid: isEmpty(errors)
    }
}

// function is product exist

async function isProductExist(product, isUpdate) {
    // is product exist by searching name or id product
    var status
    if (!isUpdate) {
        status = await Products.findOne({
            name: product
        })
    } else {
        status = await Products.findOne({
            _id: product
        })
    }
    return status ? true : false
}

// function addProducts

async function addProduct(data, res) {
    new Products({
        name: data.name,
        price: data.price,
        brand: data.brand

    }).save((err, items) => {
        if (!err) {
            res.status(200).json({
                "message": "product added succesfully",
                "data": items

            })
        }
    })
}

// function update product

async function updateProduct(productId, update, res) {
    const filter = {
        _id: productId
    };
    Products.findOneAndUpdate(filter, update, {
        new: true
    }, (error, items) => {
        if (!error) {
            res.status(200).json({
                "message": "product updated successfully",
                "data": items
            })
        }
    });
}

// function delete product
function deleteProduct(productId, res) {
    Products.findOne({
        _id: productId
    }, (err, items) => {
        if (!err) Products.deleteOne({
            _id: productId
        }, (error) => {
            if (!error) return res.status(200).json({
                'message': 'product deleted successfully',
                'data': items
            })
        });
    })

}

module.exports = {
    validateProduct: validateProduct,
    isProductExist: isProductExist,
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct
}