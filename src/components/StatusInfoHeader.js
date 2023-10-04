import React from "react";

export default function StatusInfoHeader({
  statusName,
  statusDescription,
  status,
}) {
  return (

      <tr>
        <th> {statusName} </th>
        <th> {statusDescription}</th>
        <th> {status}</th>
      </tr>
  );
}
