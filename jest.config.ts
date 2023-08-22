import type { Config } from "jest";

const config: Config = {
  maxWorkers: 5,
  verbose: true,
  testEnvironment: "jsdom",
  transform: {
    ".(ts|tsx)": "ts-jest"
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.ts",
    "\\.(css)$": "<rootDir>/__mocks__/styleMock.ts",
    "^@src(.*)": "<rootDir>/src$1",
    "^@components(.*)": "<rootDir>/src/ts/components$1",
    "^@pages(.*)": "<rootDir>/src/ts/pages$1",
    "^@utils(.*)": "<rootDir>/src/ts/utils$1"
  },
  // roots: [
  //     '<rootDir>/__tests__/',
  //     '<rootDir>/src/'
  // ],
  moduleFileExtensions: ["ts", "tsx", "js"]
};

export default config;
