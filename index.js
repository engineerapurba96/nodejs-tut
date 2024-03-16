const mongoose = require("mongoose");
const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/ecom");
    const ProductSchema = new mongoose.Schema({
        name:String,   
        price:Number,
    });

    const ProductsModel = mongoose.model("products",ProductSchema); 
    let data = new ProductsModel({name:"m98",price:1000});
    let result = await data.save();
    console.log(result);

}
main();