const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/widgets", (req, res) =>
  res.json([...Array(10)].map((_, i) => ({ id: i + 1 })))
);

app.listen(3000, () =>
  console.log(`Dave's widget factory: ready for business`)
);
