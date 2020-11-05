const express = require("express");
const app = express();

const now = new Date(), y = now.getFullYear(), m = ('0' + (now.getMonth() + 1)).slice(-2);

app.get("/:file", (request, response) => {
  const path = (request.params.file || '280blocker_adblock.txt').replace('.txt', `_${y}${m}.txt`);
  response.redirect(`https://280blocker.net/files/${path}`);
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
