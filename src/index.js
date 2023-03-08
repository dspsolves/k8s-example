const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  if (new Date().getTime() % 2 === 0) {
    try {
      const x = 1 / 0;
    } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.status(200).send("Hello World!");
  }
});

app.listen(PORT, () => {
  console.log(`Hello World! Server running on port ${PORT} ...`);
});
