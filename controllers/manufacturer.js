const Model = require('../model');
const { Manufacturer } = Model;

const manufacturerController = {
    all(req, res) {
        Manufacturer.find({})
            .exec((err, manfacturers) => res.json({
                code: 200,
                data: [{title: 'ceshi '}],
                msg: '获取成功'
            }));
    },
    create(req, res) {
        const requestBody = req.body;
        const newManufacturer = new Manufacturer(requestBody);

        newManufacturer.save((err, saved) => {
            Manufacturer
                .findOne({
                    _id: newManufacturer._id
                })
                .exec((err, manfacturer) => res.json(manfacturer))
        })
    }
}

module.exports = manufacturerController;