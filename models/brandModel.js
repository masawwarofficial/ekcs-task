const mongoose = require('mongoose')
//var mongoosePaginate = require('mongoose-paginate');
//let mongooseAggregatePaginate = require('mongoose-aggregate-paginate');
let Schema = mongoose.Schema;
//var func = require('../utility/commonFun.js');
const Brand = mongoose.Schema({

    brandWebsite: {
        type: String       
    },
    brandName:{
        type:String
    },
    brandLogo:{
        type:String
    },
    typography:{
        type:Array
    },

    description: {
        type: String
    },
    
}, {
        timestamps: true
    })

//Boat.plugin(mongoosePaginate);
//Boat.plugin(mongooseAggregatePaginate);

const BrandModel = mongoose.model('brands', Brand, 'brands');
module.exports  = BrandModel