import { createServer } from "http";
import dotenv from "dotenv";
dotenv.config();

import app from "./src/app";
import { PORT } from "./src/config/appConfig";

app.set("port", PORT);

const server = createServer(app);

server.listen(PORT);
server.on("error", onError);
server.on("listening", onListening);

function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== "listen") {
    throw error;
  }

  console.log("err: ", error);

  const bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening(): void {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr?.port;
  console.log("Listening on " + bind);
}
