const fs = require("fs");
const core = require('@actions/core');

try {
  console.log(__dirname);
  const environment = core.getInput("environment");
  const version = core.getInput("version");

  const commit = require("child_process")
    .execSync("git rev-parse --short HEAD")
    .toString()
    .trim();

  const data = {
    environment: environment,
    version: version,
    commit: commit,
  };

  const outDir = core.getInput("outdir");

  fs.writeFileSync(outDir + "/version.json", JSON.stringify(data));
} catch (error) {
  core.setFailed(error.message);
}
