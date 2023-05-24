const { join } = require("path");
const codeDir = process.cwd();
const rollupTypescript = require("rollup-plugin-typescript2");
const babel = require("rollup-plugin-babel");
const json = require("@rollup/plugin-json");

module.exports = {
  input: join(codeDir, "src", "index.ts"),
  plugins: [rollupTypescript(), babel(), json()],
  external: ["lodash", "uuid"],
};
