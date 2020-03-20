const Model = require('../model');
const { Product } = Model;

const productController = {
	all(req, res) {
    	Product.find({})
      	.populate('manufacturer')
      	.exec((err, products) => res.json(products))
  	}
}

module.exports = productController;