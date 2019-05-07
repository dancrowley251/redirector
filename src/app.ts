import express, { Request, Response } from 'express';

const app: express.Application = express();

app.get('/', (req: Request, res: Response) => {
	console.log('GET / HTTP VERSION: ', req.httpVersion);
	res.send('Hello, World');
});

// Express configuration
app.set('port', process.env.PORT || 8080);

export default app;
