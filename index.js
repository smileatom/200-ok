const http = require('http');

function end(req, res, opts, body) {
  const status = opts[req.method] || 200;
  res.writeHead(status, {'Content-Type': opts.contentType});
  if (req.method[0] === 'P' && (opts.reflectAll ||
      (req.method === 'POST' && opts.reflectPost) ||
      (req.method === 'PUT' && opts.reflectPut) ||
      (req.method === 'PATCH' && opts.reflectPatch))) {
    res.end(body || "");
  } else if (opts.responseBody) {
    res.end(`{"${status}":"${http.STATUS_CODES[status]}"}`);
  } else {
    res.end("");
  }
}

function start(port = 2000, opts) {
  console.log(`200-ok: listening on port ${port}...`);

  http.createServer(function (req, res) {
    console.log(`\n${req.method} ${req.url}\n-------------------------------`);
    for (let [key, value] of Object.entries(req.headers)) {
      console.log(`${key}: ${value}`);
    }
    if (req.method[0] === 'P') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        console.log('-------------------------------');
        console.log(`body: ${body}`);
        console.log(`len: ${body.length}`);
        end(req, res, opts, body);
      });
    } else {
      end(req, res, opts, null);
    }
  }).listen(port);

}

module.exports = {start};
