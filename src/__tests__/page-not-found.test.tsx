import request from "supertest";
import app from "../app";

test("Should return 404 for page not found!", async () => {
  await request(app)
    .get("/this-page-does-not-exist")
    .expect(404);
});
