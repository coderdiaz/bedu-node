const http = require('http');
const url = require('url');
const fs = require('fs');
const renderView = require('./render');

const server = http.createServer((req, res) => {
  const httpMethod = req.method;
  const { query: { name }, pathname } = url.parse(req.url, true);
  const username = (name) ? name : '';
  switch(httpMethod) {
    case 'GET':
      if (pathname === '/') {
        
        res.writeHead(200, {
          'Content-Type': 'text/html',
        });
        // res.write(`Hello World ${username} <b>This is Node.js Papu!</b>`);
        // return res.end('This is other response');
        return res.end(renderView('index'))

      } else if (pathname === '/about') {
        
        // return res.end('This is About page');
        return res.end(renderView('about'))

      }
      break;
    case 'POST':
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });
      const data = fs.readFileSync('./data.json');
      res.write(data);
      return res.end();
      break;
  }
});

server.listen(8080, () => {
  console.log('Listening on port 8080');
});