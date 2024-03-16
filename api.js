const express = require("express");
const dbConnect = require("./mongodb");
const mongoDb = require("mongodb");
const app = express();
app.use(express.json());
app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  resp.send(data);
});
app.post("/", async (req, resp) => {
  console.log(req.body);
  let data = await dbConnect();
  let result = await data.insert(req.body);
  resp.send(req.body);
});

app.put("/:name", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  console.log(req.body);
  resp.send({ result: "Update" });
});
app.delete("/:id", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.deleteOne({
    _id: new mongoDb.ObjectId(req.params.id),
  });
  resp.send("deleted");
});
app.listen(5000);
