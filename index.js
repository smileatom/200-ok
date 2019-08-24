const http = require('http');

function end(res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('{"200":"OK"}');
}

function start(port = 2000) {
  console.log(`200-OK: listening on port ${port}...`);

  http.createServer(function (req, res) {
    console.log(`\n${req.method} ${req.url}\n-------------------------------`);
    for (let [key, value] of Object.entries(req.headers)) {
      console.log(`${key}: ${value}`);
    }
    if (req.method[0] === 'P') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
      });
      req.on('end', () => {
        console.log('-------------------------------');
        console.log(`body: ${body}`);
        console.log(`len: ${body.length}`);
        end(res);
      });
    } else {
      end(res);
    }
  }).listen(port);

}

module.exports = {start};
