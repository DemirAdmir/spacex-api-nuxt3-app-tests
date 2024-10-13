module.exports = {
  projects: [
    {
      displayName: "backend-tests",
      preset: "ts-jest",
      testEnvironment: "node",
      testMatch: ["**/tests/integration/**/*.test.ts"],
      transform: {
        "^.+\\.ts$": "ts-jest",
      },
      moduleFileExtensions: ["ts", "js", "json"],
    },
    {
      displayName: "frontend-tests",
      preset: "ts-jest",
      testEnvironment: "jest-environment-jsdom",
      testMatch: ["**/tests/unit/**/*.test.ts"],
      transform: {
        "^.+\\.ts$": "ts-jest",
        "^.+\\.vue$": "@vue/vue3-jest", // Use vue3-jest for Vue 3 SFCs
      },
      moduleFileExtensions: ["ts", "js", "json", "vue"],
      moduleNameMapper: {
        // Map the same path aliases from tsconfig
        "^@/(.*)$": "<rootDir>/../../components/$1",
        "^~/(.*)$": "<rootDir>/../../components/$1",
        "@/interfaces/(.*)": "<rootDir>/../../interfaces/$1",
        "~/interfaces/(.*)": "<rootDir>/../../interfaces/$1",
      },
    },
  ],
};
