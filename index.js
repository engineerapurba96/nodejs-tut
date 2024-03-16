
const dbConnect= require('./mongodb');

dbConnect().then((resp)=>{
resp.find({name:'vivo'}).toArray().then((data)=>{
console.log(data)
})
})

const main=async ()=>{
   let data = await dbConnect();
   data = await data.find({name:'vivo'}).toArray();
   console.log(data)
}

main()
