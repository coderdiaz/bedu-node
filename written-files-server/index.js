const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const { method } = req;
  switch(method) {
    case 'GET':
      return res.end();
      break;
    case 'POST': 
      let body = [];
      req.on('data', chunk => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        const now = Date.now();
        // Saving data
        const writerStream = fs.createWriteStream(`users/${now}-user.txt`);
        writerStream.write(body);
        writerStream.end();
        res.writeHead(200, {
          'Content-Type': 'application/json',
        });
        return res.end(body);
      });
      break;
  }
});

server.listen(8081, () => {
  console.log('Listening on port 8081');
});
