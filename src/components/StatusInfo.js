import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import useFetch from "@/hooks/useFetch";
import StatusInfoHeader from "./StatusInfoHeader";
import TableInfo from "@/common/TableInfo";
import StatusInfoRow from "./StatusInfoRow";

export default function StatusInfo({ url }) {
  const { isLoading, apiData, errorMessage } = useFetch(url);

  const headers = (
    <thead>
      <StatusInfoHeader
        statusName={"Name"}
        statusDescription={"Description"}
        status={"Status"}
      />
    </thead>
  );

  const rowData = apiData.map((row) => (
    <StatusInfoRow
      key={row.id}
      statusId={row.id}
      statusName={row.name}
      statusDescription={row.description}
      status={row.status}
    />
  ));

  const rows = <tbody>{rowData}</tbody>;

  return (
    <>
      <Card style={{ margin: "50px" }}>
        <Card.Header style={{ fontSize: "30px" }}>GitHub Status</Card.Header>
        <Card.Body>
          {errorMessage && "Error Message has occurred. Please try again."}
          {isLoading && !errorMessage && "Loading..."}
          {!isLoading &&
            !errorMessage &&
            apiData &&
            (apiData.length === 0 ? (
              "No data available"
            ) : (
              <TableInfo>
                {headers}
                {rows}
              </TableInfo>
            ))}
        </Card.Body>
      </Card>
    </>
  );

  //show loading and error messages
}
