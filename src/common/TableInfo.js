import StatusInfoItem from "@/components/StatusInfoRow";
import React from "react";
import Table from "react-bootstrap/Table";

export default function TableInfo({ children }) {
  return <Table>{children}</Table>;
}
