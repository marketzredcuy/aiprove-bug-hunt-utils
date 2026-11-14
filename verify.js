// Reproduces every report in bugs.json against the challenge's utils.js.
// A report counts only if actual !== expected (the bug really fires).
const u = require('./utils.js');
const reports = require('./bugs.json');
let reproduced = 0;
for (const r of reports) {
  const actual = u[r.fn](r.input);
  const fires = JSON.stringify(actual) !== JSON.stringify(r.expected);
  if (fires) reproduced++;
  console.log(`${fires ? 'BUG ' : 'OK  '} ${r.fn}(${JSON.stringify(r.input)}) => actual: ${JSON.stringify(actual)} | expected: ${JSON.stringify(r.expected)}`);
}
console.log(`\n${reproduced}/${reports.length} reports reproduce a wrong result.`);
process.exit(reproduced === reports.length ? 0 : 1);
