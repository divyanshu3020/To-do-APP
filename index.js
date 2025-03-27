import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  password: process.env.your_database_password,
  host: "localhost",
  database: "Family_tracker",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function check_dbTodo() {
  let result;
  try {
    result = await db.query("SELECT * FROM items ORDER BY id ASC ");
    // console.log(result.rows);
  } catch (error) {
    console.error(error.stack, error.message);
  }

  items = result.rows;
}

let items = [];

app.get("/", async (req, res) => {
  await check_dbTodo();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  await db.query("INSERT INTO items (title) VALUES($1)", [item]);
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  /* here we are doing 3 works,
   1. first we have to store the new data and its corresponding id.
   2. update the data of database.
   3. redirect to root, so that it renders and show the new edited context.
  */

  const id = req.body.updatedItemId;
  const newcontext = req.body.updatedItemTitle;

  await db.query("UPDATE items SET title = $1 WHERE id = $2", [newcontext, id]);

  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const itemId = req.body.deleteItemId;
  const result = await db.query("DELETE FROM items WHERE id = $1", [itemId]);
  res.redirect("/");
});

app.post("/deleteAll", async (req, res) => {
  await db.query("TRUNCATE TABLE items RESTART IDENTITY");
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
