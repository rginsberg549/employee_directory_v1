import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";

function Grid() {


    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "First Name", field: "firstName" },
            { title: "Last Name", field: "lastName" },
            { title: "Start Date", field: "startDate" },
            { title: "Employment Type", field: "employmentType"},
            { title: "Position", field: "position" }

          ]}
          data={[
            {
              firstName: "Employee1",
              lastName: "Employee1",
              startDate: "01/01/2020",
              employmentType: "Part-Time",
              position: "Position 1"
            },
            {
                firstName: "Employee2",
                lastName: "Employee2",
                startDate: "01/01/2019",
                employmentType: "Full-Time",
                position: "Position 2"
              }
          ]}
          title="Employees"
        />
      </div>
    );
}

export default Grid;