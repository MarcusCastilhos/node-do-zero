import { createServer } from "node:http";

const server = createServer((request, response) => {
  response.write("hello world1");
  return response.end();
});

server.listen(3333);
