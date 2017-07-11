var fs = require('fs');

var data = fs.readFile("file.txt", (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(data.toString());
});

console.log("programme end!");
console.log("hello %s", "lijun");
console.assert(false, 'Whoops %s', 'didn\'t work');
