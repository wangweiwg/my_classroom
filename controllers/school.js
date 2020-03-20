const Model = require('../model');
const {
    School
} = Model;

const schoolController = {
    all(req, res) {
        const requestBody = req.query;
        console.log('all---参数---', requestBody)
        School.find({})
            .populate('school')
            .exec((err, schools) => res.json({
                code: 200,
                data: schools,
                msg: '成功'
            }))
    },
    create(req, res) {
        const requestBody = req.query;
        const newSchool = new School(requestBody);
        console.log('create---参数---', requestBody)
        newSchool.save((err, saved, third) => {
            console.log('saved------', saved);
            console.log('third------', third);
            res.end();
        })
    },
    remove(req, res) {
        const idParams = req.params.id;
        console.log('要删除的id----', idParams);
        School.findOne({ _id: idParams }).remove( (err, removed) => res.json({
            code: 200,
            data: {
                id: idParams
            },
            msg: '删除成功'
        }) )
    }
}

module.exports = schoolController;