import app from "./app";

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  console.log(
    "  Redirector is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});
