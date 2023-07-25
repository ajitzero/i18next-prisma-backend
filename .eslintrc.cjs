module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["'src'"],
        extensions: [".js", ".ts"]
      }
    }
  },
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended" // Make sure this is always the last element in the array.
  ],
  plugins: ["@typescript-eslint", "simple-import-sort", "prettier"],
  rules: {
    "prettier/prettier": ["error", {}],
    "@typescript-eslint/explicit-function-return-type": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  }
};
