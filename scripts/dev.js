const rollup = require("rollup");
const inputOptions = require("./inputOptions");
const outputOptions = require("./outputOptions");

const watchOptions = {
  ...inputOptions,
  ...outputOptions,
  watch: {
    // chokidar,
    include: ["src/**"],
    // exclude
  },
};
const watcher = rollup.watch(watchOptions);

const EVENT_CODE_MAP = {
  START: "监听器正在启动（重启）",
  BUNDLE_START: "构建单个文件束",
  BUNDLE_END: "完成文件束构建",
  END: "完成所有文件束构建",
  ERROR: "构建时遇到错误",
  FATAL: "遇到无可修复的错误",
};

watcher.on("event", (event) => {
  const code = event.code;
  if (code === "START") console.log("start...");
  if (code === "ERROR") console.log(event.error);
  if (code === "BUNDLE_START") console.log("building start");
  if (code === "BUNDLE_END") console.log("building end");
});
