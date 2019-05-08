import request from 'supertest';
import app from '../app';

test('Should load the hello world page!', async () => {
	await request(app).get('/').expect(200);
});
