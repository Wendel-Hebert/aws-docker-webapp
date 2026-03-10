
const express = require("express");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "appdb",
  password: "postgres",
  port: 5432,
});

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM students");
  
  let html = `
    <h1>Students</h1>
    <form method="POST" action="/add">
      Name: <input name="name"/><br/>
      Age: <input name="age"/><br/>
      Course: <input name="course"/><br/>
      <button type="submit">Add</button>
    </form>
    <h2>List</h2>
  `;

  result.rows.forEach(s => {
    html += `<p>${s.id} - ${s.name} (${s.age}) - ${s.course}</p>`;
  });

  res.send(html);
});

app.post("/add", async (req, res) => {
  const { name, age, course } = req.body;
  await pool.query(
    "INSERT INTO students(name, age, course) VALUES($1,$2,$3)",
    [name, age, course]
  );
  res.redirect("/");
});

app.listen(3000, "0.0.0.0", () => { console.log("Server running");
});
