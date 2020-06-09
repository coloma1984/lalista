const express = require('express');
const app = express();


app.use(express.static("./dist/lalista-ng"));

app.get("/*", function(req, res) {
    res.sendFile("index.html", {root: "dist/lalista-ng/"}
  );
  });

app.listen(process.env.PORT || 8080);
