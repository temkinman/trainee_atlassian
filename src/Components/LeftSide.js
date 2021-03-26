import React from 'react'
import style from './module.style.css'
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

const Gherkin = require('@cucumber/gherkin')
var parser = new Gherkin.Parser();
console.log('parser', parser);
var gherkinDocument = parser.parse(ins);
console.log('gherkinDocument', gherkinDocument);
var pickles = new Gherkin.Compiler().compile(gherkinDocument);


const LeftSide = () => {
  return (
    // <AppFrame hideAppBar hideBorder>
      <SideNavigation label="project" id="leftSide">
        <p>Test panel</p>
        <p>Test panel</p>
        <p>Test panel</p>
        <p>Test panel</p>
        <p>Test panel</p>
      </SideNavigation>

    // </AppFrame>
  );
};

export default LeftSide;
