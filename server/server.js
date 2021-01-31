const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

let latestWidgetId = 10;

app.get("/widgets", (req, res) =>
  res.json([...Array(10)].map((_, i) => ({ id: i + 1 })))
);

app.get("/new-widget", (req, res) => res.json({ id: ++latestWidgetId }));

app.listen(3000, () =>
  console.log(`Dave's widget factory: ready for business`)
);
