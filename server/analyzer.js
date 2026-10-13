function analyzeCode(code) {
  const issues = [];

  // Empty code
  if (!code.trim()) {
    issues.push("❌ Code is empty.");
  }

  // console.log
  if (code.includes("console.log")) {
    issues.push("⚠ console.log() found. Remove debug statements before production.");
  }

  // var keyword
  if (code.includes("var ")) {
    issues.push("⚠ Avoid using 'var'. Prefer 'let' or 'const'.");
  }

  // debugger
  if (code.includes("debugger")) {
    issues.push("⚠ debugger statement found.");
  }

  // TODO comments
  if (code.includes("TODO")) {
    issues.push("⚠ TODO comment found.");
  }

  const complexity = {
  lines: code.split("\n").filter(line => line.trim() !== "").length,

  functions:
    (code.match(/function\s+\w+/g) || []).length +
    (code.match(/=>/g) || []).length,

  classes:
    (code.match(/class\s+\w+/g) || []).length,

  characters: code.length,
};
let score = "Low";

if (
  complexity.lines > 100 ||
  complexity.functions > 10 ||
  complexity.classes > 5
) {
  score = "High";
} else if (
  complexity.lines > 30 ||
  complexity.functions > 3 ||
  complexity.classes > 1
) {
  score = "Medium";
}

complexity.score = score;

return {
  issues,
  complexity,
};
}

module.exports = analyzeCode;