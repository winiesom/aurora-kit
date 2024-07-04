module.exports = {
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
