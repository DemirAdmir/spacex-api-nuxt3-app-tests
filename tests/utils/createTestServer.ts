// tests/utils/createTestServer.ts
import { createApp } from "h3";
import { createRouter, defineEventHandler } from "h3";
import { toNodeListener } from "h3";
import { createServer } from "http"; // Import the HTTP module

export async function createTestServer() {
  const app = createApp();
  const router = createRouter();

  // Define your routes here
  router.post(
    "/api/saveLaunch",
    defineEventHandler(async (event) => {
      return { success: true, message: "Launch saved successfully" };
    })
  );

  router.get(
    "/api/getSavedLaunches",
    defineEventHandler(async () => {
      return { success: true, data: [{ id: 1, name: "Launch 1" }] };
    })
  );

  router.delete(
    "/api/deleteLaunch/:id",
    defineEventHandler(async (event) => {
      const id = event.context.params?.id;
      return { success: true, message: `Launch ${id} deleted successfully` };
    })
  );

  app.use(router);

  // Convert H3 App to a Node.js compatible listener
  const nodeListener = toNodeListener(app);

  // Create an actual HTTP server
  const server = createServer(nodeListener);

  // Start the server
  await new Promise<void>((resolve) => {
    server.listen(3001, resolve);
  });

  return { server };
}
