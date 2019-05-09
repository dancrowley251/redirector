import express, { Request, Response } from "express";

const app: express.Application = express();
const newDomainUri: string = "https://www.example.com";

app.get("*", (req: Request, res: Response) => {
  console.log("GET / HTTP VERSION: ", req.originalUrl);
  const redirectUrl = `${newDomainUri}${req.originalUrl}`;
  try {
    res.redirect(301, redirectUrl);
  } catch (e) {
    res.status(401).send({ error: "an error occurred" });
  }
});

// Express configuration
app.set("port", process.env.PORT || 8080);

export default app;
