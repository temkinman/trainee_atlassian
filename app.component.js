import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Router, Switch } from "react-router";
import { createBrowserHistory } from "history";
import { GherkinParse, generateId } from "./src/Utils/Utils";
import { User_Login, User_Registration } from "./src/Store/GherkinDocument";

import ScenarioDetails from "./src/Components/ScenarioDetails/ScenarioDetails";
import SuitCase from "./src/Components/SuitCase/SuitCase";

const newHistory = createBrowserHistory();

const case_1 = { id: generateId(), content: GherkinParse(User_Login) };
const case_2 = { id: generateId(), content: GherkinParse(User_Registration) };
const suitCases = [case_1, case_2];
// console.log("case_1", JSON.stringify(case_1));

const getCaseById = (state, match) => {
  return state.find((el) => el.id == match.params.id);
};

const Main = () => {
  const [state, setState] = useState(suitCases);
  console.log("Main", state);
  return (
    <BrowserRouter>
      <div className='container'>
        <Router history={newHistory}>
          <aside>
            <SuitCase state={state} />
          </aside>
          <main>
            {/* <p>{JSON.stringify(case_1)}</p> */}
            {state && (
              <Route
                path='/details/:id'
                render={({ match }) => (
                  <ScenarioDetails suitCase={getCaseById(state, match)} />
                )}
              />
            )}
          </main>
        </Router>
      </div>
    </BrowserRouter>
  );
};

export default Main;
