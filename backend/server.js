const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

const path = require("path");
const port = process.env.PORT || 5000;

// Create a new connection
io.on("connection", (socket) => {
  console.log("user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  // Emit message
  socket.emit("msg", JSON.stringify({ id: 1, content: "Art" }));
});

http.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
