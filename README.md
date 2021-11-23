## 200-ok
A cli http server to fire local requests at that always responds 200 OK.

With cli options can customize status codes for common methods, body reflection,
content-type header, and whether to return response body at all.

## Pre-requisites

NodeJS, NPM.
## Install

`npm install -g 200-ok`

## Using

`200-ok`

output:

`200-ok: listening on port 2000...`

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

Type -h at the cli for usage.

```
Usage: 200-ok [-p port] [--del 200] [--get 200] [--head 200] [--patch 200]
[--post 200] [--put 200] [--content-type text/plain] [--response-body false]
[--reflect-post false] [--reflect-put] false [--reflect-patch] false
[--reflect-all] false [-h]

Options:
-p               port                                      [default: 2000]
--del            DELETE                                     [default: 200]
--get            GET                                        [default: 200]
--head           HEAD                                       [default: 200]
--patch          PATCH                                      [default: 200]
--post           POST                                       [default: 200]
--put            PUT                                        [default: 200]
--content-type   Content-Type for responses        [default: "text/plain"]
--response-body  {"status':"message"} response   [boolean] [default: true]
--reflect-post   Reflect POST body              [boolean] [default: false]
--reflect-put    Reflect PUT body               [boolean] [default: false]
--reflect-patch  Reflect PATCH body             [boolean] [default: false]
--reflect-all    Reflect ALL bodies             [boolean] [default: false]
-h               Show help                                       [boolean]
```





