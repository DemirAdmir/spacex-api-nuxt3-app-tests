// tests/integration/api.test.ts
import request from "supertest";
import { createTestServer } from "../utils/createTestServer";
import { Server } from "http";

let server: Server;

beforeAll(async () => {
  const { server: testServer } = await createTestServer();
  server = testServer;
});

afterAll(async () => {
  server.close(); // Close the server after tests
});

describe("API Routes", () => {
  it("should save a launch", async () => {
    const launchData = {
      flight_number: 1,
      missionName: "Demo Mission",
      launchDate: "2024-10-10T00:00:00Z",
    };

    const response = await request(server)
      .post("/api/saveLaunch")
      .send(launchData);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Launch saved successfully");
  });

  // it("should get saved launches", async () => {
  //   const response = await request(server).get("/api/getSavedLaunches");

  //   expect(response.status).toBe(200);
  //   expect(response.body.success).toBe(true);
  //   expect(response.body.data).toBeInstanceOf(Array);
  // });

  // it("should delete a launch", async () => {
  //   const launchId = "123456789"; // Use a valid ID for testing

  //   const response = await request(server).delete(
  //     `/api/deleteLaunch/${launchId}`
  //   );

  //   expect(response.status).toBe(200);
  //   expect(response.body.success).toBe(true);
  //   expect(response.body.message).toBe("Launch deleted successfully");
  // });
});
