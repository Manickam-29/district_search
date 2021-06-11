import React, { useState } from "react";
import "./styles.css";
export default function App() {
  const [values, setValues] = useState({
    district_name: "",
    district_area: "",
    district_popluation: ""
  });
  const districtnameinputchange = (event) => {
    setValues({ ...values, district_name: event.target.value });
    console.log(values);
  };
  const districtareainputchange = (event) => {
    setValues({ ...values, district_area: event.target.value });
    console.log(values);
  };
  const districtpopinputchange = (event) => {
    setValues({ ...values, district_popluation: event.target.value });
    console.log(values);
  };
  return (
    <div className="App">
      <form className="districtform">
        <h2>District search</h2>
        <div className="outer">
          <input
            className="districtname"
            onChange={districtnameinputchange}
            value={values.district_name}
            placeholder="Enter District Name"
            name="district_name"
          />
          <br />
          <br />
          <input
            className="Areadistrict"
            onChange={districtareainputchange}
            value={values.district_area}
            placeholder="Enter Area District"
            name="district_area"
          />
          <br />
          <br />
          <input
            className="districtpopluation"
            onChange={districtpopinputchange}
            value={values.district_popluation}
            placeholder="Enter total popluation"
            name="district_popluation"
          />
          <br />
          <br />
          <button type="submit">Save</button>
          <div className="inner1">
            <h4> Biggest District(Area wise)</h4>
            <input type="radio" value="chennai" name="Big_district" /> Chennai
            <input type="radio" value="coimbatore" name="Big_district" />{" "}
            Coimbatore
            <input type="radio" value="salem" name="Big_district" /> Salem
          </div>
          <div className="inner2">
            <h4>Highly Popluated</h4>
            <input type="radio" value="chennai" name="high_populated" /> Chennai
            <input type="radio" value="coimbatore" name="high_populated" />{" "}
            Coimbatore
            <input type="radio" value="salem" name="high_populated" /> Salem
          </div>
        </div>
      </form>
    </div>
  );
}
