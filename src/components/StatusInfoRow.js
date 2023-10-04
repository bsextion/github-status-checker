import React from "react";
import Badge from "react-bootstrap/Badge";

export default function StatusInfoRow({
  statusId,
  statusName,
  statusDescription,
  status,
}) {
  const variantType = status === "operational" ? "success" : "danger";
  return (
    <tr>
      <td>{statusName}</td>
      <td> {statusDescription ? statusDescription : "N/A"}</td>
      <td>
        <Badge bg={variantType}>{status}</Badge>
      </td>
    </tr>
  );
}
