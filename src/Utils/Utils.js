const Gherkin = require("@cucumber/gherkin");
const IdGenerator = require("@cucumber/messages");

export function GherkinParse(gherkinDoc) {
  if (!gherkinDoc) {
    return;
  }
  const parser = new Gherkin.Parser(
    new Gherkin.AstBuilder(IdGenerator.IdGenerator.incrementing()),
    new Gherkin.TokenMatcher()
  );

  return parser.parse(gherkinDoc);
}

let id = 0;
export function generateId() {
  return id++;
}
