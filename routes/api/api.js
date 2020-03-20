const express = require('express');
const router = express.Router();
const productController = require('../../controllers/product.js');
const manufacturerController = require('../../controllers/manufacturer.js');
const schoolController = require('../../controllers/school.js');

// router.get('/manufacturers', manufacturerController.all);
// router.get('/manufacturers/:id', manufacturerController.byId);
// router.post('/manufacturers', manufacturerController.create);
// router.put('/manufacturers/:id', manufacturerController.update);
// router.delete('/manufacturers/:id', manufacturerController.remove);

// router.get('/products', productController.all);
// router.get('/products/:id', productController.byId);
// router.post('/products', productController.create);
// router.put('/products/:id', productController.update);
// router.delete('/products/:id', productController.remove);


// 学校相关路由
router.get('/school', schoolController.all);
router.post('/school', schoolController.create);
router.delete('/school/:id', schoolController.remove);

module.exports = router;