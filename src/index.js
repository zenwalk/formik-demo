import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form } from "formik";
import { SelectField } from "./SelectField";
import { getCounties, getCitiesForCounty } from "./data";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Formik initialValues={{ county: "", city: "" }}>
        {formikProps => (
          <React.Fragment>
            <Form>
              <fieldset>
                <legend>
                  'city' value should reset on 'county' change, but does not
                </legend>
                <SelectField
                  name="county"
                  options={getCounties()}
                  getValue={option => option}
                  getLabel={option => option}
                />
                {formikProps.values.county && (
                  <SelectField
                    name="city"
                    options={getCitiesForCounty(formikProps.values.county)}
                    getValue={option => option.name}
                    getLabel={option => option.name}
                  />
                )}
              </fieldset>
              <fieldset>
                <legend>
                  'city' value resets on 'county' change, but with too much help
                </legend>
                <SelectField
                  name="county"
                  options={getCounties()}
                  getValue={option => option}
                  getLabel={option => option}
                  onChange={() => formikProps.setFieldValue("city", "")}
                />
                {formikProps.values.county && (
                  <SelectField
                    name="city"
                    options={getCitiesForCounty(formikProps.values.county)}
                    getValue={option => option.name}
                    getLabel={option => option.name}
                  />
                )}
              </fieldset>
            </Form>
            <div style={{ padding: 50 }}>
              {JSON.stringify(formikProps.values, null, 2)}
            </div>
          </React.Fragment>
        )}
      </Formik>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
