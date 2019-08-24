## 200-ok
A cli http server to fire local requests at that always responds 200 OK.

## Pre-requisites

NodeJS, NPM.
## Install

`npm install -g 200-ok`

## Using

`200-ok`

output:

`200-ok: listening on port 2000...`

Type -h at the cli for usage.

Crtl-Break in terminal to stop.

## Request Logging

```
POST /foo
-------------------------------
cache-control: no-cache
postman-token: b54a15a5-121e-49db-b7f1-1e1ad73ae52e
content-type: text/plain
user-agent: PostmanRuntime/7.4.0
accept: */*
host: localhost:2000
accept-encoding: gzip, deflate
content-length: 14
connection: keep-alive
-------------------------------
body: Thisissomedata
len: 14
```



