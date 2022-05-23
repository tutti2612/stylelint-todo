const path = require("path");
const stylelint = require("stylelint");

const [, , ...inputs] = process.argv;

if (!inputs.length || inputs.includes("-h") || inputs.includes("--help")) {
  const msg = `
  Usage: stylelint-todo-generator.js [input]
  Input: File(s) or glob(s).
  `;

  console.error(msg);
  process.exit(1);
}

const options = {
  files: inputs
};

const todoObject = {
  overrides: []
};

stylelint
  .lint(options)
  .then((resultObject) => {
    resultObject.results.forEach((result) => {
      if (!result.errored) return;

      const rules = {};
      result.warnings.forEach((warning) => {
        rules[warning.rule] = null;
      });

      todoObject.overrides.push({
        files: path.relative(".", result.source),
        rules
      });
    });
  })
  .then(() => {
    console.log(JSON.stringify(todoObject, null, 2));
  });
