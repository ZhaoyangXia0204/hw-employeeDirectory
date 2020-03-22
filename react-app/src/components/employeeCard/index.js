import React from "react";
import "./style.css";

function EmployeeCard(props) {
    return (
        <div className="card">

            <div className="content">
                <tr>
                    <th scope="row" key={props.key}>{props.id}</th>
                    <td>
                        <strong>Name:</strong> {props.name}
                    </td>
                    <td>
                        <strong>Department:</strong> {props.department}
                    </td>
                    <td>
                        <strong>Role:</strong> {props.role}
                    </td>
                    <td>
                        <strong>Email:</strong> {props.email}
                    </td>
                </tr>
            </div>
        </div>
    );
}

export default EmployeeCard;
