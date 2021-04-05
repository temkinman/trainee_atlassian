import React from "react";

const Steps = ({ scenarios }) => {
  console.log("scenarios", scenarios);
  return (
    <>
      {scenarios.map((el, ind) => {
        const groupName = Object.keys(el);
        const blockName = el[groupName].keyword;
        const steps = el[groupName].steps;
        let data;
        if (
          el[groupName].hasOwnProperty("examples") &&
          el[groupName].examples.length > 0
        ) {
          console.log(el);
          data = el[groupName].examples[0].tableBody;
        }
        console.log("data", data);
        return (
          <div key={ind}>
            <h2>
              {blockName}: {el[groupName].name}
            </h2>
            <ul>
              {steps.map((step, i) => {
                return (
                  <li key={i}>
                    {step.keyword}: {step.text}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

const ScenarioDetails = (suitCase) => {
  const id = suitCase.suitCase.id;
  console.log("suitcase", suitCase);
  const { description, children } = { ...suitCase.suitCase.content.feature };

  return (
    <div className='content'>
      <h1>id: {id}</h1>
      <p>{description}</p>
      <Steps scenarios={children} />
    </div>
  );
};

export default ScenarioDetails;
