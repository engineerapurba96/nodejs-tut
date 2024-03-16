const dbConnect = require('./mongodb');

const insertData=async ()=>{
   let data = await dbConnect();
  let result = await data.insert(
      [
          {name:'ax 5',brand:'microdmax',price:4230,category:'mobilwe'},
          {name:'mffax 6',brand:'middcromax',price:5230,category:'mobile'},
          {name:'max 7',brand:'micdromax',price:6230,category:'mobile'},

      ]
  )
  if(result.acknowledged)
  {
      console.warn("data is inserted")
  }
}

insertData();