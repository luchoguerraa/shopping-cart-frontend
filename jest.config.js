import { pathsToModuleNameMapper } from 'ts-jest/utils';
import { compilerOptions } from "./tsconfig.json";

const paths = compilerOptions.paths ? compilerOptions.paths : {};

export const preset = 'ts-jest';
export const testEnvironment = 'jest-environment-jsdom';
export const globals = {
  'ts-jest': {
    tsConfig: 'tsconfig.jest.json',
  },
};
export const setupFilesAfterEnv = ['@testing-library/jest-dom/extend-expect'];
export const modulePathIgnorePatterns = ['dist'];
export const setupFiles = ['./jest.env'];
export const coverageReporters = ['text', 'text-summary', 'clover', 'cobertura'];
export const collectCoverageFrom = [
  '**/*.ts',
  '**/*.tsx',
  '!**/*.test.ts',
  '!**/pages/**',
  '!**/tests/**',
  '!./*.setup.*',
  '!**/config/**'
];
export const coverageThreshold = {
  global: {
    statements: 80,
    branches: 80,
    functions: 80,
    lines: 80,
  },
};
export const moduleNameMapper = {
  ...pathsToModuleNameMapper(paths, { prefix: "<rootDir>/" }),
  "\\.(scss|sass|css)$": "identity-obj-proxy",
};
