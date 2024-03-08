const express = require('express');
const app = express();

const router = express.Router();

const port = 3000;

app.get("/",(req, res) => {
  res.send("Hello node!");
});

router
.route("/contacts")
.get((req, res) => {res.status(200).send("Contacts page")})
.post((req, res) => {res.status(201).send("Create page")});

router
.route("/contacts/:id")
.get((req, res) => {res.status(200).send(`view: ${req.params.id}`)})
.put((req, res) => {res.status(200).send(`update: ${req.params.id}`)})
.delete((req, res) => {res.status(200).send(`delete: ${req.params.id}`)});

//app.use로 router를 사용하겠다고 등록해야 제대로 작동
app.use(router);

app.listen(port,() => {
  console.log("서버 시작");
});
