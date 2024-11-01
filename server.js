import { fastify } from "fastify";

const server = fastify();

server.get("/", () => {
  return "Hello World";
});

server.get("/hello", () => {
  return "Hello Test";
});

server.get("/node", () => {
  return "Hello Node";
});

server.listen({
  port: 3333,
});
