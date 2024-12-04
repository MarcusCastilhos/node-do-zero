import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify();

const database = new DatabaseMemory();

server.post("/videos", () => {
  database.create({
    title: "Video 01",
    description: "Esse é o video 01",
    duration: 180,
  });

  console.log(database.list());
});

server.get("/videos", () => {
  return "Hello GET";
});

server.put("/videos/:id", () => {
  return "Hello PUT";
});

server.delete("/videos/:id", () => {
  return "Hello DELETE";
});

server.listen({
  port: 3333,
});
