import request from "supertest";
import expressApp from "../src/index";

describe("GET /", () => {
  it("should return 200 OK", async () => {
    const response = await request(expressApp).get("/");
    expect(response.statusCode).toBe(200);
  });
});
