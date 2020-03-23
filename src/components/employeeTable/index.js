import React from "react";
//import "./style.css";

function EmployeeTable(props) {
    return (

        <tr>
            <th scope="row" key={props.key}>{props.id}</th>
            <td>
                {props.name}
            </td>
            <td>
                {props.department}
            </td>
            <td>
                {props.role}
            </td>
            <td>
                {props.email}
            </td>
            <td onClick={() => props.remove(props.id)} className="remove">
                x
            </td>
        </tr>

    );
}

export default EmployeeTable;
