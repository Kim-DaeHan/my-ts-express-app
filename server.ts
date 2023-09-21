import { createServer } from "http";
import dotenv from "dotenv";
dotenv.config();

import app from "./src/app";
import { PORT } from "./src/config/appConfig";
import databaseConfig from "./src/config/databaseConfig";
app.set("port", PORT);

const server = createServer(app);

// DatabaseConfig를 초기화하고 MongoDB와 연결
databaseConfig
  .connect()
  .then(() => {
    server.listen(PORT);
    server.on("error", onError);
    server.on("listening", onListening);
  })
  .catch((error) => {
    console.error("MongoDB 연결 실패:", error);
  });

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
