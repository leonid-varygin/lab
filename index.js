const express = require("express");

const app = express();
const port = 5001;




app.listen(port, () => {
  console.log(`Lab App API listening at http://localhost:${port}`);
});
