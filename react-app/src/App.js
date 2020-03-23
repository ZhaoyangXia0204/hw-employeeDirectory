import React, { Component } from "react";
import employees from './employee.json';
import Wrapper from './components/wrapper';
import EmployeeTable from './components/employeeTable';
import Title from './components/title';

class App extends Component {
  state = {
    employees
  };
  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key) {
    let arrayCopy = [...this.state.employees];
    arrayCopy.sort(this.compareBy(key));
    this.setState({employees: arrayCopy});
  }


  render() {
    return (
      <Wrapper>
        <Title>The Employee List</Title>
        <table className="table">
          <thead>
            <tr>
              <th onClick ={() => this.sortBy('id')}  scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Role</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(employee => (
              <EmployeeTable
                id={employee.id}
                key={employee.id}
                name={employee.name}
                department={employee.department}
                role={employee.role}
                email={employee.email}
              />
            ))}
          </tbody>


        </table>



      </Wrapper>

    )
  }

}

export default App;
