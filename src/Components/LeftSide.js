import React from "react";
import style from "./module.style.css";
// import AppFrame from './common/app-frame'; //where can I take it?
import {
  SideNavigation,
  Section,
  NavigationHeader,
  Header,
  NestableNavigationContent,
  ButtonItem,
  NestingItem,
  Footer,
  NavigationFooter,
} from "@atlaskit/side-navigation";

const ins = `
@alltagged
Feature: My Feature

  A big feature file

  # is a comment
  @tag1
  Scenario: Automates stuff
    Given a bunch of old stuff
    # more comments here
    When i try to compile
    Then I get results
`;

const Gherkin = require("@cucumber/gherkin");
const IdGenerator = require("@cucumber/messages");
//var parser = new Gherkin.Parser();
console.log("IdGenerator", IdGenerator);
const parser = new Gherkin.Parser(
  new Gherkin.AstBuilder(IdGenerator.IdGenerator.incrementing()),
  new Gherkin.TokenMatcher()
);

console.log("parser", parser);

const gherkinDocument = parser.parse(ins);
const result = JSON.stringify(gherkinDocument, null, 2);
// console.log("gherkinDocument", gherkinDocument);
console.log("Gherkin", Gherkin);
// const pickles = Gherkin.compile(gherkinDocument);

// const envelopes = Gherkin.generateMessages(
//   'Feature: Foo\n' +
//     '  Scenario Outline: Parenthesis\n' +
//     '    Given the thing <is (not) triggered> and has <value>\n' +
//     '  Examples:\n' +
//     '    | is (not) triggered | value |\n' +
//     '    | is triggered       | foo   |\n ',
//   '',
//   { includePickles: true, newId: IdGenerator.IdGenerator.incrementing() }
// )
const envelopes = Gherkin.generateMessages(ins, "", {
  includePickles: true,
  newId: IdGenerator.IdGenerator.incrementing(),
});
// const pickle_1 = envelopes.find((envelope) => envelope.pickle).pickle;
const pickle = envelopes.find((envelope) => envelope.pickle).pickle;
// console.log('pickle_1', pickle_1);
console.log("pickle", pickle);
const name = pickle.name;
const mainTag = pickle.tags[0].name;
const tag_1 = pickle.tags[1].name;
const steps = pickle.steps;

const LeftSide = () => {
  return (
    // <AppFrame hideAppBar hideBorder>
    <>
      <SideNavigation label='project' id='leftSide'>
        <p>Test panel</p>
      </SideNavigation>
      <h2>{name}</h2>
      <p>Main tag: {mainTag}</p>
      <p>tag_1: {tag_1}</p>
      <h3>steps:</h3>
      <ol>
        {steps.map((step, ind) => {
          return <li key = {ind}>{step.text}</li>;
        })}
      </ol>
      ;
    </>
    // </AppFrame>
  );
};

export default LeftSide;
