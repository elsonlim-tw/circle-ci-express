const app = require("./app");
const request = require("supertest");

describe("app", () => {
  it("hello world", async () => {
    const res = await request(app).get("/");

    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello World!");
  });
});
