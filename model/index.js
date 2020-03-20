const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = Schema({
	id: ObjectId,
	name: String,
	image: String,
	price: Number,
	description: String,
	manufacturer: {type: ObjectId, ref: 'Manufacturer'}
})

const manufacturerSchema = Schema({
	id: ObjectId,
	name: String
})

// 自定义

const school = Schema({
	id: ObjectId,
	name: String,
	cityId: Number,
	cityName: String,
})

const classRoom = Schema({
	id: ObjectId,
	name: String,
	members: Number,
	teacher: String, // 班主任名字
})

const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);
const School = model('School', school);

module.exports = {Product, Manufacturer, School}