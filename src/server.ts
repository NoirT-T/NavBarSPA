import errorHandler from "errorhandler";

import app from "./app";

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
const server = app.listen(5051, () => {
  console.log(
    "  App is running at http://localhost:5051"
  );
  console.log("  Press CTRL-C to stop\n");
});

export default server;
