const express = require("express");
const app = express();
const cors = require("cors");
const port = 4000;

app.use(cors());


app.get("/", async (req, res) => {
    return res.status(200).send("server running fine");
  });
  

app.get("/api/img", async (req, res) => {
  return res.status(200).send({
    img: "https://images.unsplash.com/photo-1711116178390-b01368ed353d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sucess: true,
  });
});

app.listen(port, () => {
  console.log("Server start");
});
